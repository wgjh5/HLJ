<template>
	<div>
		<section v-if="status=='indent'" data-sticky-index="0" class="topbar-component" style="background-color: rgba(0, 0, 0, 0.9);"><button @click="back" class="back"><span
				 class="SVGInline icon"><svg class="SVGInline-svg icon-svg" style="width: 1em;height: 1em;" width="24" height="24"
					 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-8a">
								<stop stop-color="#E7C269" offset="0%"></stop>
								<stop stop-color="#C3902C" offset="100%"></stop>
							</linearGradient>
						</defs>
						<path d="M30.9 52.092l-9.9-9.9 9.9-9.9a1 1 0 0 1 1.414 1.415l-8.486 8.485 8.486 8.486a1 1 0 0 1-1.415 1.414z"
						 fill="url(#id-8a)" transform="translate(-15 -30)" fill-rule="evenodd"></path>
					</svg></span></button>
			<div class="title">提交订单</div>
		</section>
		<header v-if="status=='register'||status=='login'" class="inverted bar" style="position: relative;"><button @click="back"><span
				 class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg"
					 fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
						<path d="M9.157.136l-9 8.5a.501.501 0 0 0 0 .728l9 8.5a.5.5 0 0 0 .686-.728L1.222 8.994 9.843.864a.5.5 0 0 0-.686-.728z"
						 fill="#bd9d62"></path>
					</svg></span></button>
			<h1 v-if="status=='register'">登录</h1>
			<h1 v-else-if="status=='login'">注册</h1>
		</header>
	</div>

</template>

<script>
	export default {
		props: ["status"],

		data() {
			return {

			};
		},
		methods: {
			back() {
				this.$router.history.go(-1);
			},
		}
	}
</script>

<style>

</style>
