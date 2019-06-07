<template>
	<div>
		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
		<router-link :to="{ name: 'contact' }">Contact</router-link>
		<router-link :to="{ name: 'course' }">Course</router-link>
		<h1>About</h1>
		<p>My name is Tanish Raj.</p>
	</div>
</template>

<script>
export default {
	name: 'about',

	data(){
		return{

		}
	}
}
</script>
