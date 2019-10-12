<template>
	<div>
		<AddAuthor />
		<AuthorList :authors="authors" />
	</div>
</template>

<script>
	import AuthorList from '../components/Authors'
	import AddAuthor from '../components/AddAuthor'
	import gql from 'graphql-tag'
	import { getAuthorsQuery, authorAddedSubscription } from '../queries'
	export default {
		name: "Authors view",
		apollo: {
			authors: {
				query: getAuthorsQuery,
				subscribeToMore: {
					document: authorAddedSubscription,
					updateQuery: (prevResult, { subscriptionData: { data: { authorAdded } } }) => {
						const newAuthors = [
							authorAdded,
							...prevResult.authors
						]
						const result = {
							...prevResult,
							authors: newAuthors
						}
						return result
					}
				}
			}
		},
		components: {
			AuthorList,
			AddAuthor
		},
		data() {
			return {
				authors: []
			}
		}

	}
</script>