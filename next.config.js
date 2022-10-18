/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.lorem.space", "placeimg.com", "tenor.com"],
  },
};

module.exports = nextConfig;
