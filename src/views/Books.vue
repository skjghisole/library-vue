<template>
	<div>
		<BookList :books="books" />
	</div>
</template>

<script>
	import BookList from '../components/Books'
	import { getBooksQuery } from '../queries'
	export default {
		name: "BooksView",
		apollo: {
			books: getBooksQuery
		},
		components: {
			BookList,
		},
		data() {
			return {
				books: []
			}
		}
	}
</script>