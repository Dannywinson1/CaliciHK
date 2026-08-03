/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: { root: process.cwd() },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
