import type { ReactNode } from 'react';

import { COMPANY } from '../../config/company';

const LEGAL_PAGES = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/refund-policy', label: 'Refund Policy' },
  { path: '/data-deletion', label: 'Data deletion' },
];

type Props = {
  path: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalLayout({ path, title, intro, children }: Props) {
  return (
    <>
      <div className="container legal-hero">
        <p className="eyebrow">Legal · Effective {COMPANY.policyEffectiveDate}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="container legal-body">
        <nav className="legal-nav" aria-label="Legal pages">
          {LEGAL_PAGES.map((p) => (
            <a key={p.path} href={p.path} aria-current={p.path === path ? 'page' : undefined}>
              {p.label}
            </a>
          ))}
        </nav>
        <article className="prose">
          {children}
          <h2>Contact us</h2>
          <ContactCard />
        </article>
      </div>
    </>
  );
}

export function ContactCard() {
  return (
    <address className="contact-card" style={{ fontStyle: 'normal' }}>
      <strong>{COMPANY.legalName}</strong>
      <span>RC {COMPANY.rcNumber}</span>
      <span>{COMPANY.registeredAddress}</span>
      <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>
      <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
    </address>
  );
}
