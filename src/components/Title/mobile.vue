<template>
  <div class="container">
    <img
      @click="goBack"
      class="backIcon"
      src="../../assets/backIcon.svg"
      alt=""
    />
    <RowShow title="Senpai ga Uzai Kouhai no Hanashi" />

    <div class="info">
      <div class="img"></div>
      <div class="content">
        <row-info label="Title ID" value="# 23825" />
        <row-info label="Author" value="Shiro Manta" />
        <row-info label="Artist" value="Shiro Manta" />
        <row-info label="Pub. status" value="Ongoing" />
      </div>
    </div>
    <div>
      <TabsHeader :tabs="tabs" />
      <MangaList />
    </div>
  </div>
</template>
<script>
import RowShow from "../../components/DataShow/RowShow";
import TabsHeader from "../../components/Tabs/Tabs";
import MangaList from "../../components/Title/MangaList";
import RowInfo from "../DataShow/RowInfo.vue";

export default {
  name: "TitlePageMobile",
  components: {
    RowShow,
    TabsHeader,
    MangaList,
    RowInfo,
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
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    // console.log(`params: `, this.$route.params.id);
  },
};
</script>

<style scoped>
.backIcon {
  color: var(--second);
  width: 24px;
  cursor: pointer;
  border-radius: 50%;
}

.backIcon:hover {
  background: rgba(255, 255, 255, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 30px;
}

.info {
  display: flex;
}

.img {
  width: 100px;
  height: 153px;
  margin-right: 20px;

  border-radius: 10px;
  background-image: url(https://images.catmanga.org/series/uzai/covers/06.jpg);
  background-size: cover;
  background-position: center;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
