<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'May the Force be with you',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
