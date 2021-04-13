<template>
  <div class="seller-container">
    <div class="seller-label">{{ label }}</div>
    <div class="seller-sellers">
      <div v-for="seller in sellers" :key="seller.label" class="seller-seller">
        <img :src="seller.img" :alt="seller.label" class="seller-seller-img" />
        <div class="seller-seller-label">{{ seller.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seller",
  props: {
    label: String,
    sellers: Array,
  },
};
</script>

<style scoped>
.seller-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.seller-sellers {
  display: flex;
  gap: 20px;

  overflow-x: auto;
  padding-bottom: 20px;
}

.seller-seller {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  margin: 10px;
}
.seller-seller::before {
  content: "";

  position: absolute;
  top: 10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background: var(--gradiant);
  z-index: 0;

  border-radius: 10px;
  cursor: pointer;
}

:is(.seller-seller:hover, .seller-seller-img:hover, .seller-seller-label:hover)
  .seller-seller-img {
  transform: scale(1.05);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.2s all ease-in-out;
}

.seller-seller:active .seller-seller-img {
  transform: scale(0.9);
  transition: 0.2s all ease-in-out;
}

.seller-seller-img {
  transition: 0.2s all ease-in-out;
  width: 58px;
  height: 58px;
  z-index: 2;
  border-radius: 13px;
}

.seller-seller-label {
  font-size: 12px;
  z-index: 2;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
