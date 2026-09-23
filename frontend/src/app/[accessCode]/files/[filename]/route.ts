import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getAccessState, getAssessmentAccess } from "@/lib/assessmentAccess";

export const dynamic = "force-dynamic";

const files = {
  "target-reference.webp": { type: "image/webp", disposition: "inline" },
  "target-reference.png": { type: "image/png", disposition: "attachment" },
  "favorite-preview.svg": { type: "image/svg+xml", disposition: "inline" },
} as const;

export async function GET(
  _request: Request,
  context: { params: Promise<{ accessCode: string; filename: string }> },
) {
  const { accessCode, filename } = await context.params;
  const access = getAssessmentAccess(accessCode);
  const file = files[filename as keyof typeof files];

  if (!access || !file || getAccessState(access) !== "open") notFound();

  const filePath = path.join(process.cwd(), "protected-assets", "assessment-1a", filename);
  const body = await readFile(filePath);

  return new Response(body, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Type": file.type,
      "Content-Disposition": `${file.disposition}; filename="${filename}"`,
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
