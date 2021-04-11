<template>
  <div class="container">
    <RowShow title="Reading history" />
    <div class="mangas">
      <MangaItemSimple :manga="manga" v-for="manga in mangas" :key="manga.id" />
    </div>
  </div>
</template>

<script>
import RowShow from "../../DataShow/RowShow";
import MangaItemSimple from "../../Manga/MangaItemSimple";

export default {
  name: "ReaderHistoryList",
  components: {
    RowShow,
    MangaItemSimple,
  },
  data() {
    return {
      mangas: [
        {
          id: 1,
          title: "Boku no Kokoro no Yabai Yatsu",
          image:
            "https://1.bp.blogspot.com/-fU6tYBQ9IBg/Xz5r6m_9CKI/AAAAAAAAOZc/sGcF95Zba4wK743yPhWxsrfQQnPz6HzqwCLcBGAsYHQ/s640/FotoJet.jpg",
        },
        {
          id: 2,
          title: "Ichizu de Bitch na Kouhai",
          image: "https://img.supermangas.site/img/animes/11737-large.jpg",
        },
        {
          id: 3,
          title: "A Rare Marriage: How to Grill Our Love",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_Xu4C4xSUYFdpBlcBMGgjksV_XJZcVxeyYP8xxk-mfXUksku9TDf1l4D3nQx-HjLU08&usqp=CAU",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  gap: 30px;
}

.mangas {
  display: flex;
  flex-direction: column;

  gap: 30px;
}
</style>
