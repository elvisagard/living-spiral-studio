import type { Metadata } from "next";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import { assessment1C } from "@/lib/set1Assessments";

export const metadata: Metadata = {
  title: "Assessment 1C: Event Ticket Replication",
  description: "Set 1 visual replication assessment for a landscape event ticket.",
};

export default function Assessment1CPage() {
  return <AssessmentWorkspace config={assessment1C} />;
}
