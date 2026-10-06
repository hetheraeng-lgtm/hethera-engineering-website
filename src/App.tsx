import { useEffect, type ComponentType } from 'react';

import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { HomePage } from './pages/HomePage';
import { DataDeletionPage } from './pages/legal/DataDeletionPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { RefundPolicyPage } from './pages/legal/RefundPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Every page is a full page load (Firebase rewrites all paths to index.html),
// so routing is just a lookup on the current pathname.
const ROUTES: Record<string, { title: string; Page: ComponentType }> = {
  '/': { title: 'Hethera — Pay bills on WhatsApp', Page: HomePage },
  '/privacy': { title: 'Privacy Policy — Hethera', Page: PrivacyPage },
  '/terms': { title: 'Terms of Service — Hethera', Page: TermsPage },
  '/refund-policy': { title: 'Refund Policy — Hethera', Page: RefundPolicyPage },
  '/data-deletion': { title: 'Data deletion — Hethera', Page: DataDeletionPage },
};

function normalize(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed.toLowerCase();
}

function App() {
  const route = ROUTES[normalize(window.location.pathname)];
  const title = route?.title ?? 'Page not found — Hethera';
  const Page = route?.Page ?? NotFoundPage;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Page />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
