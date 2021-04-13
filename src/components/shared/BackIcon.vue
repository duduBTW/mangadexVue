<template>
  <img
    @click="$emit('goBack')"
    class="backIcon"
    src="../../assets/backIcon.svg"
    alt=""
  />
</template>

<script>
export default {
  name: "back-icon",
  emits: ["goBack"],
};
</script>

<style scoped>
.backIcon {
  padding: 10px;
  color: var(--second);
  width: 24px;
  cursor: pointer;
  border-radius: 50%;
}

.backIcon:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
