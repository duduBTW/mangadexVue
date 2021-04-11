<template>
  <div class="manga">
    <img class="cover" :src="manga.image" alt="" />
    <div class="content">
      <div class="spacer"></div>
      <div class="title" @click="redirectManga">{{ manga.title }}</div>
      <div class="spacer"></div>
      <div class="info">
        <div class="cap">Chapter 32</div>
        <img
          class="lenguage"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div class="spacer">
        <div class="divider"></div>
      </div>
      <div class="info">
        <div class="grup">SleepySlimeTL</div>
        <div class="time">4 hrs ago</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MangaItem",
  props: {
    manga: Object,
  },
  methods: {
    redirectManga() {
      this.$router.push({ name: "title", params: { id: "1" } });
    },
  },
};
</script>

<style scoped>
.manga {
  display: flex;
  gap: 20px;
}

@media only screen and (max-width: 820px) {
  .manga {
    width: 100%;
  }
}

.info {
  display: flex;
  justify-content: space-between;
}

.lenguage {
  height: 12px;
  width: 16px;
  object-fit: cover;
}
.cap {
  font-size: 12px;
  font-family: "Rubik", sans-serif;
}

.grup {
  font-size: 10px;
  cursor: pointer;
}
.grup:hover {
  background: rgba(255, 255, 255, 0.1);
}
.time {
  font-size: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.spacer {
  flex: 1;
  display: flex;
  align-items: center;
}
.divider {
  height: 2px;
  width: 100%;
  background: var(--main);
  border-radius: 2px;
}

.title {
  flex: 1;

  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0px;
  cursor: pointer;
}

.title:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cover {
  height: 128px;
  width: 85px;

  object-fit: cover;
  border-radius: 5px;
}
</style>
