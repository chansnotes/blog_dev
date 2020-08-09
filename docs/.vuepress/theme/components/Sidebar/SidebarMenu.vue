<template>
  <div class="p-5">
    <div class="mb-5">
      <ul class="flex flex-col justify-start">
        <li
          v-for="item in $site.themeConfig.nav"
          :key="item.text"
          class="py-2 text-sm hover:bg-gray-200"
        >
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
