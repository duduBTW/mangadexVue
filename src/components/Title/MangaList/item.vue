<template>
  <div class="mangaItem">
    <div class="cap">Ch. 141</div>
    <div class="time">2 days</div>
    <div class="scan">White Cat ScanlationsR</div>
    <div class="views">2k</div>
  </div>
</template>

<script>
export default {
  name: "MangaItem",
};
</script>

<style scoped>
.mangaItem {
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  cursor: pointer;
}

.mangaItem:hover {
  background: rgba(255, 255, 255, 0.1);
}

:is(.views, .time) {
  justify-self: flex-end;
}

.cap {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.time {
  font-size: 14px;
}

.views {
  font-size: 12px;
  font-weight: 300;
}

.scan {
  font-size: 12px;
  font-weight: 300;
}
</style>
