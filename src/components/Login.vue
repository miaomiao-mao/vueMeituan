<template>
	<div class="box">
		<mt-header title="美团网">
			<router-link to="/" slot="left"> <mt-button icon="back">返回</mt-button> </router-link>
			<mt-button icon="more" slot="right" @click="more">导航</mt-button>
		</mt-header>
		<div>
			<mt-navbar v-model="active" class="xx">
				<mt-tab-item id="1">美团账号登录</mt-tab-item>
				<mt-tab-item id="2">手机验证登录</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="active">
				<mt-tab-container-item id="1">
					<input
						type="text"
						class="inp"
						@focus="change($event)"
						@blur="change2($event)"
						placeholder="账户名/手机号/Email"
					/>
					<input
						type="text"
						class="inp"
						@focus="change($event)"
						@blur="change2($event)"
						placeholder="请输入您的密码"
					/>
					<mt-button type="primary" size="large" id="btn">
						<label class="mint-button-text">登录</label>
					</mt-button>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<input
						type="text"
						class="inp"
						style="width: 70%;"
						placeholder="请输入手机号"
						@focus="change($event)"
						@blur="change2($event)"
					/>
					<mt-button plain size="small">获取验证码</mt-button>
					<input
						type="text"
						class="inp"
						@focus="change($event)"
						@blur="change2($event)"
						placeholder="请输入短信验证码"
					/>
					<mt-button type="default" size="large" style="margin-top: 0.6rem;">
						<label class="mint-button-text">登录</label>
					</mt-button>
				</mt-tab-container-item>
			</mt-tab-container>
			<div style="width:100%; height: 1px;"></div>
			<ul style="overflow: hidden;">
				<li class="left" style="margin-left: 1rem; font-size: .8rem;">
					<router-link to="/regist" tag="a">立即注册</router-link>
				<li class="right" style="margin-right: 1rem; font-size: .8rem;">找回密码</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data: function() {
		return {
			active: '1'
		};
	},
	methods: {
		more: function() {
			console.log('更多');
		},
		change: function(ev) {
			ev.target.style.backgroundColor = '#dee';
		},
		change2: function(ev) {
			ev.target.style.backgroundColor = '#fff';
		}
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
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #06c1ae;
    color: #06c1ae;
    margin-bottom: -3px;
}
.mint-header-title {
	font-weight: bold;
	color: #fff !important;
	font-size: 1rem;
}
.mint-navbar .mint-tab-item.is-selected {
	color: #06c1ae;
}
.box .mint-tab-container {
	padding: 1rem;
}
.inp {
	border: 1px solid #eee;
	line-height: 2.8rem;
	height: 2.8rem;
	width: 98%;
	margin: 0.6rem 0 0 0;
	text-indent: 20px;
}
.mint-tab-container {
	padding: 0.6rem 0;
}
.mint-button--default.is-plain {
	border: 1px solid #eee;
	box-shadow: none;
}
#btn {
	margin-top: 0.6rem;
	background-color: #06c1ae;
}
</style>
