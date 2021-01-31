<template>
  <div class="banner">
    <a href="/" class="top-logo"><img src="../static/util/json.png"/></a>
    <button class="rule" @click="handleToggle">活动规则</button>
    <transition name="fade">
      <rule-box v-if="visible" @close="handleClose" />
    </transition>
  </div>
</template>

<script>
import RuleBox from './RuleBox.vue';

export default {
  components: {
    RuleBox,
  },
  props: [],
  data() {
    return {
      visible: false,
    };
  },
  computed: {

  },
  watch: {
    visible() {
      this.checkIsShowMask();
    },

  },
  methods: {
    handleToggle() {
      this.visible = !this.visible;
    },
    handleClose() {
      this.visible = false;
    },
    // 弹窗开启之后禁止页面的滚动
    checkIsShowMask() {
      if (this.visible) {
        document.querySelector('body').setAttribute('style', 'overflow:hidden');
        document.body.addEventListener('touchmove', this.bodyScroll, true);
      } else {
        document.querySelector('body').removeAttribute('style');
        document.body.removeEventListener('touchmove', this.bodyScroll, true);
      }
    },
    // 禁止滚动的浏览器兼容操作
    bodyScroll(event) {
      event.preventDefault();
      event.stopPropagation();
    },
  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 100vw;
  height: 51.3vw;
  background: url(../static/util/nangua.jpg) no-repeat center top;
  background-size: 100% 100%;
  position: relative;
  .top-logo {
    display: block;
    width: 18.4vw;
    height: 9.6vw;
    position: absolute;
    left: 4vw;
    top: 0;
    background-color: transparent;
  }

  .rule {
    background-color: transparent;
    position: absolute;
    right: 4.3vw;
    top: 3.2vw;
    height: 30px;
    line-height: 28px;
    border: 1px solid #FFEB9B;
    border-radius: 15px;
    color: #5555ff;
    font-size: 16px;
    text-align: center;
    padding: 0 11px;
  }
}
</style>
