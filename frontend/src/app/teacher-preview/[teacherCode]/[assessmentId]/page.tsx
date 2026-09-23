import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import {
  getTeacherAssessmentConfig,
  isTeacherAssessmentId,
  isTeacherCode,
} from "@/lib/teacherPreview";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Assessment | Teacher Preview",
  description: "Private teacher assessment preview.",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function TeacherAssessmentPreview({
  params,
}: {
  params: Promise<{ teacherCode: string; assessmentId: string }>;
}) {
  const { teacherCode, assessmentId } = await params;
  if (!isTeacherCode(teacherCode) || !isTeacherAssessmentId(assessmentId)) notFound();

  return (
    <AssessmentWorkspace
      config={getTeacherAssessmentConfig(assessmentId, teacherCode)}
      showSetLink={false}
    />
  );
}
