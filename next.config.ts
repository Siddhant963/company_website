import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect www → non-www so all canonical signals point to one domain
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.siddhyatechnology.in" }],
        destination: "https://siddhyatechnology.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
