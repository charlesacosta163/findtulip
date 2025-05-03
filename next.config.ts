import type { NextConfig } from "next";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const supabaseHostname = SUPABASE_URL.replace(/^https?:\/\//, "");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.discordapp.com",
      },
    ],
  },
};

export default nextConfig;
