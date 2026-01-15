import { cn } from 'lib/utils'

type BadgeTone = 'default' | 'info' | 'success' | 'attention' | 'warning' | 'critical'

interface BadgeProps {
  tone: BadgeTone
  children: React.ReactNode
}

const classes: Record<BadgeTone, string> = {
  default: cn(
    'border-zinc-200 bg-zinc-200/20 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-700/20 dark:text-zinc-300'
  ),
  info: cn('border-transparent bg-blue-700/10 text-blue-700 dark:bg-blue-300/10 dark:text-blue-300'),
  success: cn('border-transparent bg-green-700/10 text-green-700 dark:bg-green-300/10 dark:text-green-300'),
  attention: cn('border-transparent bg-yellow-700/10 text-yellow-700 dark:bg-yellow-300/10 dark:text-yellow-300'),
  warning: cn('border-transparent bg-red-700/10 text-red-700 dark:bg-red-300/10 dark:text-red-300'),
  critical: cn(''),
}

export function Badge({ tone, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit shrink-0 items-center rounded-md border px-1.5 py-0.5 text-xs font-medium whitespace-nowrap',
        classes[tone]
      )}
      data-slot="badge"
    >
      <span>{children}</span>
    </span>
  )
}
