<template>
  <a-card class="card" :bodyStyle="noMarginAndPadding" @click="clickCard">
    <template #cover>
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </template>
    <a-typography-paragraph
      :style="{ ...miniFont, ...noMarginAndPadding }"
      :ellipsis="ellipsis"
      :content="item.published.title"
    />
    <div class="action-container">
      <a-space :size="24" :style="{ marginRight: '12px' }">
        <a-badge>
          <template #count>
            <span class="number-count">{{ num.favorite }}</span>
          </template>
          <HeartFilled :style="{ color: 'red', fontSize: '1.2rem' }" />
        </a-badge>
        <a-badge>
          <template #count>
            <span class="number-count">{{ num.len }}</span>
          </template>
          <FileImageFilled :style="{ color: '#52c41a', fontSize: '1.2rem' }" />
        </a-badge>
        <a-badge>
          <template #count>
            <span class="number-count">{{ item.published.rating }}</span>
          </template>
          <Rate :value="item.published.rating" />
        </a-badge>
        <a-badge>
          <template #count>
            <span class="number-count">{{
              item.published.language.split(" ")[1]
            }}</span>
          </template>
          <Flag :iso="item.published.language.split(' ')[0]" />
        </a-badge>
      </a-space>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { EhItem } from "../../types/EhItems";
import Rate from "../../components/rate/Rate.vue";
import { HeartFilled, FileImageFilled } from "@ant-design/icons-vue";
import { computed } from "@vue/reactivity";
import { formatLargeNumber } from "./utils";
import Flag from "../../components/flag/Flag.vue";
const miniFont = {
  fontSize: "0.75rem",
  fontWeight: "bold",
};

const noMarginAndPadding = {
  padding: "0px",
  margin: "0px",
};

const ellipsis = { rows: 2, expandable: false };

const { item } = defineProps<{ item: EhItem }>();
const emit = defineEmits<{ (event: "click"): void }>();

const clickCard = () => {
  emit('click')
}

const num = computed(() => {
  return {
    favorite: formatLargeNumber(item.published.favorite),
    len: formatLargeNumber(item.published.len),
  };
});
</script>

<style lang="less">
.card {
  // max-width: 200px;
  .ant-descriptions-header {
    margin-bottom: 2px !important;
    font-size: 0.75rem;
  }
  .ant-descriptions-title {
    white-space: unset;
  }
  .number-count {
    font-size: 0.5rem;
    color: #a1a199;
    transform: translate(80%, -50%);
  }
  .action-container {
    display: flex;
    justify-content: center;
    margin-top: 12px;
  }
}
</style>