<template>
  <div class="w-full">
    <Navbar @toggle-sidebar="toggleSidebar" />
    <Sidebar :sidebar="isSidebarOpen" @close-sidebar="closeSidebar" />
    <Content
      class="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pt-8 px-5"
    />
  </div>
</template>
<script>
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

export default {
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  components: {
    Navbar,
    Sidebar,
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
