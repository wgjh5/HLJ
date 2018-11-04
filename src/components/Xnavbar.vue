<template>
	<section class="Navbar magic-widget" data-track-spm="m-clientapp-index.Navbar_193.$.fed914">
		<section class="navbar-component">
			<div class="links">
				<a class="home" :class="{current:channel==0}" @click="publishHome" data-track="tab|idx"><span class="wrapper"><span
						 class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1rem;height: 1rem;" width="20" height="20" viewbox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
								<path d="M10.656.272a.926.926 0 0 0-1.311 0L.271 9.375a.93.93 0 0 0 .655 1.585h2.182l-.5-.5v8.612c0 .513.415.928.926.928h4.24a.927.927 0 0 0 .927-.928v-4.16c0-.002-.005.002.003.002h2.612c.002 0 .003.001.003-.001v4.16c0 .512.415.927.927.927h4.24a.927.927 0 0 0 .926-.928V10.46l-.5.5h2.16a.927.927 0 0 0 .928-.928.91.91 0 0 0-.31-.696L10.656.272z"
								 fill="#BD9D62" fill-rule="evenodd"></path>
							</svg></span>
						<!-- react-text: 3408 -->首页
						<!-- /react-text --></span></a>
				<a class="cats" @click="publishCat" :class="{current:channel==1}" data-track="tab|cate"><span class="wrapper"><span class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1rem;height: 1rem;" width="18" height="18" viewbox="0 0 18 18"
							 xmlns="http://www.w3.org/2000/svg">
								<g fill="#666" fill-rule="evenodd">
									<path d="M7.345 0h-6.04C.585 0 0 .584 0 1.305v6.04c0 .72.584 1.305 1.305 1.305h6.04c.72 0 1.305-.584 1.305-1.305v-6.04C8.65.585 8.065 0 7.345 0zm0 1c.168 0 .305.137.305.305v6.04a.305.305 0 0 1-.305.305h-6.04A.305.305 0 0 1 1 7.345v-6.04C1 1.137 1.136 1 1.305 1h6.04zm0 8.35h-6.04C.584 9.35 0 9.935 0 10.656v6.04C0 17.415.584 18 1.305 18h6.04c.72 0 1.305-.584 1.305-1.305v-6.039c0-.721-.584-1.306-1.305-1.306zm0 1c.168 0 .305.137.305.306v6.04a.305.305 0 0 1-.305.304h-6.04A.305.305 0 0 1 1 16.695v-6.039c0-.17.136-.306.305-.306h6.04zM16.695 0h-6.04C9.935 0 9.35.584 9.35 1.305v6.04c0 .72.584 1.305 1.305 1.305h6.04c.72 0 1.305-.584 1.305-1.305v-6.04C18 .585 17.415 0 16.695 0zm0 1c.168 0 .305.137.305.305v6.04a.305.305 0 0 1-.305.305h-6.04a.305.305 0 0 1-.305-.305v-6.04c0-.168.137-.305.305-.305h6.04zM12.98 15.457a2.477 2.477 0 1 0 0-4.955 2.477 2.477 0 0 0 0 4.955zm0 1a3.477 3.477 0 1 1 0-6.955 3.477 3.477 0 0 1 0 6.955z"></path>
									<path d="M14.828 15.535l2.186 2.186a.5.5 0 0 0 .707-.707l-2.186-2.186a.5.5 0 1 0-.707.707z"></path>
								</g>
							</svg></span>
						<!-- react-text: 3412 -->分类
						<!-- /react-text --></span></a>
				<a class="orders" @click="publishOrder" :class="{current:channel==2}" data-track="tab|order"><span class="wrapper"><span class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1rem;height: 1rem;" width="16" height="20" viewbox="0 0 16 20"
							 xmlns="http://www.w3.org/2000/svg">
								<g fill="#666" fill-rule="evenodd">
									<path d="M11.5 2.5h3.007c.268 0 .493.227.493.5v15c0 .276-.225.5-.507.5H1.507A.508.508 0 0 1 1 18V3a.5.5 0 0 1 .493-.5H4.5a.5.5 0 0 0 0-1H1.493A1.5 1.5 0 0 0 0 3v15c0 .824.678 1.5 1.507 1.5h12.986c.833 0 1.507-.67 1.507-1.5V3c0-.823-.67-1.5-1.493-1.5H11.5a.5.5 0 1 0 0 1z"></path>
									<path d="M5 1.01v1.98c0 .013-.003.01-.003.01h6.006C10.995 3 11 2.995 11 2.99V1.01c0-.013.003-.01.003-.01H4.997c.008 0 .003.005.003.01zm-1 0C4 .451 4.453 0 4.997 0h6.006c.55 0 .997.443.997 1.01v1.98c0 .558-.453 1.01-.997 1.01H4.997A.998.998 0 0 1 4 2.99V1.01zM3.5 7.5c0-.276.222-.5.51-.5h7.98a.51.51 0 0 1 .51.5c0 .276-.222.5-.51.5H4.01a.51.51 0 0 1-.51-.5zm0 3c0-.276.222-.5.51-.5h7.98a.51.51 0 0 1 .51.5c0 .276-.222.5-.51.5H4.01a.51.51 0 0 1-.51-.5zm0 3c0-.276.222-.5.51-.5h7.98a.51.51 0 0 1 .51.5c0 .276-.222.5-.51.5H4.01a.51.51 0 0 1-.51-.5z"></path>
								</g>
							</svg></span>
						<!-- react-text: 3416 -->订单
						<!-- /react-text --></span></a>
				<a class="mine" @click="publishMine" :class="{current:channel==3}"><span class="wrapper"><span class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1rem;height: 1rem;" width="20" height="20" viewbox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
								<g fill="#666" fill-rule="evenodd">
									<path d="M19.862 19.387a10.002 10.002 0 0 0-19.724 0 .526.526 0 0 0 1.038.174 8.95 8.95 0 0 1 17.648 0 .526.526 0 0 0 1.038-.174z"></path>
									<path d="M10 10.526a4.737 4.737 0 1 0 0-9.473 4.737 4.737 0 0 0 0 9.473zm0 1.053A5.79 5.79 0 1 1 10 0a5.79 5.79 0 0 1 0 11.579z"></path>
								</g>
							</svg></span>
						<!-- react-text: 3420 -->我的
						<!-- /react-text --></span></a>
			</div>
		</section>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				channel: 0
			};
		},
		methods: {
			publishHome() {
				this.$router.push({
					name: 'home'
				});
			},
			publishCat() {
				this.$router.push({
					name: 'cat'
				});
			},
			publishOrder() {
				this.$router.push({
					name: 'orders'
				});
			},
			publishMine() {
				this.$router.push({
					name: 'mine'
				});
			},
			setChannel() {
			var route = this.$router.history.current.path;
			switch (route) {
				case "/home":
					this.channel = 0;
					break;
				case "/cat":
					this.channel = 1;
					break;
				case "/orders":
					this.channel = 2;
					break;
				case "/mine":
					this.channel = 3;
					break;
				default:
					this.channel = 0;
			}
		}
		},
		
		mounted() {
			this.setChannel();

		},
		watch: {
			$route() {
				this.setChannel();
			}
		}

	}
</script>
<style scoped>
	.navbar-component {
		position: fixed;
		z-index: 1000;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_969c305f193c30fc101a863d675c0513.png) repeat-x left bottom;
			-webkit-background-size: auto 100%;
		background-size: auto 100%;
		padding: 0.4rem 0 0.2rem 0;
	}

	@media only screen and (min-width: 800px) {
		.navbar-component {
			max-width: 414px;
		}
	}

	.navbar-component .links {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		position: relative;
		bottom: 0;
		width: 100%;
	}

	.navbar-component .links > a {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		font-size: 0.55rem;
		color: #666;
	}

	.navbar-component .links > a span {
		display: block;
	}

	.navbar-component .links > a span.SVGInline {
		display: block !important;
		margin: 0 auto;
		text-align: center;
		margin-bottom: 0.2rem;
	}

	.navbar-component .links > a .wrapper {
		line-height: 1.5;
		margin: auto;
	}

	.navbar-component .links > a .icon path {
		fill: #666;
	}

	.navbar-component .links > a.current {
		color: #c29f63;
	}

	.navbar-component .links > a.current .icon path {
		fill: #c29f63;
	}

	.navbar-component .links .icon {
		margin: auto;
	}

	.navbar-component .links .icon path {
		fill: #c29f63;
	}
</style>
