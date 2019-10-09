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
	export default {
		name: "app",
		components: {
			Header
		}
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