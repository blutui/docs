import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['typescript', 'shiki', '@takumi-rs/core', '@takumi-rs/image-response'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.blutui.com',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ]
  },
  async redirects() {
    return [{ source: '/discord', destination: 'https://discord.gg/4H8dZW6Fva', permanent: false }]
  },
}

const withMDX = createMDX()

export default withMDX(config)
