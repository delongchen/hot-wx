<template>
  <div class="video-card-reco">
    <div class="card-image">
      <picture class="card-cover">
        <img :src="videoImg" :alt="porn.video" loading="lazy" />
      </picture>
    </div>
    <div class="card-mask">
      <div class="card-mask-action">
        {{ videoName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { AvDesc } from "../../../types/AV";
import { isDev } from "../../../utils/helper";
import avImg from "../../../assets/avImg.png";
import { getVideoName } from "./utils";

const { porn } = defineProps<{ porn: AvDesc }>();

const videoImg = computed(() =>
  // isDev() ? avImg : `/av/covers/${porn.hash}.jpg`
  `/av/covers/${porn.hash}.jpg`
);

const videoName = computed(() => porn.id ?? getVideoName(porn.video));
</script>

<style scoped lang="less">
.video-card-reco {
  width: 260px;

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

      img {
        width: 260px;
      }
    }
  }

  .card-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 92%;
    height: 100%;
    z-index: 2;
    opacity: 1;
    transition: all 0.2s linear 0.2s;
    pointer-events: none;
    margin: 0 11px 0 11px;
    .card-mask-action {
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 16px 8px 6px;
      width: 100%;
      height: 38px;
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
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>