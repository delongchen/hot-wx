<template>
    <div class="porn-container">
        <a-list :grid="{ gutter: 24 }" :data-source="goodAVList">
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
</template>
<script lang="ts" setup>
import Vue, { reactive, ref } from 'vue';
import { getGoodAVs } from '../../services/av';
import { AvDesc } from '../../types/AV';
import PornCard from './components/PornCard.vue';

const goodAVList = ref<AvDesc[]>([]);

getGoodAVs().then((res) => {
    if (res?.length) {
        goodAVList.value = res;
        console.log(goodAVList.value)
    }
})



</script>
<style lang="less" scoped>
.porn-container {
    padding: 24px;
}
</style>