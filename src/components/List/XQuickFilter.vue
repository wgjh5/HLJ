<template>
	<div class="QuickFilter magic-widget ui-anchor-top ui-anchor-top-sticky" style="top: 146.838px;">
		<div class="ui-anchor-top-box" style="top: 146.838px;">
			<div data-sticky-index="5" data-sticky-top="146.8375015258789">
				<section v-if="channel==1" class="widgets quick-filter-widget QuickFilter magic-widget">
					<section class="Select magic-widget" data-track-spm="m-list.QuickFilter_38:Select_kjsx_weizhengxing.$.ecf957">
						<div class="select-widget">
							<ul class="options">
								<li v-for="(n,index) in navs" @click="changeActive(index)" class="option" :class="{active:nav==index}"
								 data-track-pos="0" data-track-scm="快捷选项.2人团"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
										 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
											<g fill="none" fill-rule="evenodd">
												<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
												<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
											</g>
										</svg></span><span>{{n.title}}</span></li>

							</ul>
						</div>
					</section>
				</section>
				<!-- ======= -->
				<section v-if="channel==0" class="Select magic-widget" data-track-spm="m-list.QuickFilter_artisan_quick_filter:Select_1.$.5e90bb">
					<div class="select-widget">
						<ul class="options">
							<li class="option" data-track-pos="0" data-track-scm="今日可约"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
									 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
										<g fill="none" fill-rule="evenodd">
											<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
											<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
										</g>
									</svg></span><span>今日可约</span></li>
							<li class="option" data-track-pos="1" data-track-scm="加 V 认证"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
									 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
										<g fill="none" fill-rule="evenodd">
											<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
											<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
										</g>
									</svg></span><span>加 V 认证</span></li>
							<li class="option" data-track-pos="2" data-track-scm="品牌馆"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
									 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
										<g fill="none" fill-rule="evenodd">
											<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
											<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
										</g>
									</svg></span><span>品牌馆</span></li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["channel"],
		data() {
			return {
				nav: 0,
				navs: [{
					title: "2人团"
				}, {
					title: "水光针"
				}, {
					title: "玻尿酸"
				}, {
					title: "菲洛嘉"
				}, {
					title: "隆鼻"
				}, {
					title: "双眼皮"
				}]
			};
		},
		methods: {
			changeActive(nav) {
				this.nav = nav;
			}
		}
	}
</script>

<style scoped>
	@charset "UTF-8";

	/**
 * 简单1px解决方案
 */
	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
	.QuickFilter.magic-widget {
		overflow-x: scroll;
		z-index: 1000;
		background: #fff;
	}

	.QuickFilter.magic-widget.ui-anchor-top-fixed {
		padding: 0;
		height: 2.5rem;
	}

	.QuickFilter.magic-widget.ui-anchor-top-fixed .ui-anchor-top-box {
		height: 2.5rem;
		overflow-x: scroll;
		background: #fff;
		-webkit-box-shadow: inset 0 -1px 0 0 #F6F6F6;
		box-shadow: inset 0 -1px 0 0 #F6F6F6;
		z-index: 1000;
	}

	.QuickFilter.magic-widget .ui-anchor-top-box {
		padding: 0.5rem 0.75rem;
	}

	.QuickFilter.magic-widget .quick-filter-widget .select-widget .option {
		margin-bottom: 0;
	}

	.QuickFilter.magic-widget .select-widget ul.options {
		overflow: visible;
		white-space: nowrap;
	}

	.QuickFilter.magic-widget .select-widget ul.options .option {
		display: inline-block;
		float: none;
	}

	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
	/**
 * 简单1px解决方案
 */
	.select-widget:after {
		content: '';
		display: block;
		clear: both;
	}

	.select-widget .options .option {
		font-size: 0.6rem;
		padding: 8px 16px;
		float: left;
		background: #F4F4F4;
		color: #666;
		margin: 0 5px 5px 0;
		border-radius: 2px;
	}

	.select-widget .options .option .SVGInline {
		display: none !important;
	}

	.select-widget .options .option.active {
		background-color: rgba(195, 144, 44, 0.05);
		color: #C3902C;
		position: relative;
		border: none;
		position: relative;
	}

	.select-widget .options .option.active:after {
		width: 100%;
		border: 1px solid rgba(195, 144, 44, 0.2);
		border-radius: 1px;
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		height: 100%;
		-ms-transform-origin: left top;
		transform-origin: left top;
		-webkit-transform-origin: left top;
		bottom: -100%;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.select-widget .options .option.active:after {
			width: 200%;
			border-radius: 2px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.select-widget .options .option.active:after {
			width: 300%;
			border-radius: 3px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.select-widget .options .option.active:after {
			height: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.select-widget .options .option.active:after {
			height: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.select-widget .options .option.active .SVGInline {
		display: inline-block !important;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.select-widget .options .option.active .SVGInline path {
		fill: currentColor;
	}

	.select-widget .options .option.active .SVGInline path:nth-child(2) {
		fill: #fff;
	}

	/* === */
</style>
