/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_GRAPHQL_PROTOCOL || "http",
        hostname: process.env.NEXT_PUBLIC_GRAPHQL_HOSTNAME || "localhost",
        port: process.env.NEXT_PUBLIC_GRAPHQL_PORT || "4000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
