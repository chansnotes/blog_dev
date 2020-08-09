<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <div
      class="flex flex-col mt-8 lg:mt-20 mx-auto lg:px-0 max-w-full md:max-w-postwidth"
    >
      <h1
        class="mt-0 mb-8 px-4 lg:px-0 text-4xl lg:text-5xl font-bold leading-normal tracking-postlayout wordbreaking"
      >
        {{ this.$page.title }}
      </h1>

      <div class="flex px-4 lg:px-0 items-center justify-between text-date">
        <div>
          <span class="mr-2"
            >{{ formatDate(this.$page.frontmatter.date) }}
          </span>
          &#183;
          <span class="ml-2">{{ this.$page.readingTime.text }} </span>
        </div>
      </div>
      <img
        class="mx-auto mt-8 mb-0 px-4 lg:px-0 max-w-full md:max-w-postwidth object-fill"
        :src="this.$page.frontmatter.thumbnail"
        alt=""
      />
    </div>
    <Content
      class="markdown mx-auto mt-20 mb-0 px-4 lg:px-0 pb-5 max-w-full md:max-w-postwidth text-md md:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
    />
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
    },
    closeSidebar() {
      this.isSidebarOpen = false
      this.$emit('close-sidebar', this.isSidebarOpen)
    },
    toggleSearchbar() {
      this.isSearchbarOpen = !this.isSearchbarOpen
      this.$emit('toggle-searchbar', this.isSearchbarOpen)
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
  watch: {
    isSidebarOpen: {
      immediate: true,
      handler(isSidebarOpen) {
        if (isSidebarOpen) {
          document.body.style.setProperty('overflow', 'hidden')
        } else document.body.style.removeProperty('overflow')
      },
    },
  },
  mounted() {
    console.log(this.$page)
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
.wordbreaking {
  word-break: keep-all;
}
</style>
