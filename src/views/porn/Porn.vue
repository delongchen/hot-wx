<template>
  <div>
    <porn-filter v-if="goodAvsFilter" :filter="goodAvsFilter" />
    <div class="porn-container">
      <a-list :grid="{ gutter: 24 }" :data-source="tempdispalyGoodAvList">
        <template #renderItem="{ item }">
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
import Vue, { computed, ref, watch } from 'vue';
import { getDirtyAVs, getGoodAVs } from '../../services/av';
import { AvDesc, DirtyAvDesc } from '../../types/AV';
import PornCard from './components/PornCard.vue';
import { AvFilter } from './components/utils';
import PornFilter from './components/PornFilter.vue';
import { throttle, debounce } from 'lodash';

const goodAVList = ref<AvDesc[]>([]);
const dirtyAVList = ref<DirtyAvDesc[]>([]);

const goodAvsFilter = ref<AvFilter>();
const dirtyAvsFilter = ref<AvFilter>();

const tempdispalyGoodAvList = ref<AvDesc[]>([]);

const filter = debounce(() => {
  tempdispalyGoodAvList.value = (goodAvsFilter.value?.filterAvs(goodAVList.value) ?? goodAVList.value) as AvDesc[]
}, 200)

watch(goodAvsFilter, () => {
  filter()
}, {
  deep: true
})

const dispalydirtyAvList = computed(() => {
  return dirtyAvsFilter.value?.filterAvs(dirtyAVList.value) ?? dirtyAVList.value
})


const init = () => {
  getGoodAVs().then((res) => {
    if (res?.length) {
      goodAvsFilter.value = AvFilter.fromAvs(res, true);
      goodAVList.value = res;
    }
  });
  getDirtyAVs().then((res) => {
    if (res.length) {
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