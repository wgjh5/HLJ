<template>
	<div>
		<section class="top-share-component">
			<section data-sticky-index="0" class="topbar-component" :style="{backgroundColor:'rgba(0, 0, 0,'+isactualTop+')'}"><button
				 @click="back" class="back"><span class="SVGInline icon"><svg class="SVGInline-svg icon-svg" style="width: 1em;height: 1em;"
						 width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-5a">
									<stop stop-color="#E7C269" offset="0%"></stop>
									<stop stop-color="#C3902C" offset="100%"></stop>
								</linearGradient>
							</defs>
							<path d="M30.9 52.092l-9.9-9.9 9.9-9.9a1 1 0 0 1 1.414 1.415l-8.486 8.485 8.486 8.486a1 1 0 0 1-1.415 1.414z"
							 fill="url(#id-5a)" transform="translate(-15 -30)" fill-rule="evenodd"></path>
						</svg></span></button>
				<h1 v-show="isactualTop!=0" class="text-nowrap">项目详情</h1>
			</section>
		</section>
		<div class="product-nav" data-track-spm="b-default.nav.$" :style="{backgroundColor:'rgba(255, 255, 255,'+isactualTop+')',color:'rgba(0, 0, 0,'+isactualTop+')',opacity:isactualTop}">
			<span data-track-scm="项目" data-track-pos="0" @click="jump($event)" :class="{atvid:pageTop+20>AscrollTop[0]&&pageTop<AscrollTop[1]}">项目</span>
			<span data-track-scm="评价" data-track-pos="1" @click="jump($event)" :class="{atvid:pageTop+20>AscrollTop[1]&&pageTop<AscrollTop[2]}">评价</span>
			<span data-track-scm="详情" data-track-pos="2" @click="jump($event)" :class="{atvid:pageTop+20>AscrollTop[2]&&pageTop<AscrollTop[3]}">详情</span>
			<span data-track-scm="推荐" data-track-pos="3" @click="jump($event)" :class="{atvid:pageTop+20>AscrollTop[3]}">推荐</span>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		props: ['AscrollTop'],
		data() {
			return {
				isactualTop: 1,
				pageTop: 0,
			};
		},
		mounted: function() {
			this.$nextTick(function() {
				window.onscroll = this.getElementTop;
			})
		},
		methods: {
			getElementTop() {
				var actualTop = document.documentElement.scrollTop || document.body.scrollTop;
				this.pageTop = actualTop;
				this.isactualTop = actualTop / 200 > 0.9 ? 0.9 : actualTop / 200;
			},
			back() {
				this.$router.history.go(-1);
			},
			jump(e) {
				let index = e.target.getAttribute('data-track-pos');
				let total = this.AscrollTop[index];
				$("html,body").animate({ scrollTop :total}, 500);
			}

		},
		destroyed(){
			window.onscroll = null;
		}
	}
</script>

<style scoped>
	@import url("../../assets/home.css");
	.top-share-component {
		position: absolute;
		z-index: 10;
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
	}

	.topbar-component {
		position: fixed;
		z-index: 1002;
		width: 100%;
		height: 2.5rem;
		color: #fff;
		padding-right: 0.2rem;
		top: 0;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.topbar-component {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.top-share-component button.back {
		border-radius: 50%;
		padding-right: .25rem;
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: .5rem;
		top: .5rem;
	}

	.topbar-component button.back {
		margin-right: .75rem;
		padding-left: 0rem;
		color: #BD9D62;
		font-size: 1.2rem;
		height: 1.2rem;
		padding: 0;
	}

	button {
		background: none;
		border: none;
		outline: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	.top-share-component button.back .SVGInline {
		display: inline !important;
	}

	.topbar-component button.back .icon {
		vertical-align: initial;
	}

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block !important;
	}

	.SVGInline-svg {
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.top-share-component button.back .SVGInline svg path {
		fill: #fff;
	}

	.top-share-component h1 {
		max-width: 75%;
		margin: 0 auto;
	}

	.topbar-component h1,
	.topbar-component .title {
		font-size: inherit;
		margin: 0;
		font-weight: normal;
		padding: 0;
		text-align: center;
		position: absolute;
		left: 2rem;
		right: 2rem;
		top: 0;
		bottom: 0;
		line-height: 2.5rem;
		pointer-events: none;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.text-nowrap {
		white-space: nowrap;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		word-break: break-all;
		word-wrap: break-word;
	}

	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}

	.product-nav {
		position: fixed;
		top: 2.5rem;
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
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		font-size: 0.7rem;
		padding: 0.7rem 1.2rem;
		z-index: 1;
		height: 2rem;
		width: 100%;
	}

	.atvid {
		display: inline-block;
		color: rgb(195, 144, 44);
		border-bottom: 2px solid rgb(195, 144, 44);
		height: 1.3rem;
		padding-bottom: 0.45rem;
	}
</style>
