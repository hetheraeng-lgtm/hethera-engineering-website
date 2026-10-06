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
  supportEmail: 'abimbolaolayemiwhyte@gmail.com',
  phone: '+2348119995541',
  phoneDisplay: '+234 811 999 5541',
  supportHours: 'Monday to Friday, 9:00–18:00 WAT',
  policyEffectiveDate: '6 October 2026',
} as const;

// The WhatsApp Business number customers chat with, international format,
// digits only (e.g. 2348012345678). Set REACT_APP_WHATSAPP_NUMBER at build time.
const whatsappDigits = (process.env.REACT_APP_WHATSAPP_NUMBER ?? '').replace(
  /\D/g,
  '',
);

export const WHATSAPP = {
  digits: whatsappDigits,
  href: whatsappDigits ? `https://wa.me/${whatsappDigits}` : '/#company',
  display: whatsappDigits ? formatNigerianNumber(whatsappDigits) : 'Coming soon',
};

// Hours of inactivity before the assistant forgets a conversation; mirrors
// AGENT_IDLE_TIMEOUT_MINUTES (240) in the Hethera backend.
export const CHAT_MEMORY_HOURS = 4;

function formatNigerianNumber(digits: string): string {
  const m = digits.match(/^234(\d{3})(\d{3})(\d{4})$/);
  return m ? `+234 ${m[1]} ${m[2]} ${m[3]}` : `+${digits}`;
}
