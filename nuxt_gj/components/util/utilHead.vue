<template>
  <div>

    <div :class="{ zhuangtai:true ?  'xsx': 'ycx'}"></div>

    <div @scroll="paperscroll()" class="zuiwaidex" :class="{'bujuclass1x': zhuangtai==true,'bujuclass2x': zhuangtai==false}">
      <div id="daohang" class="main_maxwidth ind_flex" ref="daohangbianhua">
        <!-- logo -->
        <nuxt-link to="/" style="display: flex;align-items: center;">
          <span class="picx cssr_tool2" id="wokao" ref="wokao"></span>
        </nuxt-link>
        <!-- 导航选项-->
        <div style="display: flex;justify-content:flex-end;flex-direction:row;width:800px;">
          <nuxt-link to="/">
            <div class="ind_btleft dh-btwb" id="main_url">
              <span class="picx cssr_tool1 dh-xuanzhuan"></span>
              <div cladh-xuanzhuanss="ind_dhxtb_wb ">工具</div>
            </div>
          </nuxt-link>

          <!-- <nuxt-link to="/fbgn">
            <div class="ind_btleft " id="main_url">
              <span class="pic cssr_c14 dh-xuanzhuan"></span>
              <div class="ind_dhxtb_wb dh-btwb">其他</div>
            </div>
          </nuxt-link> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    setSessionStorage,
    getSessionStorage,
    getUserStorage,
    setUserStorages
  } from '~/plugins/util';
  export default {
    data() {
      return {
        zhuangtai: false, //导航栏状态，样式切换
      }
    },
    created: function() {

    },
    mounted: function() {
      if (process.env.VUE_ENV === 'client') {
        window.addEventListener("scroll", this.paperscroll);
      }
    },
    methods: {
      paperscroll: function() {
        if (process.env.VUE_ENV === 'client') {
          // let sx = this.$refs.daohangbianhua;
          let h = document.documentElement.scrollTop; //滚动条下滑的高度
          // let cHeight = sx.clientHeight; //div的高度
          if (h > 0) {
            this.zhuangtai = true;
          } else {
            this.zhuangtai = false;
          }
        }
      },

    }
  }
</script>

<style>
  .picx {
    background-image: url("~static/util/image.png") ;
    display: block;
  }

  .cssr_tool2 {background-position: -50px -0px; width:268px; height:64px; }
  .cssr_tool1 {background-position: -0px -0px; width:32px; height:32px; }

  .dh-btwb {
    transition: color 2s;
  }

  .dh-btwb:hover {
    color: #ff9127 !important;
  }

  .xsx {
    width: 100%;
    height: 80px;
    position: absolute;
  }

  .ycx {
    display: none;
  }

  .zuiwaidex {
    height: 80px;
    width: 100%;
    background-color: #ffffff !important;
    border-bottom: 1px solid #ff9127;
  }

  .bujuclass1x {
    position: fixed !important;
    z-index: 999;
    transition: box-shadow 2s;
    box-shadow: 0 0px 10px #ff9127;
  }

  .bujuclass2x {
    transition: box-shadow 1s;
    box-shadow: none;
  }
</style>
