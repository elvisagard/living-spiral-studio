import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getAccessState, getAssessmentAccess } from "@/lib/assessmentAccess";

export const dynamic = "force-dynamic";

type ProtectedFile = {
  folder: string;
  type: string;
  disposition: "inline" | "attachment";
};

const files: Record<string, Record<string, ProtectedFile>> = {
  "1a": {
    "target-reference.webp": { folder: "assessment-1a", type: "image/webp", disposition: "inline" },
    "target-reference.png": { folder: "assessment-1a", type: "image/png", disposition: "attachment" },
    "favorite-preview.svg": { folder: "assessment-1a", type: "image/svg+xml", disposition: "inline" },
  },
  "1b": {
    "target-reference.webp": { folder: "assessment-1b", type: "image/webp", disposition: "inline" },
    "target-reference.png": { folder: "assessment-1b", type: "image/png", disposition: "attachment" },
    "golden-retriever-portrait.png": { folder: "assessment-1b", type: "image/png", disposition: "attachment" },
    "golden-retriever-portrait-preview.webp": { folder: "assessment-1b", type: "image/webp", disposition: "inline" },
    "pets-preview.svg": { folder: "assessment-1b", type: "image/svg+xml", disposition: "inline" },
  },
  "1c": {
    "target-reference-contrast.webp": { folder: "assessment-1c", type: "image/webp", disposition: "inline" },
    "target-reference-contrast.png": { folder: "assessment-1c", type: "image/png", disposition: "attachment" },
    "calendar.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
    "location-pin.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
    "schedule-preview.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
  },
  "1d": {
    "target-reference.webp": { folder: "assessment-1d", type: "image/webp", disposition: "inline" },
    "target-reference.png": { folder: "assessment-1d", type: "image/png", disposition: "attachment" },
    "basketball-hoop-photo.png": { folder: "assessment-1d", type: "image/png", disposition: "attachment" },
    "basketball-hoop-photo-preview.webp": { folder: "assessment-1d", type: "image/webp", disposition: "inline" },
    "calendar.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
    "location-pin.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
    "schedule-preview.svg": { folder: "assessment-1c", type: "image/svg+xml", disposition: "inline" },
  },
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ accessCode: string; filename: string }> },
) {
  const { accessCode, filename } = await context.params;
  const access = getAssessmentAccess(accessCode);
  const file = access ? files[access.assessmentId]?.[filename] : undefined;

  if (!access || !file || getAccessState(access) !== "open") notFound();

  const filePath = path.join(process.cwd(), "protected-assets", file.folder, filename);
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
