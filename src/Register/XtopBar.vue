<template>
	<header class="inverted bar" style="position: relative;"><button @click="back"><span class="SVGInline"><svg class="SVGInline-svg"
				 style="width: 1em;height: 1em;" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
				 clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
					<path d="M9.157.136l-9 8.5a.501.501 0 0 0 0 .728l9 8.5a.5.5 0 0 0 .686-.728L1.222 8.994 9.843.864a.5.5 0 0 0-.686-.728z"
					 fill="#bd9d62"></path>
				</svg></span></button>
		<h1 v-if="status=='register'">登录</h1>
		<h1 v-else-if="status=='login'">注册</h1>
	</header>
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
