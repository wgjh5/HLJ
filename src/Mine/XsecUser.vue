<template>
	<section class="sec-user">
		<div class="icon-group"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1.3rem;height: 1.3rem;"
				 width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<defs>
						<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-12c">
							<stop stop-color="#E7C269" offset="0%"></stop>
							<stop stop-color="#C3902C" offset="100%"></stop>
						</linearGradient>
						<path d="M256.67 39.658a2.97 2.97 0 0 1-2.512-1.457 2.872 2.872 0 0 1-.029-2.867A9.512 9.512 0 0 0 250.024 33a2.973 2.973 0 0 1-2.54 1.41 2.973 2.973 0 0 1-2.54-1.41 9.512 9.512 0 0 0-4.105 2.334c.484.865.51 1.95-.028 2.867a2.97 2.97 0 0 1-2.512 1.457A9.2 9.2 0 0 0 238 41.99a9.2 9.2 0 0 0 .299 2.332 2.97 2.97 0 0 1 2.512 1.458c.538.917.512 2.002.028 2.866a9.512 9.512 0 0 0 4.106 2.334 2.973 2.973 0 0 1 2.54-1.41c1.077 0 2.02.565 2.539 1.41a9.512 9.512 0 0 0 4.105-2.334 2.872 2.872 0 0 1 .029-2.866 2.971 2.971 0 0 1 2.512-1.458 9.2 9.2 0 0 0 .298-2.332 9.2 9.2 0 0 0-.298-2.332zm-9.186 4.725c-1.344 0-2.433-1.071-2.433-2.393 0-1.322 1.09-2.393 2.433-2.393 1.344 0 2.434 1.071 2.434 2.393 0 1.322-1.09 2.393-2.434 2.393z"
						 id="id-11b"></path>
						<filter x="-36.9%" y="-27.8%" width="173.8%" height="177.9%" filterUnits="objectBoundingBox" id="id-10a">
							<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
							<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
							<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1"></feColorMatrix>
						</filter>
					</defs>
					<g fill-rule="nonzero" transform="translate(-234 -29)" fill="none">
						<use fill="#000" filter="url(#id-10a)" xlink:href="#id-11b"></use>
						<use fill="url(#id-12c)" fill-rule="evenodd" xlink:href="#id-11b"></use>
					</g>
				</svg></span><span class="msg"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1.3rem;height: 1.3rem;"
					 width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 20.486c-.639 0-1.26-.058-1.866-.157l-4.373 2.653v-4.417c-2.28-1.602-3.744-4.056-3.744-6.813 0-4.824 4.47-8.735 9.983-8.735 5.513 0 9.983 3.91 9.983 8.735 0 4.824-4.47 8.734-9.983 8.734zM17.991 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zM13 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zm-4.991 0a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495z"
						 fill="#FFF" fill-rule="nonzero"></path>
					</svg></span></span></div>
		<div class="user" @click="changRegister">
			<div class="box-avatar"> <span class="SVGInline"><svg class="SVGInline-svg" style="width: 1.5rem;height: 1.5rem;"
					 viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round"
					 stroke-miterlimit="1.414">
						<path d="M14.524 13.957a7.34 7.34 0 0 0-5.36-5.9A4.252 4.252 0 0 0 7.274 0a4.252 4.252 0 0 0-1.89 8.057 7.33 7.33 0 0 0-5.38 5.94.46.46 0 0 0 .4.52h.07a.46.46 0 0 0 .46-.4 6.42 6.42 0 0 1 12.68 0 .47.47 0 0 0 .46.4h.07a.47.47 0 0 0 .39-.53l-.01-.03zm-10.52-9.65a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0z"
						 fill="#1a1a1a"></path>
					</svg></span></div>
			<div class="intro">
				<div class="name">
					<!-- react-text: 74 -->未登录
					<!-- /react-text -->
				</div><a class="btn-member normal-member" href="/vip.html">
					<div>普通会员</div><img class="right-arrow" src="https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_858721d359b41c7c938f5ca6588e04ad.png"
					 alt="ra">
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			changRegister(){
				this.$router.push({ name: 'register'});
			},
		}
	}
</script>

<style scoped>
/* @import url("../assets/sec.css"); */

</style>
