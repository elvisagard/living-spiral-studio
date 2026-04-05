import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Living Spiral Studio, LLC and its DBA brands.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fcfaf5_0%,_#f2ebdf_100%)] text-stone-900">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(41,37,36,0.06)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
            Privacy practices for Living Spiral Studio, LLC
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            This policy applies to Living Spiral Studio, LLC and its DBA brands: Chart-Ed Institute
            for Global Data Literacy, Chart-Ed Learning, and Living Spiral Education.
          </p>

          <div className="mt-10 space-y-10 text-base leading-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Information we collect</h2>
              <p className="mt-3">
                We may collect information you provide directly, such as your name, email address,
                organization, support request details, billing information, and communications you send
                to us. We may also receive transaction-related information from payment processors such
                as Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">How we use information</h2>
              <p className="mt-3">
                We use information to provide educational services, process payments, respond to
                support requests, maintain customer records, improve our products, and communicate about
                purchases, accounts, and relevant updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Sharing</h2>
              <p className="mt-3">
                We do not sell personal information. We may share information with service providers
                that help us operate our website, deliver products, process payments, or provide
                customer support. We may also disclose information when required by law or to protect
                our rights and users.
              </p>
              <p className="mt-3">
                Mobile information and text messaging originator opt-in data will not be shared with
                third parties or affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Data retention</h2>
              <p className="mt-3">
                We retain information for as long as reasonably necessary to provide services, meet
                legal or accounting obligations, resolve disputes, and enforce agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Your choices</h2>
              <p className="mt-3">
                You may contact us to request updates to your information or ask questions about our
                privacy practices. Depending on your location, you may have additional privacy rights
                under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">SMS messaging</h2>
              <p className="mt-3">
                If you opt in to receive text messages from Living Spiral Studio, LLC, we may use your
                mobile number to send customer care and account-related messages connected to your
                inquiry, purchase, scheduling, or requested educational services. Message frequency
                varies. Message and data rates may apply.
              </p>
              <p className="mt-3">
                You can opt out of SMS communications at any time by replying STOP. For help, reply
                HELP or contact support@livingspiralstudio.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Contact</h2>
              <div className="mt-3">
                <p>Living Spiral Studio, LLC</p>
                <p>155 Anita Drive, Powder Springs, GA 30127, USA</p>
                <p>support@livingspiralstudio.com</p>
                <p>+1 (866) 883-4086</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
