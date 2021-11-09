<template>
  <a-collapse>
    <a-collapse-panel header="番号">
      <a-checkable-tag
        v-for="(value, tag) in filter.tags"
        :key="tag"
        v-model:checked="filter.tags[tag]"
      >
        {{
          tag
        }}
      </a-checkable-tag>
    </a-collapse-panel>
    <a-collapse-panel header="演员">
      <a-checkable-tag
        v-for="(value, performer) in filter.performers"
        :key="performer"
        v-model:checked="filter.performers[performer]"
      >
        {{
          performer
        }}
      </a-checkable-tag>
    </a-collapse-panel>
    <a-collapse-panel header="文件大小">
      <a-slider :tip-formatter="formatSize" v-model:value="filter.sizeRange" range :min="filter.minSize" :max="filter.maxSize" />
    </a-collapse-panel>
    <a-collapse-panel header="创建时间">
      <!-- <a-slider v-model:value="filter.createTimeRange" range :min="filter.minCreateTime" :max="filter.maxCreateTime" /> -->
    </a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
import { AvFilter, getRandomColor, formatSize } from "./utils";

const {
  filter
} = defineProps<{ filter: AvFilter }>();


// todo
const { onChange } = defineEmits(["onChange"]);
</script>

<style scoped lang="less">
</style>