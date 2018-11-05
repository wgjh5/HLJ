<template>
	<section class="BackTop magic-widget" data-track-spm="m-clientapp-index.BackTop_190.$.90fe07">
		<div class="ui-backtop">
			<div class="ui-backtop-icon"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 2rem;height: 2rem;"
					 viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="id-7a">
								<stop stop-color="#FFF" stop-opacity=".6" offset="0%"></stop>
								<stop stop-color="#FFF" stop-opacity=".6" offset="100%"></stop>
							</linearGradient>
						</defs>
						<g transform="translate(1 1)" v-show="goTopShow" @click="goTop" class="goTop" fill="none">
							<circle stroke="#CCC" stroke-width=".5" fill="url(#id-7a)" cx="22" cy="22" r="22"></circle>
							<path d="M22.078 31.302c.735 0 1.327.604 1.327 1.346 0 .746-.592 1.347-1.327 1.347a1.335 1.335 0 0 1-1.326-1.347c0-.742.592-1.346 1.326-1.346zm.849-19.904l8.686 8.933a1.36 1.36 0 0 1 0 1.881 1.27 1.27 0 0 1-1.83 0l-6.467-6.65V28.67c0 .753-.592 1.365-1.326 1.365-.734 0-1.327-.61-1.327-1.365V15.585l-6.445 6.627a1.27 1.27 0 0 1-1.83 0 1.36 1.36 0 0 1 0-1.88l8.61-8.854a1.311 1.311 0 0 1 1.526-.344c.086.038.17.087.263.159.048.033.094.07.14.105z"
							 fill="#666"></path>
						</g>
					</svg></span></div>
		</div>
	</section>
</template>
<script>
	export default {
		name: "goTop",
		data() {
			return {
				scrollTop: '',
				goTopShow: false,
			}
		},
		methods: {
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if (this.scrollTop > 500) {
					this.goTopShow = true
				}
			},
			goTop() {
				let timer = null,
					_that = this;
				cancelAnimationFrame(timer)
				timer = requestAnimationFrame(function fn() {
					if (_that.scrollTop > 0) {
						_that.scrollTop -= 50;
						document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
						timer = requestAnimationFrame(fn)
					} else {
						cancelAnimationFrame(timer);
						_that.goTopShow = false;
					}
				})
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style scoped>
	@import url("../../assets/home.css");

	.ui-backtop {
		position: fixed;
		z-index: 2000;
		right: 1rem;
		bottom: 3rem;
		width: 2rem;
		height: 2rem;
		text-align: center;
	}

	.ui-backtop .ui-backtop-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateY(-50%) translateX(-50%);
		-ms-transform: translateY(-50%) translateX(-50%);
		transform: translateY(-50%) translateX(-50%);
	}
</style>
