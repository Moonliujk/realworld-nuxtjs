<template>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{infoTxt}}</h1>
        <p class="text-xs-center">
          <nuxt-link v-if="isRegister" to="/sign_up">Have an account?</nuxt-link>
          <nuxt-link v-else to="/register">Need an account?</nuxt-link>
        </p>

        <ul class="error-messages" v-if="err">
          <template v-for="(messages, field) in err">
            <li v-for="(msg, index) in messages" :key="index">{{field}} {{msg}}</li>
          </template>
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset v-if="isRegister" class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" minlength="8" required>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{infoTxt}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login, register } from '@/api/user.js';
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
    name: 'register',
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        err: null
      };
    },
    computed: {
      isRegister () {
        return this.$route.name === 'register';
      },
      infoTxt () {
        return this.isRegister ? 'Sign up' : 'Sign in';
      }
    },
    methods: {
      async onSubmit () {
        try {
          const {data} = this.isRegister ?
          await register({
            user: this.user
          })
          :
          await login({
            user: this.user
          });

          this.$store.commit('setUser', data.user);
          // 将登陆信息持久化
          Cookie.set('user', JSON.stringify(data.user));
          this.$router.push('/');
        } catch (err) {
          this.err = err.response.data.errors
        }
      }
    }
}
</script>

<style>

</style>