<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardContainer",
};
</script>

<style scoped>
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
    width: calc(100% - 60px);
    margin: 0px auto;
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
</style>
