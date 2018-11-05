<template>
	<!-- 登录 -->
		<section v-if="status=='register'" class="code-login-container">
			<div class="input-cont">
				<div class="title-wrap"><span class="subtitle">账号登录</span><span class="jump-quick" data-track="quick-login">
						<!-- react-text: 15 -->手机快捷登录
						<!-- /react-text --><span class="SVGInline jump-right-arrow"><svg class="SVGInline-svg jump-right-arrow-svg"
							 style="width: 1em;height: 1em;" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<defs></defs>
								<path d="M47.521 11.988l93.507 92.857v-9.69L47.52 188.012c-2.919 2.899-2.722 7.418.44 10.094 3.163 2.675 8.093 2.495 11.012-.404l93.506-92.857c2.755-2.736 2.755-6.954 0-9.69L58.973 2.298c-2.92-2.899-7.85-3.08-11.012-.404-3.162 2.676-3.359 7.195-.44 10.094z"
								 fill="#272636"></path>
							</svg></span></span></div>
				<div class="input-box">
					<div class="phone-input-component"><input type="tel" value="" class="phone-input" tabindex="1" placeholder="手机号"></div>
				</div>
				<div class="pwd-container"><input type="password" class="pwd-input" value="" placeholder="密码" tabindex="2"><button
					 class="eye"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" width="425" height="200"
							 viewBox="0 0 425 200" xmlns="http://www.w3.org/2000/svg">
								<defs></defs>
								<path d="M53.661 103.661l-25 25c-4.881 4.882-4.881 12.796 0 17.678 4.882 4.881 12.796 4.881 17.678 0l25-25c4.881-4.882 4.881-12.796 0-17.678-4.882-4.881-12.796-4.881-17.678 0zM200 162.5v25c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5v-25c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5zm153.661-41.161l25 25c4.882 4.881 12.796 4.881 17.678 0 4.881-4.882 4.881-12.796 0-17.678l-25-25c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678zM15.317 32.905c2.799 3.429 7.954 9.2 15.258 16.539a361.502 361.502 0 0 0 41.248 35.61c44.27 32.703 92.216 52.446 142.288 52.446 50.115 0 97.507-19.777 140.792-52.532a345.205 345.205 0 0 0 40.17-35.671c7.082-7.353 12.064-13.14 14.764-16.584 4.26-5.433 3.309-13.29-2.124-17.55-5.433-4.26-13.29-3.309-17.55 2.124-2.2 2.806-6.634 7.957-13.097 14.666a320.39 320.39 0 0 1-37.248 33.08C300.51 94.776 258.04 112.5 214.11 112.5c-43.974 0-87.098-17.757-127.434-47.554a336.69 336.69 0 0 1-38.384-33.14c-6.694-6.724-11.307-11.89-13.61-14.71-4.365-5.349-12.24-6.145-17.588-1.78-5.348 4.366-6.144 12.24-1.778 17.589z"
								 fill="#272636"></path>
							</svg></span></button></div>
			</div><button class="login-btn block-level" data-track="btn-login">登录</button>
			<div class="login-tips"><span class="sign-btn" @click="changLogin" data-track="register">注册账号</span><span class="password-btn"
				 data-track="forget-password">忘记密码？</span></div>
		</section>
		<!-- 注册 -->
	
</template>

<script>
	export default {
		props:["status"],
		data() {
			return {
				
			};
		},
		methods:{
			changLogin(){
				this.$router.push({ name: 'login'});
			}
		}
	}
</script>

<style scoped>




/* === */
</style>
