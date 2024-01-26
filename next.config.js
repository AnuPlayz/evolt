/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      { hostname: "xiexuntwvmedvyxokvvf.supabase.co" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "picsum.photos" },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

};

module.exports = nextConfig;
