<template>
	<div id="app">
		<router-view />
		<!-- 这里显示默认的组件Home -->
		<router-view name="huoguo"></router-view>  
		<!-- 这里显示组件名为huoguo的组件Huoguo -->
		<router-view name="huoguoCon"></router-view>  
		<!-- 这里显示组件名为huoguoCon的组件HuoguoCon -->
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.navbar {
	background-color: #06c1ae;
}
</style>
