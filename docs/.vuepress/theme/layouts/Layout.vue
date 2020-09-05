<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <Quote :quotes-list="quotesList" />
    <RecentArticle :top-five-articles="topFiveArticles" />
    <ArticleList :full-list="articleList" :category-list="categoryList" />
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
      articleList: null,
      topFiveArticles: null,
      quotesList: null,
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
  },
  mounted() {
    document.body.style.removeProperty('overflow')

    // console.log(this.$site)
  },
  created() {
    this.articleList = this.$site.pages
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

    this.topFiveArticles = this.articleList.slice(0, 5)
    this.articleList = this.articleList.slice(5)
    this.categoryList = this.$site.themeConfig.categories
    this.quotesList = this.$site.themeConfig.quotes
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
</style>
