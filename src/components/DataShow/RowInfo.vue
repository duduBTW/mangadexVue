<template>
  <div class="row-info">
    <div class="row-info-title">{{ label }}</div>
    <div class="row-info-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "row-info",
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>
.row-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.row-info-title {
  font-size: 14px;
  font-family: "Rubik", sans-serif;
}

.row-info-value {
  font-size: 14px;
  font-weight: bold;
}
</style>
