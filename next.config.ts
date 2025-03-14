/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for easier deployment
  reactStrictMode: false, // Disable strict mode for jQuery compatibility
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
