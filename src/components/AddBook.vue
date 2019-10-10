<template>
	<div>
		<h1>Add Book</h1>
		<form @submit="addBook">
			<input placeholder="Book Name" v-model="name" />
			<input placeholder="Book Genre" v-model="genre" />
			<select v-model="authorId">
				<option :key="author.id" v-for="author in authors" :value="author.id">{{author.name}}</option>
			</select>
			<button value="Submit">Submit</button>
		</form>
	</div>
</template>

<script>
	import { addBookQuery, getBooksQuery } from '../queries'
	export default {
		name: "AddBook",
		methods: {
			addBook(e) {
				e.preventDefault()
				const { authorId, name, genre, $apollo } = this
				$apollo.mutate({
					mutation: addBookQuery,
					variables: {
						authorId,
						name,
						genre,
					},
					refetchQueries: [{ query: getBooksQuery }],
					awaitRefetchQueries: true
				})

				this.authorId = ''
				this.name = ''
				this.genre = ''
			}
		},
		props: ["authors"],
		data() {
			return {
				authorId: '',
				name: '',
				genre: ''
			}
		}
	}
</script>