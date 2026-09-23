import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isTeacherCode, teacherAssessments } from "@/lib/teacherPreview";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Assessment Set 1 | Teacher Preview",
  description: "Private teacher preview for Assessment Set 1.",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function TeacherPreviewHub({
  params,
}: {
  params: Promise<{ teacherCode: string }>;
}) {
  const { teacherCode } = await params;
  if (!isTeacherCode(teacherCode)) notFound();

  const overview = `/teacher-preview/${teacherCode}/files/assessment-set-1/set-1-overview-contrast.webp`;

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#132844]">
      <header className="border-b border-[#d7e0ea] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="text-sm font-black uppercase text-[#63738a]">Private teacher preview</p>
          <h1 className="mt-2 text-4xl font-black text-[#0d294d] sm:text-5xl">Assessment Set 1</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#42556f]">
            Review every resource page and download its target or source assets. These previews are not
            restricted by student class times.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#cad5e2] bg-white shadow-sm">
          <img src={overview} alt="Overview of the four Assessment Set 1 replication targets" className="w-full" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {Object.entries(teacherAssessments).map(([id, assessment]) => (
            <Link
              key={id}
              href={`/teacher-preview/${teacherCode}/${id}`}
              className="group border-l-4 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f2b632]"
              style={{ borderColor: assessment.accent }}
            >
              <p className="text-sm font-black uppercase text-[#63738a]">{assessment.id}</p>
              <h2 className="mt-1 text-2xl font-black text-[#0d294d] group-hover:text-[#0d4f91]">
                {assessment.product}
              </h2>
              <p className="mt-3 font-semibold text-[#53647b]">{assessment.canvas}</p>
              <p className="mt-5 font-black text-[#0d4f91]">Open resource page →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
