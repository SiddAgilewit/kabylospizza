/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config:any) => {
    config.resolve.fallback = {
      "util": require.resolve("util/"),
      "util/types": require.resolve("util/")
    };
    return config;
  },
};

module.exports = nextConfig;
