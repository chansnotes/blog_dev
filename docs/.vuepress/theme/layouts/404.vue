<template>
  <div
    class="flex flex-col w-full h-full items-center justify-center content-center"
  >
    <img
      class="w-sm_article md:w-slide items-center mt-24"
      src="/images/etc/404.jpg"
      alt="404_image"
    />
    <a class="text-xs text-gray-500" href="https://www.freepik.com/vectors/web"
      >Web vector created by stories - www.freepik.com</a
    >
    <div class="mt-8 px-4 text-xl md:text-3xl">
      해당 페이지를 찾을 수 없습니다!
    </div>
    <section
      class="w-full max-w-lostList h-full mx-auto mt-16 bg-gray-100 rounded shadow"
    >
      <div class="flex py-4 px-6 items-center">
        <span class="text-base">최근 글</span>
      </div>
      <ul class="flex flex-col p-4 items-center">
        <a
          v-for="article in recommendedArticle"
          :href="article.path"
          class="flex w-full mb-1 p-2 transition duration-300 ease-in-out hover:bg-gray-200"
        >
          <div>
            <img
              v-if="article.frontmatter.thumbnail"
              class="w-24 h-24 rounded-lg"
              :src="article.frontmatter.thumbnail"
              alt="thumbnail"
            />
            <img
              v-else
              class="w-16 h-16 rounded-lg"
              src="/images/thumbnail/default-image.jpg"
              alt="thumbnail"
            />
          </div>
          <div class="flex flex-col w-3/4 ml-2 items-start justify-start">
            <span class="text-xs opacity-excerpt">
              {{ article.frontmatter.category }}</span
            >
            <p class="title-ellipsis">{{ article.frontmatter.title }}</p>
            <span class="my-auto text-xs sm:text-sm opacity-excerpt"
              >{{ formatDate(article.frontmatter.date) }} &#183;
              {{ article.readingTime.text }}</span
            >
          </div>
        </a>
      </ul>
    </section>
    <div class="my-8">
      <router-link to="/">
        <button
          class="w-full h-12 px-8 bg-personalColor rounded text-xl text-white font-bold hover:bg-blue-700 shadow"
        >
          홈으로
        </button>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer/Footer'

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
]

export default {
  components: {
    Footer,
  },
  data() {
    return {
      recommendedArticle: null,
    }
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
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
    this.recommendedArticle = this.$site.pages
      .filter(p => {
        return p.regularPath.indexOf('/categories/') >= 0
      })
      .filter(r => {
        return r.relativePath !== 'categories/README.md'
      })
      .filter(t => {
        return Object.keys(t.frontmatter).length > 1
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
  },
  mounted() {
    document.body.style.removeProperty('overflow')
  },
}
</script>
<style scoped>
.title-ellipsis {
  max-width: 480px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title-ellipsis-xs {
  max-width: 180px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
