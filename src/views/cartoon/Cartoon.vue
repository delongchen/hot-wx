<template>
    <a-list :grid="{ gutter: 16, column: 4}" :data-source="cartoonList">
    <template #renderItem="{ item }">
      <a-list-item>
        <cartoon-card :item="item" />
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import Vue,{ref} from 'vue'
import { getCartoonList } from '../../services/cartoon';
import { EhItem } from '../../types/EhItems';
import CartoonCard from './CartoonCard.vue'

const cartoonList = ref<EhItem[]>([])

const fetchData = () => {
    getCartoonList().then(res => {
        if(res?.length){
            cartoonList.value = res;
        }
    })
}

fetchData();
</script>
<style lang="less" scoped>

</style>