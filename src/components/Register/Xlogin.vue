<template>
	<section class="code-login-container">
		<!-- <form action="http://119.23.222.41:8888/app/register/" method="post" target="tath"> -->
		<div class="input-cont">
			<div class="phone-verify phone-verification-form">
				<div class="input-box">
					<!-- @change="loginBlur" -->
					<div class="phone-input-component"><input name="tel" type="tel" value="" class="phone-input" tabindex="1" placeholder="手机号"
						 v-model="username"></div>
					<!-- <button class="get-check-btn inverted primary button disabled" disabled="">获取验证码</button> -->
				</div>
				<div class="input-box">
					<input type="password" style="width: 100%;height: 100%;border: 0 none;" class="verify-code" name="password" v-model="password"
					 placeholder="密码由6-16位数字、字母和英文字符组成" maxlength="6" value="">
					<button class="eye"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" width="425"
							 height="200" viewBox="0 0 425 200" xmlns="http://www.w3.org/2000/svg">
								<defs></defs>
								<path d="M53.661 103.661l-25 25c-4.881 4.882-4.881 12.796 0 17.678 4.882 4.881 12.796 4.881 17.678 0l25-25c4.881-4.882 4.881-12.796 0-17.678-4.882-4.881-12.796-4.881-17.678 0zM200 162.5v25c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5v-25c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5zm153.661-41.161l25 25c4.882 4.881 12.796 4.881 17.678 0 4.881-4.882 4.881-12.796 0-17.678l-25-25c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678zM15.317 32.905c2.799 3.429 7.954 9.2 15.258 16.539a361.502 361.502 0 0 0 41.248 35.61c44.27 32.703 92.216 52.446 142.288 52.446 50.115 0 97.507-19.777 140.792-52.532a345.205 345.205 0 0 0 40.17-35.671c7.082-7.353 12.064-13.14 14.764-16.584 4.26-5.433 3.309-13.29-2.124-17.55-5.433-4.26-13.29-3.309-17.55 2.124-2.2 2.806-6.634 7.957-13.097 14.666a320.39 320.39 0 0 1-37.248 33.08C300.51 94.776 258.04 112.5 214.11 112.5c-43.974 0-87.098-17.757-127.434-47.554a336.69 336.69 0 0 1-38.384-33.14c-6.694-6.724-11.307-11.89-13.61-14.71-4.365-5.349-12.24-6.145-17.588-1.78-5.348 4.366-6.144 12.24-1.778 17.589z"
								 fill="#272636"></path>
							</svg></span></button>
				</div>
			</div>
			<div class="pwd-container"><input type="password" v-model="repassword" class="pwd-input" value="" placeholder="确认密码"
				 tabindex="2"><button class="eye"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;"
						 width="425" height="200" viewBox="0 0 425 200" xmlns="http://www.w3.org/2000/svg">
							<defs></defs>
							<path d="M53.661 103.661l-25 25c-4.881 4.882-4.881 12.796 0 17.678 4.882 4.881 12.796 4.881 17.678 0l25-25c4.881-4.882 4.881-12.796 0-17.678-4.882-4.881-12.796-4.881-17.678 0zM200 162.5v25c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5v-25c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5zm153.661-41.161l25 25c4.882 4.881 12.796 4.881 17.678 0 4.881-4.882 4.881-12.796 0-17.678l-25-25c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678zM15.317 32.905c2.799 3.429 7.954 9.2 15.258 16.539a361.502 361.502 0 0 0 41.248 35.61c44.27 32.703 92.216 52.446 142.288 52.446 50.115 0 97.507-19.777 140.792-52.532a345.205 345.205 0 0 0 40.17-35.671c7.082-7.353 12.064-13.14 14.764-16.584 4.26-5.433 3.309-13.29-2.124-17.55-5.433-4.26-13.29-3.309-17.55 2.124-2.2 2.806-6.634 7.957-13.097 14.666a320.39 320.39 0 0 1-37.248 33.08C300.51 94.776 258.04 112.5 214.11 112.5c-43.974 0-87.098-17.757-127.434-47.554a336.69 336.69 0 0 1-38.384-33.14c-6.694-6.724-11.307-11.89-13.61-14.71-4.365-5.349-12.24-6.145-17.588-1.78-5.348 4.366-6.144 12.24-1.778 17.589z"
							 fill="#272636"></path>
						</svg></span></button></div>
						<!-- <input type="hidden" name="_token" value="{{csrf_token()}}" /> -->
						<!-- @click="login" -->
		</div>
		<!-- <iframe name="tath" style="width: 0;height: 0;"></iframe> -->
		<!-- <input class="login-btn block-level"  type="submit" value="注册" /> -->
		<button class="login-btn block-level" @click="login">注册</button>
		<div class="login-tips">
			点击注册，即表示你已同意<a class="deal">《河狸家用户协议》</a></div>
			<!-- </form> -->
	</section>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				username: null,
				password: null,
				repassword: null,
				isTrue: true
			};
		},
		methods: {
// 			loginBlur() {
// 				var self = this;
// 				var params = new URLSearchParams();
// 				params.append('username', this.username);
// 				axios.post('http://119.23.222.41:8888/app/register', params)
// 					.then(function(response) {
// 						console.log(response)
// 						if (response.data == true) {
// 							self.isTrue = true;
// 						}
// 					})
// 
// 			},
			login() {
				if (this.isTrue == true) {
					if (this.password == this.repassword && this.password != null) {
						var params = new URLSearchParams();
						params.append('tel', this.username);
						params.append('password', this.password);
						// params.append('X-CSRFToken','{{csrftoken}}');
						console.log(66)
						axios.post('http://119.23.222.41:8888/app/register/', params)
							.then(function(response) {
								console.log(response)
							})
					} else if (this.password != this.repassword) {
						alert("两次密码不一致")
					}
				}


			}



// 
		}
	}
</script>

<style>

</style>
