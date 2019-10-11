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
		<div>
			<AuthorList :authors="authors" />
		</div>
	</div>
</template>

<script>
	import { addAuthorQuery, getAuthorsQuery, authorAddedSubscription } from '../queries'
	import AuthorList from './Authors'
	export default {
		name: "AddAuthor",
		components: {
			AuthorList
		},
		methods: {
			addAuthor(e) {
				e.preventDefault()
				const { name, age, $apollo } = this
				$apollo.mutate({
					mutation: addAuthorQuery,
					variables: {
						name,
						age: ~~age
					},
					refetchQueries: [{ query: getAuthorsQuery }],
					awaitRefetchQueries: true
				})
				this.name = ''
				this.age = ''
			}
		},
		apollo: {
			authors: {
				query: getAuthorsQuery,
			},
			$subscribe: {
				authorAdded: {
					query: authorAddedSubscription,
					result(data) {
						console.log(data)
					}
				}
			}
		},
		data() {
			return {
				name: '',
				age: '',
				authors: []
			}
		}
	}
</script>