// ================================
// next.config.js
// ================================
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['localhost', 'clerk.dev'],
    },
    env: {
      CUSTOM_KEY: process.env.CUSTOM_KEY,
    },
    async rewrites() {
      return [
        {
          source: '/api/backend/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
        },
      ]
    },
  }
  
  module.exports = nextConfig