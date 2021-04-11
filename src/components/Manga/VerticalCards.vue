<template>
  <div class="container-container">
    <div :id="name + '-container'" class="container">
      <div @click="scrollLeft" class="left changer">
        <img class="next" src="../../assets/nextIcon.svg" alt="" />
      </div>
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <div @click="scrollRigth" class="rigth changer">
        <img class="next" src="../../assets/nextIcon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MangaCard from "./Card";
export default {
  mame: "VerticalMangaCards",
  components: {
    MangaCard,
  },
  props: {
    name: String,
  },
  methods: {
    scrollRigth() {
      document.getElementById(
        this.$props.name + "-container"
      ).scrollLeft += 350;
    },
    scrollLeft() {
      document.getElementById(
        this.$props.name + "-container"
      ).scrollLeft -= 350;
    },
  },
};
</script>

<style scoped>
.container {
  scroll-behavior: smooth;
  display: flex;
  gap: 30px;
  overflow-x: hidden;
  width: 100%;
}

.container-container {
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  position: relative;
}

.rigth {
  right: 0px;
}
.left {
  transform: rotate(180deg);
  left: 0px;
}

.changer {
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 40px;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.changer:hover {
  background: var(--main);
}
</style>
