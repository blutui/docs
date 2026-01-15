import { cn } from 'lib/utils'
import Link from 'next/link'

export interface CardProps {
  title?: string
  href?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function Card({ title, href, icon, children }: CardProps) {
  const baseClassName = cn(
    'card not-prose flex rounded-xl border-0 bg-zinc-900/5 p-6 ring-1 ring-zinc-900/10 transition dark:bg-white/5 dark:ring-white/10'
  )

  const titleMarkup = title && (
    <h2 className="text-base/tight font-semibold tracking-tight text-zinc-900 dark:text-white">{title}</h2>
  )

  const markup = (
    <div className="m-0 w-full font-normal text-zinc-700 dark:text-zinc-400">
      <div className="mb-2 flex items-center gap-2">
        {icon && <span className="text-black/60 opacity-60 dark:text-white/60">{icon}</span>}
        {titleMarkup}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  )

  const isExternalLink = href && href.startsWith('http')

  return href ? (
    <Link
      href={href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className={cn([baseClassName, 'cursor-pointer hover:bg-zinc-900/10 dark:hover:bg-white/10'])}
    >
      {markup}
    </Link>
  ) : (
    <div className={baseClassName}>{markup}</div>
  )
}
