/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        }
      ]
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  }
  
  module.exports = nextConfig