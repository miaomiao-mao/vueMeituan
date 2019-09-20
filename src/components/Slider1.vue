<template>
	<div class="menu">
		<ul class="icon-list" style="">
			<router-link to="/huoguo" class="icon" tag="li">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #fb6256">
						<i class="fa fa-magnet fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">火锅</span></a
				>
			</router-link>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #ff80c2">
						<i class="fa fa-hand-lizard-o fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">甜点饮品</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #8a90fa">
						<i class="fa fa-pie-chart fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">自助餐</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #fed030">
						<i class="fa fa-android fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">小吃快餐</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #fd9d21">
						<i class="fa fa-cutlery fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">西餐</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #fed030">
						<i class="fa fa-reddit fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">烧烤烤肉</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #4dc6ee">
						<i class="fa fa-wpbeginner fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">海鲜</span></a
				>
			</li>
			<li class="icon">
				<a style="display:block" href="">
					<span class="new-icon-circle" style="background: #ff6767">
						<i class="fa fa-viadeo fa-3x" style="margin-top: 0.5rem;"></i>
					</span>
					<span class="icon-desc">香锅烤鱼</span></a
				>
			</li>
		</ul>
	</div>
</template>

<script></script>

<style scoped="">
/* menu部分 */
.menu {
	background-color: #fff;
	padding: 0.6rem 0.4rem 1.4rem 0.4rem;
}
.mint-swipe-indicator.is-active {
	background: #00ae76 !important;
}
.icon-list .icon {
	display: inline-block;
	box-sizing: border-box;
	width: 24%;
	text-align: center;
}
.icon-list .icon > a {
	padding: 0.2rem 0;
}
.icon-list .new-icon-circle {
	display: block;
	margin: auto;
	margin-bottom: 0.14rem;
	width: 2.6rem;
	height: 2.6rem;
	border-radius: 10rem;
	text-align: center;
	line-height: 0.8rem;
	font-size: 0.5rem;
	color: #fff;
}
.icon-list .icon-desc {
	text-align: center;
	font-size: 0.24rem;
	color: #666;
}
</style>
