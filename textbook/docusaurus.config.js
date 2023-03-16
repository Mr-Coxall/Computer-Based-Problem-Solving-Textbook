// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Computer Based Problem Solving',
  tagline: '“Everyone in this country should learn how to program because it teaches you how to think” – Steve Jobs.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mr-coxall.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Computer-Based-Problem-Solving-Textbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mr-Coxall', // Usually your GitHub org/user name.
  projectName: 'Computer-Based-Problem-Solving-Textbook', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/mr-coxall/Computer-Based-Problem-Solving-Textbook/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mr-coxall/Computer-Based-Problem-Solving-Textbook/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home logo',
          src: 'img/coding.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Textbook'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Textbook',
                to: '/docs/intro'
              },
              {
                label: 'Code Examples',
                href: 'https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook/tree/main/code-examples'
              }
            ]
          },
          {
            title: 'Course Web Sites',
            items: [
              {
                label: 'ICS2O',
                href: 'https://ics2o.mths.ca'
              },
              {
                label: 'ICS3U',
                href: 'http://ics3u.mths.ca'
              },
              {
                label: 'ICS4U',
                href: 'http://ics4u.mths.ca'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mr Coxall, Computer Based Problem Solving.`
      },
      prism: {
        /* theme: lightCodeTheme, */
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'swift']
      }
    })
}

module.exports = config
