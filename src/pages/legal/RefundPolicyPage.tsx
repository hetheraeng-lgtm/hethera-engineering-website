import { COMPANY } from '../../config/company';
import { LegalLayout } from './LegalLayout';

export function RefundPolicyPage() {
  return (
    <LegalLayout
      path="/refund-policy"
      title="Refund Policy"
      intro="When you pay through Hethera but the service is not delivered, you get your money back."
    >
      <h2>Charged but not delivered</h2>
      <p>
        If your card is charged and the provider does not deliver your airtime, data, cable
        subscription or electricity token, we refund your card automatically and tell you in the chat.
        You do not need to ask. How long the money takes to arrive depends on your bank.
      </p>

      <h2>Card verification charge</h2>
      <p>The small charge made when you add a card is refunded.</p>

      <h2>Delivered purchases</h2>
      <p>
        Purchases delivered to the number you confirmed, such as airtime, data or a token, cannot be
        reversed. Please check recipient details before you enter your PIN.
      </p>

      <h2>Something not right?</h2>
      <p>
        Email <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a> with the
        transaction reference from your receipt. We will investigate and reply within the support hours
        listed below.
      </p>
      <p>Support hours: {COMPANY.supportHours}.</p>
    </LegalLayout>
  );
}
