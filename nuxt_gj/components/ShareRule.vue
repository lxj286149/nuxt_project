<template>

  <div class="share_rule_warp">
    <span v-for="(item,index) in shareRules" :key="index">
      {{item.activityRule}}
    </span>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        shareRules: [{
            activityRule: "活动规则"
          },
          {
            activityRule: "活动规则:活动期间(2021.3.11-3.17)分享海报至朋友圈,可获得200元无门槛现金券张."
          },
          {
            activityRule: "现金券使用说明:"
          },
          {
            activityRule: "1、使用时间:2021年3月11日-3月31日;"
          },
          {
            activityRule: "2、使用范围:购买八戒财税企业服务且订单金额≥2599元时使用,代账续费除外;"
          },
          {
            activityRule: "3、现金券仅限在有效期间内使用，过期作废;"
          },
          {
            activityRule: "4、单个用户(同一手机号码视作同一用户）最多可获得—张现金券;"
          },
          {
            activityRule: "5、现金券不能兑换现金，不找零，不退换;"
          },
          {
            activityRule: "6、登陆后，在【个人中心】可查看优惠券—览表，了解该券的详细信息。"
          },
          {
            activityRule: "7、使用现金券提交的订单，在订单未支付时取消订单，则订单取消后，系统自动返还相应的现金券。"
          },
          {
            activityRule: "8、使用现金券后享受优惠的商品，本公司根据折扣后顾客实际支付的金额开具发票。"
          },
          {
            activityRule: "9本规则的最终解释权归八戒财税(重大八戒财云网络科技有限公司）所有。"
          },
        ]
      };
    },
  }
</script>

<style>
  .share_rule_warp {
    width: 90vw;
    background-color: #00557f;
    font-size: 0.275rem;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #a6adb0;
    margin: 0 auto;
  }
</style>
