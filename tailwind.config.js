const tailwindMdBase = require('@geoffcodesthings/tailwind-md-base')
const defaultTheme = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig')
).theme

module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      width: {
        side: '320px',
        sideprofile: '344px',
        avatar: '150px',
        slide: '360px',
        sm_article: '280px',
        articlelistimage: '180px',
        articlelistview: '680px',
        articlelistwidth: '460px',
        smallimage: '80px',
      },
      maxWidth: {
        articlelistview: '680px',
        articlelistimage: '180px',
        postwidth: '768px',
        about: '450px',
        lostList: '520px',
      },
      height: {
        half: '50%',
        profile: '440px',
        avatar: '150px',
        search: '100px',
        recentpost: '680px',
        quote: '360px',
        sm_article: '140px',
        articlelistimage: '135px',
        footer: '200px',
        mdrecentpost: '220px',
        smallimage: '72px',
        topicList: '280px',
        topicImage: '180px',
        categoryList: '340px',
      },
      colors: {
        search: '#e8ebed',
        input: '#dee2e6',
        quote: '#363636',
        post: '#222426',
        date: '#495057',
        error: '#fafafa',
        personalColor: '#0D2F59',
        personalColor2: '#A4778B',
        personalColor3: '#D4AA7D',
        hr: '#dedede',
        overlay: '#212529',
      },
      cursor: {
        grab: 'grab',
      },
      inset: {
        zero: '0%',
        one: '33.33%',
        two: '66.66%',
        three: '100%',
        four: '133.33%',
      },
      opacity: {
        excerpt: '0.54',
        '70': '.7',
        '90': '.9',
        '98': '.98',
      },
      letterSpacing: {
        postlayout: '-.004em',
      },
      lineHeight: {
        'extra-relaxed': '1.7',
      },
      fontSize: {
        '7xl': '6rem',
      },
    },
    // Markdown Style Configuration
    // Using: @geoffcodesthings/tailwind-md-base
    markdownBase: {
      wrapperClass: 'markdown',
      h1: {
        fontSize: '2.5rem',
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      h2: {
        fontSize: '2rem',
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      h3: {
        fontSize: '1.5rem',
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      h4: {
        fontSize: defaultTheme.fontSize.lg,
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      h5: {
        fontSize: defaultTheme.fontSize.base,
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      h6: {
        fontSize: defaultTheme.fontSize.sm,
        fontWeight: defaultTheme.fontWeight.bold,
        marginBottom: defaultTheme.spacing[4],
      },

      p: {
        // marginTop: 0,
        marginBottom: defaultTheme.spacing[4],
        mark: {
          backgroundColor: 'rgb(234,228,242)',
        },
      },

      a: {
        color: 'rgb(75, 145, 214)',
      },

      blockquote: {
        borderLeftWidth: defaultTheme.borderWidth[4],
        borderLeftColor: 'rgb(75, 145, 214)',
        fontWeight: defaultTheme.fontWeight.normal,
        marginTop: defaultTheme.spacing[8],
        marginBottom: defaultTheme.spacing[8],
        paddingLeft: defaultTheme.spacing[8],
        paddingRight: defaultTheme.spacing[4],
        paddingTop: defaultTheme.spacing[4],
        paddingBottom: defaultTheme.spacing[4],
        color: 'rgb(33,37,41)',
        backgroundColor: 'rgb(248,249,250)',
        fontSize: defaultTheme.fontSize.lg,
        fontStyle: 'normal',
        borderRadius: 0,
        p: {
          margin: 0,
        },
        h1: {
          marginBottom: 0,
        },
        h2: {
          marginBottom: 0,
        },
        h3: {
          marginBottom: 0,
        },
        h4: {
          marginBottom: 0,
        },
      },

      hr: {
        borderTopWidth: '0px',
        borderBottomWidth: defaultTheme.borderWidth.default,
        borderColor: '#dedede',
        marginTop: defaultTheme.spacing[8],
        marginBottom: defaultTheme.spacing[8],
      },

      ul: {
        listStyleType: defaultTheme.listStyleType.disc,
        listStylePosition: 'initial',
        marginTop: defaultTheme.spacing[4],
        marginBottom: defaultTheme.spacing[4],
        paddingLeft: '40px',
        ul: {
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: '40px',
          listStyleType: 'circle !important',
          ul: {
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: '40px',
            listStyleType: 'square !important',
          },
        },
      },

      ol: {
        listStyleType: defaultTheme.listStyleType.decimal,
        listStylePosition: 'initial',
        marginTop: defaultTheme.spacing[4],
        marginBottom: defaultTheme.spacing[4],
        paddingLeft: '40px',
        ol: {
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: '40px',
          listStyleType: 'upper-roman !important',
          ol: {
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: '40px',
            listStyleType: 'lower-roman !important',
          },
        },
      },

      strong: {
        fontWeight: defaultTheme.fontWeight.bold,
      },

      table: {
        minWidth: '40%',
        maxWidth: '100%',
        borderCollapse: 'collapse',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(73, 80, 87)',
        fontSize: '0.875rem',
        display: 'table',
        tr: {
          borderTopWidth: defaultTheme.borderWidth.default,
          borderColor: defaultTheme.colors.gray[700],
          backgroundColor: defaultTheme.colors.white,
          margin: 0,
          padding: 0,
          '&:nth-child(2n)': {
            backgroundColor: defaultTheme.colors.gray[100],
          },
          th: {
            fontWeight: defaultTheme.fontWeight.bold,
            borderWidth: defaultTheme.borderWidth.default,
            borderColor: defaultTheme.colors.gray[700],
            borderBottom: '4px solid rgb(73, 80, 87)',
            textAlign: 'left',
            margin: 0,
            padding: '6px 13px',
            '&:first-child': {
              marginTop: 0,
            },
            '&:last-child': {
              marginBottom: 0,
            },
          },
          td: {
            borderWidth: defaultTheme.borderWidth.default,
            borderColor: defaultTheme.colors.gray[700],
            textAlign: 'left',
            margin: 0,
            padding: '6px 13px',
            '&:first-child': {
              marginTop: 0,
            },
            '&:last-child': {
              marginBottom: 0,
            },
          },
        },
      },
      img: {
        maxWidth: '100%',
        margin: '3rem auto',
        display: 'block',
      },
    },
  },
  variants: {},
  plugins: [tailwindMdBase()],
}
