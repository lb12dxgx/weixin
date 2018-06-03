<template>
  <div class="content">


  <mu-container v-if="flag">
    <h3>培训名称:{{trainName}}</h3>
   <mu-text-field v-model="telphone" type="number" label="报名时手机号" :errorText="error" labelFloat full-width  @focus="onTelphone"/>
    
   <mu-button full-width color="primary" @click="onSubmit">签到</mu-button>
  </mu-container>
  <div class="alert-demo-wrapper" v-if="!flag" style="margin-top:10px">
      <mu-alert color="error" >
        <mu-icon value="warning"></mu-icon>无签到培训！
    </mu-alert>
  </div>

  </div>

  
</template>

<script>

  import {getTrainPlan,signTrainPlan} from '../api/api.js';
  
  export default {
    data() {
      return { 
        trainPlanId:'',
        trainName:'武汉排水会议',
        telphone: '',
        error: '',
        flag:true
      }
    },
   
    methods: {
     onSubmit() {
        signTrainPlan({trainPlanId:this.trainPlanId,telphone:this.telphone}).then(data => {
          if(data.state==0){
            this.error=data.retData;
          }else{
            this.$router.push({ path:'/trainSignSucces'});
          }
        })
     },
     onTelphone(){
      this.error="";
     }
    },
    mounted(){
      getTrainPlan().then(data => {
           if(data.state==1){
              this.flag=true;
              this.trainPlanId =data.retData.trainPlanId;
              this.trainName =data.retData.trainName;
           }else{
            this.flag=false;
           }
        });
    }
  }
</script>

<style type="text/css">
  
</style>

