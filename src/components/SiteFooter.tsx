import { COMPANY, WHATSAPP } from '../config/company';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <span className="logo__word" style={{ color: '#fff', fontSize: 28 }}>
              hethera
            </span>
            <p>Pay airtime, data, cable TV and electricity bills on WhatsApp.</p>
          </div>
          <nav className="site-footer__col" aria-labelledby="footer-product">
            <h2 id="footer-product">Product</h2>
            <a href="/#pay">What you can pay</a>
            <a href="/#how">How it works</a>
            <a href="/#security">Security</a>
            <a href="/#faq">FAQ</a>
          </nav>
          <nav className="site-footer__col" aria-labelledby="footer-company">
            <h2 id="footer-company">Company</h2>
            <a href="/#company">About &amp; contact</a>
            <a href={`mailto:${COMPANY.supportEmail}`}>Email support</a>
            <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
            {WHATSAPP.digits && <a href={WHATSAPP.href}>WhatsApp</a>}
          </nav>
          <nav className="site-footer__col" aria-labelledby="footer-legal">
            <h2 id="footer-legal">Legal</h2>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/refund-policy">Refund Policy</a>
            <a href="/data-deletion">Data deletion</a>
          </nav>
        </div>
        <div className="site-footer__legal">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. RC {COMPANY.rcNumber}. Registered
            office: {COMPANY.registeredAddress}.
          </p>
          <p>
            {COMPANY.brandName} is a bill-payment service, not a bank, and does not hold customer
            deposits. Card payments are processed by Paystack. {COMPANY.brandName} never stores your
            full card number. Bill payments are fulfilled through VTpass.
          </p>
          <p>
            WhatsApp is a trademark of Meta Platforms, Inc. {COMPANY.brandName} is an independent
            business that uses the WhatsApp Business Platform. It is not affiliated with, endorsed by
            or sponsored by Meta. MTN, Airtel, Glo, 9mobile, DStv, GOtv and StarTimes are trademarks
            of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
