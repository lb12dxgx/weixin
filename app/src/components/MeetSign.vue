<template>
 <div class="content">

  <div v-if="list.length<2">
    <mu-container v-if="flag">
      <h3>名称:{{meetName}}</h3>
     <mu-text-field v-model="userName"  label="报名时姓名" :errorText="error" labelFloat full-width  @focus="onUserName"/>
      
     <mu-button full-width color="primary" @click="onSubmit">签到</mu-button>
    </mu-container>
    <div class="alert-demo-wrapper" v-if="!flag" style="margin-top:10px">
        <mu-alert color="error" >
          <mu-icon value="warning"></mu-icon>无签到会议！
        </mu-alert>
    </div>
  </div>
  <div v-if="list.length>1">
    <mu-list textline="two-line">
      <mu-sub-header style="text-align:center" >
        <span style="color:red;font-weight:bold;" >
        {{errmsg}}
        </span>
      </mu-sub-header>
      <div v-for="item in list" @click="onHandle(item.meetSignUpId)">
      <mu-list-item  avatar button :ripple="true" >
          <mu-list-item-content>
            <mu-list-item-title>{{item.userName}}</mu-list-item-title>
            <mu-list-item-sub-title>
              <span style="margin-right:5px">手机号：{{item.telphone}}</span>
              <span>单位：{{item.empName}}</span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
    </div>
    </mu-list>  
  </div>
  

  </div>

  
</template>

<script>
  import Axios from 'axios';
  import {getMeet,signMeet,getSignMeet} from '../api/api.js';
  
  export default {
    data() {
      return { 
        meetId:'',
        meetName:'武汉排水会议',
        userName: '',
        error: '',
        flag:true,
        list:[],
        errmsg:'有重名！请选择个人信息'
      }
    },
   
    methods: {
     onSubmit() {
        getSignMeet({meetId:this.meetId,userName:this.userName}).then(data => {
          if(data.state==0){
            this.error=data.retData;
          }else{
            this.list=data.retData;
            if(data.retData.length==1){
              signMeet({meetSignUpId:data.retData[0].meetSignUpId}).then(data =>{
                if(data.state==0){
                  this.error=data.retData;
                }else{
                  this.$router.push({ path:'/meetSignSucces'});
                }
              })
            }
          }
        })
     },
     onUserName(){
      this.error="";
     },
     onHandle(meetSignUpId){
      signMeet({meetSignUpId:meetSignUpId}).then(data =>{
                if(data.state==0){
                  this.errmsg=data.retData;
                }else{
                  this.$router.push({ path:'/meetSignSucces'});
                }
              })
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

