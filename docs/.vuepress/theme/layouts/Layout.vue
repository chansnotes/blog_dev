<template>
  <div class="w-full">
    <Navbar :sidebar="isOpen" />
    <!-- <Sidebar :sidebar="isOpen" /> -->
    <Content
      class="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pt-8 px-5"
    />
  </div>
</template>
<script>
import Navbar from '../components/Nav/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
