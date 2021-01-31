<template>

  <div >
    <div class="redStyle">
      <div :class="['blueStyle',index===current ? 'blueStyle1':'']"
       v-for="(item,index) in items"
        :key="index"
        @click="changindex(index)"
        >{{item}}</div>
    </div>
  </div>
</template>
<script>
 export default {
   data() {
     return {
       active: false,
       isactive:true,
       items:["项目1","项目2","项目3","项目4"],
       current:0,
     }
   },
   created: function() {

   },
   mounted: function() {

   },
   methods: {
     changindex(index){
        this.current = index;

     }
     },
 }
</script>

<style>
    .redStyle{
      width: 700px;
      height: 200px;
      margin: 0  auto;
      background-color: #00FFEA;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .blueStyle{
      margin-right: 10px;
      width: 150px;
      height: 200px;
      background-color: red;
      color: white;
    }
    .blueStyle1{
      background-color: #ffff00;
      color: red;
      transition: all 4s ease-in-out ;
      box-shadow: 0px 0px 10px 0px rgba(0, 255, 127, 0.6);
    }
     .blueStyle1:hover{
       transform: rotate(-360deg);
       cursor: pointer;
     }
</style>
