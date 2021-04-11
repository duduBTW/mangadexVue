<template>
  <div class="container-feat">
    <RowShow title="New titles" />
    <VerticalMangaCards name="NewtitlesList" />
  </div>
</template>

<script>
import VerticalMangaCards from "../../Manga/VerticalCards";
import RowShow from "../../DataShow/RowShow";
export default {
  name: "NewtitlesList",
  components: {
    VerticalMangaCards,
    RowShow,
  },
};
</script>

<style scoped>
.container-feat {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
