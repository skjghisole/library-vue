<template>
	<div>
		<h1>
			Add Author
		</h1>
		<form @submit="addAuthor">
			<input v-model="name" placeholder="Author Name">
			<input v-model="age" placeholder="Author Age" type="number">
			<input type="submit" value="Submit">
		</form>
	</div>
</template>

<script>
	import { addAuthorQuery, getAuthorsQuery } from '../queries'
	export default {
		name: "AddAuthor",
		methods: {
			addAuthor(e) {
				e.preventDefault()
				const { name, age, $apollo } = this
				const author = {
					name,
					age
				}

				const newAuthor = $apollo.mutate({
					mutation: addAuthorQuery,
					variables: {
						name,
						age: ~~age
					},
					refetchQueries: [{ query: getAuthorsQuery }]
				})

				this.name = ''
				this.age = ''
			}
		},
		data() {
			return {
				name: '',
				age: ''
			}
		}
	}
</script>