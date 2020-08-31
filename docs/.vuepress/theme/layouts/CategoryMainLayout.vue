<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <!-- Header Image and Title -->
    <header
      class="flex flex-col relative justify-center items-center w-full h-profile px-5 bg-cover bg-scroll"
      style="background-image: url(/images/etc/books.jpg)"
    >
      <div
        class="absolute w-full h-full top-0 left-0 bg-overlay opacity-excerpt"
      ></div>
      <div
        class="flex flex-col items-center justify-center mx-auto mb-2 px-4 lg:px-0 pb-8 max-w-full md:max-w-postwidth z-10"
      >
        <h1
          class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        >
          {{ categoryName }}
        </h1>
        <h2
          class="mt-2 text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center"
        >
          {{ categoryDescription }}
        </h2>
      </div>
    </header>
    <!-- Category Article List -->
    <!-- <ArticleList :full-list="articleList" :category-list="categoryList" /> -->
    <div
      class="flex flex-col mx-auto py-8 mb-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-full"
    >
      <div class="flex w-full px-4 pb-8">
        <button
          @click="sortArticle"
          class="inline-flex pl-2 pr-3 py-1 ml-auto bg-gray-200 hover:bg-error rounded"
        >
          <svg
            stroke-width="0"
            viewBox="0 0 24 24"
            data-testid="arrow"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 inline fill-current mr-1 text-blue-600 transition-all duration-150 ease-in"
            :style="sortArrowDirection"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
          <span>{{ sortText }}</span>
        </button>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
      >
        <div
          v-for="article in articleList"
          class="h-categoryList border border-hr"
        >
          <a :href="article.path">
            <img
              v-if="article.frontmatter.thumbnail"
              class="w-full h-topicImage object-cover cursor-pointer"
              :src="article.frontmatter.thumbnail"
              alt=""
              style="background-origin: border-box!important;"
            />
            <img
              v-else
              class="w-full h-topicImage object-cover cursor-pointer"
              src="/images/etc/sample.png"
              alt=""
              style="background-origin: border-box!important;"
            />
          </a>
          <div class="flex flex-col p-4">
            <a :href="article.path">
              <h4 class="title-ellipsis font-bold text-base mb-1">
                {{ article.frontmatter.title }}
              </h4>
              <div
                class="excerpt-ellipsis text-sm mt-1 opacity-excerpt cursor-pointer"
              >
                {{ article.frontmatter.excerpt }}
              </div>
              <div class="text-xs md:text-sm mt-4 opacity-excerpt">
                {{ formatDate(article.frontmatter.date) }} &#183;
                {{ article.readingTime.text }}
              </div>
            </a>
          </div>
        </div>
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
      articleList: null,
      categoryName: null,
      categoryDescription: null,
      isDescending: false,
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
    sortArticle() {
      this.isDescending = !this.isDescending
      if (this.isDescending == true) {
        this.articleList.sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime()
          let bDate = new Date(b.frontmatter.date).getTime()
          let diff = aDate - bDate
          if (diff < 0) return 1
          if (diff > 0) return -1
          return 0
        })
      } else if (this.isDescending == false) {
        this.articleList.sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime()
          let bDate = new Date(b.frontmatter.date).getTime()
          let diff = aDate - bDate
          if (diff > 0) return 1
          if (diff < 0) return -1
          return 0
        })
      }
    },
  },
  computed: {
    sortText() {
      if (this.isDescending == true) {
        return '내림차순'
      }
      return '오름차순'
    },
    sortArrowDirection() {
      if (this.isDescending == true) {
        return 'transform: rotate(180deg);'
      }
    },
  },
  mounted() {},
  created() {
    const currentCategory = this.$site.themeConfig.categories.filter(p => {
      return p.link == this.$page.path
    })

    this.categoryName = currentCategory[0].text
    this.categoryDescription = currentCategory[0].description

    this.articleList = this.$site.pages
      .filter(p => {
        return p.frontmatter.category == this.categoryName
      })
      .sort((a, b) => {
        let aDate = new Date(a.frontmatter.date).getTime()
        let bDate = new Date(b.frontmatter.date).getTime()
        let diff = aDate - bDate
        if (diff > 0) return 1
        if (diff < 0) return -1
        return 0
      })

    // console.log(this.articleList)
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
.title-ellipsis {
  max-width: 500px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.excerpt-ellipsis {
  max-width: 500px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
