<template>
	<div>

		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
		<router-link :to="{ name: 'contact' }">Contact</router-link>
		<router-link :to="{ name: 'course' }">Course</router-link>
		<h1>Contact</h1>
		<p>Email ID: tanishraj.47@gmail.com</p>
	</div>
</template>

<script>
export default {
	name: 'contact',

	data(){
		return{

		}
	}
}
</script>
