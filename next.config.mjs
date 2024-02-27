/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
};
export default nextConfig;
