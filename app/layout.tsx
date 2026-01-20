import { Instrument_Sans } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider/next'
import { AiSearchProvider } from 'components/ai/ai-search-context'
import { AiSearchOverlay } from 'components/ai/ai-search'

import { baseUrl, createMetadata } from 'lib/metadata'

import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
})

export const metadata = createMetadata({
  title: {
    template: '%s | Blutui Documentation',
    default: 'Blutui Documentation',
  },
  description: 'Welcome to the Blutui documentation',
  metadataBase: baseUrl,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={instrumentSans.className} suppressHydrationWarning>
      <body className="bg-neutral-50 dark:bg-neutral-900">
        <AiSearchProvider>
          <RootProvider>{children}</RootProvider>
          <AiSearchOverlay />
        </AiSearchProvider>
      </body>
    </html>
  )
}
