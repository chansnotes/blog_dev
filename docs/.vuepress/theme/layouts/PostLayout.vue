<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <Toast :showToast="showToast" :toastMessage="toastMessage" />
    <div
      class="flex flex-col mt-8 lg:mt-20 mx-auto lg:px-0 max-w-full md:max-w-postwidth"
    >
      <h1
        class="mt-0 mb-8 px-4 lg:px-0 text-4xl lg:text-5xl font-bold leading-normal tracking-postlayout wordbreaking"
      >
        {{ this.$page.title }}
      </h1>

      <div
        class="flex flex-col px-4 lg:px-0 items-start justify-center text-date"
      >
        <div>
          <span class="mr-2 text-sm md:text-base"
            >{{ formatDate(this.$page.frontmatter.date) }}
          </span>
          &#183;
          <span class="ml-2 text-sm md:text-base"
            >{{ this.$page.readingTime.text }}
          </span>
        </div>
        <div class="flex items-center justify-start mt-4">
          <!-- URL 공유하기 버튼 -->
          <button
            :disabled="shareURLButton"
            @click="shareURL"
            class="flex items-center justify-center p-2 border border-solid border-gray-500 text-gray-600 bg-white rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124
			c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90
			c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59
			C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806
			l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90
			C496,372.371,455.629,332,406,332z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </button>
          <!-- 카카오 공유하기 버튼 -->
          <button
            @click="shareKaKaoTalk"
            class="flex items-center justify-center p-2 ml-4 border border-solid border-gray-500 text-gray-600 bg-white rounded-full cursor-pointer hover:border-yellow-500 hover:text-yellow-500"
          >
            <svg
              id="Bold"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9.462 9.306-.692 1.951h1.383z" />
              <path
                d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"
              />
            </svg>
          </button>
        </div>
      </div>
      <img
        class="mx-auto mt-8 mb-0 px-4 lg:px-0 max-w-full md:max-w-postwidth object-fill"
        :src="this.$page.frontmatter.thumbnail"
        alt=""
      />
    </div>
    <Content
      class="markdown mx-auto mt-16 mb-0 px-4 lg:px-0 pb-12 max-w-full md:max-w-postwidth text-sm md:text-base lg:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
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
import Toast from '../components/Toast/Toast'
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
      showToast: false,
      shareURLButton: false,
      toastMessage: '주소가 성공적으로 복사되었습니다.',
      kakaoInitializeCounter: false,
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
    Toast,
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
    shareURL() {
      const _this = this // Need to declare it for setTimeout function; Scope issue
      const tempText = document.createElement('textarea')
      this.shareURLButton = true

      tempText.value = window.location.href
      document.body.appendChild(tempText)
      tempText.select()
      document.execCommand('copy')
      document.body.removeChild(tempText)
      this.showToast = true
      setTimeout(function() {
        _this.showToast = false
        _this.shareURLButton = false
      }, 3200)
    },
    shareKaKaoTalk() {
      const siteURL = 'https://chansnotes.github.io'

      if (!this.kakaoInitializeCounter) {
        Kakao.init('b966c5d6c9955798791f6e1d094ceb59')
        this.kakaoInitializeCounter = true
      }

      Kakao.Link.sendCustom({
        templateId: 37392,
        templateArgs: {
          title: this.$page.title,
          description: this.$page.frontmatter.excerpt,
          image: siteURL.concat(this.$page.frontmatter.thumbnail),
          link: this.$page.path.substring(1),
        },
      })
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
