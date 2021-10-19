<template>
  <div class="wrap">
    <main class="main"></main>
    <aside class="aside"></aside>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
main, aside {
  height: 100px;
}

main {
  background-color: blueviolet;
}

aside {
  background-color: burlywood;
}

.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.main {
  flex: 1;
}

.aside {
  width: 300px;
  margin-left: 10px;
}
</style>
