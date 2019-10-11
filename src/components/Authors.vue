<template>
	<div>
		<div :key="author.name" v-for="author in authors">
			<AuthorDetail :author="author" />
		</div>
	</div>
</template>

<script>
	import AuthorDetail from './AuthorDetail.vue'
	export default {
		name: "Authors",
		props: ["authors"],
		components: {
			AuthorDetail
		}
	}
</script>