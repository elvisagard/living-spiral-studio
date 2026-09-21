import type { Metadata } from "next";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import { assessment1B } from "@/lib/set1Assessments";

export const metadata: Metadata = {
  title: "Assessment 1B: ID Badge Replication",
  description: "Set 1 visual replication assessment for a portrait student ID badge.",
};

export default function Assessment1BPage() {
  return <AssessmentWorkspace config={assessment1B} />;
}
