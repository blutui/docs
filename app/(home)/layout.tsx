import { HomeLayout } from 'components/layout/home'
import { baseOptions } from 'lib/layout.shared'
import { getNavigationLinks } from 'lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { ...base } = baseOptions()
  const navigationLinks = getNavigationLinks('home')

  return (
    <HomeLayout {...base} links={navigationLinks}>
      {children}
    </HomeLayout>
  )
}
