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
          <span class="mr-2 text-sm md:text-base"
            >{{ formatDate(this.$page.frontmatter.date) }}
          </span>
          &#183;
          <span class="ml-2 text-sm md:text-base"
            >{{ this.$page.readingTime.text }}
          </span>
        </div>
      </div>
      <img
        class="mx-auto mt-8 mb-0 px-4 lg:px-0 max-w-full md:max-w-postwidth object-fill"
        :src="this.$page.frontmatter.thumbnail"
        alt=""
      />
    </div>
    <Content
      class="markdown mx-auto mt-20 mb-0 px-4 lg:px-0 pb-12 max-w-full md:max-w-postwidth text-sm md:text-base lg:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
    />
    <div
      class="mx-auto mt-8 px-4 lg:px-0 max-w-full md:max-w-postwidth object-fill"
    >
      <div class="flex flex-col md:flex-row items-center mb-12">
        <a
          v-if="previousArticle"
          :href="previousArticle.path"
          class="flex items-center w-full md:w-slide bg-gray-100 h-16 rounded px-4 mb-4 md:mb-0 cursor-pointer hover:bg-gray-200"
        >
          <svg
            stroke-width="0"
            viewBox="0 0 24 24"
            data-testid="arrow"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 inline fill-current mr-1 text-blue-600 transition-all duration-150 ease-in"
            style="transform: rotate(270deg)"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
          <div class="flex flex-col">
            <div class="text-xs font-bold">이전글</div>
            <div class="font-bold title-ellipsis">
              {{ previousArticle.title }}
            </div>
          </div>
        </a>
        <div v-else class="w-full md:w-slide"></div>
        <a
          v-if="nextArticle"
          :href="nextArticle.path"
          class="flex justify-end items-center w-full md:w-slide bg-gray-100 h-16 rounded md:ml-12 px-4 cursor-pointer hover:bg-gray-200"
        >
          <div class="flex flex-col">
            <div class="ml-auto text-xs font-bold">다음글</div>
            <div class="font-bold title-ellipsis">{{ nextArticle.title }}</div>
          </div>
          <svg
            stroke-width="0"
            viewBox="0 0 24 24"
            data-testid="arrow"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 inline fill-current mr-1 text-blue-600 transition-all duration-150 ease-in"
            style="transform: rotate(90deg)"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
        </a>
      </div>
      <Disqus />
    </div>

    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Searchbar from '../components/Nav/Searchbar'
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
      currentCategory: null,
      currentIndex: null,
      postTitle: null,
      nextArticle: null,
      previousArticle: null,
    }
  },
  components: {
    Navbar,
    Sidebar,
    Searchbar,
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
  },
  created() {
    this.currentCategory = this.$page.frontmatter.category
    this.postTitle = this.$page.title
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
      .filter(i => {
        return i.frontmatter.category === this.currentCategory
      })
      .sort((a, b) => {
        let aDate = new Date(a.frontmatter.date).getTime()
        let bDate = new Date(b.frontmatter.date).getTime()
        let diff = aDate - bDate
        if (diff < 0) return 1
        if (diff > 0) return -1
        return 0
      })

    this.currentIndex = this.articleList.findIndex(x => {
      return x.title == this.postTitle
    })

    this.nextArticle = this.articleList[this.currentIndex - 1]
    this.previousArticle = this.articleList[this.currentIndex + 1]
  },
  mounted() {
    document.body.style.removeProperty('overflow')
  },
}
</script>

<style scoped>
.wordbreaking {
  word-break: keep-all;
}
.title-ellipsis {
  max-width: 280px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.title-ellipsis-small {
  max-width: 80%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
