<template>
  <div class="container">
    <RowShow title="Top Chaptres" />
    <TabsHeader @setActive="setActive" :tabs="tabs" />
    <section>
      <div class="mangas" id="painel1">
        <MangaItemSimple
          :manga="manga"
          v-for="manga in mangas"
          :key="manga.id"
        />
      </div>
      <div class="mangas" id="painel2">
        <MangaItemSimple
          :manga="manga"
          v-for="manga in mangas"
          :key="manga.id"
        />
      </div>
      <div class="mangas" id="painel3">
        <MangaItemSimple
          :manga="manga"
          v-for="manga in mangas"
          :key="manga.id"
        />
      </div>
    </section>
  </div>
</template>

<script>
import RowShow from "../../DataShow/RowShow";
import MangaItemSimple from "../../Manga/MangaItemSimple";
import TabsHeader from "../../Tabs/Tabs";

export default {
  name: "ReaderHistoryList",
  components: {
    RowShow,
    MangaItemSimple,
    TabsHeader,
  },
  methods: {
    setActive(tab) {
      console.log(tab.label);
      this.tabs = this.tabs
        .map((tabItem) =>
          tabItem.active ? { ...tabItem, active: false } : tabItem
        )
        .map((tabItem) =>
          tabItem.label === tab.label ? { ...tabItem, active: true } : tabItem
        );

      document
        .getElementById(
          tab.label === "24h"
            ? "painel2"
            : tab.label === "7d"
            ? "painel3"
            : "painel1"
        )
        .scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
    },
  },
  data() {
    return {
      tabs: [
        {
          label: "6h",
          active: true,
        },
        {
          label: "24h",
          active: false,
        },
        {
          label: "7d",
          active: false,
        },
      ],
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
  scroll-snap-align: center;
}

section {
  block-size: 100%;
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-auto-columns: 100%;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  gap: 60px;
}
</style>
