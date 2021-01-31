<template>
  <div class="risk-dialog" v-if="chanceDialog.visible" @touchmove.prevent>
    <div class="risk-dialog-modal" @click="close"></div>
    <transition name="bounce" :duration="300">
      <div class="risk-chance-dialog">
        <img  @click="close"  class='close' src="../static/util/close.png">
        <div class="risk-chance-dialog-wapper">
          <div class="chance-title">{{ chanceDialog.title }}</div>

          <div class="chance-for">
            <input class="chance-input" v-model="userPhone" :placeholder="chanceDialog.placeholder" maxlength="11" />

          </div>

          <div class="chance-join" @click="ensure">{{ chanceDialog.btn }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  // eslint-disable-next-line
import { mapGetters } from 'vuex';
import { Toast } from 'mint-ui';

export default {

  data() {
    return {
      userPhone:'',
    };
  },
  computed: {
    chanceDialog() {
      return this.$store.state.openDioalog.riskDialog;
    },
  },
  methods: {
    close() {
      this.$store.commit('openDioalog/closeRiskDialog');
    },
    ensure() {
      const vm = this;
      let mes = '';
      if (!vm.userPhone) {
        mes = '请输入手机号码';
      } else if (!vm.phoneValidate(vm.userPhone)) {
        mes = '请输入正确的手机号码';
      }
      if (mes !== '') {
        vm.$toast(mes);
        return;
      }
    },

  },
};
</script>
<style lang="less" type="text/less">
  @white: #fff;
@black: #2e2f33;
@grey: #d8dce5;
@orange: #ff6600;

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 1);
  }
}
.risk-dialog {
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
  .risk-dialog-modal {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
    position: absolute;
  }
}
.risk-chance-dialog {
  position: relative;
  top: calc(50vh - 25vw);
  margin: auto;
  box-sizing: border-box;
  width: 80vw;
  height: 50vw;
  padding: 5vw 4vw 5vw;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: none;
  .close {
    z-index: 2;
    position: absolute;
    right: 3vw;
    top: 3vw;
    display: block;
    width: 5vw;

  }
  .risk-chance-dialog-wapper {
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
    .chance-title {
      color:#666666;
      text-align: center;
      font-size: 0.275rem;
      letter-spacing: 0.5vw;
      font-weight: bold;
      margin-top: 4vw;
      padding: 2vw 0vw;
    }
    .chance-for {
      position: relative;
      line-height: 40px;
      margin-top: 3vw;
      .chance-input {
        z-index: 2;
        box-sizing: border-box;
        color: #777;
        width: 60vw;
        height: 10vw;
        line-height: 38px;
        font-size: 28px;
        letter-spacing:6px;
        text-align: center;
        border: 1px solid #A1A7AE;
        border-radius: 4px;
      }
    }
    .chance-pp {
      text-align: center;
      margin: 8px auto;
      a {
        color: @orange;
      }
    }
    .chance-join {
      width: 40vw;
      height: 10vw;
      line-height: 10vw;
      color: @white;
      background-color: @orange;
      margin-top: 5vw;
      border-radius: 3px;
      text-align: center;
      font-size: 0.275rem;
      font-weight: bold;
      border-radius:4px;

    }
  }
}
</style>
