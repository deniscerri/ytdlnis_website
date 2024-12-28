import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/docs/': defaultSidebar(),
  '/yt-dlp/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'YT-DLP',
          link: '/yt-dlp/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
      ],
    },
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'General', link: '/docs/faq/general' },
        { text: 'Revanced Integration', link: '/docs/faq/revanced' },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
            {
              text: 'Diagnosis',
              link: '/docs/guides/troubleshooting/diagnosis',
            },
          ],
        },
        { text: 'Home', link: '/docs/guides/home' },
        { text: 'Download Card', link: '/docs/guides/download-card' },
        { text: 'Downloads', link: '/docs/guides/downloads' },
        { text: 'Download Queue', link: '/docs/guides/download-queue' },
        { text: 'Observe Sources', link: '/docs/guides/observe-sources' },
        { text: 'Command Templates', link: '/docs/guides/command-templates' },
        { text: 'Filename Templates', link: '/docs/guides/filename-templates' },
        { text: 'SponsorBlock', link: '/docs/guides/sponsorblock' },
        { text: 'Subtitle Languages', link: '/docs/guides/subtitle-languages' },
        { text: 'Extra Commands', link: '/docs/guides/extra-commands' },
        { text: 'Cookies', link: '/docs/guides/cookies' },
        { text: 'Terminal', link: '/docs/guides/terminal' },
        {
          text: 'Settings',
          link: '/docs/guides/settings/',
          collapsed: true,
          items: [
            { text: 'General', link: '/docs/guides/settings/general' },
            { text: 'Folders', link: '/docs/guides/settings/folders' },
            { text: 'Downloads', link: '/docs/guides/settings/downloads' },
            { text: 'Processing', link: '/docs/guides/settings/processing' },
            { text: 'Updating', link: '/docs/guides/settings/updating' },
            { text: 'Advanced', link: '/docs/guides/settings/advanced' },
          ],
        },
        { text: 'Backups', link: '/docs/guides/backups' },
      ],
    },
  ]
}

export default sidebar
