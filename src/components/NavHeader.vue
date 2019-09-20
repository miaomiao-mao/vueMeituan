<template>
	<div class="navbar">
		<div class="nav-wrap-left">
			<a href="##" class="react">
				<span class="nav-city">西安<i class="fa fa-angle-down"></i></span>
			</a>
		</div>
		<div class="box-search J-box-search">
			<a class="react" href="##">
				<i class="fa fa-search"></i>
				<router-link to="/search">
					<span class="single-line"> 输入商家/品类/商圈 </span>
				</router-link>
			</a>
		</div>
		<div class="nav-wrap-right">
			<router-link to="/login" class="react" href="##" tag="a">
				<span class="nav-btn"> <i class="fa fa-user-o fa-5x"></i>
				<br>
				我的 </span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'navHeader',
		data: function(){
			return {}
		}
	}
</script>

<style scoped="">
	@import url("../assets/css/navHeader.css");
</style>
