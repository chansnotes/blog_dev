const { description } = require('../../package')
const path = require('path')

console.log(path.resolve(__dirname))

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '찬스브로의 기록노트',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Categories',
        link: '/categories/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    categories: [
      {
        text: 'books',
        link: '/categories/books/',
      },
      {
        text: 'business',
        link: '/categories/business/',
      },
      {
        text: 'vue',
        link: '/categories/vue/',
      },
      {
        text: 'hbr',
        link: '/categories/hbr',
      },
      {
        text: 'healthcare',
        link: '/categories/healthcare/',
      },
      {
        text: 'technology',
        link: '/categories/technology/',
      },
    ],
  },
  extend: '@vuepress/theme-default',
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-reading-time',

    // [
    //   '@vuepress/blog',
    //   {
    //     directories: [
    //       {
    //         id: 'categories',
    //         dirname: 'categories',
    //         path: '/',
    //         pagination: {
    //           lengthPerPage: 2,
    //         },
    //       },
    //     ],
    //   },
    // ],
  ],
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, 'images/'),
        '@static': path.resolve(__dirname, 'assets/'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
}
