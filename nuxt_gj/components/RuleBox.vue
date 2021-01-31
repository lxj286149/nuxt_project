<template>
  <div class="rulebox" @click.self="handleClick">
    <div class="inner">
      <div class="content">
        <div class="content-inner" >
          留下哈哈大股东嘎多尴尬的尬多个地方打广告
          火锅店噶华盛顿尬笑AV徐vxvxvggxgag
        </div>
         <span class="poster_share_savePic">长按图片保存并分享朋友圈</span>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  methods: {
    handleClick(e) {
      e.target;
      this.$emit('close');
      const vm = this;
      vm.$store.commit('openDioalog/openRiskDialog', {
        title: '请输入您的手机号领取优惠券',
        placeholder:'请输入您的手机号，快速领取',
        btn: '确认',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.rulebox {
 width: 100vw;
 height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  font-size: 18px;


  .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90vw;
    min-height: 90vh;
    transform: translate(-50%, -50%);

    .rule-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      background:url('../static/util/image.png') no-repeat;
      background-size: 100% 100%;
      .rule-title {
        font-size: 24px;
        padding: 1.2vw 4vw;
        font-weight: bold;
        color: #aa0000;
        text-shadow: 0px 0px 4px rgba(255, 97, 20, 0.57);
      }

    }


    .content {
      width: 100%;
      height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 3vw 3.2vw;
      .content-inner {
       width: 100%;
       height: 80vh;
       background-color: red;
      }
      .poster_share_savePic{
        position: relative;
        margin: 0 auto;
        text-align: center;
        display: block;
        margin-top: 5vh;
        font-size: 0.35rem;
        color: #ffffff;
        }

    }
  }
}
</style>
