<template>
  <div class="container">
    <span v-if="iso" class="flag-icon" :class="flagClass" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import isoCode from "./isoCode";
const { iso = "", squared = true } =
  defineProps<{ iso: string; squared?: boolean }>();

const flagClass = computed(() => {
  return `${squared ? "flag-icon-squared " : ""}flag-icon-${
    isoCode[iso] ?? "zh"
  }`;
});
</script>

<style lang="less">
@import "flag-icon-css/less/flag-icons.less";

.container{
    display: flex;
    align-items: center;
    height: 20px;
}
</style>