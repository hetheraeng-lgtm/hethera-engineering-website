import type { ComponentType } from 'react';

import { HomePage } from './pages/HomePage';
import { DataDeletionPage } from './pages/legal/DataDeletionPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { RefundPolicyPage } from './pages/legal/RefundPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export type Route = {
  path: string;
  title: string;
  description: string;
  Page: ComponentType;
};

// Shared by the app (document.title) and scripts/prerender.js, which writes
// one static HTML file per route with these as its <head> tags.
export const ROUTES: Route[] = [
  {
    path: '/',
    title: 'Hethera — Pay bills, buy airtime & data on WhatsApp in Nigeria',
    description:
      'Buy airtime and data, renew DStv, GOtv and StarTimes, and pay for electricity by sending a WhatsApp message. Every payment is confirmed with your PIN and refunded automatically if it fails.',
    Page: HomePage,
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Hethera',
    description:
      'What personal data Hethera collects, how we use it, who we share it with and your rights under the Nigeria Data Protection Act 2023.',
    Page: PrivacyPage,
  },
  {
    path: '/terms',
    title: 'Terms of Service — Hethera',
    description:
      'The terms for using Hethera to buy airtime, data, cable TV and electricity on WhatsApp, operated by Hethera Engineering Ltd.',
    Page: TermsPage,
  },
  {
    path: '/refund-policy',
    title: 'Refund Policy — Hethera',
    description:
      'If you pay through Hethera and your airtime, data, cable or electricity purchase is not delivered, your card is refunded automatically.',
    Page: RefundPolicyPage,
  },
  {
    path: '/data-deletion',
    title: 'Data deletion — Hethera',
    description: 'How to delete your Hethera account and the personal data we hold about you.',
    Page: DataDeletionPage,
  },
];

export const NOT_FOUND: Route = {
  path: '/404',
  title: 'Page not found — Hethera',
  description: 'This page does not exist.',
  Page: NotFoundPage,
};

export function findRoute(pathname: string): Route {
  const trimmed = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  return ROUTES.find((r) => r.path === trimmed) ?? NOT_FOUND;
}
