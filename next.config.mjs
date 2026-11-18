/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [75, 92, 95],
  },
};

export default nextConfig;

