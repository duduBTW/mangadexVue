<template>
  <TabsHeader :tabs="tabs" />
  <div class="mangas">
    <div class="manga" v-for="manga in mangas" :key="manga.id">
      <MangaItem :manga="manga" />
    </div>
  </div>
</template>

<script>
import MangaItem from "../Manga/MangaItem";
import TabsHeader from "./Tabs";

export default {
  name: "TabsComponents",
  components: {
    MangaItem,
    TabsHeader,
  },
  data() {
    return {
      tabs: [
        {
          label: "All",
          active: false,
        },
        {
          label: "Follows",
          active: true,
        },
      ],
      mangas: [
        {
          id: 1,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 2,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 3,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 4,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 5,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 6,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 7,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 8,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 9,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
        {
          id: 10,
          title: "My new wife is forcing herself to smile",
          image:
            "https://cdn.mangakomi.com/manga_5f447ebe3346d/6fc0ad95eaf943421b98551a87330399/1.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mangas {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;

  padding: 40px 0px;
}

@media only screen and (max-width: 820px) {
  .mangas {
    grid-template-columns: auto;
  }
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--main);
}
.tab {
  padding: 14px 0px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik", sans-serif;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  color: #949494;
}
.tab:hover {
  background: rgba(255, 255, 255, 0.1);
}
.tab-active {
  font-weight: 500;
  color: white;
}
.tab-active::after {
  content: "";

  position: absolute;
  border-radius: 3px;
  height: 6px;
  left: 40%;
  right: 40%;
  background: var(--main);
  bottom: -3px;
  background: linear-gradient(
    143.7deg,
    #1e1c35 -78.74%,
    #442e53 31.8%,
    #152390 142.33%
  );
}
</style>
