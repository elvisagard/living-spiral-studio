import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/[accessCode]/files/[filename]": ["./protected-assets/assessment-1a/**/*"],
    "/teacher-preview/[teacherCode]/files/[assessmentFolder]/[filename]": [
      "./protected-assets/assessment-1a/**/*",
      "./protected-assets/assessment-1b/**/*",
      "./protected-assets/assessment-1c/**/*",
      "./protected-assets/assessment-1d/**/*",
      "./protected-assets/assessment-set-1/**/*",
    ],
  },
};

export default nextConfig;
