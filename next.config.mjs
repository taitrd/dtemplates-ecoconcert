/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    const enterpricePaths = ["/account/:path"];
    if (process.env.APP_VERSION !== "full") {
      return enterpricePaths.map((path) => ({
        source: path, // The path you want to disable
        destination: "/404", // Where to send the user
        permanent: true, // Use permanent: true for a 308 permanent redirect
      }));
    }
    return [];
  },
};

export default nextConfig;
