<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed } from "vue";
import { useRoute } from "vue-router";
const showNav = computed<Boolean>(() => {
  return useRoute().name !== "login";
});
</script>

<template>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.position-relative {
  position: relative !important;
}

:root {
  --title-font-size: 15px;
  --title-line-height: 22px;
  --subtitle-font-size: 13px;
  --subtitle-line-height: 16px;
  --info-margin-top: 8px;
  --avatar-size: 36px;
  --avatar-margin-right: 8px;
  --icon-size: 18px;
  --title-padding-right: 16px;
  --graph_bg_regular: #F1F2F3;
}
</style>
