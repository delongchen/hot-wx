<template>
  <a-page-header
    title="User Name"
    style="border: 1px solid rgb(235, 237, 240); margin-bottom: 10px;"
  >
    <a-row type="flex">
      <a-statistic title="Status" value="Pending" />
      <a-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
      />
      <a-statistic title="Balance" prefix="$" :value="3345.08" />
    </a-row>
    <a-row>
      <div style="margin-left: 20px">
        <template v-for="item in children">
          <a class="space-link" @click="goChild(item.path)"
             :style="route.name === item.name ? { border: 'solid 1px',  } : null"
          >
            <component :is="item.meta.icon"/>
            {{ item.meta.text }}
          </a>
        </template>
      </div>
    </a-row>
  </a-page-header>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const children = route.matched[0].children

function goChild(path: string) {
  router.push({ path })
}
</script>

<style scoped>
.space-link {
  line-height: 24px;
  margin-right: 16px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
