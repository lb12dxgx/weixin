<template>

 <mu-container >
  <mu-row gutter style="margin-bottom:15px">
    <mu-col span="6" >
      <mu-paper class="demo-paper" circle :z-depth="3" style="margin-left:20px" @click="meet">
        <div style="margin-top:40px">会议信息</div>
      </mu-paper>
    </mu-col>
    <mu-col span="6">
      <mu-paper class="demo-paper" circle :z-depth="3" style="margin-left:20px" @click="meetSign">
        <div style="margin-top:40px">会议签到</div>
      </mu-paper>
    </mu-col>
  </mu-row>
  <mu-divider  shallow-inset ></mu-divider>

  <mu-row gutter style="margin-bottom:15px">
    <mu-col span="6" >
      <mu-paper class="demo-paper"  :z-depth="4" style="margin-left:20px">
        <div style="margin-top:40px">培训信息</div>
      </mu-paper>
    </mu-col>
    <mu-col span="6">
      <mu-paper class="demo-paper"  :z-depth="4" style="margin-left:20px">
        <div style="margin-top:40px">培训签到</div>
      </mu-paper>
    </mu-col>
  </mu-row>
  <mu-divider  shallow-inset ></mu-divider>

  <mu-row gutter style="margin-bottom:15px">
    <mu-col span="6" >
      <mu-paper class="demo-paper" circle :z-depth="5" style="margin-left:20px">
        <div style="margin-top:40px">事故信息</div>
      </mu-paper>
    </mu-col>
    <mu-col span="6">
      <mu-paper class="demo-paper" circle :z-depth="5" style="margin-left:20px">
        <div style="margin-top:40px">事故上报</div>
      </mu-paper>
    </mu-col>
  </mu-row>
  <mu-divider  shallow-inset ></mu-divider>

</mu-container>
  
</template>

<script>
  import Axios from 'axios';
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
        this.$router.push({ path:'/meetSign'});
     },
     meet() {
        this.$router.push({ path:'/meet'});
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
.demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin-top: 20px;
    text-align: center;

}
  
</style>

