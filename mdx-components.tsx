import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import * as icons from 'lucide-react'
import * as StepsComponents from 'fumadocs-ui/components/steps'
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock'
import { Callout } from 'fumadocs-ui/components/callout'

import * as BadgeComponents from 'components/badge'
import * as ChangelogComponents from 'components/changelog'
import * as ParameterComponents from 'components/parameter'
import * as PromptBlockComponents from 'components/prompt-block'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    pre: ({ ref: _ref, className, ...props }) => (
      <CodeBlock className="shadow-none" {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    Callout: ({ ref: _ref, className, ...props }) => <Callout className="shadow-none" {...props} />,
    ...BadgeComponents,
    ...ChangelogComponents,
    ...ParameterComponents,
    ...StepsComponents,
    ...PromptBlockComponents,
    ...components,
  }
}
