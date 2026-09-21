import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Set 1: Visual Replication Assessments",
  description: "Student introduction to the four-part visual replication assessment set.",
};

const assessments = [
  { id: "1A", title: "Decal", format: "Square", href: "/assessment-1a" },
  { id: "1B", title: "ID Badge", format: "Portrait", href: "/assessment-1b" },
  { id: "1C", title: "Event Ticket", format: "Landscape", href: "/assessment-1c" },
  { id: "1D", title: "Promo Card", format: "Landscape", href: "/assessment-1d" },
];

export default function AssessmentSetOnePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#132844]">
      <header className="border-b border-[#dce3ed] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <p className="font-black text-[#0d376d]">Set 1: Visual Replication</p>
          <p className="text-sm font-bold text-[#65758b]">Four assessments</p>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-black uppercase text-[#607087]">Your assessment set</p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-[#0d294d] md:text-5xl">
              Observe carefully. Build precisely.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#42556f]">
              Your goal is to recreate each target as closely as possible in Google Slides. Work calmly,
              use the supplied information, and compare your slide with the target before you submit.
            </p>
            <div className="mt-7 space-y-3 text-[#263d5d]">
              {[
                "Match the layout, scale, spacing, colors, type, and image crop.",
                "Use the exact slide dimensions, copy, fonts, photos, and icon links provided.",
                "Take pride in the details and do your best work.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 font-semibold leading-7">
                  <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-[#0d5b46]" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <Link
              href="/assessment-1a"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0d376d] px-5 py-3 font-extrabold text-white transition hover:bg-[#082c5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632] focus-visible:ring-offset-2"
            >
              Begin with Assessment 1A
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <figure className="overflow-hidden rounded-md border border-[#d2d9e3] bg-[#f4f6f8] shadow-lg">
            <img
              src="/assets/assessment-set-1/set-1-overview-contrast.webp"
              alt="The four Set 1 visual replication targets: decal, ID badge, event ticket, and promo card"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-[#dce3ed] bg-[#f5f7fa]">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-sm font-black uppercase text-[#607087]">Assessment order</p>
          <h2 className="mt-1 text-3xl font-black text-[#0d294d]">Work through the set</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assessments.map((assessment) => (
              <Link
                key={assessment.id}
                href={assessment.href}
                className="group rounded-md border border-[#ccd6e2] bg-white p-5 shadow-sm transition hover:border-[#8ca3bd] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632]"
              >
                <span className="text-sm font-black text-[#0d4f91]">Assessment {assessment.id}</span>
                <span className="mt-3 block text-xl font-black text-[#193457]">{assessment.title}</span>
                <span className="mt-1 block text-sm font-semibold text-[#65758b]">{assessment.format}</span>
                <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-[#0d376d]">
                  Open assessment
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
