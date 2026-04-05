import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Living Spiral Studio, LLC and its DBA brands.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fffdf8_0%,_#efe8da_100%)] text-stone-900">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(41,37,36,0.06)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">
            Terms of Use
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
            Terms for using our websites and services
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-700">
            These terms apply to Living Spiral Studio, LLC and the services, products, and websites it
            operates through its DBA brands.
          </p>

          <div className="mt-10 space-y-10 text-base leading-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Use of services</h2>
              <p className="mt-3">
                You agree to use our websites, products, and educational services lawfully and in a
                way that does not interfere with our operations or the experience of other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">SMS terms</h2>
              <p className="mt-3">
                By opting in to receive SMS messages from Living Spiral Studio, LLC, you agree to
                receive customer care and account-related text messages associated with your inquiry,
                order, account, scheduling, or requested educational services. Message frequency
                varies. Message and data rates may apply.
              </p>
              <p className="mt-3">
                Consent to receive SMS messages is not a condition of purchase. You can opt out at any
                time by replying STOP. For help, reply HELP or contact support@livingspiralstudio.com.
              </p>
              <p className="mt-3">
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Purchases and billing</h2>
              <p className="mt-3">
                Some products or services may require payment. By making a purchase, you agree to
                provide accurate billing information and authorize charges through our payment
                processors. Questions about charges may be directed to support@livingspiralstudio.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Intellectual property</h2>
              <p className="mt-3">
                Unless otherwise stated, our content, branding, frameworks, and materials are owned by
                Living Spiral Studio, LLC or its licensors and may not be reproduced or redistributed
                without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Disclaimers</h2>
              <p className="mt-3">
                Our services are provided on an as-is and as-available basis to the extent permitted by
                law. We do not guarantee uninterrupted operation or that every offering will be error
                free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-950">Limitation of liability</h2>
              <p className="mt-3">
                To the extent permitted by law, Living Spiral Studio, LLC will not be liable for
                indirect, incidental, special, or consequential damages arising from the use of our
                websites or services.
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
