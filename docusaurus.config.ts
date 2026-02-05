import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aerion',
  tagline: 'An Open Source Lightweight E-Mail Client',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://aerion.example.com',
  baseUrl: '/',

  organizationName: 'hkdb',
  projectName: 'aerion',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hkdb/aerion/tree/main/aerion-docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/aerion-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Aerion',
      logo: {
        alt: 'Aerion Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/hkdb/aerion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Features',
              to: '/docs/features/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hkdb/aerion',
            },
            {
              label: 'Issues',
              href: 'https://github.com/hkdb/aerion/issues',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Use',
              to: '/terms',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Buy Me a Coffee',
              href: 'https://www.buymeacoffee.com/3dfosi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aerion. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
