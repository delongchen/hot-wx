<template>
  <div class="rate-star">
    <div class="rate-star-first" :style="{ width: widthPercent }">
      <StarFilled :style="starStyle" />
    </div>
    <div class="rate-star-second"><StarFilled /></div>
  </div>
</template>

<script lang="ts" setup>
import { StarFilled } from "@ant-design/icons-vue";
import { computed } from "@vue/reactivity";

const starStyle = {
  color: "#fadb14",
};

const { value = 5 } = defineProps<{ value: number }>();

const widthPercent = computed<string>(() => {
  // 评分都太高了
  return (value / 6) * 100 + "%";
});
</script>
<style lang="less" scoped>
.rate-star {
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  color: inherit;
  cursor: pointer;
}
.rate-star-first {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 1;
}
.rate-star-first,
.rate-star-second {
  color: #f0f0f0;
  transition: all 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
