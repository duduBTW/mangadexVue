<template>
  <div class="status-container">
    <div class="status-label">{{ label }}</div>
    <div class="status-items">
      <div class="status-item" v-for="item in items" :key="item.label">
        <div class="status-item-title">{{ item.label }}</div>
        <div class="status-separator"></div>
        <div class="status-item-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: {
    label: String,
    items: Array,
  },
};
</script>

<style scoped>
.status-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.status-items {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}

.status-item {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.status-item-title {
  font-size: 12px;
}

.status-item-value {
  font-size: 14px;
}

.status-separator {
  height: 1px;
  width: 100%;
  background: var(--darker-second);
  border-radius: 3px;
}

.status-label {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
}
</style>
