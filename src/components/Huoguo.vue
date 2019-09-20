<template>
	<div class="content">
		<NavHeader1></NavHeader1>
		<Guang></Guang>
		<Slider1></Slider1>
		<div class="nav">
			<a href="#" class="dropdown-toggle caret"
				><span class="nav-head-name">全部类目</span><i class="fa fa-angle-down"></i></a
			><a href="#" class="dropdown-toggle caret"
				><span class="nav-head-name">附近商家</span><i class="fa fa-angle-down"></i></a
			><a href="#" class="dropdown-toggle caret"
				><span class="nav-head-name">智能排序</span><i class="fa fa-angle-down"></i></a
			><a href="#" class="dropdown-toggle caret"><span class="nav-head-name">筛选</span><i class="fa fa-angle-down"></i></a>
		</div>
		<ul class="picList">
			<li v-for="item in arrList">
				<!-- <router-link :to="/huoguoCon/+item.id" tag="a"> -->
				<router-link :to="{path:'/huoguoCon/'+item.id}" tag="a">
					<img :src="'static/img/'+item.src" alt="">
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import NavHeader1 from './NavHeader1';
import Guang from './Guang.vue';
import Slider1 from './Slider1.vue';
export default {
	name: 'Huoguo',
	components: {
		NavHeader1: NavHeader1,
		Guang: Guang,
		Slider1: Slider1
	},
	data: function(){
		return {
			arrList: [
				{id:0,src:'food02.png'},
				{id:1,src:'food01.png'},
				{id:2,src:'food03.png'},
				{id:3,src:'food04.png'},
				{id:4,src:'food05.png'},
				{id:5,src:'food06.png'},
				{id:6,src:'food07.png'},
				{id:7,src:'food08.png'},
				{id:8,src:'food09.png'},
				{id:9,src:'food10.png'},
				{id:10,src:'food11.png'},
				{id:11,src:'food12.png'},
			]
		}
	}
};
</script>

<style scoped="">
.nav {
	display: flex;
	display: -webkit-flex;
	background: #fff;
	padding: .4rem 0 1rem;
	border-bottom: 1px solid #d8d8d8;
	text-align: center;
}
.nav .dropdown-toggle {
    display: block;
    position: relative;
    border-left: 1px solid #c6c0b3;
    width: 100%;
    text-align: center;
    color: #666;
}
.nav .dropdown-toggle:first-child {
    border: 0;
}
.nav .dropdown-toggle .nav-head-name {
    white-space: nowrap;
    overflow: hidden;
	font-size: .8rem;
    text-overflow: ellipsis;
	margin-right: .2rem;
}
ul.picList{
	background-color: #fff;
}
ul.picList li{
	margin-top: 1rem;
}
ul.picList li:first-child{
	margin-top: 0;
	padding-top: 1rem;
}
</style>
