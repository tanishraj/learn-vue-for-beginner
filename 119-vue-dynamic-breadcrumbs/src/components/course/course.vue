<template>
	<div>

		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
		<router-link :to="{ name: 'contact' }">Contact</router-link>
		<router-link :to="{ name: 'course' }">Course</router-link>

  	  <router-link :to="{ name: 'english' }">English</router-link>
  	  <router-link :to="{ name: 'math' }">Math</router-link>
  	  <router-link :to="{ name: 'hindi' }">Hindi</router-link>
		<h1>Course List</h1>
		<p>Course List are available.</p>
	</div>
</template>

<script>
export default {
	name: 'course',

	data(){
		return{

		}
	}
}
</script>
