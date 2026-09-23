import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/[accessCode]/files/[filename]": ["./protected-assets/assessment-1a/**/*"],
  },
};

export default nextConfig;
