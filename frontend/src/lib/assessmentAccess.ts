import { createHash } from "node:crypto";
import type { AssessmentConfig } from "@/components/AssessmentWorkspace";
import {
  assessment1A,
  assessment1B,
  assessment1C,
  assessment1D,
} from "@/lib/set1Assessments";

export const ASSESSMENT_TIME_ZONE = "America/New_York";

export type AssessmentId = "1a" | "1b" | "1c" | "1d";

export type AssessmentAccess = {
  assessmentId: AssessmentId;
  grade: "Grade 6" | "Grade 7" | "Grade 8";
  code: string;
  opensAt: Date;
  closesAt: Date;
  displayWindow: string;
};

type AssessmentWindow = Omit<AssessmentAccess, "code"> & { codeHash: string };

const assessmentConfigs: Record<AssessmentId, AssessmentConfig> = {
  "1a": assessment1A,
  "1b": assessment1B,
  "1c": assessment1C,
  "1d": assessment1D,
};

function getAssessmentWindows(): AssessmentWindow[] {
  return [
    {
      assessmentId: "1a",
      grade: "Grade 6",
      codeHash: "8f506c78d3afd98b4c5f436c8609a4c18a83367a3e38278e92efa97666ee1ad7",
      opensAt: new Date("2026-09-23T13:10:00-04:00"),
      closesAt: new Date("2026-09-23T13:50:00-04:00"),
      displayWindow: "September 23, 1:10 PM–1:50 PM Eastern Time",
    },
    {
      assessmentId: "1a",
      grade: "Grade 7",
      codeHash: "6d8cd4aaaf7b42100ad68038a79fcea96ed019aeac2c5a484750ba0ce4244ca0",
      opensAt: new Date("2026-09-23T12:30:00-04:00"),
      closesAt: new Date("2026-09-23T13:10:00-04:00"),
      displayWindow: "September 23, 12:30 PM–1:10 PM Eastern Time",
    },
    {
      assessmentId: "1a",
      grade: "Grade 8",
      codeHash: "72613812ae79de6b37906e2f3b2ee9527de239afd225c7fb75979fd2f52c4ce8",
      opensAt: new Date("2026-09-23T13:50:00-04:00"),
      closesAt: new Date("2026-09-23T14:30:00-04:00"),
      displayWindow: "September 23, 1:50 PM–2:30 PM Eastern Time",
    },
    {
      assessmentId: "1b",
      grade: "Grade 6",
      codeHash: "e136cfa41309917685f56d2aa3145faa28e515c2548e1d09200192cf97d158ab",
      opensAt: new Date("2026-10-07T12:55:00-04:00"),
      closesAt: new Date("2026-10-07T14:05:00-04:00"),
      displayWindow: "October 7, 12:55 PM–2:05 PM Eastern Time",
    },
    {
      assessmentId: "1b",
      grade: "Grade 7",
      codeHash: "3649061e11601c7495a42584c7eca097c8a348d7c3db02fc8a4c26dc8a4e653d",
      opensAt: new Date("2026-09-30T12:15:00-04:00"),
      closesAt: new Date("2026-09-30T13:25:00-04:00"),
      displayWindow: "September 30, 12:15 PM–1:25 PM Eastern Time",
    },
    {
      assessmentId: "1b",
      grade: "Grade 8",
      codeHash: "6e49cb084f129d67533bef0a409c534a1fccb4d4eb5b2a21f86da504516ef9a0",
      opensAt: new Date("2026-09-30T13:35:00-04:00"),
      closesAt: new Date("2026-09-30T14:45:00-04:00"),
      displayWindow: "September 30, 1:35 PM–2:45 PM Eastern Time",
    },
    {
      assessmentId: "1c",
      grade: "Grade 6",
      codeHash: "5ac0cfa251f0c0eb809bbd0be226ee755cbc098fd68c3f0cb48e70be5ec8bd2d",
      opensAt: new Date("2026-10-14T12:55:00-04:00"),
      closesAt: new Date("2026-10-14T14:05:00-04:00"),
      displayWindow: "October 14, 12:55 PM–2:05 PM Eastern Time",
    },
    {
      assessmentId: "1c",
      grade: "Grade 7",
      codeHash: "cc90d047e82377dcbb8f402ef55c7c1fafe73fa297bf1426ba5af72089e02276",
      opensAt: new Date("2026-10-07T12:15:00-04:00"),
      closesAt: new Date("2026-10-07T13:25:00-04:00"),
      displayWindow: "October 7, 12:15 PM–1:25 PM Eastern Time",
    },
    {
      assessmentId: "1c",
      grade: "Grade 8",
      codeHash: "26a2123820fb37dca3d171fe8578ac4e009acffa5a4ebdcdcfc3921fde020968",
      opensAt: new Date("2026-10-07T13:35:00-04:00"),
      closesAt: new Date("2026-10-07T14:45:00-04:00"),
      displayWindow: "October 7, 1:35 PM–2:45 PM Eastern Time",
    },
    {
      assessmentId: "1d",
      grade: "Grade 6",
      codeHash: "ff8db9a313a6e6cfd28934fafd86f3ee9dd60c631e0ab3a5bc4e8f4e81a1c8d2",
      opensAt: new Date("2026-10-21T12:55:00-04:00"),
      closesAt: new Date("2026-10-21T14:05:00-04:00"),
      displayWindow: "October 21, 12:55 PM–2:05 PM Eastern Time",
    },
    {
      assessmentId: "1d",
      grade: "Grade 7",
      codeHash: "bbb7aee04652ea85ec33c09232aca023bde666c3e4866f8ebaeec774193a01f7",
      opensAt: new Date("2026-10-14T12:15:00-04:00"),
      closesAt: new Date("2026-10-14T13:25:00-04:00"),
      displayWindow: "October 14, 12:15 PM–1:25 PM Eastern Time",
    },
    {
      assessmentId: "1d",
      grade: "Grade 8",
      codeHash: "b4b76e0e9ddcbebc1179693464ce21b3c842bed4518a7da59cd841b9180656c0",
      opensAt: new Date("2026-10-14T13:35:00-04:00"),
      closesAt: new Date("2026-10-14T14:45:00-04:00"),
      displayWindow: "October 14, 1:35 PM–2:45 PM Eastern Time",
    },
  ];
}

export function getAssessmentAccess(code: string) {
  const codeHash = createHash("sha256").update(code).digest("hex");
  const access = getAssessmentWindows().find((entry) => entry.codeHash === codeHash);
  if (!access) return undefined;

  return { ...access, code };
}

export function getAssessmentConfig(access: AssessmentAccess) {
  const assessment = assessmentConfigs[access.assessmentId];
  const base = `/${access.code}/files`;
  const protectUrl = (url: string) => {
    const filename = url.split("/").at(-1);
    return filename ? `${base}/${filename}` : url;
  };

  return {
    ...assessment,
    target: {
      ...assessment.target,
      src: protectUrl(assessment.target.src),
      download: protectUrl(assessment.target.download),
    },
    assets: assessment.assets.map((asset) => ({
      ...asset,
      href: asset.external ? asset.href : protectUrl(asset.href),
      preview: asset.preview ? protectUrl(asset.preview) : undefined,
    })),
  };
}

export function getAccessState(access: AssessmentAccess, now = new Date()) {
  if (now < access.opensAt) return "upcoming" as const;
  if (now >= access.closesAt) return "closed" as const;
  return "open" as const;
}
