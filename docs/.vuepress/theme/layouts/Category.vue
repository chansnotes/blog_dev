<template>
  <div class="w-full">
    <Navbar @toggle-sidebar="toggleSidebar" @toggle-searchbar="toggleSearchbar" />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <Quote />
    <!-- <Footer /> -->
    <Content class="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pt-8 px-5" />
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
    console.log(this.$site)
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
</style>