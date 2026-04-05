import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'SMS Consent',
  description: 'SMS consent and opt-in workflow for Living Spiral Studio, LLC.',
};

const consentChecklist = [
  'The user provides their mobile number through a support or contact form, or directly requests text follow-up from our team.',
  'The user is presented with a separate SMS consent checkbox that is not preselected.',
  'The checkbox language explains that message and data rates may apply and that reply STOP and HELP commands are available.',
  'The user submits the form only after affirmatively selecting the SMS checkbox.',
];

const sampleLanguage = `I agree to receive customer care text messages from Living Spiral Studio, LLC about my inquiry, account, order, scheduling, or requested educational support. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase.`;

export default function SmsConsentPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fffdf8_0%,_#efe7d8_100%)] text-stone-900">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(41,37,36,0.06)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">
            SMS Consent
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
            Customer-care text messaging consent for Living Spiral Studio, LLC
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            Living Spiral Studio, LLC uses SMS only for customer care and account-related follow-up.
            This includes support replies, scheduling coordination, requested educational service
            updates, and account or order assistance connected to a user inquiry.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[1.75rem] border border-stone-200 bg-[#f8f4eb] p-6">
              <h2 className="text-2xl font-semibold text-stone-950">How opt-in is collected</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-stone-700">
                {consentChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-7 text-stone-700">
                We do not use purchased lists, scraped numbers, or blanket consent across unrelated
                messaging purposes. SMS consent is collected specifically for customer-care messaging.
              </p>
            </section>

            <section className="rounded-[1.75rem] bg-stone-950 p-6 text-stone-100">
              <h2 className="text-2xl font-semibold text-white">SMS checkbox language</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                This is the language users must affirmatively accept before receiving support-related
                text messages.
              </p>
              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-stone-100">{sampleLanguage}</p>
              </div>
            </section>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-stone-950">Program details</h2>
              <div className="mt-4 space-y-3 text-base leading-7 text-stone-700">
                <p>Program type: customer care and account-related messaging</p>
                <p>Message frequency: varies by inquiry and support need</p>
                <p>Opt-out: reply STOP at any time</p>
                <p>Help: reply HELP or email support@livingspiralstudio.com</p>
                <p>Business phone: +1 (866) 883-4086</p>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-emerald-900/15 bg-emerald-50 p-6">
              <h2 className="text-2xl font-semibold text-stone-950">Reference pages</h2>
              <p className="mt-4 text-base leading-7 text-stone-700">
                Reviewers and customers can confirm our messaging disclosures on the linked policy
                pages below.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  View privacy policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
                >
                  View terms
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
