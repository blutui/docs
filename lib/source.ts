import { type InferMetaType, type InferPageType, loader } from 'fumadocs-core/source'
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons'
import { docs } from 'fumadocs-mdx:collections/server'

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
