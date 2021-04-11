<template>
  <div v-dragscroll.x="true">
    <header id="header" :class="expanded ? 'expanded' : 'scrollable'">
      <nav :class="['tabs', expanded ? 'expanded' : '']">
        <div
          v-for="tab in tabs"
          :key="tab.label"
          :class="[
            tab.active ? 'tab-active' : '',
            'tab',
            expanded ? 'expanded' : '',
          ]"
          @click="$emit('setActive', tab)"
        >
          {{ tab.label }}
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { dragscroll } from "vue-dragscroll";

export default {
  name: "TabsHeader",
  props: {
    tabs: Array,
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["setActive"],
  directives: {
    dragscroll,
  },
};
</script>

<style scoped>
.scrollable {
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: auto; /* "auto" or "thin" */
  scrollbar-color: var(--main) var(--background); /* scroll thumb and track */
  /* scrollbar-bord */
}

#line {
  background: var(--main);
  height: 1px;
  z-index: -3;
}

.tabs {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
  width: auto;
}

.tabs.expanded {
  flex-wrap: nowrap;
  justify-content: space-around;
  border-bottom: 1px solid var(--main);
}

.tab {
  scroll-snap-align: center;
  padding: 15px 40px;
  /* flex: 1; */
  /* width: 300px; */
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik", sans-serif;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  color: #949494;
}
.tab.expanded {
  padding: 15px 0px;
  flex: 1;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.1);
}
.tab-active {
  font-weight: 500;
  color: white;
}
.tab-active::after {
  content: "";

  position: absolute;
  border-radius: 3px;
  height: 6px;
  left: 38%;
  right: 38%;
  background: var(--main);
  bottom: -3px;
  background: var(--gradiant);
}
</style>
