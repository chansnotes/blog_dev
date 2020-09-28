<template>
  <div class="p-5">
    <div class="mb-16">
      <ul class="flex flex-col justify-start">
        <router-link
          :to="item.link"
          v-for="item in $site.themeConfig.nav"
          :key="item.text"
          class="p-2 text-sm hover:bg-gray-200"
        >
          {{ item.text }}
        </router-link>
        <ul class="flex flex-col justify-start pl-4">
          <a
            v-for="category in categoryList"
            :href="category.link"
            :key="category.text"
            class="p-2 text-sm hover:bg-gray-200"
          >
            {{ category.text }}</a
          >
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: null,
    }
  },
  created() {
    this.categoryList = this.$site.themeConfig.categories
  },
}
</script>
