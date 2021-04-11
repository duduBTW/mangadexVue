<template>
  <div class="row">
    <div class="title">{{ title }}</div>
    <img class="next" src="../../assets/nextIcon.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "RowShow",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.row:hover {
  background: rgba(255, 255, 255, 0.1);
}

.title {
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
}

.next {
  color: var(--second);
}
</style>
