<template>
<div>
  <porn-filter v-if="goodAvsFilter" :filter="goodAvsFilter" />
  <div class="porn-container">
        <a-list :grid="{ gutter: 24 }" :data-source="dispalyGoodAvList">
            <template #renderItem="{item}">
                <a-list-item>
                    <porn-card :porn="item" />
                </a-list-item>
            </template>
        </a-list>
        <!-- <template v-for="(porn) in goodAVList" :key="porn.hash">
            <porn-card :porn="porn" />
        </template>-->
    </div>
</div>
    
</template>
<script lang="ts" setup>
import Vue, {  computed, ref } from 'vue';
import {getDirtyAVs, getGoodAVs} from '../../services/av';
import {AvDesc, DirtyAvDesc} from '../../types/AV';
import PornCard from './components/PornCard.vue';
import { AvFilter } from './components/utils';
import PornFilter from './components/PornFilter.vue';

const goodAVList = ref<AvDesc[]>([]);
const dirtyAVList = ref<DirtyAvDesc[]>([]);

const goodAvsFilter = ref<AvFilter>();
const dirtyAvsFilter = ref<AvFilter>();

const dispalyGoodAvList = computed(() => {
  return goodAvsFilter.value?.filterAvs(goodAVList.value) ?? goodAVList.value
})
const dispalydirtyAvList = computed(() => {
  return dirtyAvsFilter.value?.filterAvs(dirtyAVList.value) ?? dirtyAVList.value
})


const init = () => {
  getGoodAVs().then((res) => {
    if (res?.length) {
      goodAvsFilter.value = AvFilter.fromAvs(res, true)
      goodAVList.value = res;
    }
  });
  getDirtyAVs().then((res) => {
    if(res.length){
      dirtyAvsFilter.value = AvFilter.fromAvs(res, false);
      dirtyAVList.value = res;
    }
  })
};
init();





</script>
<style lang="less" scoped>
.porn-container {
    padding: 24px;
}
</style>