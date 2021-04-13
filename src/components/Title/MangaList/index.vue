<template>
  <div class="container-mangaList">
    <transition-group @before-enter="beforeEnter" @enter="enter" appear>
      <MangaItem
        v-for="(manga, index) in mangas"
        :key="manga"
        :data-index="index"
      />
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
import MangaItem from "./item";

export default {
  name: "MangaList",
  components: {
    MangaItem,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(40px)";
    },
    enter(el, onComplete) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: el.dataset.index * 0.1,
        onComplete,
      });
    },
  },
  data() {
    return { mangas: Array.from(Array(100).keys()) };
  },
};
</script>

<style scoped>
.container-mangaList {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
