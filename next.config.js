/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Explicitly set basePath and assetPrefix for production
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-main' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-main' : '',
  
  // Make images work with static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash ensures proper relative path resolution
  trailingSlash: true,
  
  // Enable ESLint during production builds
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  
  // Disable TypeScript type checking during builds
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 