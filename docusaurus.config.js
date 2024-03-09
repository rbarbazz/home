// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const PROD_DOMAIN = 'www.raphaelbarbazza.com'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rbarbazz',
  favicon:
    'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>',

  // Set the production url of your site here
  url: `https://${PROD_DOMAIN}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'rbarbazz',
  projectName: 'home',

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
        pages: { routeBasePath: '/' },
        blog: {
          blogDescription: "Raph's blog",
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          editUrl: 'https://github.com/rbarbazz/home/tree/master/',
          postsPerPage: 3,
          routeBasePath: '/blog',
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
        title: 'Home',
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://journaling.rbarbazz.com',
            label: 'Journaling',
            position: 'left',
          },
          {
            href: 'https://github.com/rbarbazz',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
        additionalLanguages: ['bash', 'json', 'php', 'docker'],
      },
    }),
}

module.exports = config
