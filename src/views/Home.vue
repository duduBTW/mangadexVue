<template>
  <div class="home-container">
    <header>
      <div class="letest-updates">
        <RowShow title="Latest updates" />
        <div class="spacer-md"></div>
        <TabsComponents />
      </div>
      <div class="info">
        <ReaderHistoryList class="card reading-history" />
        <!-- <div class="card reading-history"></div> -->
        <TopChaptresList class="card top-chapters" />
      </div>
    </header>
    <div class="cards featured-titles">
      <FeaturedtitlesList />
    </div>
    <div class="cards new-titles">
      <NewtitlesList />
    </div>
  </div>
</template>

<script>
import RowShow from "../components/DataShow/RowShow";
import TabsComponents from "../components/Tabs";
import ReaderHistoryList from "../components/Home/ReaderHistoryList/index";
import TopChaptresList from "../components/Home/TopChaptresList/index";

import NewtitlesList from "../components/Home/NewtitlesList/index";
import FeaturedtitlesList from "../components/Home/FeaturedtitlesList";

export default {
  name: "Home",
  components: {
    RowShow,
    TabsComponents,
    ReaderHistoryList,
    TopChaptresList,
    FeaturedtitlesList,
    NewtitlesList,
  },
};
</script>

<style scoped>
header {
  display: flex;
  gap: 90px;
}

@media only screen and (max-width: 1366px) {
  header {
    flex-direction: column;
    gap: 0px;
  }
}

.home-container {
  width: 100%;
  max-width: 1280px;
  padding: 60px 0px;
  margin: 0px auto;
}

@media only screen and (max-width: 1366px) {
  .home-container {
    padding: 60px 100px;
    max-width: 820px;
  }
}

@media only screen and (max-width: 1050px) {
  .home-container {
    padding: 60px 50px;
    max-width: 720px;
  }
}

@media only screen and (max-width: 820px) {
  .home-container {
    padding: 60px 00px;
    width: calc(100% - 30px);
    max-width: calc(100% - 30px);
  }
}

.spacer-md {
  height: 20px;
}

.letest-updates {
  flex: 2;
}

.info {
  flex: 1;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  gap: 40px;
}
.reading-history {
  height: auto;
}

.top-chapters {
  height: auto;
}

.card {
  max-width: 360px;
  border-radius: 10px;
  position: relative;
  padding: 30px 20px;
  /* border: 1px solid var(--gradiant); */
  z-index: 1;
}

@media only screen and (max-width: 1366px) {
  .card {
    width: calc(100% - 40px);
    max-width: none;
  }
}

.card::before {
  content: "";
  border-radius: 10px;
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background: var(--gradiant);
  z-index: -2;
}

.card::after {
  content: "";
  position: absolute;
  border-radius: 10px;
  top: -0px;
  bottom: -0px;
  left: -0px;
  right: -0px;
  background: var(--background);
  z-index: -1;
}

.cards {
  margin-top: 30px;
  width: 100%;
}
</style>
