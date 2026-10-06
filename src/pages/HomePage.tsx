import type { ReactNode } from 'react';

import { Icon, IconName, LogoMark } from '../components/Icon';
import { COMPANY, WHATSAPP } from '../config/company';

const PROVIDERS = ['MTN', 'Airtel', 'Glo', '9mobile', 'DStv', 'GOtv', 'StarTimes', 'Electricity'];

const BILLS: { icon: IconName; title: string; body: string; example: string }[] = [
  {
    icon: 'phone',
    title: 'Airtime',
    body: "Top up any MTN, Airtel, Glo or 9mobile line, yours or someone else's.",
    example: '“₦1,000 airtime to my number”',
  },
  {
    icon: 'signal',
    title: 'Mobile data',
    body: 'Tell it your budget and Hethera lists the daily, weekly and monthly plans that fit.',
    example: '“What Airtel data can I get for ₦500?”',
  },
  {
    icon: 'tv',
    title: 'Cable TV',
    body: 'Renew or change your DStv, GOtv or StarTimes package with your smartcard number.',
    example: '“Renew my GOtv Max”',
  },
  {
    icon: 'bolt',
    title: 'Electricity',
    body: 'Buy prepaid tokens or pay postpaid bills for your meter. Your token arrives in the chat.',
    example: '“₦5,000 light for my meter at home”',
  },
];

const SECURITY: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'lock',
    title: 'Your PIN never goes into the chat',
    body: 'You enter your PIN in an encrypted WhatsApp form, not as a message. It is stored hashed. The AI assistant never sees it, and repeated wrong attempts lock the account.',
  },
  {
    icon: 'card',
    title: 'We never see your full card number',
    body: "You enter your card details on Paystack's checkout page. Hethera keeps only a payment token, the last four digits and the name of your bank.",
  },
  {
    icon: 'refund',
    title: 'Automatic refunds when a purchase fails',
    body: 'If your card is charged but the provider does not deliver, Hethera starts a refund to your card automatically. You do not need to file a complaint first.',
  },
  {
    icon: 'ledger',
    title: 'Every naira is accounted for',
    body: 'Each payment is recorded in a double-entry ledger, with an audit record for every status change. A payment request that is sent twice is only charged once.',
  },
  {
    icon: 'shield',
    title: 'You confirm every payment',
    body: 'Nothing is bought until you enter your PIN. Hethera shows the full amount first, so you always know what you are paying.',
  },
  {
    icon: 'chat',
    title: 'We only message you after you message us',
    body: 'Hethera only replies to conversations you start. We do not send marketing broadcasts or cold messages.',
  },
];

const FEATURES: { title: string; body: string; soon?: boolean }[] = [
  {
    title: 'Saved beneficiaries',
    body: "Save Mum's line, the office meter or your GOtv smartcard, then pay them by name.",
  },
  {
    title: 'Plans that fit your budget',
    body: 'Tell Hethera how much you want to spend and it lists only the plans that fit, with prices.',
  },
  {
    title: 'Scheduled payments',
    body: 'Schedule regular payments, such as data on the 1st of each month. You can view or cancel them at any time.',
    soon: true,
  },
  {
    title: 'Abeg Nahh: someone else pays',
    body: 'Set up the purchase, then send it to someone who has agreed to pay. They confirm with their own PIN.',
    soon: true,
  },
];

export const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Is Hethera a bank?',
    a: 'No. Hethera is a bill-payment service. We do not hold deposits or keep a wallet balance for you. Each purchase is charged directly to the card you saved, processed by Paystack. Airtime, data, cable and electricity are fulfilled through our bill-payment partner, VTpass.',
  },
  {
    q: 'How much does it cost?',
    a: 'Hethera shows the full amount, including any fee, before you confirm with your PIN. Nothing is charged until you confirm.',
  },
  {
    q: 'What happens if my payment fails?',
    a: 'If your card was charged but the provider did not deliver, we refund your card automatically and tell you in the chat. How long the money takes to appear depends on your bank. If anything is unclear, contact support with the reference in your receipt.',
  },
  {
    q: 'I forgot my PIN, or my phone was stolen.',
    a: (
      <>
        Email <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a> from any device.
        We will lock your account and help you reset your PIN. Repeated wrong PIN attempts also lock
        the account automatically.
      </>
    ),
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        Follow the steps on our <a href="/data-deletion">data deletion page</a>. We remove your saved
        card token and profile, and keep transaction records only for as long as the law requires.
      </>
    ),
  },
];

export function HomePage() {
  return (
    <>
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Bill payments for Nigeria, right inside WhatsApp
          </p>
          <h1 id="hero-title">
            Pay any bill.
            <br />
            Just text it.
          </h1>
          <p className="hero__sub">
            Hethera is a bill-payment assistant on WhatsApp. Buy airtime and data, renew your cable
            TV and top up your prepaid meter by sending a message. Every payment is confirmed with
            your PIN before any money moves.
          </p>
          <div className="hero__ctas">
            <a className="btn btn-accent btn-lg" href={WHATSAPP.href}>
              <Icon name="chat" />
              Start on WhatsApp
            </a>
            <a className="btn btn-ghost btn-lg" href="#how">
              See how it works
            </a>
          </div>
          <ul className="hero__checks">
            {['No app to download', 'Card payments secured by Paystack', 'Automatic refund if a purchase fails'].map(
              (t) => (
                <li key={t}>
                  <Icon name="check" size={16} color="var(--ok)" strokeWidth={2.4} />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__halo" aria-hidden="true" />
          <ChatMockup />
        </div>
      </section>

      <section className="providers" aria-label="Supported providers">
        <div className="container providers__inner">
          <span className="eyebrow">Works with</span>
          {PROVIDERS.map((p) => (
            <span key={p} className="providers__name">
              {p}
            </span>
          ))}
        </div>
      </section>

      <section id="pay" className="container section" aria-labelledby="pay-title">
        <div className="section-head">
          <div>
            <h2 id="pay-title" className="display">
              Four everyday bills. One chat.
            </h2>
          </div>
          <p className="lede">
            Write the way you would to a friend. Hethera finds the right plan, checks the details and
            asks you to confirm.
          </p>
        </div>
        <ul className="card-row">
          {BILLS.map((b) => (
            <li key={b.title} className="bill-card">
              <span className="bill-card__icon">
                <Icon name={b.icon} size={22} color="var(--accent)" />
              </span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
              <span className="bill-card__example">{b.example}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="how" className="container section" style={{ paddingTop: 0 }} aria-labelledby="how-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="how-title" className="display">
              Set up once. Pay in seconds after that.
            </h2>
          </div>
        </div>
        <ol className="card-row">
          <li className="step">
            <span className="step__num">1</span>
            <h3>Say hello</h3>
            <p>
              Message Hethera on WhatsApp. Your account is created from your WhatsApp number. No
              forms, no passwords and no app to download.
            </p>
          </li>
          <li className="step">
            <span className="step__num">2</span>
            <h3>Set a PIN and add a card</h3>
            <p>
              Create a transaction PIN in a secure WhatsApp form. Then add your debit card on
              Paystack's checkout page. The small verification charge is refunded.
            </p>
          </li>
          <li className="step step--accent">
            <span className="step__num">3</span>
            <h3>Ask, confirm, done</h3>
            <p>
              Ask for what you need and confirm with your PIN. Your card is charged and you get a
              receipt in the chat.
            </p>
          </li>
        </ol>
      </section>

      <section id="security" className="dark" aria-labelledby="security-title">
        <div className="container section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Security</p>
              <h2 id="security-title" className="display">
                Easy to use, with strict security behind it.
              </h2>
            </div>
            <p className="lede">
              The chat is simple to use. Every payment still goes through the same checks, in the
              same order.
            </p>
          </div>
          <ul className="sec-grid">
            {SECURITY.map((s) => (
              <li key={s.title} className="sec-item">
                <Icon name={s.icon} size={26} color="var(--accent)" strokeWidth={1.8} />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section" aria-labelledby="features-title">
        <div className="split">
          <div className="split__aside">
            <p className="eyebrow">Also in Hethera</p>
            <h2 id="features-title" className="display" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Small features that save you time every month.
            </h2>
            <a className="btn btn-dark" href={WHATSAPP.href} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Try it on WhatsApp
            </a>
          </div>
          <ol className="feature-list split__main">
            {FEATURES.map((f, i) => (
              <li key={f.title}>
                <span className="feature-list__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>
                    {f.title}
                    {f.soon && <span className="tag">Coming soon</span>}
                  </h3>
                  <p>{f.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="faq-wrap" aria-labelledby="faq-title">
        <div className="container section split">
          <div className="split__aside">
            <h2 id="faq-title" className="display" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Questions, answered.
            </h2>
            <p className="lede">
              Still unsure? Email <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>{' '}
              or ask Hethera in the chat.
            </p>
          </div>
          <div className="faq split__main">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span className="faq__plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="container section" aria-labelledby="company-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Company</p>
            <h2 id="company-title" className="display" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Who runs Hethera
            </h2>
          </div>
          <p className="lede">
            Hethera is built and operated by {COMPANY.legalName}, a company registered in Nigeria
            with the Corporate Affairs Commission.
          </p>
        </div>
        <div className="company">
          <dl className="company__facts">
            <div>
              <dt>Legal business name</dt>
              <dd>{COMPANY.legalName}</dd>
            </div>
            <div>
              <dt>CAC registration number</dt>
              <dd className="mono">RC {COMPANY.rcNumber}</dd>
            </div>
            <div>
              <dt>Company type</dt>
              <dd>
                {COMPANY.companyType}, incorporated {COMPANY.incorporatedOn}
              </dd>
            </div>
            <div>
              <dt>Registered address</dt>
              <dd>{COMPANY.registeredAddress}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp Business number</dt>
              <dd>{WHATSAPP.digits ? <a href={WHATSAPP.href}>{WHATSAPP.display}</a> : WHATSAPP.display}</dd>
            </div>
            <div>
              <dt>Support hours</dt>
              <dd>The assistant is available 24/7. Human support: {COMPANY.supportHours}.</dd>
            </div>
            <div>
              <dt>Payment partners</dt>
              <dd>Card payments by Paystack. Bill fulfilment by VTpass.</dd>
            </div>
          </dl>
          <div className="company__side">
            <div className="panel">
              <h3>What we do</h3>
              <p>
                Hethera lets people in Nigeria buy airtime, mobile data, cable TV subscriptions and
                electricity through WhatsApp. Payments are made with their own debit card.
              </p>
            </div>
            <nav className="panel" aria-labelledby="policies-title">
              <h3 id="policies-title">Policies</h3>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/data-deletion">Data deletion</a>
            </nav>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 112 }}>
        <div className="cta">
          <h2>Your next bill is one message away.</h2>
          <a className="btn btn-dark btn-lg" href={WHATSAPP.href}>
            Message Hethera
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function ChatMockup() {
  return (
    <figure className="phone" aria-label="Example Hethera conversation on WhatsApp" style={{ margin: 0 }}>
      <div className="phone__screen">
        <div className="phone__bar">
          <span className="phone__avatar">
            <LogoMark color="#0e1a13" />
          </span>
          <span className="phone__title">
            Hethera
            <small>Business account</small>
          </span>
        </div>
        <div className="chat">
          <div className="bubble bubble--out">Buy 2GB MTN data for my sister, 0803 ••• 4412</div>
          <div className="bubble bubble--in">
            <span>Here are the MTN plans with 2GB:</span>
            <ul className="bubble__mono">
              <li>2GB · 1 day</li>
              <li>2GB · 2 days</li>
              <li>2GB · 30 days</li>
            </ul>
            <span>Which one should I get?</span>
          </div>
          <div className="bubble bubble--out">30 days please</div>
          <div className="bubble bubble--in">
            <span>Enter your PIN to confirm.</span>
            <span className="bubble__action">
              <Icon name="lock" size={15} strokeWidth={2.2} />
              Enter PIN securely
            </span>
          </div>
          <div className="bubble bubble--in">
            <span className="bubble__ok">
              <Icon name="check" size={15} strokeWidth={2.6} />
              Done
            </span>
            <span>2GB MTN data (30 days) sent to 0803 ••• 4412. Paid with your Visa ending 4081.</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
