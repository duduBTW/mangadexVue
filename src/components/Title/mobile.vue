<template>
  <div class="container">
    <img
      @click="goBack"
      class="backIcon"
      src="../../assets/backIcon.svg"
      alt=""
    />
    <transition name="header" appear>
      <RowShow @click="goInfo" title="Senpai ga Uzai Kouhai no Hanashi" />
    </transition>

    <div class="info">
      <div class="img"></div>
      <div class="content">
        <ComponentInfo />
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
import ComponentInfo from "./info/index.vue";

export default {
  name: "TitlePageMobile",
  components: {
    RowShow,
    TabsHeader,
    MangaList,
    ComponentInfo,
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
    goInfo() {
      this.$router.push({ name: "titleInfoMobile", params: { id: "1" } });
    },
  },
  mounted() {
    // console.log(`params: `, this.$route.params.id);
  },
};
</script>

<style scoped>
.header-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.header-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.header-enter-active {
  transition: all 0.4s ease-in-out;
}

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
