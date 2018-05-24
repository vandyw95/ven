<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="searchKey" type="text" name="search" placeholder="Search Here"/>
    <br>
    <button @click="register">Search</button>
  </div>
</template>

<script>
import Auth from '@/services/Auth'
export default {
  name: 'Register',
  data () {
    return {
      msg: '',
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
