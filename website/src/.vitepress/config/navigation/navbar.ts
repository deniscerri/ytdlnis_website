import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Changelogs',
    link: '/changelogs/',
  },
  {
    text: 'Docs',
    link: '/docs/guides/getting-started',
    activeMatch: '/docs/',
  },
  {
    text: 'News',
    link: '/news/',
    activeMatch: '/news/',
  },
]

export default nav
