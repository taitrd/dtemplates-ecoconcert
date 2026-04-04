/** @type {import('next').NextConfig} */

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig = {
  ...(isStaticExport && { output: "export" }),
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    ...(isStaticExport && { unoptimized: true }),
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
      },
    ],
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  productionBrowserSourceMaps: false,
  async headers() {
    if (isStaticExport) return [];

    const cacheStaticSources = [
      "/_next/image/:path*",
      "/assets/:path*",
      "/concerts/:path*",
      "/partners/:path*",
      "/singers/:path*",
      "/css/:path*",
      "/fonts/:path*",
      "/favicon.ico",
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
      "/placeholder-user.svg",
      "/placeholder.jpg",
      "/placeholder.png",
      "/placeholder.svg",
      "/ticketer.png",
    ];

    const cacheNextSources = ["/_next/static/:path*"];

    /**
     * Static sources cache until hard refresh cache
     */
    const cacheStaticConfigs = cacheStaticSources.map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=2159000" }],
    }));
    const cacheNextConfigs = cacheNextSources.map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=2159000" }],
    }));
    if (process.env.NODE_ENV == "development") {
      return [...cacheStaticConfigs];
    }
    return [...cacheNextConfigs, ...cacheStaticConfigs];
  },
  async redirects() {
    if (isStaticExport) return [];

    const enterpricePaths = ["/account/:path", "/home-3"];
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
