import type { Metadata } from "next";
import AssessmentWorkspace from "@/components/AssessmentWorkspace";
import { assessment1D } from "@/lib/set1Assessments";

export const metadata: Metadata = {
  title: "Assessment 1D: Promo Card Replication",
  description: "Set 1 cumulative visual replication assessment for a basketball tryouts promotional card.",
};

export default function Assessment1DPage() {
  return <AssessmentWorkspace config={assessment1D} />;
}
