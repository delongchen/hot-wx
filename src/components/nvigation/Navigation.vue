<template>
  <div class="international-header">
    <div class="mini-header">
      <div class="mini-header__content">
        <div style="{min-width: 400px}">
          <template v-for="page in pagesConfig">
            <router-link class="link-text" :to="page.path">{{ page.text }}</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {pages} from "./config";


export default defineComponent({
  name: 'Navigation',
  setup: (props, context) => {
    const pagesConfig = pages;
    return {
      pagesConfig
    }
  }
})
</script>

<style scoped lang="less">
.international-header {
  box-sizing: border-box;
}

.mini-header__content {
  box-sizing: border-box;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.fixed-top {
  .mini-header {
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(0, 0, 8%);
  }
}
.link-text{
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  line-height: 32px;
  white-space: nowrap;
  display: -ms-flexbox;
  display: flex;
}
}
.mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 56px;
}
</style>