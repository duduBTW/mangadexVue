<template>
  <CardContainer :mobile="mobile" class="tags-container">
    <Tag label="Genre" :tags="['Romance', 'Comedy', 'Slice of life']" />
    <Tag label="Demographic" :tags="['Seinen']" />
  </CardContainer>
</template>

<script>
import CardContainer from "../../../shared/Card";
import Tag from "./item";

export default {
  name: "Tags",
  components: {
    CardContainer,
    Tag,
  },
  props: {
    mobile: Boolean,
  },
};
</script>

<style scoped>
.tags-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
