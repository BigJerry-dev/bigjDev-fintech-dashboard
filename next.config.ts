import type { NextConfig } from "next";
import tailwindcss from "@tailwindcss/turbopack";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: { plugins: [tailwindcss()] },
};

export default nextConfig;