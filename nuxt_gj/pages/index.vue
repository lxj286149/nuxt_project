<template>
  <div>
    <!-- 导航 -->
    <div class="main_xiantiaoys">
      <heade class="main_daohang"></heade>
    </div>

    <div class="middle-a" style="height: 800px;">
      <div class="middle-b">
        <!-- 类别 -->
        <div class="ind_bt_ax">
          <div class="ind_bt_bx">
            <span class="ind_bt_cx">工具们</span>
          </div>
          <div class="xiantiao_a"></div>
        </div>

        <nuxt-link to="jsonString">
          <div class="jt-box-a shouzhuazhua" @mouseenter="yiru(0)" @mouseleave="yiru(0)">
            <div class="jt-box-spana">动态接口生成</div>
            <div class="jt-box-ax"></div>
            <img src="~static/util/json.png" />
            <div class="zezaoceng" v-show="xianshi[0].key"></div>
          </div>
        </nuxt-link>


      </div>
    </div>

    <!-- 末尾 -->
    <!-- <foot></foot> -->
  </div>
</template>

<script>
  /*
  import foot from '~/components/foot.vue' */
  import heade from '~/components/util/utilHead.vue'
  import Qs from 'qs'
  export default {
    components: {
      heade
    },
    data() {
      return {
        xianshi: [{
          "key": false
        }],
      }
    },
    methods: {
      yiru: function(e) {
        // debugger
        this.xianshi[e].key = !this.xianshi[e].key;
        // this.xianshi = !this.xianshi;
      }
    },
    created: function() {

    },
    head() {
      return {
        title: '各种千奇百怪的小工具集合地',
        meta: [{
            name: "keywords",
            hid: "newk",
            content: "小工具-json-计算器-动态接口生成器"
          },
          {
            name: "description",
            hid: "newd",
            content: "各种千奇百怪的小工具集合地，后期会扩展更多要命的小工具，敬请期待。"
          }
        ],
        link: [{
          rel: 'icon',
          type: 'image/x-icon',
          href: '/util/favicon.ico'
        }],
      }
    }
  }
</script>

<style lang="css">
  @import "~/assets/css/util/utils.css";
</style>
