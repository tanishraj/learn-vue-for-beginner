<template>
  <div id="app">
	<img src="./assets/logo.png">
	<br>
	<router-link to='/'>Home</router-link>
	<router-link to='/about'>About</router-link>
	<router-link to='/contact'>Contact</router-link>
	<router-link to='/course'>Course</router-link>

  <router-link to='/course/english'>English</router-link>
  <router-link to='/course/math'>Math</router-link>
  <router-link to='/course/hindi'>Hindi</router-link>
	<bread-crumb></bread-crumb>
    <router-view/>
  </div>
</template>

<script>
import BreadCrumb from '@/components/breadCrumbs'
export default {
  name: 'App',
  components: {
    BreadCrumb
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
