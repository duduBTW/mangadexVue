<template>
  <transition-group @before-enter="beforeEnter" @enter="enter" appear>
    <row-info
      v-for="({ label, value }, index) in content"
      :label="label"
      :key="label"
      :value="value"
      :data-index="index"
    />
  </transition-group>
</template>

<script>
import RowInfo from "../../DataShow/RowInfo.vue";
import gasp from "gsap";

export default {
  name: "ComponentInfo",
  components: {
    RowInfo,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    },
    enter(el, done) {
      gasp.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
  },
  data() {
    return {
      content: [
        {
          label: "Title ID",
          value: "# 23825",
        },
        {
          label: "Author",
          value: "Shiro Manta",
        },
        {
          label: "Artist",
          value: "Shiro Manta",
        },
        {
          label: "Pub. status",
          value: "Ongoing",
        },
      ],
    };
  },
};
</script>
