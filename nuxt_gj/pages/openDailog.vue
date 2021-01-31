<template>
  <div>
    <div v-if="poster_btn_dialog" @click="maskClose"  class="poster_mask" ></div>
    <div class="poster_outside_warp">

      <div class="poster_head_warp">
        <span class="poster_span1">八戒财税</span>
        <span class="poster_title_span2">五周年庆 感恩献礼</span>
        <div class="poster_btn_span3">送200元无门槛现金券</div>
        <span class="poster_time_span4">3月11日-3月17日</span>

        <div class="poster_share_btn_warp" >
          <div class="poster_share_btn" @click="getPosterShareBtn">
            分享海报&nbsp; 领200元无门槛劵
          </div>

          <div class='poster_btn_dialog'  v-if="poster_btn_dialog">
            <span class="poster_btn_dialog_span" @click="handleToggle">在活动期间</span>
            <span  @click="handleToggleNo">不在活动期间</span>
          </div>
        </div>
      </div>
      <transition name="fade">
        <rule-box v-if="visible" @close="handleClose" />
      </transition>
      <sucessDailog></sucessDailog>
      <share-rule></share-rule>

    </div>
  </div>
</template>

<script>
  import sucessDailog from '../components/sucessDailog.vue'
  import ShareRule from '../components/ShareRule.vue'
  import { Toast } from 'mint-ui';
  export default {
    components: {
      sucessDailog,
      ShareRule
    },
    data() {
      return {
        poster_btn_dialog: false,
          visible: false,
      };
    },
    mounted() {

    },
    methods: {
      maskClose(){
       this.poster_btn_dialog = !this.poster_btn_dialog
      },
      handleSubmit() {
        const vm = this;
        vm.$store.commit('openDioalog/openRiskDialog', {
          title: '企业经营风险分析及应对方案',
          desc: '仅用于接收测算结果，请放心填写',
          btn: '免费获取测算结果',
        });

      },
      getPosterShareBtn() {
        this.poster_btn_dialog = !this.poster_btn_dialog
      },
      handleToggle() {
        this.visible = !this.visible;
        this.getPosterShareBtn()
      },
      handleClose() {
        this.visible = false;
      },
      handleToggleNo() {
       Toast({
         message: '活动未开始,暂不能参加！！',
         duration: 2000,
       });
       this.getPosterShareBtn()
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
  }
</script>

<style>
  .poster_outside_warp {
    width: 100vw;
    height: 100vh;
    background-color: #0000ff;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .poster_head_warp {
    width: 90vw;
    background-color: #008000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
     margin-bottom:8vw;
  }

  .poster_mask {
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background: #000;
    position: absolute;
    z-index: 222;
  }

  .poster_span1 {
    font-size: 0.275rem;
    color: #d8d8d8;
    padding: 20px 0px;
  }

  .poster_title_span2 {
    color: #232b2d;
    font-weight: bold;
    font-size: 0.55rem;
    padding: 20px 0px;
  }

  .poster_btn_span3 {
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 0.225rem;
    color: #FFFFFF;
    background-color: #9b9b9b;
    border-radius: 50px;
  }

  .poster_time_span4 {
    padding: 20px 0px;
    font-size: 0.275rem;
    color: #868688;
  }

  .poster_share_btn_warp {
    width: 90vw;
    margin-top: 40vh;
    position:relative;
  }

  .poster_share_btn {
    height: 12vw;
    width: 90vw;
    font-size: 4vw;
    font-weight: 500;
    color: #FFFDEF;
    line-height: 12vw;
    text-align: center;
    background-color: orangered;
    border-radius: 10px;
  }

  .poster_btn_dialog {
    width: 22vw;
    padding: 1vw;
    background-color: #ff557f;
    z-index: 999;
    background-color: #FFFFFF;
    border: 1px #C7C7C7 solid;
    display: flex;
    border-radius: 1vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: calc(-22vw / 4);
    margin-left: calc(90vw - 22vw - 22vw /2);
    position:absolute;
  }

  .poster_btn_dialog span {
    display: block;
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 600;
    width: 20vw;
    height: 3vh;
    text-align: center;
    border-radius: 1vw;
    line-height: 3vh;
    background-color: #CCCCCC;
    border: 1px #C7C7C7 solid;

  }

  .poster_btn_dialog_span {
    margin-bottom: 1vw;
  }

  .icon-liwu {
    font-size: 6px;
    color: #00FFEA;
  }

  /**
 防止闪烁
*/
  @media (min-width: 320px) {
    html {
      font-size: 42.6667px;
    }
  }

  @media (min-width: 360px) {
    html {
      font-size: 48px;
    }
  }

  @media (min-width: 375px) {
    html {
      font-size: 50px;
    }
  }

  @media (min-width: 384px) {
    html {
      font-size: 51.2px;
    }
  }

  @media (min-width: 414px) {
    html {
      font-size: 55.2px;
    }
  }

  @media (min-width: 448px) {
    html {
      font-size: 59.7333px;
    }
  }

  @media (min-width: 480px) {
    html {
      font-size: 48px;
    }
  }

  @media (min-width: 512px) {
    html {
      font-size: 68.2667px;
    }
  }

  @media (min-width: 544px) {
    html {
      font-size: 72.5333px;
    }
  }

  @media (min-width: 576px) {
    html {
      font-size: 76.8px;
    }
  }

  @media (min-width: 608px) {
    html {
      font-size: 81.0667px;
    }
  }

  @media (min-width: 640px) {
    html {
      font-size: 85.3333px;
    }
  }

  @media (min-width: 750px) {
    html {
      font-size: 100px;
    }
  }

  .mint-toast {
    z-index: 9999;
    min-width: 60vw;
  }
</style>
