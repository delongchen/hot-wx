<template>
  <div class="video-card-reco">
    <div class="card-image">
      <picture class="card-cover">
        <img :src="porn.img" :alt="porn.name" loading="lazy" />
      </picture>
    </div>
    <div class="card-mask">
      <div class="card-mask-action">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

interface Porn {
  name: string;
  img: string;
}
const {
  porn
} = defineProps<{ porn: Porn }>();



</script>

<style scoped lang="less">
.video-card-reco {
  width: 100%;
  .card-image {
    position: relative;
    padding-top: 56.25%;
    background-color: var(--graph_bg_regular);
    border-radius: 6px;
    z-index: 1;
    .card-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
      border-radius: 6px;
      overflow: hidden;
      vertical-align: middle;
    }
  }
  .card-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 1;
    transition: all 0.2s linear 0.2s;
    pointer-events: none;
    .card-mask-action {
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 16 px 8 px 6 px;
      width: 100%;
      height: 38 px;
      font-size: var(--subtitle-font-size);
      line-height: var(--icon-size);
      color: #fff;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 2;
      box-sizing: border-box;
      border-bottom-left-radius: 8 px;
      border-bottom-right-radius: 8 px;
    }
  }
}
</style>