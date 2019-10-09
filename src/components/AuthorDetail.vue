<template>
	<div>
		<h4>
			{{author.name}}
		</h4>
		<p>
			{{author.age}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "AuthorDetail",
		props: ["author"]
	}
</script>