/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Explicitly transpile these packages to resolve potential Webpack issues
  transpilePackages: ["framer-motion", "embla-carousel-react"],
};

export default nextConfig;
