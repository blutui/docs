import { source } from 'lib/source'
import { baseOptions } from 'lib/layout.shared'
import { DocsLayout } from 'components/layout/notebook'
import { getNavigationLinks } from 'lib/utils'

export default function Layout({ children }: LayoutProps<'/[...slug]'>) {
  const { nav, ...base } = baseOptions()
  const navigationLinks = getNavigationLinks('docs')

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'auto' }}
      tabMode="navbar"
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
        tabs: navigationLinks,
      }}
    >
      {children}
    </DocsLayout>
  )
}
