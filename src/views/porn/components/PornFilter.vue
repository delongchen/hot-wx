<template>
  <a-checkable-tag v-for="(value, tag) in tags" :key="tag" v-model:checked="tags[tag]">{{
    tag
  }}</a-checkable-tag>
</template>

<script setup lang="ts">
import { AvFilter } from "./utils.js";

const {
  filter: { tags, performers },
} = defineProps<{ filter: AvFilter }>();

// todo
// const { onChange } = defineEmits(["onChange"]);
</script>

<style scoped lang="less">
</style>