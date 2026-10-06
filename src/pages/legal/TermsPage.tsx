import { COMPANY } from '../../config/company';
import { LegalLayout } from './LegalLayout';

export function TermsPage() {
  return (
    <LegalLayout
      path="/terms"
      title="Terms of Service"
      intro={`These terms are an agreement between you and ${COMPANY.legalName}. By messaging Hethera you agree to them. If you do not agree, please do not use the service.`}
    >
      <h2>The service</h2>
      <p>
        Hethera lets you buy airtime, mobile data, cable TV subscriptions and electricity through
        WhatsApp, and pay with your own debit card. Hethera is not a bank. We do not hold deposits or
        keep a balance for you.
      </p>

      <h2>Who can use Hethera</h2>
      <p>You must be at least 18 years old and allowed to use the card you add.</p>

      <h2>Your account and PIN</h2>
      <p>
        Keep your phone and your transaction PIN private. You are responsible for any purchase
        confirmed with your PIN. If you think someone else knows your PIN, contact us straight away
        and we will lock your account.
      </p>

      <h2>Payments and fees</h2>
      <p>
        Before you confirm a purchase, we show the full amount, including any fees. We may refuse or
        limit a transaction to prevent fraud.
      </p>

      <h2>Check before you confirm</h2>
      <p>
        You are responsible for the phone number, meter number or smartcard number you give us. A
        purchase delivered to the details you confirmed cannot be reversed.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You must not use Hethera for fraud or money laundering, to pay with a card you are not
        authorised to use, or to abuse or attack the service.
      </p>

      <h2>Liability</h2>
      <p>
        Mobile networks, cable companies and electricity distributors provide the services you buy. We
        are not responsible for their outages. If a purchase you paid for is not delivered, we will
        refund it under our <a href="/refund-policy">Refund Policy</a>.
      </p>

      <h2>Ending the service</h2>
      <p>
        You can stop using Hethera at any time and ask us to delete your data, as described on our{' '}
        <a href="/data-deletion">data deletion page</a>. We may suspend accounts used for fraud or in
        breach of these terms.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
    </LegalLayout>
  );
}
