<template>
  <div>
	  <router-link :to="{ name: 'home' }">Home</router-link>
	  <router-link :to="{ name: 'about' }">About</router-link>
	  <router-link :to="{ name: 'contact' }">Contact</router-link>
	  <router-link :to="{ name: 'course' }">Course</router-link>
  	<h1>Home</h1>
	<p>Welcome to my app.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
