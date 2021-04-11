<template>
  <div>This is an about page</div>
</template>
<script>
export default {
  name: "TitlePage",
  mounted() {
    console.log(`params: `, this.$route.params.id);
  },
};
</script>
