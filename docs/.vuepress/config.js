const { description } = require('../../package')
const path = require('path')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ChansNotes',
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
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '5yGgQsz6AmtmdOtY2GraCmmslz9oVhKa_X4KLa8sl3A',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/favicons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/assets/favicons/site.webmanifest',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/assets/favicons/safari-pinned-tab.svg',
        color: '#2e5b9b',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/assets/favicons/favicon.ico',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/assets/favicons/browserconfig.xml',
      },
    ],
    ['script', { src: 'https://developers.kakao.com/sdk/js/kakao.js' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'http://chansnotes.github.io/',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    // SearchBox Configuration
    searchMaxSuggestions: 10,
    searchPlaceholder: '검색어를 입력하세요',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Categories',
        link: '/categories/',
      },
    ],
    categories: [
      {
        text: 'vue',
        link: '/categories/vue/',
        topic: '코딩/IoT',
        description:
          'Udemy 강의와 여러 문서들을 읽고 공부한 내용을 공유합니다.',
        thumbnail: '/images/vue/logo.jpeg',
        cover: '/images/cover/coding.jpg',
      },
      // {
      //   text: 'vueRTC',
      //   link: '/categories/vueRTC/',
      //   topic: '코딩/IoT',
      //   description:
      //     '미니 프로젝트로 만든 IoT 장치에 적용하기 위해 공부했었던 webRTC를 Vue에 접목시키면서 공부했던 내용을 공유합니다.',
      //   thumbnail: '/images/thumbnail/thumbnail_vuetailwind.jpeg',
      //   cover: '/images/cover/coding.jpg',
      // },
      {
        text: 'vueTailwind',
        link: '/categories/vueTailwind/',
        topic: '코딩/IoT',
        thumbnail: '/images/thumbnail/thumbnail_vuetailwind.jpeg',
        cover: '/images/cover/coding.jpg',
      },
      {
        text: 'vuePress',
        link: '/categories/vuePress/',
        topic: '코딩/IoT',
        thumbnail: '/images/thumbnail/vuepress.png',
        cover: '/images/cover/coding.jpg',
      },
      // {
      //   text: 'HBR',
      //   link: '/categories/harvard-business-review',
      //   topic: '사업/비즈니스',
      // },
      {
        text: 'Oxford Nanopore',
        link: '/categories/healthcare-nanopore/',
        topic: '바이오/헬스케어',
        description:
          '3세대 시퀀싱 기술인 나노포어 시퀀싱 기술에 대해 설명합니다.',
        thumbnail: '',
        cover: '/images/cover/sample.png',
      },
      {
        text: '스탠포드 스타트업 강의',
        link: '/categories/how-to-start-a-startup/',
        topic: '사업/비즈니스',
        description:
          'Stanford 대학교에서 진행한 <How to start a startup> 강의를 듣고 내용을 정리합니다.',
        thumbnail: '/images/thumbnail/startup.png',
        cover: '/images/cover/startup.jpg',
      },
      {
        text: '부린이 탈출기',
        link: '/categories/real-estate/',
        topic: '재테크',
        description:
          '부린이(부동산+어린이)를 탈출하기 위해, 공부한 지식들을 정리하여 공유합니다.',
        thumbnail: '/images/thumbnail/real-estate.jpeg',
        cover: '/images/cover/finance.jpeg',
      },
      {
        text: 'HBR 팟캐스트 정리',
        link: '/categories/hbr/',
        topic: '사업/비즈니스',
        description:
          '하버드 비즈니스 리뷰에서 진행하는 HBR Ideacast를 내 맘대로 골라 듣고 내용을 정리합니다.',
        thumbnail: '/images/thumbnail/hbr.jpeg',
        cover: '/images/cover/startup.jpeg',
      },
      // {
      //   text: '회고록',
      //   link: '/categories/how-to-start-a-startup/',
      //   topic: '개인사',
      // },
      // {
      //   text: '인문',
      //   link: '/categories/how-to-start-a-startup/',
      //   topic: '독서',
      // },
      // {
      //   text: '게임 리뷰',
      //   link: '/categories/game-review/',
      //   topic: '개인사',
      // },
      // {
      //   text: '가드닝',
      //   link: '/categories/how-to-start-a-startup/',
      //   topic: '농업 기술',
      // },
    ],
    quotes: [
      {
        text: '생각만 하는 자는 실행하는 자를 절대로 따라 잡을 수 없다.',
        author: '유석찬',
      },
      {
        text:
          '사람들은 거대 담론에 마음이 움직이지 않는다. 주변 얘기에 움직인다.',
        author: '작가 강원국',
      },
      {
        text: '우리는 모두 자신의 꿈을 달성할 수 있는 힘을 가지고 있다.',
        author: '<크러싱 잇!>의 저자 Gary Vaynerchuk',
      },
      {
        text:
          '짧게 써라. 그러면 읽힐 것이다. 명료하게 써라. 그러면 이해할 것이다. 그림 같이 써라. 그러면 기억 속에 머무를 것이다.',
        author: 'Joseph Pulitzer',
      },
      {
        text:
          '당신 자신이 되는 연금술이야말로 최고의 마법이자, 리더십의 가장 온전한 실현이다.',
        author: '<리부트>의 저자 Jerry Colonna',
      },
      {
        text: '진정한 신뢰는 맹신이 아니라, 앎에서 나온다.',
        author: '<사업의 철학>의 저자 Michael Gerber',
      },
      {
        text: '인생이라는 게임은 인생의 목표를 반영한다.',
        author: '<마스터 게임>의 저자 로버트 드 로프',
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
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
      },
    ],
    ['disqus', { shortname: 'chansbro' }],
    [
      '@vuepress/blog',
      {
        sitemap: {
          hostname: 'https://chansnotes.github.io/',
        },
      },
    ],
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
