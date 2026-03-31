import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Brand directory and contact routing for Living Spiral Studio, LLC and its DBAs.',
};

const routingCards = [
  {
    brand: 'Chart-Ed Institute for Global Data Literacy',
    domain: 'chart-ed.cc',
    useFor: 'Questions about the Data Literacy Standards (DLS), stewardship, standards alignment, and institute-related partnerships.',
  },
  {
    brand: 'Chart-Ed Learning',
    domain: 'chart-ed.om',
    useFor: 'School district inquiries, framework implementation, DLS-based products, and training requests.',
  },
  {
    brand: 'Living Spiral Education',
    domain: 'LivingSpiral.education',
    useFor: 'Education products outside the chart and data literacy portfolio.',
  },
];

const inquiryTypes = [
  'Billing or Stripe charge questions',
  'Product access or account support',
  'District, school, or partnership inquiry',
  'General questions about the company or its brands',
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fffdf8_0%,_#f1eadc_100%)] text-stone-900">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">
            Contact and Routing
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
            Start with the right brand and the right inbox.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            Living Spiral Studio, LLC is the parent company, but the quickest path is to tell us
            which brand your question relates to. If you are unsure, use the parent support inbox and
            we will route it from there.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {routingCards.map((card) => (
            <article
              key={card.brand}
              className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(41,37,36,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {card.domain}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-stone-950">{card.brand}</h2>
              <p className="mt-4 text-base leading-7 text-stone-700">{card.useFor}</p>
              <a
                href={`mailto:support@livingspiralstudio.com?subject=${encodeURIComponent(`Inquiry for ${card.brand}`)}`}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-600"
              >
                Route through support
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-stone-950 p-8 text-stone-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Contact details
            </p>
            <div className="mt-5 space-y-3 text-base leading-8 text-stone-300">
              <p>Living Spiral Studio, LLC</p>
              <p>155 Anita Drive</p>
              <p>Powder Springs, GA 30127</p>
              <p>USA</p>
              <p>
                <a className="text-white underline decoration-emerald-400/60" href="mailto:support@livingspiralstudio.com">
                  support@livingspiralstudio.com
                </a>
              </p>
              <p>
                <a className="text-white underline decoration-emerald-400/60" href="tel:+18668834086">
                  +1 (866) 883-4086
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#f8f4eb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              Include these details
            </p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-stone-700">
              {inquiryTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-stone-700">
              In your message, include the brand name, the email associated with your order or
              account, and any receipt or subscription details that will help us identify the issue.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Go to support
              </Link>
              <a
                href="mailto:support@livingspiralstudio.com"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
              >
                Email us directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
