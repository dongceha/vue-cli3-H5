<template>
    <section class="login">
        <h3 class="top">
            您好，请登录
        </h3>
        <div class="list userNameBox">
            <i></i>
            <input type="text" placeholder="账号" v-model="username" autocomplete='off'>
        </div>
        <div class="list passwordBox">
            <i></i>
            <input type="password" placeholder="密码" v-model="password" autocomplete='off'>
        </div>
        <div class="btnBox">
        <button @click="loginBtn" class="loginBtn">登录</button>

        </div>
    </section>
</template>

<script>
import {
  Toast
} from 'mint-ui';
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // ...mapActions('login', ['login']),
    loginBtn() {
      if (this.username === '' || this.password === '') {
        Toast({
          message: '请输入账号或密码',
          position: 'middle',
          duration: 2000
        });
      } else {
        this.$router.go(-1);
        // this.login({
        //     username: this.username,
        //     password: this.password,
        //     $router: this.$router,
        //     $route: this.$route
        // });
      }
    }
  }
};
</script>
<style scoped lang="less">
.top{
    text-align: center;

}
</style>
