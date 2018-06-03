<template>
  <mu-container style="padding:10px">
    <h3>会议名称:{{meetName}}</h3>
    <mu-text-field v-model="addForm.userName"  label="姓名"  labelFloat full-width  />
    <mu-text-field v-model="addForm.telphone" type="number" label="手机"  labelFloat full-width  />
    <mu-text-field v-model="addForm.empName"  label="企业名称"  labelFloat full-width  />
    <mu-text-field v-model="addForm.post"  label="职务"  labelFloat full-width />
    <mu-text-field v-model="addForm.email"  label="邮箱"  labelFloat full-width  />
    <div class="mu-input full-width">
    <mu-radio value="单住" v-model="addForm.singleRoom" label="单住"></mu-radio>
    <mu-radio value="合住" v-model="addForm.singleRoom" label="合住"></mu-radio>
    <mu-radio value="不住" v-model="addForm.singleRoom" label="不住"></mu-radio>
    </div>
   <mu-button full-width color="primary" @click="onSubmit">报名</mu-button>
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
        addForm: {
         
        },
      }
    },
   
    methods: {
     onSubmit() {
       this.$router.push({ path:'/meetSignUpSucces'});
        
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

