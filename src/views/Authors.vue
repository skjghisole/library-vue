<template>
	<div>
		<AuthorList :authors="authors" />
	</div>
</template>

<script>
	import AuthorList from '../components/Authors'
	import { getAuthorsQuery } from '../queries'
	export default {
		name: "Authors view",
		apollo: {
			authors: getAuthorsQuery
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