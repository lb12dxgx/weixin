<template>
  <div class="content">
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
     118地下管线挖据
  </mu-appbar>   
  <mu-container>
    <h3>会议名称:{{meetName}}</h3>
   <mu-text-field v-model="telphone" type="number" label="报名时手机号" :errorText="error" labelFloat full-width />
    
   <mu-button full-width color="primary">签到</mu-button>
  </mu-container>
  </div>

  
</template>
<script>
  export default {
    data() {
      return {
        meetName:'武汉排水会议',
        userToken: '',
        error: '手机号不正确',
        user: {},
        user_info: {},
        isLogin: false
      }
    },
   
    methods: {
      login() {
        if (this.userToken.length == 36) {
          this.error = '';
          const self = this;
          let url = this.$store.state.svrUrl + 'accesstoken'
          this.axios.post(url, { accesstoken: self.userToken }).then(function (res) {
            if (res.status == 200 && res.data.success) {
              self.error = '';
              localStorage.setItem("accesstoken", self.userToken);
              localStorage.setItem('loginname', res.data.loginname);
              self.isLogin = true;
              self.getUserInfo();
            } else {
              self.error = '请输入正确的Access Token'
            }
          }).catch(function (err) {
            console.log(err);
            this.error = '请输入正确的Access Token'
          })
        } else {
          this.error = '请输入正确的Access Token'
        }
      },
      getUserInfo(){
        const self = this;
        let url = this.$store.state.svrUrl + '/user/' + localStorage.getItem("loginname");
        this.axios.get(url).then(function (res) {
          if (res.status == 200) {
            self.user_info = res.data.data;
          } else {
            console.log(res.status)
          }
        }).catch(function (err) {
          console.log(err)
        });
      },
      logout(){
        localStorage.setItem('accesstoken', '')
        localStorage.setItem('user_id', '')
        localStorage.setItem('loginname', '')
        this.isLogin = false;
      }
    },
    mounted(){
      
    }
  }
</script>

<style type="text/css">
  
</style>

