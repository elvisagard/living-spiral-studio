import { createHash } from "node:crypto";
import type { AssessmentConfig } from "@/components/AssessmentWorkspace";
import {
  assessment1A,
  assessment1B,
  assessment1C,
  assessment1D,
} from "@/lib/set1Assessments";

const TEACHER_CODE_HASH = "bb523339a089b6c627b7b2376e5ddab548c9249ba90e533e3812a5981f75c08a";

export const teacherAssessments = {
  "1a": assessment1A,
  "1b": assessment1B,
  "1c": assessment1C,
  "1d": assessment1D,
} as const;

export type TeacherAssessmentId = keyof typeof teacherAssessments;

export function isTeacherCode(code: string) {
  return createHash("sha256").update(code).digest("hex") === TEACHER_CODE_HASH;
}

function protectAssetUrl(url: string, teacherCode: string) {
  const match = url.match(/^\/assets\/(assessment-[^/]+)\/(.+)$/);
  if (!match) return url;

  return `/teacher-preview/${teacherCode}/files/${match[1]}/${match[2]}`;
}

export function getTeacherAssessmentConfig(
  assessmentId: TeacherAssessmentId,
  teacherCode: string,
): AssessmentConfig {
  const assessment = teacherAssessments[assessmentId];

  return {
    ...assessment,
    target: {
      ...assessment.target,
      src: protectAssetUrl(assessment.target.src, teacherCode),
      download: protectAssetUrl(assessment.target.download, teacherCode),
    },
    assets: assessment.assets.map((asset) => ({
      ...asset,
      href: asset.external ? asset.href : protectAssetUrl(asset.href, teacherCode),
      preview: asset.preview ? protectAssetUrl(asset.preview, teacherCode) : undefined,
    })),
  };
}

export function isTeacherAssessmentId(value: string): value is TeacherAssessmentId {
  return value in teacherAssessments;
}
