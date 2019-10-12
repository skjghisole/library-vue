<template>
	<div id="app">
		<div id="nav">
			<Header>
				
			</Header>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import Header from './components/layout/Header'
	import gql from 'graphql-tag'
	import { getAuthorsQuery } from './queries'
	export default {
		name: "app",
		components: {
			Header
		},
		apollo: {
			authors: {
				query: getAuthorsQuery,
				subscribeToMore: {
					document: gql`subscription {
						authorAdded {
							name
							age
							id
						}
					}`,
					updateQuery: (prevResult, { subscriptionData: { data: { authorAdded } } }) => {
						console.log('oops')
						return [...prevResult.authors, authorAdded]
					}
				}
			}
		},
	}
</script>

<style lang="css">
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
	}
	body {
		line-height: 1.4;
	}
</style>