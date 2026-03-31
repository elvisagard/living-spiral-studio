import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Support information for Living Spiral Studio, LLC and its DBAs, including billing, account, and product inquiries.',
};

const supportedBrands = [
  'Living Spiral Studio, LLC',
  'Chart-Ed Institute for Global Data Literacy',
  'Chart-Ed Learning',
  'Living Spiral Education',
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fcfaf5_0%,_#f3ecdf_100%)] text-stone-900">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(41,37,36,0.08)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">Support</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">How to reach us</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            This page serves as the public support destination for Living Spiral Studio, LLC and the
            brands it operates. If your purchase, subscription, receipt, or classroom relationship
            references any of the organizations below, this is the right place to start.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-stone-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Email Support
              </p>
              <a
                href="mailto:support@livingspiralstudio.com"
                className="mt-4 block text-2xl font-semibold text-white underline decoration-emerald-400/60"
              >
                support@livingspiralstudio.com
              </a>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Best for billing questions, account help, product access issues, and general support.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-[#f8f4eb] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
                Telephone
              </p>
              <a
                href="tel:+18668834086"
                className="mt-4 block text-2xl font-semibold text-stone-950"
              >
                +1 (866) 883-4086
              </a>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Available for customer support and business contact related to our educational services.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
                Supported brands
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-stone-700">
                {supportedBrands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
                Mailing address
              </p>
              <div className="mt-4 text-base leading-8 text-stone-700">
                <p>Living Spiral Studio, LLC</p>
                <p>155 Anita Drive</p>
                <p>Powder Springs, GA 30127</p>
                <p>USA</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-emerald-900/15 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-900">
              What to include in your message
            </p>
            <p className="mt-4 text-base leading-7 text-stone-700">
              To help us resolve your issue quickly, include the brand name, the email used for your
              order or account, and a brief description of the problem. If your question is about a
              Stripe charge, include the receipt details or the last four digits of the payment method
              when available.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:support@livingspiralstudio.com"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Email support
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
            >
              Use contact routing
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
            >
              Back to main site
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
