<template>
  <div class="container-mangaList">
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
    <MangaItem />
  </div>
</template>

<script>
import MangaItem from "./item";

export default {
  name: "MangaList",
  components: {
    MangaItem,
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
