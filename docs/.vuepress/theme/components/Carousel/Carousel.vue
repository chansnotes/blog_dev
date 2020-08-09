<template>
  <div class="bg-gray-200 p-16">
    <div class="flex justify-center h-full">
      <div
        class="relative border border-gray-500 carousel-box cursor-grab touch-pany sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
      >
        <div
          @click="rotateCarousel"
          :style="{ transform: 'translateZ(-289px) rotateY(' + this.degree + 'deg)' }"
          class="absolute w-3/4 h-full carousel-contents"
        >
          <article class="absolute border border-black carousel-item">1</article>
          <article class="absolute border border-black carousel-item">2</article>
          <article class="absolute border border-black carousel-item">3</article>
          <article class="absolute border border-black carousel-item">4</article>
          <article class="absolute border border-black carousel-item">5</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      degree: 0,
    }
  },
  methods: {
    rotateCarousel() {
      this.degree = this.degree - 72
    },
  },
  computed: {
    getPosition() {
      return {
        transform: 'rotate(-72deg * ' + this.counter + ')',
      }
    },
  },
}
</script>

<style scoped>
.carousel-box {
  width: 100%;
  height: 500px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}

.carousel-contents {
  transform: translateZ(-289px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.carousel-item {
  width: 90%;
  height: 480px;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  background-color: blue;
  text-align: center;
  transition: transform 1s, opacity 1s;
  opacity: 0.5;
}

.carousel-item:nth-child(1) {
  transform: rotateY(0deg) translateZ(289px);
}
.carousel-item:nth-child(2) {
  transform: rotateY(72deg) translateZ(289px);
}
.carousel-item:nth-child(3) {
  transform: rotateY(144deg) translateZ(289px);
}
.carousel-item:nth-child(4) {
  transform: rotateY(216deg) translateZ(289px);
}
.carousel-item:nth-child(5) {
  transform: rotateY(288deg) translateZ(289px);
}
</style>