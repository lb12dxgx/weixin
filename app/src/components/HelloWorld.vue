<template>
  <div class="content">
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
     118地下管线挖据平台
  </mu-appbar>   
  <mu-container>
    <h3>会议名称:{{meetName}}</h3>
   <mu-text-field v-model="telphone" type="number" label="报名时手机号" :errorText="error" labelFloat full-width />
    
   <mu-button full-width color="primary" @click="onSubmit">签到</mu-button>
  </mu-container>
  </div>

  
</template>

<script>
  import Axios from 'axios';
  
  export default {
    data() {
      return {
        meetName:'武汉排水会议',
        telphone: '',
        error: ''
      }
    },
   
    methods: {
     onSubmit() {

     }
    },
    mounted(){
      
    }
  }
</script>

<style type="text/css">
  
</style>

