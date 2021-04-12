<template>
  <CardContainer class="container">
    <Progress label="Volume" progress="1" total="2" />
    <Progress label="Chapter" progress="58" total="120" />
    <Status
      label="Stats"
      :items="[
        { label: 'Views', value: '3,631,894' },
        { label: 'Follows', value: '54,728' },
        { label: 'Chapters', value: '172' },
      ]"
    />
    <Status
      label="Rating"
      :items="[
        { label: 'Note', value: '8.80' },
        { label: 'Note v2', value: '8.82' },
        { label: 'Votes', value: '3,748' },
      ]"
    />
    <!-- <div>Stats</div> -->
    <!-- <div>Rating</div> -->
  </CardContainer>
</template>

<script>
import Progress from "../../DataShow/Progress";
import Status from "../../DataShow/Status";
import CardContainer from "../../shared/Card";

export default {
  name: "Statuses",
  components: {
    CardContainer,
    Progress,
    Status,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  gap: 35px;
}
</style>
