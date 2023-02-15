/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['f.nooncdn.com'],
  },
}

module.exports = nextConfig
