<template>
	<div class="book-item" v-bind:class="{
		'grey-item': (() => {
			return book.genre == 'Horror'
		})(), 'red-item': (() => {
			return book.genre == 'Sci-fi'
		})()
	}">
		<h1>
			{{book.name}}
		</h1>
		<p>
			{{book.genre}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "BookDetail",
		props: ["book"],
	}	
</script>

<style>
	.book-item {
		padding: 25px;
	}
	.grey-item {
		background: grey;
	}
	.red-item {
		background: red;
	}
</style>