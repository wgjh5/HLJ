<template>
	<section class="Account magic-widget" data-track-spm="m-clientapp-index.Account_192.$.8c934b">
		<div class="page-bottom">
			<div class="login-frame"><button data-track="signin" @click="changRegister">登录</button><button data-track="signup" @click="changLogin">注册</button><button
				 data-track="down"><b>下载APP</b></button></div>
			<div><img src="https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_28208f95bdc424b8aed0cafe2dd7050f.png"></div>
		</div>
	</section>
</template>
<script>
	export default{
		methods:{
			changRegister(){
				this.$router.push({ name: 'register'});
			},
			changLogin(){
				this.$router.push({ name: 'login'});
			}
		}
	}
</script>
<style scoped>


/* ===== */


</style>