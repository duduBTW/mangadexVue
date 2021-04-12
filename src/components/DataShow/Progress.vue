<template>
  <div class="progress-container">
    <div class="progress-content">
      <div class="progress-label">{{ label }}</div>
      <div class="progress-info">
        <input class="progress-progress" type="text" v-model="progressValue" />
        <span class="progress-slash">/</span>
        <span class="progress-total">{{ total }}</span>
      </div>
    </div>
    <div class="progress"></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    label: String,
    progress: Number,
    total: Number,
  },
  data() {
    return {
      progressValue: "12",
    };
  },
  mounted() {
    this.progressValue = this.progress;
  },
};
</script>

<style scoped>
.progress-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.progress-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;
}
.progress {
  height: 1px;
  width: 100%;
  background: var(--darker-second);
}

.progress-label {
  font-family: "Rubik", sans-serif;
  font-size: 14px;
}

.progress-info {
  font-size: 20px;
}

.progress-total {
  color: var(--second);
}

.progress-slash {
  color: var(--second);
  margin: 0px 5px;
}

.progress-progress {
  width: 40px;
  padding: 0px;
  margin: 0px;
  border: none;
  background: transparent;
  color: white;
  font-size: 22px;
  font-weight: bold;
}
</style>
