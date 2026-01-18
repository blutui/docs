import type { Metadata } from 'next'

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://docs.blutui.com',
      siteName: 'Blutui Documentation',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@blutui',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  }
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
