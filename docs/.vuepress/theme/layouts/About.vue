<template>
  <div class="w-full">
    <Navbar
      @toggle-sidebar="toggleSidebar"
      @toggle-searchbar="toggleSearchbar"
    />
    <Searchbar :searchbar="isSearchbarOpen" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <div class="max-w-full xs:max-w-about my-8 mx-auto px-4 lg:px-0 py-8">
      <img class="w-full" src="/images/etc/about.png" alt="Me Eating MEAT!" />
    </div>
    <Content
      class="markdown mx-auto my-4 px-4 lg:px-0 pb-2 max-w-full md:max-w-postwidth text-sm md:text-base lg:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
    />
    <div
      class="markdown mx-auto my-4 px-4 lg:px-0 pb-8 max-w-full md:max-w-postwidth text-sm md:text-base lg:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
    >
      <div class="rounded-lg hover:bg-gray-200">
        <span
          @click="toggleBio"
          class="flex items-center font-bold text-2xl md:text-3xl"
        >
          # Bio
          <svg
            stroke-width="0"
            viewBox="0 0 24 24"
            data-testid="arrow"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 inline fill-current ml-2 text-blue-500 transition-all duration-150 ease-in"
            :style="sortArrowDirection"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
        </span>
      </div>
      <Content
        v-if="showBio"
        class="markdown overflow-hidden mx-auto my-4 px-2 lg:px-0 pb-8 max-w-full md:max-w-postwidth text-sm md:text-base lg:text-lg text-post tracking-postlayout break-words wordbreaking leading-extra-relaxed"
        :class="{ animate_fadeinup: showBio, hidden: !showBio }"
        slot-key="bio"
      />
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
      showBio: false,
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
    toggleBio() {
      this.showBio = !this.showBio
    },
  },
  computed: {
    sortArrowDirection() {
      if (this.showBio == false) {
        return 'transform: rotate(180deg);'
      }
    },
    showBioOnToggle() {
      if (this.toggleBio == false) {
        return 'display: none;'
      }
    },
  },
  created() {},
  mounted() {
    document.body.style.removeProperty('overflow')
    // console.log(this.$site)
  },
}
</script>

<style scoped>
.background-opaque {
  background-color: black;
  opacity: 50%;
}
.markdown img {
  width: 250px;
}
.animate_fadeinup {
  animation-duration: 0.75s;
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
