/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost', 'img.clerk.com', 'images.clerk.dev'],
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
    // Configuración corregida para Clerk v6
    serverExternalPackages: ['@clerk/nextjs'],
  }
  
  module.exports = nextConfig