<template>
  <div
    class="flex flex-col relative justify-center items-center w-full h-mdrecentpost md:h-topicList lg:h-quote px-5 bg-cover bg-fixed"
    style="background-image: url(/images/etc/main.jpeg)"
  >
    <div
      class="absolute w-full h-full top-0 left-0 bg-overlay opacity-excerpt"
    ></div>
    <div
      class="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center z-10"
    >
      {{ selectRandomQuote.text }}
    </div>
    <div class="mt-4 text-white text-xs md:text-sm lg:text-base z-10">
      - {{ selectRandomQuote.author }} -
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quotesList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectRandomQuote: function() {
      return this.quotesList[Math.floor(Math.random() * this.quotesList.length)]
    },
  },
}
</script>
