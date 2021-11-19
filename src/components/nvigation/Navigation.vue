<template>
  <a-menu v-model:selectedKeys="selectKeys" mode="horizontal" class="header">
    <a-menu-item v-for="page in pages" :key="page.path">
      <template #icon>
        <Icon :icon="page.icon" class="header" :style="{fontSize: '1rem'}"/>
      </template>
      <router-link :to="page.path">{{ page.text }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { pages } from "./config";
import Icon from "../icon/Icon.vue";

const route = useRoute();



const selectKeys = ref<string[]>([route.path]);
watch(route, () => {
  console.log(route.path)
  selectKeys.value = [route.path]
})
</script>

<style scoped lang="less">
.header{
  font-size: 1.2rem;
  margin-bottom: 24px;
}
</style>