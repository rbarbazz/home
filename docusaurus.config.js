// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight')
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rbarbazz',
  tagline: 'A blog by Raphaël Barbazza',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.raphaelbarbazza.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rbarbazz', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        pages: false,
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          editUrl: 'https://github.com/rbarbazz/blog/tree/master/',
          postsPerPage: 3,
          routeBasePath: '/',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Blog',
        items: [
          {
            to: '/tags',
            label: 'Tags',
            position: 'left',
          },
          {
            href: 'https://raphaelbarbazza.com/',
            label: 'Home',
            position: 'left',
            target: '_self',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Built with Docusaurus.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
