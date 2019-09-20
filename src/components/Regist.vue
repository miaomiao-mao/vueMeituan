<template>
	<div class="content">
		<mt-header title="注册账号">
			<router-link to="/login" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right">导航</mt-button>
		</mt-header>
		<div class="box">
			<ol class="crumbs">
				<li class="active">输入手机号</li>
				<li>输入验证码</li>
				<li>设置密码</li>
			</ol>
			<input type="text" class="inp" placeholder="请输入您的手机号" />
			<mt-radio v-model="value" :options="['我已阅读并同意《用户协议》']"> </mt-radio>
			<mt-button type="default" size="large" style="width: 98%; margin: 0 auto;">获取验证码</mt-button>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			value: ''
		};
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
ol.crumbs {
	list-style: none;
	padding-left: 0;
	text-align: center;
	margin: 0;
}
ol.crumbs li {
	display: inline-block;
	text-align: center;
	padding: 0.8rem 1.5rem;
	font-size: 0.8rem;
}
ol.crumbs li.active {
	color: #06c1ae;
}
ol.crumbs li + li {
	margin-left: 0.6rem;
	position: relative;
}
ol.crumbs li + li:before {
	content: '>';
	display: block;
	position: absolute;
	left: -0.4rem;
	font-weight: bolder;
	color: #aaa;
}
.inp {
	border: 1px solid #eee;
	line-height: 2.8rem;
	height: 2.8rem;
	width: 98%;
	margin: 0.6rem 0 0 0;
	text-indent: 20px;
}
</style>
