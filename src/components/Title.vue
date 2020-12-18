<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss">
</style>
