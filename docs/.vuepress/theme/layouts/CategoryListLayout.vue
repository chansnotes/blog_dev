<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <div
      class="mx-auto px-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
    >
      <header class="my-5 py-5">
        <h1 class="font-bold text-3xl text-gray-800">카테고리 분류</h1>
      </header>

      <div v-for="topic in topicList" class="flex flex-col">
        <section class="my-8">
          <header class="flex border-b border-hr mb-6">
            <span
              class="font-semibold text-xl text-gray-800 pb-5 border-b border-black"
            >
              {{ topic }}
            </span>
          </header>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xs:mx-4 sm:mx-8"
          >
            <div
              v-for="category in assignCategory(topic, categoryList)"
              class="h-topicList border border-hr"
            >
              <div class="flex h-search px-5 items-center">
                <a
                  class="block font-semibold text-lg cursor-pointer"
                  :href="category.link"
                  >{{ category.text }}</a
                >
                <button
                  class="flex justify-center items-center w-8 h-8 ml-auto cursor-pointer border border-gray-600 rounded-full"
                >
                  <a :href="category.link">
                    <svg
                      id="Layer"
                      class="w-6 h-6 text-gray-700 fill-current"
                      enable-background="new 0 0 64 64"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"
                      />
                    </svg>
                  </a>
                </button>
              </div>
              <a :href="category.link">
                <img
                  v-if="category.thumbnail"
                  class="w-full h-topicImage object-cover cursor-pointer pb-1"
                  :src="category.thumbnail"
                  alt=""
                  style="background-origin: border-box!important;"
                />
                <img
                  v-else
                  class="w-full h-topicImage object-cover cursor-pointer pb-1"
                  src="/images/thumbnail/default-image.png"
                  alt=""
                  style="background-origin: border-box!important;"
                />
              </a>
            </div>
            <!-- <div class="h-topicList border border-hr"></div>
            <div class="h-topicList border border-hr"></div> -->
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Searchbar from '../components/Nav/Searchbar'
import SwiperComponent from '../components/Carousel/Swiper'
import Quote from '../components/Quote/Quote'
import RecentArticle from '../components/RecentArticle/RecentArticle'
import ArticleList from '../components/ArticleList/ArticleList'
import Footer from '../components/Footer/Footer'

export default {
  data() {
    return {
      isSidebarOpen: false,
      isSearchbarOpen: false,
      topicList: null,
      categoryList: null,
    }
  },
  components: {
    Navbar,
    Sidebar,
    Searchbar,
    SwiperComponent,
    Quote,
    RecentArticle,
    ArticleList,
    Footer,
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
      document.body.style.setProperty('overflow', 'hidden')
    },
    closeSidebar() {
      this.isSidebarOpen = false
      this.$emit('close-sidebar', this.isSidebarOpen)
      document.body.style.removeProperty('overflow')
    },
    toggleSearchbar() {
      this.isSearchbarOpen = !this.isSearchbarOpen
      this.$emit('toggle-searchbar', this.isSearchbarOpen)
    },
    assignCategory(topic, category) {
      return category.filter(p => {
        return p.topic == topic
      })
    },
  },
  mounted() {
    document.body.style.removeProperty('overflow')

    // console.log(this.$site)
  },
  created() {
    this.topicList = [
      ...new Set(this.$site.themeConfig.categories.map(x => x.topic)),
    ].sort((a, b) => {
      // 오름차순 정렬
      return a < b ? -1 : a > b ? 1 : 0
    })

    this.categoryList = this.$site.themeConfig.categories
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
</style>
