<template>
  <mu-container>
    <mu-list textline="three-line">
    <mu-sub-header>会议信息</mu-sub-header>
    <mu-list-item avatar :ripple="true" button @click="meetView">
      <mu-list-item-action>
        <mu-avatar>
           2月
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
        <mu-list-item-sub-title>
          周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="true" button>
      <mu-list-item-action>
        <mu-avatar>
         3月
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
        <mu-list-item-sub-title>
          周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
  </mu-container>
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
     meetView() {
        this.$router.push({ path:'/meetView'});
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

