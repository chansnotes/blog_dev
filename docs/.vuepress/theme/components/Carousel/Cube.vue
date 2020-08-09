<template>
  <div class="flex justify-center">
    <div class="scene">
      <div @click="flipCard" :class="[flipped ? activeClass : '']" class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      activeClass: 'show-top',
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
.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(-100px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
  background-color: red;
  opacity: 0.5;
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
  background-color: blue;
  opacity: 0.5;
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
  background-color: yellow;
  opacity: 0.5;
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
  background-color: green;
  opacity: 0.5;
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
  background-color: purple;
  opacity: 0.5;
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
  background-color: cyan;
  opacity: 0.5;
}

.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}
.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}
.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}
.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}
.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}
.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
}
</style>