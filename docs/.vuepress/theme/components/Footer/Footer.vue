<template>
  <div class="w-full h-footer mt-8 py-16 bg-black opacity-90">
    <div class="px-8 mx-auto max-w-full md:max-w-postwidth lg:max-w-screen-lg">
      <div class="flex flex-col justify-center text-white opacity-98">
        <div class="flex items-center align-center">
          <Logo :size="6" :color="'gray'" :intensity="200" />
          <div class="text-sm">{{ this.$site.title }}</div>
        </div>
        <div class="text-xs">
          © ChansNotes Powered By VuePress and TailwindCSS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo/Logo'
export default {
  components: {
    Logo,
  },
}
</script>
