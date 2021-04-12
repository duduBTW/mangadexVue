<template>
  <div class="tag-container">
    <div class="tag-label">{{ label }}</div>
    <div class="tag-tags">
      <div class="tag-tag" v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    label: String,
    tags: Array,
  },
};
</script>

<style scoped>
.tag-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tag-tags {
  display: flex;
  gap: 10px;
}

.tag-label {
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
}

.tag-tag {
  cursor: pointer;
  padding: 5px 10px;
  font-size: 14px;
  background: var(--main);
  border-radius: 10px;
}
.tag-tag:hover {
  background: var(--darker-main);
}
</style>
