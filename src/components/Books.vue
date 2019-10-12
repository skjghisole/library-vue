<template>
	<div>
		<div :key="book.id" v-for="book in books">
			<BookDetail :book="book"/>
		</div>
	</div>
</template>

<script>
	import BookDetail from './BookDetail.vue'
	export default {
		name: 'Books',
		props: ["books"],
		components: {
			BookDetail
		}
	}
</script>

<style lang="css" scoped>

</style>