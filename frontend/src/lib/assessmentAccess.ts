import { createHash } from "node:crypto";

export const ASSESSMENT_TIME_ZONE = "America/New_York";

export type AssessmentAccess = {
  grade: "Grade 6" | "Grade 7" | "Grade 8";
  code: string;
  opensAt: Date;
  closesAt: Date;
  displayWindow: string;
};

type AssessmentWindow = Omit<AssessmentAccess, "code"> & { codeHash: string };

function getAssessmentWindows(): AssessmentWindow[] {
  return [
    {
      grade: "Grade 6",
      codeHash: "8f506c78d3afd98b4c5f436c8609a4c18a83367a3e38278e92efa97666ee1ad7",
      opensAt: new Date("2026-09-23T13:10:00-04:00"),
      closesAt: new Date("2026-09-23T13:50:00-04:00"),
      displayWindow: "1:10 PM–1:50 PM Eastern Time",
    },
    {
      grade: "Grade 7",
      codeHash: "6d8cd4aaaf7b42100ad68038a79fcea96ed019aeac2c5a484750ba0ce4244ca0",
      opensAt: new Date("2026-09-23T12:30:00-04:00"),
      closesAt: new Date("2026-09-23T13:10:00-04:00"),
      displayWindow: "12:30 PM–1:10 PM Eastern Time",
    },
    {
      grade: "Grade 8",
      codeHash: "72613812ae79de6b37906e2f3b2ee9527de239afd225c7fb75979fd2f52c4ce8",
      opensAt: new Date("2026-09-23T13:50:00-04:00"),
      closesAt: new Date("2026-09-23T14:30:00-04:00"),
      displayWindow: "1:50 PM–2:30 PM Eastern Time",
    },
  ];
}

export function getAssessmentAccess(code: string) {
  const codeHash = createHash("sha256").update(code).digest("hex");
  const access = getAssessmentWindows().find((entry) => entry.codeHash === codeHash);
  if (!access) return undefined;

  return { ...access, code };
}

export function getAccessState(access: AssessmentAccess, now = new Date()) {
  if (now < access.opensAt) return "upcoming" as const;
  if (now >= access.closesAt) return "closed" as const;
  return "open" as const;
}
