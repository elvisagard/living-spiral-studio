import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { isTeacherCode } from "@/lib/teacherPreview";

export const dynamic = "force-dynamic";

const allowedFiles = {
  "assessment-1a": new Set(["target-reference.webp", "target-reference.png", "favorite-preview.svg"]),
  "assessment-1b": new Set([
    "target-reference.webp",
    "target-reference.png",
    "golden-retriever-portrait.png",
    "golden-retriever-portrait-preview.webp",
    "pets-preview.svg",
  ]),
  "assessment-1c": new Set([
    "target-reference-contrast.webp",
    "target-reference-contrast.png",
    "calendar.svg",
    "location-pin.svg",
    "schedule-preview.svg",
  ]),
  "assessment-1d": new Set([
    "target-reference.webp",
    "target-reference.png",
    "basketball-hoop-photo.png",
    "basketball-hoop-photo-preview.webp",
  ]),
  "assessment-set-1": new Set(["set-1-overview-contrast.webp"]),
} as const;

const contentTypes: Record<string, string> = {
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

export async function GET(
  _request: Request,
  context: {
    params: Promise<{ teacherCode: string; assessmentFolder: string; filename: string }>;
  },
) {
  const { teacherCode, assessmentFolder, filename } = await context.params;
  if (!isTeacherCode(teacherCode)) notFound();

  const folder = allowedFiles[assessmentFolder as keyof typeof allowedFiles];
  if (!folder || !folder.has(filename as never)) notFound();

  const filePath = path.join(process.cwd(), "protected-assets", assessmentFolder, filename);
  const body = await readFile(filePath);
  const extension = path.extname(filename).toLowerCase();
  const disposition = filename.endsWith(".png") ? "attachment" : "inline";

  return new Response(body, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Type": contentTypes[extension] ?? "application/octet-stream",
      "Content-Disposition": `${disposition}; filename="${filename}"`,
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
