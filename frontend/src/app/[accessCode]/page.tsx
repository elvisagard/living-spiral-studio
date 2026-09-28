import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import {
  getAccessState,
  getAssessmentAccess,
  getAssessmentConfig,
} from "@/lib/assessmentAccess";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Technology Assessment",
  description: "Class assessment workspace.",
  robots: { index: false, follow: false, noarchive: true },
};

function AvailabilityMessage({
  grade,
  assessment,
  window,
  state,
}: {
  grade: string;
  assessment: string;
  window: string;
  state: "upcoming" | "closed";
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fb] px-5 text-[#132844]">
      {state === "upcoming" && <meta httpEquiv="refresh" content="15" />}
      <section className="w-full max-w-xl border border-[#ccd6e2] bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-black uppercase text-[#63738a]">{grade} Technology</p>
        <h1 className="mt-3 text-3xl font-black text-[#0d294d]">
          {state === "upcoming" ? `${assessment} is not open yet` : `${assessment} is closed`}
        </h1>
        <p className="mt-5 text-lg font-semibold leading-8 text-[#42556f]">
          {state === "upcoming"
            ? `This page will open automatically during your class: ${window}.`
            : `The assessment window was ${window}.`}
        </p>
        {state === "upcoming" && (
          <p className="mt-6 text-sm font-semibold text-[#63738a]">
            You may also refresh this page when class begins.
          </p>
        )}
      </section>
    </main>
  );
}

export default async function PrivateAssessmentPage({
  params,
}: {
  params: Promise<{ accessCode: string }>;
}) {
  const { accessCode } = await params;
  const access = getAssessmentAccess(accessCode);
  if (!access) notFound();

  const state = getAccessState(access);
  if (state !== "open") {
    return (
      <AvailabilityMessage
        grade={access.grade}
        assessment={`Assessment ${access.assessmentId.toUpperCase()}`}
        window={access.displayWindow}
        state={state}
      />
    );
  }

  return <AssessmentWorkspace config={getAssessmentConfig(access)} showSetLink={false} />;
}
