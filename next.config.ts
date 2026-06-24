import type {
  NextConfig,
} from "next";

const commonSecurityHeaders = [
  {
    key:
      "X-Content-Type-Options",
    value:
      "nosniff",
  },
  {
    key:
      "X-Frame-Options",
    value:
      "SAMEORIGIN",
  },
  {
    key:
      "Referrer-Policy",
    value:
      "strict-origin-when-cross-origin",
  },
  {
    key:
      "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=()",
  },
];

const productionSecurityHeaders =
  process.env.NODE_ENV ===
    "production"
    ? [
      {
        key:
          "Strict-Transport-Security",

        value:
          "max-age=31536000; includeSubDomains",
      },
    ]
    : [];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  compress: true,

  reactStrictMode: true,

  images: {
    formats: [
      "image/avif",
      "image/webp",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async headers() {
    const securityHeaders = [
      ...commonSecurityHeaders,
      ...productionSecurityHeaders,
    ];

    return [
      {
        source:
          "/:path*",

        headers:
          securityHeaders,
      },

      {
        source:
          "/admin/:path*",

        headers: [
          {
            key:
              "Cache-Control",

            value:
              "private, no-store, no-cache, max-age=0, must-revalidate",
          },
        ],
      },

      {
        source:
          "/api/:path*",

        headers: [
          {
            key:
              "Cache-Control",

            value:
              "no-store, no-cache, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;