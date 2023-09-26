<template>
  <div class="text-center">
    <form
      @submit.prevent="onSubmit"
      class="form-signin"
    >
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputUsername" class="sr-only">Email address</label>
      <input
        type="text"
        id="inputUsername"
        class="form-control"
        placeholder="username"
        v-model="userForm.username"
        required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="userForm.password"
        required>
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name:"LoginView",
    data() {
      const userForm = {
        username: '',
        password: ''
      }

      return {
        userForm
      }
    },
    methods: {
      async onSubmit() {
        await this.loginAuth(this.userForm)
        this.$router.push({ name: "dashboard" })
      },
      ...mapActions('auth', [
        'loginAuth'
      ])
    }
  }
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
