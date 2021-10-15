<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {computed} from "vue";
import { useRoute } from 'vue-router'
const showNav = computed<Boolean>(() => {
  return useRoute().name !== 'login'
})
</script>

<template>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.position-relative {
  position: relative !important;
}
</style>
