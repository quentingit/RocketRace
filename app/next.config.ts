/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "container-service-1.5w9nttkswwxhj.eu-west-3.cs.amazonlightsail.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
