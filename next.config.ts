// next.config.mjs
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // <-- REQUIRED for static export
  // basePath: "/web.kabseh.app",   // your folder name in cPanel (remove if using root)
  // assetPrefix: "/web.kabseh.app",// ensures images and JS use correct paths
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    unoptimized: true, // <-- REQUIRED for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
    ],
  },
};

export default nextConfig;