<template>
	<section class="Account magic-widget">
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
.page-bottom {
    background: #252525;
    padding: 1rem 1rem 1.5rem 1rem;
    text-align: center;
}
.page-bottom .login-frame {
    text-align: left;
}
.page-bottom .login-frame button {
    background: #3b3b3b;
    color: #fff;
    border-radius: 0.3rem;
    width: 30%;
    margin: 0 1.5%;
    line-height: 2;
}
.page-bottom img {
    margin-top: 1.3rem;
    width: 50%;
}


</style>