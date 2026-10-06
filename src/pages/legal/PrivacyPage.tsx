import { CHAT_MEMORY_HOURS, COMPANY } from '../../config/company';
import { LegalLayout } from './LegalLayout';

export function PrivacyPage() {
  return (
    <LegalLayout
      path="/privacy"
      title="Privacy Policy"
      intro="This policy explains what Hethera collects, why we collect it, who we share it with and the choices you have."
    >
      <h2>Who we are</h2>
      <p>
        Hethera is operated by {COMPANY.legalName} (RC {COMPANY.rcNumber}), {COMPANY.registeredAddress}{' '}
        (“Hethera”, “we”, “us”). We control the personal data described here, and we process it in
        line with the Nigeria Data Protection Act 2023.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Your WhatsApp number and profile name.</strong> Your WhatsApp number is your Hethera
          account ID. We create the account when you first message us.
        </li>
        <li>
          <strong>The name you give us</strong>, so we know what to call you.
        </li>
        <li>
          <strong>Your messages to Hethera</strong>, so we can understand and carry out your requests.
        </li>
        <li>
          <strong>Your transaction PIN, stored only as a one-way hash.</strong> You enter it in an
          encrypted WhatsApp form. It is never sent as a chat message, and we cannot read it back.
        </li>
        <li>
          <strong>A card token from Paystack</strong>, plus your card's last four digits, card type and
          bank name. We never receive or store your full card number, expiry date or CVV.
        </li>
        <li>
          <strong>Purchase details</strong>, such as phone numbers, meter numbers, smartcard numbers,
          amounts, plans and transaction references, plus any beneficiaries you save.
        </li>
        <li>
          <strong>Feedback</strong> you choose to send us.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To make the purchases you ask for, charge your saved card and send you receipts.</li>
        <li>To check your identity before a payment and to prevent fraud.</li>
        <li>To handle refunds, disputes and support requests.</li>
        <li>To keep the financial and audit records the law requires.</li>
        <li>To improve the service, using records that are aggregated or have names and numbers removed.</li>
      </ul>
      <p>We do not sell your personal data, and we do not use it for third-party advertising.</p>

      <h2>AI processing</h2>
      <p>
        An AI model reads your messages so it can understand your requests and reply. The model is
        provided by Anthropic. The AI never receives your PIN or card details. Your recent conversation
        is kept for {CHAT_MEMORY_HOURS} hours after you stop chatting, then deleted automatically.
      </p>

      <h2>Who we share it with</h2>
      <ul>
        <li>
          <strong>Meta Platforms (WhatsApp)</strong>, which delivers messages between you and us.
        </li>
        <li>
          <strong>Paystack</strong>, which processes card payments and refunds.
        </li>
        <li>
          <strong>VTpass</strong>, our bill-payment partner, which receives only the details needed to
          deliver your airtime, data, cable or electricity purchase.
        </li>
        <li>
          <strong>Anthropic and our cloud hosting providers</strong>. They act only on our instructions.
        </li>
        <li>
          <strong>Regulators or law enforcement</strong>, when the law requires it.
        </li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        Conversation history expires automatically after a period of inactivity. Transaction and
        ledger records are kept for as long as Nigerian financial record-keeping laws require.
        Everything else is deleted when you close your account.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct, delete or export your personal data. You can also object to
        how we process it, or withdraw your consent. Email{' '}
        <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>. You may also complain to
        the Nigeria Data Protection Commission.
      </p>

      <h2>Security</h2>
      <p>
        Data is encrypted while it travels between systems. PINs are stored only as hashes. Card data
        stays with Paystack. Staff can see customer records only when their job requires it.
      </p>

      <h2>Children</h2>
      <p>Hethera is for people aged 18 and over. We do not knowingly collect data from children.</p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update the effective date at the top of this page. If the
        changes are significant, we will also tell you in the chat.
      </p>
    </LegalLayout>
  );
}
