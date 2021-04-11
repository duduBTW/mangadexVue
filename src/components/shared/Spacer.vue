<template>
  <div class="spacer">
    <div v-show="showDivider" class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "Scaper",
  props: {
    showDivider: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
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
</style>
