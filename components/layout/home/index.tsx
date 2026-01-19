import type { ComponentProps } from 'react'
import { type BaseLayoutProps, type NavOptions } from '../shared'
import { Header, HomeMain } from './client'

export interface HomeLayoutProps extends BaseLayoutProps {
  nav?: Partial<
    NavOptions & {
      /**
       * Open mobile menu when hovering the trigger
       */
      enableHoverToOpen?: boolean
    }
  >
}

export function HomeLayout(props: HomeLayoutProps & ComponentProps<'main'>) {
  const { nav = {}, links, githubUrl, i18n, themeSwitch = {}, searchToggle, ...rest } = props

  return (
    <HomeMain {...rest}>
      {nav.enabled !== false &&
        (nav.component ?? (
          <Header
            links={links}
            nav={nav}
            themeSwitch={themeSwitch}
            searchToggle={searchToggle}
            i18n={i18n}
            githubUrl={githubUrl}
          />
        ))}
      {props.children}
    </HomeMain>
  )
}
