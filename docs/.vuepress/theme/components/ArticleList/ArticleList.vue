<template>
  <div
    class="flex mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-full mt-0 md:mt-8"
  >
    <div class="flex flex-col w-full lg:max-w-articlelistview h-full lg:pr-6">
      <article
        v-for="article in sortedList"
        class="flex max-w-full w-full mb-8 p-5 animate_fadeinup"
      >
        <div
          class="flex flex-col w-full lg:w-articlelistwidth h-articlelistimage mr-6"
        >
          <div class="text-sm mx-1 opacity-excerpt">
            {{ article.frontmatter.category }}
          </div>
          <a :href="article.path">
            <div
              class="title-ellipsis font-bold text-lg md:text-2xl leading-tight mx-1 cursor-pointer"
            >
              {{ article.frontmatter.title }}
            </div>
          </a>
          <div class="text-xs md:text-sm mx-1 mt-1 opacity-excerpt">
            {{ formatDate(article.frontmatter.date) }} &#183;
            {{ article.readingTime.text }}
          </div>
          <a :href="article.path">
            <div
              class="excerpt-ellipsis text-sm mx-1 mt-1 opacity-excerpt cursor-pointer"
            >
              {{ article.frontmatter.excerpt }}
            </div>
          </a>
        </div>
        <div
          class="flex flex-col h-articlelistimage justify-center items-center xs:flex-none"
        >
          <div
            class="w-smallimage h-half xs:w-articlelistimage xs:h-full cursor-pointer"
          >
            <a :href="article.path">
              <img
                v-if="article.frontmatter.thumbnail"
                class="w-full h-full"
                :src="article.frontmatter.thumbnail"
                alt="thumbnail"
              />
              <img
                v-else
                class="w-full h-full"
                src="/images/thumbnail/default-image.png"
                alt="thumbnail"
              />
            </a>
          </div>
        </div>
      </article>
      <div v-if="isLoading" class="flex justify-center items-center">
        <Loader :size="24" :color="'red'" :intensity="300" />
      </div>
    </div>
    <!-- Sidebar Container -->
    <aside class="hidden lg:flex lg:flex-col w-sideprofile h-full px-3 mb-24">
      <!-- Author Profile Component -->
      <div class="flex flex-col px-4 mb-4 items-center h-profile">
        <div class="title-block-wrap mb-8">
          <span class="font-bold text-sm px-2 py-1 border border-gray-300"
            >글쓴이</span
          >
        </div>
        <div class="block w-auto h-auto">
          <img
            class="w-32 h-32 rounded-full shadow-inner"
            src="/images/etc/me.jpeg"
            alt="chansnote"
          />
        </div>
        <div class="flex flex-col mt-5 items-center">
          <span class="font-bold text-base"
            >{{ $site.title }} (Seokchan Yoo)</span
          >
          <span class="text-xs mt-1 text-gray-700"
            >사업기획자 &#183; 바이오 엔지니어</span
          >
          <span class="text-xs mt-4 opacity-excerpt">
            헬스케어 / 농업기술 / IT기술에 관심이 많은 엔지니어이자 유탄이의
            큰형님
          </span>

          <a
            href="mailto:stargate0609@gmail.com"
            class="inline-flex justify-center items-center w-full h-12 mt-4 bg-personalColor rounded text-white hover:bg-blue-800 shadow"
          >
            <svg
              class="fill-current w-5 h-8 mr-2"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487
			c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626
			c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761
			l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761
			c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046
			c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367
			c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g /></svg
            >메일 보내기
          </a>
          <!-- Container for SNS icons -->
          <div class="flex w-full justify-between px-5 mt-8">
            <!-- Github Icon -->
            <a href="https://github.com/chansnotes">
              <svg
                id="regular"
                class="fill-current w-6 h-6 mr-4 hover:text-gray-500"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"
                />
              </svg>
            </a>
            <!-- LinkedIn Icon -->
            <a href="https://www.linkedin.com/in/seokchan-yoo-7553a7193/">
              <svg
                id="regular"
                class="fill-current w-6 h-6 mr-4 hover:text-gray-500"
                enable-background="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.59 24c.103 0 4.762-.001 4.66-.001.414 0 .75-.336.75-.75-.35-7.857 1.842-16.148-6.338-16.148-1.573 0-2.826.537-3.729 1.247 0-1.461-1.579-.653-5.224-.87-.414 0-.75.336-.75.75.302 14.166-.674 15.771.75 15.771h4.66c1.353 0 .492-1.908.75-8.188 0-2.594.75-3.102 2.046-3.102 1.434 0 1.675.996 1.675 3.228.257 6.167-.598 8.063.75 8.063zm-2.425-12.791c-4.491 0-3.546 4.938-3.546 11.29h-3.16v-13.521h2.974v1.298c0 .72 1.097 1.074 1.479.35.492-.934 1.77-2.025 3.75-2.025 3.527 0 4.838 1.733 4.838 6.396v7.503h-3.16c0-7.144.756-11.291-3.175-11.291z"
                />
                <path
                  d="m1.122 7.479c-1.42 0-.448 1.585-.75 15.771 0 .414.336.75.75.75h4.665c1.42 0 .448-1.585.75-15.771 0-1.295-1.881-.531-5.415-.75zm3.915 15.021h-3.165v-13.521h3.165z"
                />
                <path
                  d="m3.452 0c-4.576 0-4.548 6.929 0 6.929 4.545 0 4.581-6.929 0-6.929zm0 5.429c-2.568 0-2.592-3.929 0-3.929 2.597 0 2.564 3.929 0 3.929z"
                />
              </svg>
            </a>
            <!-- RSS Icon -->
            <svg
              id="regular"
              class="fill-current w-6 h-6 hover:text-gray-500"
              enable-background="new 0 0 24 24"
              height="512"
              viewBox="0 0 24 24"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m3.966 23.975c1.97 0 3.963-1.353 3.963-3.939s-1.995-3.939-3.966-3.939c-2.12-.001-3.963 1.483-3.963 3.939 0 2.412 1.802 3.939 3.966 3.939zm-.003-6.379c1.228 0 2.466.754 2.466 2.439s-1.236 2.439-2.463 2.439c-1.228 0-2.466-.754-2.466-2.439 0-1.538 1.082-2.439 2.463-2.439z"
              />
              <path
                d="m10.714 23.25c0 .414.336.75.75.75h4.285c.414 0 .75-.336.75-.75 0-8.684-7.065-15.75-15.749-15.75-.415 0-.75.337-.75.75v4.287c0 .414.336.75.75.75 5.494 0 9.964 4.469 9.964 9.963zm-9.214-14.23c7.261.379 13.101 6.22 13.479 13.48h-2.79c-.371-5.725-4.964-10.318-10.689-10.689z"
              />
              <path
                d="m24 23.25c0-12.82-10.43-23.25-23.25-23.25-.414 0-.75.336-.75.75v4.286c0 .414.336.75.75.75 9.631 0 17.466 7.834 17.466 17.464 0 .414.336.75.75.75h4.284c.414 0 .75-.336.75-.75zm-4.299-.75c-.386-9.862-8.338-17.815-18.201-18.2v-2.787c11.398.388 20.599 9.589 20.987 20.987z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- Category List Component -->
      <div class="flex flex-col px-4 items-center h-full">
        <div class="title-block-wrap mb-8">
          <span class="font-bold text-sm px-2 py-1 border border-gray-300"
            >카테고리</span
          >
        </div>

        <div class="w-full">
          <nav v-for="category in categoryList" class>
            <div
              @click="sortByCategory(category.text)"
              class="flex justify-between items-center p-1 mb-4 cursor-pointer border border-gray-300 rounded hover:bg-gray-100"
            >
              <span class="p-2">
                <!-- {{ categoryParser(category.text) }} -->
                {{ category.text }}
              </span>
              <span class="text-xs ml-auto py-1 px-2 bg-gray-200 rounded">
                {{ getNumberOfPages(category) }}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import AuthorBlock from '../AuthorBlock/AuthorBlock'
import Loader from '../Loader/Loader'

export default {
  props: {
    fullList: {
      type: Array,
      required: true,
    },
    categoryList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortedList: null,
      sortedListFull: null,
      originalList: null,
      totalPages: null,
      totalItems: null,
      currentPage: 1,
      currentCategory: null,
      isLoading: false,
      debounce: true,
    }
  },
  components: {
    AuthorBlock,
    Loader,
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
    getNumberOfPages(category) {
      let listofPages = this.$site.pages.filter(p => {
        return p.frontmatter.category === category.text
      })
      return listofPages.length
    },
    sortByCategory(category) {
      this.currentCategory = category
      this.currentPage = 1
      this.totalItems = this.$site.pages.filter(p => {
        return p.frontmatter.category === category
      }).length
      this.totalPages = Math.ceil(this.totalItems / 10)

      this.sortedListFull = this.$site.pages
        .filter(p => {
          return p.frontmatter.category === category
        })
        .sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime()
          let bDate = new Date(b.frontmatter.date).getTime()
          let diff = aDate - bDate
          if (diff < 0) return 1
          if (diff > 0) return -1
          return 0
        })
      this.sortedList = this.sortedListFull.slice(0, 10)
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight

        if (bottomOfWindow) {
          if (this.currentPage < this.totalPages) {
            this.isLoading = true
            if (this.currentCategory) {
              this.currentPage += 1
              const _this = this
              setTimeout(function() {
                const endNum = 10 * _this.currentPage
                _this.sortedList = _this.sortedListFull.slice(0, endNum)
                _this.isLoading = false
              }, 800)
            } else {
              this.currentPage += 1
              const _this = this
              setTimeout(function() {
                const endNum = 10 * _this.currentPage
                _this.sortedList = _this.fullList.slice(0, endNum)
                _this.isLoading = false
              }, 800)
            }
          }
        }
      }
    },
  },
  computed: {},
  created() {
    this.sortedList = this.fullList.slice(0, 10)
    this.totalItems = this.fullList.length
    this.totalPages = Math.ceil(this.totalItems / 10)
  },
  mounted() {
    this.scroll()
  },
}
</script>

<style scoped>
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
.title-block-wrap {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.title-block-wrap:before {
  border-top: 1px solid #e9ecef;
  flex: 1 0 0;
  content: '';
}
.title-block-wrap:after {
  border-top: 1px solid #e9ecef;
  flex: 1 0 0;
  content: '';
}
.animate_fadeinup {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
}
</style>
