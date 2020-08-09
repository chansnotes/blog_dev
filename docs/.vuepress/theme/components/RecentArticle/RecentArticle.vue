<template>
  <div
    class="flex flex-col lg:flex-row mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-full py-12"
  >
    <!-- Left Panel -->
    <section
      id="left-panel"
      class="flex flex-col w-full lg:w-1/2 md:h-recentpost lg:h-full px-5"
    >
      <img
        class="w-full md:h-profile lg:h-half object-cover"
        src="./test.png"
        alt="chansnote"
      />
      <div class="h-full mb-8 md:mb-0 md:h-mdrecentpost lg:h-half">
        <div class="text-md md:text-lg mx-1 mt-2 opacity-excerpt">
          {{ this.firstArticle.frontmatter.category }}
        </div>
        <div
          class="title-ellipsis font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mx-1"
        >
          {{ this.firstArticle.frontmatter.title }}
        </div>
        <div class="text-xs md:text-sm mx-1 mt-2 opacity-excerpt">
          {{ this.formatDate(this.firstArticle.frontmatter.date) }} &#183;
          {{ this.firstArticle.readingTime.text }}
        </div>
        <div
          class="excerpt-ellipsis-md lg:excerpt-ellipsis-lg text-sm md:text-md mx-1 mt-2 opacity-excerpt"
        >
          {{ this.firstArticle.frontmatter.excerpt }}
        </div>
      </div>
    </section>

    <!-- Right Panel -->
    <section
      id="right-panel"
      class="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-6 w-full lg:w-1/2 h-full px-5"
    >
      <article v-for="article in topFiveArticles">
        <img
          class="w-full lg:w-sm_article sm:h-mdrecentpost lg:h-sm_article"
          src="/images/etc/quote_sky.jpg"
          alt="test"
        />
        <div class="text-md sm:text-sm mx-1 mt-2 opacity-excerpt">
          {{ article.frontmatter.category }}
        </div>
        <div
          class="title-ellipsis sm:title-ellipsis-md font-bold text-2xl sm:text-xl leading-tight mx-1"
        >
          {{ article.frontmatter.title }}
        </div>
        <div class="text-xs mx-1 mt-1 opacity-excerpt">
          {{ formatDate(article.frontmatter.date) }} &#183;
          {{ article.readingTime.text }}
        </div>
        <div
          class="excerpt-ellipsis-md mb-8 sm:mb-0 text-sm sm:text-xs mx-1 mt-2 lg:hidden opacity-excerpt"
        >
          {{ article.frontmatter.excerpt }}
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topFiveArticles: null,
      firstArticle: null,
    }
  },
  methods: {
    formatDate(date) {
      const dd = new Date(date)
      let formattedDate =
        dd.getFullYear() +
        '년 ' +
        (dd.getMonth() + 1) +
        '월 ' +
        dd.getDate() +
        '일'
      return formattedDate
    },
  },
  created() {
    // Fetch pages data from this.$site.pages
    // Filter out README pages and others by selecting '/categories/' folder pages only
    // Sort all pages by the most recent date
    // Slice out to retrieve only top 5 pages from the date-sorted pages
    this.topFiveArticles = this.$site.pages
      .filter(p => {
        return p.path.indexOf('/categories/') >= 0
      })
      .filter(r => {
        return r.relativePath !== 'categories/README.md'
      })
      .filter(t => {
        return Object.keys(t.frontmatter).length !== 0
      })
      .sort((a, b) => {
        let aDate = new Date(a.frontmatter.date).getTime()
        let bDate = new Date(b.frontmatter.date).getTime()
        let diff = aDate - bDate
        if (diff < 0) return 1
        if (diff > 0) return -1
        return 0
      })
      .slice(0, 5)

    // console.log(this.topFiveArticles)
    // Shift out the 1st element from the Array
    this.firstArticle = this.topFiveArticles.shift()
    // console.log(this.firstArticle)
  },
}
</script>

<style scoped>
.title-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title-ellipsis-md {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.excerpt-ellipsis-lg {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.excerpt-ellipsis-md {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
