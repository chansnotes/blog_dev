<template>
  <div
    v-show="searchbar"
    class="flex flex-col justify-center h-search bg-search"
  >
    <div class="w-full transition-opacity duration-200 ease-in">
      <div
        class="w-full mx-auto px-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
      >
        <div class="flex relative">
          <form role="search" class="flex-grow">
            <div class="flex relative items-stretch w-full h-12">
              <input
                type="text"
                class="flex-auto px-12 h-full border-b border-input text-lg text-gray-600 bg-transparent order-2"
                placeholder="Enter Keyword"
              />
              <button type="submit" class="absolute h-full left-0 ml-2 order-1">
                <svg
                  class="fill-current w-5 h-8"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.999 511.999"
                  style="enable-background:new 0 0 511.999 511.999;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <button
                type="button"
                class="absolute h-full right-0 mr-2 order-3"
              >
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchbar: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    clearText() {
      // Clear SearchBox Text...
    },
  },
}
</script>
