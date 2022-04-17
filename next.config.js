/** @type {import('next').NextConfig} */

let ignoreDuringBuilds = false;

if (process.env.NODE_ENV === "production") {
  ignoreDuringBuilds = true;
}

const ContentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval' 'unsafe-inline';
 style-src 'self' 'unsafe-inline' *.googleapis.com;
 child-src *.google.com;
 media-src 'none';
 connect-src 'self' http://localhost:3000;
 font-src 'self';
`;

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
];

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds,
  },
  async headers() {
    return [{ source: "/:path*{/}?", headers: securityHeaders }];
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
