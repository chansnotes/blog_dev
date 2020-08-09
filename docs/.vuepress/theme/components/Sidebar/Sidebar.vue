<template>
  <aside v-show="sidebar" class="h-full">
    <div class="fixed block h-full bottom-0 left-0 z-40">
      <div
        class="fixed flex flex-col w-side h-screen border shadow-2xl bg-white overflow-y-auto ease-in-out transition-all duration-300"
      >
        <!-- Title Box -->
        <div class="flex h-16 p-5 items-center justify-between border-b border-gray-300">
          <span class="font-semibold text-2xl">{{ $site.title }}</span>
          <CloseButton @close-sidebar="$emit('close-sidebar')" />
        </div>
        <!-- Contents Box -->
        <SidebarMenu />
        <!-- Recent Posts -->
        <SidebarRecentPosts />
        <!-- Profile Box -->
        <SidebarProfile />
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarProfile from './SidebarProfile'
import SidebarRecentPosts from './SidebarRecentPosts'
import SidebarMenu from './SidebarMenu'
import CloseButton from './CloseButton'

export default {
  props: {
    sidebar: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    SidebarProfile,
    SidebarRecentPosts,
    CloseButton,
    SidebarMenu,
  },
}
</script>
