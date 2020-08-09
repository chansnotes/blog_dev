<template>
  <div class="viewport">
    <div class="carousel-frame">
      <div class="carousel">
        <ul class="scroll">
          <li class="scroll-item-outer">
            <div class="scroll-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cute_grey_kitten.jpg/1280px-Cute_grey_kitten.jpg"
                alt="Picture of a gray kitten looking at the camera"
              />
            </div>
          </li>
          <li class="scroll-item-outer">
            <div class="scroll-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg"
                alt="Picture of a gray kitten looking at a branch"
              />
            </div>
          </li>
          <li class="scroll-item-outer">
            <div class="scroll-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/1280px-Red_Kitten_01.jpg"
                alt="Picture of an orange kitten looking at the camera"
              />
            </div>
          </li>
          <li class="scroll-item-outer">
            <div class="scroll-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Youngkitten.JPG/1280px-Youngkitten.JPG"
                alt="Picture of a young kitten opening its eyes"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  scoped>
:root {
  --carousel-width: 450px;
  --carousel-height: calc(0.7 * var(--carousel-width));
  --carousel-padding: 5px;
}

@media (max-width: 479px) {
  :root {
    --carousel-width: 450px;
  }
}

.viewport {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-frame {
  background: #fafafa;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ddd;
  width: calc(var(--carousel-width) + (2 * var(--carousel-padding)));
  height: calc(var(--carousel-height) + (2 * var(--carousel-padding)));
}

.carousel {
  width: 300px;
  height: 300px;
}

.scroll {
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

ul.scroll {
  margin: 0;
  padding: 0;
  list-style: none;
}

.scroll-item-outer {
  width: 100%;
  height: 100%;
}

.scroll-item {
  width: var(--carousel-width);
  height: 100%;
}

img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

@supports (scroll-snap-align: start) {
  /* modern scroll snap points */
  .scroll {
    scroll-snap-type: x mandatory;
  }
  .scroll-item-outer {
    scroll-snap-align: center;
  }
}

@supports not (scroll-snap-align: start) {
  /* old scroll snap points spec */
  .scroll {
    -webkit-scroll-snap-type: mandatory;
    scroll-snap-type: mandatory;
    -webkit-scroll-snap-destination: 0 50%;
    scroll-snap-destination: 0 50%;
    -webkit-scroll-snap-points-x: repeat(100%);
    scroll-snap-points-x: repeat(100%);
  }

  .scroll-item-outer {
    scroll-snap-coordinate: 0 0;
  }
}
</style>