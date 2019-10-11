<template>
	<header class="header">
		<h1>
			Vue Library
		</h1>
		<router-link to="/">Home</router-link> 
		<router-link to="/books">Books</router-link>
		<router-link to="/authors">Authors</router-link>
		<router-link to="/about">About</router-link>
	</header>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped>
	.header {
		height: 100px;
		display: inline-block;
		width: 100%;
		background: #1fc600;
		padding:  10px;
		text-align: center;
	}
	.header a {
		padding-right: 5px;
	}
	.header h {

	}
</style>