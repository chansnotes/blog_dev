<template>
  <!-- Header -->
  <header class="bg-white block border-b border-gray-300">
    <div
      class="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
    >
      <!-- NavBar Container -->
      <div class="flex w-full h-16 items-center justify-between px-5 mx-auto">
        <!-- NavBar Menu Icon & Title & Menu for Large screen -->
        <div class="flex items-center justify-start">
        <button
          @click="sidebar = !sidebar"
          type="button"
          class="hover:text-gray-300 focus:text-gray-300 focus:outline-none lg:mr-8"
        >
          <svg
            class="fill-current w-5 h-8"
            height="384pt"
            viewBox="0 -53 384 384"
            width="384pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
            <path
              d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
            <path
              d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
          </svg>
        </button>
        <!-- Site Title for Large Screen size -->
         <div class="hidden lg:inline mr-8">
          <span class="font-semibold text-2xl">{{ $site.title }}</span>
        </div>
       <ul class="hidden lg:flex mt-0 px-5">
          <li v-for="item in $site.themeConfig.nav" :key="item.text" class="pr-8 text-sm">
              <router-link :to="item.link" > {{ item.text}} </router-link>
          </li>
          </ul>
        </div>
        <!-- Site Title for Small to Medium Screen size -->
        <div class="px-2 lg:hidden">
          <span class="font-semibold text-2xl">{{ $site.title }}</span>
        </div>
        <!-- Search Icon -->
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
      </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: true
    }
  }
};
</script>
