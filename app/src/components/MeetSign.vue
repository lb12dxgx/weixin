<template>
  <div class="content">


  <mu-container v-if="flag">
    <h3>会议名称:{{meetName}}</h3>
   <mu-text-field v-model="telphone" type="number" label="报名时手机号" :errorText="error" labelFloat full-width  @focus="onTelphone"/>
    
   <mu-button full-width color="primary" @click="onSubmit">签到</mu-button>
  </mu-container>
  <div class="alert-demo-wrapper" v-if="!flag" style="margin-top:10px">
      <mu-alert color="error" >
        <mu-icon value="warning"></mu-icon>无签到会议！
    </mu-alert>
  </div>

  </div>

  
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
     onSubmit() {
        signMeet({meetId:this.meetId,telphone:this.telphone}).then(data => {
          if(data.state==0){
            this.error=data.retData;
          }else{
            this.$router.push({ path:'/meetSignSucces'});
          }
        })
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
  
</style>

