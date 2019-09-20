<template>
	<div class="footer">
		<div class="footer-bar">
			<div class="right">
				<span>城市:</span>
				<button class="xian">西安</button>
			</div>
			<div class="left">
				<router-link to="/login">
					<button type="button">登录</button>
				</router-link>
				<router-link to="/regist">
					<button type="button" >注册</button>
				</router-link>
			</div>
		</div>
		<div class="clear"></div>
		<div class="footer-nav">
			<ul>
				<li><a class="react" href="##">首页</a></li>
				<li><a class="react" href="##">我的</a></li>
				<li><a class="react" href="##">美团下载</a></li>
				<li><a class="react" href="##">电脑版</a></li>
				<li><a class="react" href="##">帮助</a></li>
			</ul>
		</div>
		<div class="footer-links">
			友情链接： <a href="##">猫眼电影</a> <a href="##">大众点评</a>
			<a href="##">美团旅行</a> <a href="/##">榛果民宿</a> <a href="##">大众点评下载</a>
			<a href="##">美团收银官网</a> <a href="##">美团点评餐饮学院</a>
			<a href="##">快驴进货商家合作</a>
		</div>
		<div class="footer-copyright">
			<div class="hr"></div>
			<span class="footer-copyright-text"
				>©2019 美团网 <a href="##" target="_blank">京ICP证070791号</a></span
			>
		</div>
	</div>
</template>

<script>
	export default{
		name: "Footer",
		data: function(){
			return {}
		}
	}
</script>

<style scoped="">
	@import url("../assets/css/footer.css");
</style>
