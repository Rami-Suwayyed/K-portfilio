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
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  images: {
    unoptimized: true, // <-- REQUIRED for static export
    formats: ['image/webp'], // Serve images in WebP format when possible
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
    ],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
};

export default nextConfig;