<template>

  <mu-card style="width: 100%;  margin: 0 auto;">
    
    <mu-card-media>
      <img src="http://120.79.20.2/file/downloadByBusi.do?bussinessId=d7b3c92c-61ca-4909-9c80-2ecb17f6f209">
    </mu-card-media>
    <mu-card-title title="第二次管廊大会"></mu-card-title>
    <div class="meettitle">
      <mu-row gutter >
        <mu-col span="4" >
          时间：2018-10-12
        </mu-col>
        <mu-col span="4" >
           <mu-button color="primary" small @click="meetSign">报名</mu-button>
        </mu-col>
         <mu-col span="4" >
          地点：武汉
        </mu-col>
      </mu-row>
    </div>
    <mu-card-text style="min-height:350px;height:100%">
      散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
      调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
      似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
      找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
    </mu-card-text>
  
  </mu-card>

</template>

<script>
  import {getMeet,signMeet} from '../api/api.js';
  
  export default {
    data() {
      return { 
        meetId:'',
        meetName:'武汉排水会议',
        telphone: '',
        error: '',
        flag:true
      }
    },
   
    methods: {
     meetSign() {
       
            this.$router.push({ path:'/meetSignUp'});
        
     },
     onTelphone(){
      this.error="";
     }
    },
    mounted(){
      getMeet().then(data => {
           if(data.state==1){
              this.flag=true;
              this.meetId =data.retData.meetId;
              this.meetName =data.retData.meetName;
           }else{
            this.flag=false;
           }
        });
    }
  }
</script>

<style type="text/css">
.meettitle{
  padding-left: 16px;
  font-size: 12px;
  color: rgba(0,0,0,.54);
}
  
</style>

