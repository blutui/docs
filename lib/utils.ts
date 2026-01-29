import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navigationData = [
  {
    title: 'Developers',
    url: '/docs',
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Console',
    url: '/console',
  },
  {
    title: 'Guides',
    url: '/guides/introduction',
  },
  {
    title: 'Changelog',
    url: '/changelog',
  },
  {
    title: 'References',
    url: '/api-reference',
    items: [
      {
        title: 'API Reference',
        url: '/api-reference',
      },
      {
        title: 'Canvas',
        url: '/canvas',
      },
    ],
  },
]

export function getNavigationLinks(type: 'home' | 'docs') {
  return navigationData.map((item) => {
    const mappedItem: any = {
      url: item.url,
    }

    if (type === 'home') {
      mappedItem.text = item.title
    } else {
      mappedItem.title = item.title
    }

    if (item.items) {
      mappedItem.items = item.items.map((subItem) => ({
        url: subItem.url,
        [type === 'home' ? 'text' : 'title']: subItem.title,
      }))
    }

    return mappedItem
  })
}
