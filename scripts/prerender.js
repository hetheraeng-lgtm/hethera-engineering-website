// Runs after `react-scripts build`. Renders every route in src/routes.ts to its
// own static HTML file (build/index.html, build/privacy.html, ..., build/404.html)
// with page-specific <head> tags and JSON-LD, then writes sitemap.xml. Search
// engines and link previews (WhatsApp, Facebook, X) get real content without
// running JavaScript; in the browser, src/index.tsx hydrates the markup.

const fs = require('fs');
const path = require('path');
const { addHook } = require('sucrase/dist/register');

const sucraseOptions = {
  transforms: ['typescript', 'jsx', 'imports'],
  jsxRuntime: 'automatic',
  production: true,
};
addHook('.ts', sucraseOptions);
addHook('.tsx', sucraseOptions);
// Stylesheets are already bundled by react-scripts; ignore them here.
require.extensions['.css'] = () => {};

const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const App = require('../src/App').default;
const { ROUTES, NOT_FOUND } = require('../src/routes');
const { FAQS } = require('../src/pages/HomePage');
const { COMPANY, SITE_URL, WHATSAPP } = require('../src/config/company');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const template = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function jsonLd(data) {
  // `<` escaped so content can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: COMPANY.brandName,
  legalName: COMPANY.legalName,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo512.png`,
  email: COMPANY.supportEmail,
  telephone: COMPANY.phone,
  foundingDate: '2026-09-15',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'CAC RC Number',
    value: COMPANY.rcNumber,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.locality,
    addressRegion: COMPANY.address.region,
    addressCountry: COMPANY.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: COMPANY.supportEmail,
      telephone: `+${WHATSAPP.digits}`,
      areaServed: 'NG',
      availableLanguage: ['en'],
    },
  ],
};

function structuredData(route) {
  const graph = [organization];
  if (route.path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: COMPANY.brandName,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-NG',
    });
    graph.push({
      '@type': 'Service',
      name: 'Bill payments on WhatsApp',
      serviceType: 'Airtime, mobile data, cable TV and electricity bill payments',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Nigeria' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: WHATSAPP.href,
        name: 'WhatsApp',
      },
    });
    graph.push({
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: renderToStaticMarkup(React.createElement(React.Fragment, null, f.a)),
        },
      })),
    });
  } else {
    graph.push({
      '@type': 'WebPage',
      '@id': `${SITE_URL}${route.path}#webpage`,
      url: `${SITE_URL}${route.path}`,
      name: route.title,
      description: route.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    });
  }
  return jsonLd({ '@context': 'https://schema.org', '@graph': graph });
}

function headTags(route, { indexable }) {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  const tags = [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}"/>`,
  ];
  if (indexable) {
    tags.push(
      `<link rel="canonical" href="${url}"/>`,
      `<meta property="og:url" content="${url}"/>`,
      structuredData(route),
    );
  } else {
    tags.push('<meta name="robots" content="noindex"/>');
  }
  tags.push(
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:site_name" content="${escapeAttr(COMPANY.brandName)}"/>`,
    `<meta property="og:locale" content="en_NG"/>`,
    `<meta property="og:title" content="${escapeAttr(route.title)}"/>`,
    `<meta property="og:description" content="${escapeAttr(route.description)}"/>`,
    `<meta property="og:image" content="${OG_IMAGE}"/>`,
    `<meta property="og:image:secure_url" content="${OG_IMAGE}"/>`,
    `<meta property="og:image:type" content="image/png"/>`,
    `<meta property="og:image:width" content="1200"/>`,
    `<meta property="og:image:height" content="630"/>`,
    `<meta property="og:image:alt" content="Hethera on WhatsApp: a chat buying a ₦5,000 electricity token, confirmed with a PIN."/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}"/>`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}"/>`,
    `<meta name="twitter:image" content="${OG_IMAGE}"/>`,
  );
  return tags.join('');
}

// Strip the template's generic tags; each page gets its own set.
const baseTemplate = template
  .replace(/<title>[\s\S]*?<\/title>/, '')
  .replace(/<meta name="description"[^>]*>/, '')
  .replace(/<meta property="og:[^"]*"[^>]*>/g, '');

function renderPage(route, outFile, options) {
  const body = renderToString(React.createElement(App, { path: route.path }));
  const html = baseTemplate
    .replace('</head>', `${headTags(route, options)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (html === baseTemplate) {
    throw new Error('prerender: template markers not found in build/index.html');
  }
  fs.writeFileSync(path.join(BUILD_DIR, outFile), html);
  console.log(`  prerendered ${route.path} -> build/${outFile}`);
}

console.log('Prerendering pages...');
for (const route of ROUTES) {
  const outFile = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  renderPage(route, outFile, { indexable: true });
}
renderPage(NOT_FOUND, '404.html', { indexable: false });

const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod><priority>${r.path === '/' ? '1.0' : '0.5'}</priority></url>`,
  ),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robots);
console.log('  wrote build/sitemap.xml and build/robots.txt');
