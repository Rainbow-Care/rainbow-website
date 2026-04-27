/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Bypasses the FlatCompat ESLint 9 serialization bug.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
