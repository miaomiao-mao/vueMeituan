<template>
	<div class="navbar">
		<div class="nav-wrap-left">
			<!-- <router-link to="" tag="a" slot="left" @click="goback">
				<i class="fa fa-angle-double-left fa-2x" style="margin-top: 0.7rem;"></i>
			</router-link> -->
			<router-link to="" tag="a" slot="left">
				<mt-button icon="back" @click="goback"></mt-button>
			</router-link>
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
		name: 'navHeader1',
		data: function(){
			return {}
		},
		methods: {
			goback: function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="">
	/* 顶部导航 */
	.navbar {
		height: 3rem;
		color: #fff;
		background: #06c1ae;
		border-bottom: 1px solid #21897d;
		display: -webkit-box;
		display: -ms-flexbox;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	/* 顶部导航左侧 */
	.navbar .nav-wrap-left {
		height: 3rem;
	    line-height: 3rem;
	}
	.navbar a.react{
	    display: block;
	    color: inherit;
	    height: 100%;
		padding: 0 .8rem 0 .4rem;
	}
	.navbar .nav-city {
	    line-height: 1;
	    display: inline-block;
	    vertical-align: middle;
	    text-align: center;
	    margin-right: .6rem;
	    margin-left: .6rem;
	    font-size: 1rem;
	}
	.navbar .nav-city i{
	    width: 20px;
		height: 20px;
		color: #fff;
	}
	.text-icon {
	    font-family: base_icon;
	    display: inline-block;
	    vertical-align: middle;
	    font-style: normal;
	}
	/* 顶部导航中部 */
	.navbar .box-search {
	    border-radius: .2rem;
	    background: rgba(0,0,0,.15);
	    height: 74%;
	    -webkit-box-sizing: border-box;
	    position: relative;
		margin: 0.4rem 0;
		width: 17rem;
	}
	.navbar .icon-search {
	    position: absolute;
	    left: .2rem;
	    font-size: .26rem;
	    color: #fff;
	}
	.navbar .box-search a i{
		float: left;
		margin: 0.8rem 0 0 0.6rem;
	}
	.navbar .box-search span {
	    font-size:0.8rem;
	    color: #68dbce;
		float: left;
		margin: 0.6rem 0 0 1.3rem;
	}
	/* 顶部导航右侧 */
	.navbar .nav-wrap-right {
	    height: 100%;
		position: relative;
	}
	.nav-wrap-right a {
	    width: 100%;
	    text-align: center;
	}
	.nav-btn {
	    display: inline-block;
	    font-size: .2rem;
	    line-height: 1rem;
		padding: 0.6rem 0 0 0.7rem;
	    vertical-align: middle;
	}
	.nav-btn .text-icon {
	    display: block;
	    margin: auto;
	    margin-bottom: .12rem;
	    font-size: .4rem;
	}
</style>
