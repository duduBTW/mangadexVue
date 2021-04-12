<template>
  <div v-if="isMobile()">
    <TitlePageMobile />
  </div>
  <div v-else>
    <TitlePageDesktop />
  </div>
</template>

<script>
import TitlePageMobile from "../components/Title/mobile";
import TitlePageDesktop from "../components/Title/desktop";

export default {
  name: "TitlePage",
  components: {
    TitlePageMobile,
    TitlePageDesktop,
  },
  methods: {
    isMobile() {
      console.log(`screen.width`, screen.width);
      if (window.innerWidth <= 860) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
