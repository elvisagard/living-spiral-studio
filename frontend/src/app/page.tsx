import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';

const dbaCards = [
  {
    name: 'Chart-Ed Institute for Global Data Literacy',
    domain: 'chart-ed.cc',
    href: 'https://chart-ed.cc',
    description:
      'Stewards the Data Literacy Standards (DLS) and supports the long-term integrity of global data literacy practice.',
  },
  {
    name: 'Chart-Ed Learning',
    domain: 'chart-ed.om',
    href: 'https://chart-ed.om',
    description:
      'Houses the Chart-Ed Framework for school districts along with products built on top of the DLS.',
  },
  {
    name: 'Living Spiral Education',
    domain: 'livingspiral.education',
    href: 'https://livingspiral.education',
    description:
      'Publishes education products beyond charts and data literacy under the broader Living Spiral umbrella.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_34%),linear-gradient(180deg,_#fffdf8_0%,_#f4efe4_48%,_#efe7d8_100%)] text-stone-900">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-emerald-700/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800">
              Parent Entity for Mission-Driven Education Brands
            </div>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Living Spiral Studio, LLC builds the home for a growing family of educational work.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                Registered in Paulding County, Georgia as{' '}
                <span className="font-semibold text-stone-900">611710 - Educational Support Services</span>,
                Living Spiral Studio serves as the parent site for our standards stewardship,
                district-facing frameworks, and education products.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Visit Support
              </Link>
              <a
                href="#dbas"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
              >
                Explore Our DBAs
              </a>
            </div>
            <p className="text-sm leading-7 text-stone-600">
              Looking for a policy or billing-contact page? Visit{' '}
              <Link href="/privacy" className="font-semibold text-emerald-800 hover:text-emerald-600">
                Privacy
              </Link>
              ,{' '}
              <Link href="/terms" className="font-semibold text-emerald-800 hover:text-emerald-600">
                Terms
              </Link>
              , or{' '}
              <Link href="/contact" className="font-semibold text-emerald-800 hover:text-emerald-600">
                Contact
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-4 self-start">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_30px_80px_rgba(41,37,36,0.08)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
                What this parent site does
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
                <li>Clarifies the relationship between the company and its DBAs.</li>
                <li>Provides a central support destination for customers, schools, and partners.</li>
                <li>Anchors legal-business identity, contact details, and public trust signals.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-stone-950 p-7 text-stone-100 shadow-[0_30px_80px_rgba(41,37,36,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Contact
              </p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
                <p>155 Anita Drive</p>
                <p>Powder Springs, GA 30127</p>
                <p>USA</p>
                <p>
                  <a className="text-white underline decoration-emerald-400/60" href="tel:+18668834086">
                    +1 (866) 883-4086
                  </a>
                </p>
                <p>
                  <a
                    className="text-white underline decoration-emerald-400/60"
                    href="mailto:support@livingspiralstudio.com"
                  >
                    support@livingspiralstudio.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dbas" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">DBA Portfolio</p>
          <h2 className="mt-4 text-4xl font-semibold text-stone-950">Three brands, one parent organization.</h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Each DBA has a distinct role while remaining clearly connected to Living Spiral Studio, LLC.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {dbaCards.map((card) => (
            <article
              key={card.name}
              className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white/85 p-8 shadow-[0_20px_60px_rgba(41,37,36,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">{card.domain}</p>
              <h3 className="mt-4 text-2xl font-semibold text-stone-950">{card.name}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-stone-700">{card.description}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-600"
              >
                Visit {card.domain}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="standards" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-[#f8f4eb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              Stewardship
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-950">The Data Literacy Standards live here.</h2>
            <p className="mt-4 text-base leading-7 text-stone-700">
              The Chart-Ed Institute for Global Data Literacy stewards the Data Literacy Standards
              (DLS), providing a standards-centered home for the work and its long-term public value.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/15 bg-white/90 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              Product Families
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-950">Frameworks and products stay legible.</h2>
            <p className="mt-4 text-base leading-7 text-stone-700">
              Chart-Ed Learning focuses on district-facing frameworks and DLS-based products, while
              Living Spiral Education holds offerings that sit outside the charts and data literacy
              domain.
            </p>
          </div>
        </div>
      </section>

      <section id="entity" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="rounded-[2.5rem] bg-stone-950 px-8 py-10 text-white lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Legal Entity
              </p>
              <h2 className="mt-4 text-4xl font-semibold">Living Spiral Studio, LLC</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                Registered with Paulding County, Georgia under NAICS classification 611710,
                Educational Support Services. This site exists to make the relationship between the
                company, its DBAs, and its support channels transparent.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Need help?
              </p>
              <p className="mt-4 text-base leading-7 text-stone-300">
                Stripe requires a public support destination, and customers deserve one. We now route
                all inquiries for billing, account questions, and product support through a dedicated
                support page.
              </p>
              <Link
                href="/support"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-emerald-100"
              >
                Open support page
              </Link>
              <Link
                href="/contact"
                className="mt-3 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Or use the contact flow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
