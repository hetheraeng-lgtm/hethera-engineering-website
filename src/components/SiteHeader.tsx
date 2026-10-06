import { WHATSAPP } from '../config/company';
import { Icon, LogoMark } from './Icon';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="/" className="logo" aria-label="Hethera home">
          <span className="logo__mark">
            <LogoMark />
          </span>
          <span className="logo__word">hethera</span>
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="/#pay">What you can pay</a>
          <a href="/#how">How it works</a>
          <a href="/#security">Security</a>
          <a href="/#faq">FAQ</a>
          <a href="/#company">Company</a>
        </nav>
        <a className="btn btn-dark" href={WHATSAPP.href}>
          Chat on WhatsApp
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </header>
  );
}
