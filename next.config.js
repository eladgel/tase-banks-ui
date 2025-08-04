/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'market.tase.co.il',
      },
    ],
  },
};

module.exports = nextConfig;
