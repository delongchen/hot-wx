<template>
  <div class="wrap">
    <user-header/>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import UserHeader from './UserHeader.vue'
</script>

<style scoped>
.wrap {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}

</style>
