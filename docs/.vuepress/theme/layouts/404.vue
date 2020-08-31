<template>
  <div
    class="flex flex-col w-full h-screen items-center justify-center content-center"
  >
    <img
      class="w-sm_article md:w-slide items-center"
      src="/images/etc/404.jpg"
      alt="404_image"
    />
    <a class="text-xs text-gray-500" href="https://www.freepik.com/vectors/web"
      >Web vector created by stories - www.freepik.com</a
    >
    <div class="mt-8 px-4 text-xl md:text-3xl">
      해당 페이지를 찾을 수 없습니다!
    </div>
    <div class="mt-8">
      <router-link to="/">
        <button
          class="w-full h-12 px-8 bg-personalColor rounded text-xl text-white font-bold hover:bg-blue-700 shadow"
        >
          홈으로
        </button>
      </router-link>
    </div>
    <!-- 이런 글은 어때요? -->
    <!-- <section class="w-full h-quote mx-auto px-5 mt-10 bg-error">
      {{ this.recommendedArticle }}
    </section> -->
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
]

export default {
  data() {
    return {
      recommendedArticle: null,
    }
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
  // created() {
  //   this.recommendedArticle = this.$site.pages
  //     .filter(p => {
  //       return p.path.indexOf('/categories/') >= 0
  //     })
  //     .filter(t => {
  //       return Object.keys(t.frontmatter).length > 1
  //     })
  //     .sort((a, b) => {
  //       let aDate = new Date(a.frontmatter.date).getTime()
  //       let bDate = new Date(b.frontmatter.date).getTime()
  //       let diff = aDate - bDate
  //       if (diff < 0) return 1
  //       if (diff > 0) return -1
  //       return 0
  //     })
  //     .slice(3)
  //   console.log(this.recommendedArticle)
  // },
}
</script>
