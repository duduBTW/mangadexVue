<template>
  <div class="manga">
    <img class="cover" :src="manga.image" alt="Manga Cover" />
    <div class="content">
      <Scaper />
      <div class="title">{{ manga.title }}</div>
      <Scaper showDivider />
      <div class="info">
        <div class="cap">Chapter 52</div>
        <div class="time">17 hrs ago</div>
      </div>
      <Scaper />
    </div>
  </div>
</template>

<script>
import Scaper from "../shared/Spacer";
export default {
  name: "MangaItemSimple",
  components: {
    Scaper,
  },
  props: {
    manga: Object,
  },
};
</script>

<style scoped>
.manga {
  width: 100%;
  display: flex;
  gap: 20px;
}

.cover {
  border-radius: 5px;
  height: 90px;
  width: 60px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
}
.info {
  display: flex;
  justify-content: space-between;
}

.cap {
  font-size: 12px;
}

.time {
  font-size: 10px;
}
</style>
