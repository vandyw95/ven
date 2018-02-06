<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="email" type="email" name="email" placeholder="email"/>
    <br>
    <input v-model="password" type="password" name="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Auth from '@/services/Auth'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await Auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
