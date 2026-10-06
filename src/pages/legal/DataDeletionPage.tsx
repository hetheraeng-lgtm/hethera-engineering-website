import { COMPANY } from '../../config/company';
import { LegalLayout } from './LegalLayout';

export function DataDeletionPage() {
  const subject = encodeURIComponent('Delete my Hethera account');
  return (
    <LegalLayout
      path="/data-deletion"
      title="Data deletion"
      intro="How to delete your Hethera account and the personal data we hold about you."
    >
      <h2>How to request deletion</h2>
      <ol>
        <li>
          Email{' '}
          <a href={`mailto:${COMPANY.supportEmail}?subject=${subject}`}>{COMPANY.supportEmail}</a> with
          the subject “Delete my Hethera account”.
        </li>
        <li>Include the WhatsApp number your account uses.</li>
        <li>
          We will send a message to that WhatsApp number to confirm the request is really from you.
        </li>
      </ol>

      <h2>What we delete</h2>
      <ul>
        <li>Your profile, including your name and hashed PIN.</li>
        <li>Your saved card token, so the card can no longer be charged through Hethera.</li>
        <li>Your saved beneficiaries.</li>
        <li>Your conversation history with the assistant.</li>
      </ul>

      <h2>What we have to keep</h2>
      <p>
        Nigerian law requires us to keep records of completed payments, such as transaction
        references, amounts and dates, for a set period. We keep these only for as long as the law
        requires and then delete them.
      </p>

      <h2>When it happens</h2>
      <p>We will confirm by email or WhatsApp once your data has been deleted.</p>
    </LegalLayout>
  );
}
