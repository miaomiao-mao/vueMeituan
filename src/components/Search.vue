<template>
	<div class="box">
		<mt-header title="搜索">
			<router-link to="/" slot="left"> <mt-button icon="back">返回</mt-button> </router-link>
			<mt-button icon="more" slot="right">导航</mt-button>
		</mt-header>
		<Guang></Guang>
		<div class="search">
			<i class="fa fa-search fa-2x ico"></i>
			<input type="text" class="inp" placeholder="输入商家名,品类或商圈" />
			<mt-button type="default">搜索</mt-button>
			<ul class="icon-list page">
				<li class="icon"><a class="hot-link react title">周边热门</a></li>
				<li class="icon"><a class="hot-link react" href="##">白鹿原滑雪场</a></li>
				<li class="icon"><a class="hot-link react" href="##">千家粗粮王</a></li>
				<li class="icon"><a class="hot-link react" href="##">如家酒店</a></li>
				<li class="icon"><a class="hot-link react" href="##">春运抢票</a></li>
				<li class="icon"><a class="hot-link react" href="##">俄式厨房</a></li>
				<li class="icon"><a class="hot-link react" href="##">M³电影城堡</a></li>
				<li class="icon"><a class="hot-link react" href="##">UME影城</a></li>
				<li class="icon"><a class="hot-link react" href="##">汉庭</a></li>
				<li class="icon"><a class="hot-link react" href="##">蝎王府羊蝎子</a></li>
			</ul>
		</div>
		<div class="nav-bread">
			当前位置： <a href="##">西安团购搜索</a>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from './Footer.vue';
import Guang from './Guang.vue';
export default {
	components: {
		Guang: Guang,
		Footer: Footer
	}
};
</script>

<style scoped="">
.box {
	background-color: #fff;
	padding-bottom: 1rem;
}
.mint-header {
	background-color: #06c1ae;
	height: 52px;
}
.search {
	position: relative;
}
.search i {
	position: absolute;
	left: 3%;
	top: 8%;
}
.inp {
	border: 1px solid #eee;
	line-height: 2.8rem;
	height: 2.8rem;
	border-radius: 10px;
	width: 80%;
	margin: 0.6rem 0 0 0;
	text-indent: 36px;
}
.page {
	padding-bottom: 3.2rem;
	background-color: #fff;
	overflow: hidden;
	margin-top: 1.6rem;
}
.page li {
	display: inline-block;
	width: 25%;
	height: 2.2rem;
	line-height: 2.2rem;
	font-size: 0.8rem;
	text-align: center;
	float: left;
	box-sizing: border-box;
	background: white;
}
.icon-list .icon {
	display: inline-block;
	width: 25%;
	text-align: center;
	border-bottom: 1px dashed #ddd;
	border-right: 1px dashed #ddd;
}
.icon-list .icon > a {
	padding: 0.2rem 0;
}
.hot-link.title {
	color: #fdb338;
}
.nav-bread {
	text-align: left;
	background-color: #f0efed;
    padding: 1.6rem .2rem 0;
    color: #06c1ae;
    font-size: .24rem;
}
</style>
