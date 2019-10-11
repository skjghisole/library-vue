<template>
	<div>
		<AuthorList :authors="authors" />
	</div>
</template>

<script>
	import AuthorList from '../components/Authors'
	import { getAuthorsQuery, authorAddedSubscription } from '../queries'
	export default {
		name: "Authors view",
		apollo: {
			authors: {
				query: getAuthorsQuery,
				subscribeToMore: {
					document: authorAddedSubscription,
					updateQuery: (previousResult, { subscriptionData }) => {
						console.log(previousResult)
						console.log(subscriptionData)
					},
				}
			}
		},
		components: {
			AuthorList
		},
		data() {
			return {
				authors: []
			}
		}

	}
</script>