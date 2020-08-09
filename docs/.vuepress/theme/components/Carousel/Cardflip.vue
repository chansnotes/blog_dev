<template>
  <div class="flex justify-center">
    <div class="w-64 h-64 test border border-black">
      <div
        @click="flipCard"
        :class="[flipped ? activeClass : '']"
        class="relative w-full h-full card-x"
      >
        <div class="absolute w-full h-full bg-red-500 backface-hidden"></div>
        <div class="absolute w-full h-full bg-blue-500 backface-hidden back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      activeClass: 'is-flipped-x',
    }
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped
    },
  },
}
</script>

<style scoped>
.test {
  perspective: 600px;
}

.card {
  transition: transform 1s;
  transform-style: preserve-3d;
}

.back {
  transform: rotateY(180deg);
}

.is-flipped {
  transform: rotateY(180deg);
}

.card-x {
  transition: transform 1s;
  transform-style: preserve-3d;
  transform-origin: center right;
}

.is-flipped-x {
  transform: translateX(-100%) rotateY(-180deg);
}
</style>