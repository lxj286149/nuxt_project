<template>
  <div>
    <!-- 导航 -->
    <div class="main_xiantiaoys">
      <heade class="main_daohang"></heade>
    </div>

    <div class="middle-a">
      <div class="middle-b">
        <div>工具名称：动态接口</div>
        <div>工具如何使用：1.在文本框中填入JSON字符串，或者普通字符串。2.点击生成，3.获得此json的临时接口</div>
        <div>工具面向人群：前端开发人员</div>
        <textarea style="width: 100%;height: 300px;resize:none;" v-model="jsonObj.jsonString"></textarea>
        <div>生成的链接地址（点击fu制）：</div>
        <input :value="posturl" readonly="readonly"  class="inputs" @click="selectValue($event)"/><br>
        <button @click="addJsonString()">提交</button>
      </div>
    </div>

  </div>
</template>

<script>
  import heade from '~/components/util/utilHead.vue'
  import Qs from 'qs'
  export default {
    components: {
      heade
    },
    data() {
      return {
        posturl: "",//生成的地址
        jsonObj:{
          jsonString:''
        }
      }
    },
    methods: {
      // 点击选中所有
      selectValue: function(e) {
      	if(this.posturl != ""){
          e.currentTarget.select();
          document.execCommand('Copy');
          this.$message('复制成功');
        }else{
          this.$message('没有链接生成');
        }
      },
      addJsonString(){
        let that = this;
        // this.jsonObj.jsonString = this.jsonObj.jsonString.trim();
        //去除所有空格
        this.jsonObj.jsonString = this.jsonObj.jsonString.replace(/\s+/g,"");
       //去
        this.jsonObj.jsonString = this.jsonObj.jsonString.replace(/[\r\n]/g,"");
        this.$axios.post('utils/addJsonString',Qs.stringify(this.jsonObj)).then(function(kk) {
          if(kk.data.code == 1){
            let vals = kk.data.data;
            console.log(vals)
            that.posturl = that.$store.state.Purl2+'selectJsonString?jsonStringId='+vals;
          }
        })
      }
    },
    created: function() {

    },
    head() {
      return {
        title: '临时接口-临时接口生成-前端开发-json字符串转接口',
        meta: [{
            name: "keywords",
            hid: "newk",
            content: "前端小工具-json-前端开发-json转接口-自定义接口-临时接口"
          },
          {
            name: "description",
            hid: "newd",
            content: "此工具能够把json字符串转为临时接口，学习及测试良心伙伴。"
          }
        ]
      }
    }
  }
</script>

<style lang="css">
  @import "~/assets/css/util/utils.css";
  .inputs{
    width: 450px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
