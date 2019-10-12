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
	import { addAuthorQuery } from '../queries'
	import gql from 'graphql-tag'
	export default {
		name: "AddAuthor",
		methods: {
			addAuthor(e) {
				e.preventDefault()
				const { name, age, $apollo } = this
				$apollo.mutate({
					mutation: addAuthorQuery,
					variables: {
						name,
						age: ~~age
					}
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