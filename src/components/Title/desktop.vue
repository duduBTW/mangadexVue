<template>
  <div class="container-title">
    <header>
      <div class="cover"></div>
      <div class="info">
        <Statuses />
        <div class="info-item"><Tags /> <Sellers /></div>
      </div>
    </header>
    <div class="content">
      <div class="header">
        <back-icon @goBack="goBackFunc" />
        <h1>Senpai ga Uzai Kouhai no Hanashi</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
        auctor lorem. Aenean lorem est, faucibus fermentum leo nec, rhoncus
        ultricies leo. Mauris sit amet sollicitudin mi. Duis consequat metus
        sapien, vitae laoreet magna pharetra sed. Phasellus semper augue eget
        turpis blandit, rutrum vehicula erat feugiat. Donec auctor Read...
      </p>
      <row-info label="Title ID" value="# 23825" />
      <row-info label="Author" value="Shiro Manta" />
      <row-info label="Artist" value="Shiro Manta" />
      <row-info label="Pub. status" value="Ongoing" />
      <div>
        <TabsHeader :tabs="tabs" />
        <MangaList />
      </div>
    </div>
  </div>
</template>

<script>
import Statuses from "./Cards/Statuses";
import Tags from "./Cards/Tags/index";
import Sellers from "./Cards/Sellers/index";
import TabsHeader from "../../components/Tabs/Tabs";
import MangaList from "../../components/Title/MangaList";
import BackIcon from "../shared/BackIcon.vue";
import RowInfo from "../DataShow/RowInfo.vue";

export default {
  name: "TitlePageDesktop",
  components: {
    Statuses,
    Tags,
    Sellers,
    TabsHeader,
    MangaList,
    BackIcon,
    RowInfo,
  },
  methods: {
    goBackFunc() {
      this.$router.push({ name: "Home" });
    },
  },
  data() {
    return {
      tabs: [
        {
          label: "Chapters",
          active: true,
        },
        {
          label: "Comments",
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-title {
  padding: 60px 0px;
  gap: 60px;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
}

@media only screen and (max-width: 1366px) {
  .container-title {
    padding: 60px 60px;
  }
}

@media only screen and (max-width: 1366px) {
  .container-title {
    flex-direction: column;
  }
}
.cover {
  width: 386px;
  height: 650px;
  background-image: url(https://images.catmanga.org/series/uzai/covers/06.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

.info {
  flex: 1;
  padding: 0px 1px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media only screen and (max-width: 1366px) {
  .info {
    flex: 0.9;
    margin: 0px auto;
    min-width: 386px;
    padding: 1px 0px;
    max-height: 648px;
    overflow-y: scroll;
  }
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

:is(h1, p) {
  padding: 0px;
  margin: 0px;
}

h1 {
  font-family: "Rubik", sans-serif;
  font-size: 36px;
}

p {
  font-size: 18px;
  line-height: 30px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media only screen and (min-width: 1366px) {
  .info-item {
    position: sticky;
    top: 30px;
  }
}

header {
  display: flex;
  gap: 60px;
  position: relative;

  max-width: 386px;
  flex-direction: column;
}

@media only screen and (max-width: 1366px) {
  header {
    flex-direction: row;
    max-width: none;
  }
}

.header {
  display: flex;
  gap: 30px;
}
</style>
