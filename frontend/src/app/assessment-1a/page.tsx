import type { Metadata } from "next";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import { assessment1A } from "@/lib/set1Assessments";

export const metadata: Metadata = {
  title: "Assessment 1A: Decal Replication",
  description: "Set 1 visual replication assessment for a square school-spirit decal.",
};

export default function Assessment1APage() {
  return <AssessmentWorkspace config={assessment1A} />;
}
