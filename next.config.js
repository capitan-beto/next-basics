/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["unavatar.io"]
  }
}

module.exports = nextConfig
