// Canonical origin used in sitemap.xml, canonical links and Open Graph tags.
export const SITE_URL = (process.env.REACT_APP_SITE_URL || 'https://hetheraengineering.com').replace(
  /\/+$/,
  '',
);

// Business identity shown on the website. Meta's WhatsApp Business
// verification compares these against the CAC documents, so keep the legal
// name, RC number and registered address exactly as CAC records them.
export const COMPANY = {
  legalName: 'Hethera Engineering Ltd',
  brandName: 'Hethera',
  rcNumber: '9859449',
  incorporatedOn: '15 September 2026',
  companyType: 'Private company limited by shares',
  registeredAddress: '16, Adisa Basua Street, Surulere, Lagos State, Nigeria',
  address: {
    street: '16, Adisa Basua Street',
    locality: 'Surulere',
    region: 'Lagos State',
    country: 'NG',
  },
  supportEmail: 'info@hetheraengineering.com',
  phone: '+2348119995541',
  phoneDisplay: '+234 811 999 5541',
  supportHours: 'Monday to Friday, 9:00–18:00 WAT',
  policyEffectiveDate: '6 October 2026',
} as const;

// The WhatsApp Business number customers chat with, international format,
// digits only. REACT_APP_WHATSAPP_NUMBER overrides it at build time.
const whatsappDigits = (process.env.REACT_APP_WHATSAPP_NUMBER || '2347044529110').replace(
  /\D/g,
  '',
);

// The WhatsApp Business short link every "Chat on WhatsApp" button opens.
const WHATSAPP_CHAT_LINK = 'https://wa.me/message/DEUJTURPSIP3B1';

export const WHATSAPP = {
  digits: whatsappDigits,
  href: WHATSAPP_CHAT_LINK,
  display: whatsappDigits ? formatNigerianNumber(whatsappDigits) : 'Coming soon',
};

// Hours of inactivity before the assistant forgets a conversation; mirrors
// AGENT_IDLE_TIMEOUT_MINUTES (240) in the Hethera backend.
export const CHAT_MEMORY_HOURS = 4;

function formatNigerianNumber(digits: string): string {
  const m = digits.match(/^234(\d{3})(\d{3})(\d{4})$/);
  return m ? `+234 ${m[1]} ${m[2]} ${m[3]}` : `+${digits}`;
}
