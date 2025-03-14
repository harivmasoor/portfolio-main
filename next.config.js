/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The GitHub Actions workflow will automatically set the correct basePath
  // basePath and assetPrefix will be injected by GitHub's configure-pages action
  
  // Trailing slash ensures proper relative path resolution
  trailingSlash: true,
  
  // Disable ESLint during production builds
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
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