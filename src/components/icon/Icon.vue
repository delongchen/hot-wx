<template>
  <CreateIcon :icon="icon" :class="props.class" :style="props.style" />
</template>
<script lang="ts" setup>
import { CSSProperties, ref } from "vue";
import { CreateIcon } from "./icon";
const icon = ref("DashboardOutlined");

const props = defineProps<{ style?: CSSProperties, class?:string }>();
</script>
