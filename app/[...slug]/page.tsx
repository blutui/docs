import { createRelativeLink } from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'components/layout/notebook/page'
import { getMDXComponents } from 'mdx-components'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { createMetadata } from 'lib/metadata'
import { source } from 'lib/source'
import { LLMButton } from 'components/ai/page-actions'
import { DocsApi } from 'components/docs-api'
import Link from 'next/link'

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const { body: Mdx, toc, lastModified } = await page.data.load()

  let method: string | null = null
  let endpoint: string | null = null

  if (page.data.api) {
    const apiMethodEndpoint = page.data.api.split(' ', 2)

    method = apiMethodEndpoint[0]
    endpoint = apiMethodEndpoint[1]
  }

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      tableOfContent={{ style: 'clerk' }}
      // lastUpdate={lastModified ? new Date(lastModified) : undefined}
    >
      <div className="flex items-center justify-between gap-4">
        <DocsTitle className="flex-1">{page.data.title}</DocsTitle>
        <div className="shrink-0">
          <LLMButton markdownUrl={`${page.url}.mdx`} />
        </div>
      </div>
      {method && endpoint && <DocsApi method={method} endpoint={endpoint} />}
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Mdx
          components={getMDXComponents({
            a: ({ href, ...props }) => {
              return <Link href={href} {...props} />
            },
          })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateMetadata(props: PageProps<'/[...slug]'>): Promise<Metadata> {
  const { slug = [] } = await props.params
  const page = source.getPage(slug)
  if (!page) notFound()

  const image = {
    url: ['/og', ...slug, 'image.webp'].join('/'),
    width: 1200,
    height: 630,
  }

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/${page.slugs.join('/')}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  })
}

export async function generateStaticParams() {
  return source.generateParams()
}
