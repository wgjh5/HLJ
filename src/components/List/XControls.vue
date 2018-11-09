<template>
	
	
		<div v-show="isShowMu.isShowMu==true&&indx=='2'" id="popup" style="width: 100%;height: 100%;">
			<div data-reactroot="" class="popup-component filter-pannel">
				<div @click="close" class="overlay"></div>
				<div class="content">
					<section class="filter-pannel-widget" data-track-spm="m-list.Controls_YM_filter:Filter_product_search_filter.$.8ca823">
						<section class="widgets">
							<section class="ServiceAddress magic-widget" data-track-spm="m-list.Filter_product_search_filter:ServiceAddress_filter_service_address.$.5a9d63">
								<div class="service-address-filter-widget">
									<h4>服务地址</h4>
									<div data-sticky-index="1">
										<section class="location-selector">
											<div class="local-bottom default-local-bottom"><span data-track-pos="0" data-track-scm="定位" class="SVGInline icon-location icon default-icon-location"><svg
													 class="SVGInline-svg icon-location-svg icon-svg default-icon-location-svg" width="20" height="20" viewBox="0 0 20 20"
													 xmlns="http://www.w3.org/2000/svg">
														<defs>
															<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-15a">
																<stop stop-color="#E7C269" offset="0%"></stop>
																<stop stop-color="#C3902C" offset="100%"></stop>
															</linearGradient>
														</defs>
														<g fill="none" fill-rule="evenodd">
															<path d="M10.237 18.16s-6.39-5.606-6.39-9.17c0-3.563 2.86-6.452 6.39-6.452s6.39 2.89 6.39 6.453-6.39 9.169-6.39 9.169zm0-6.113c1.672 0 3.027-1.368 3.027-3.056s-1.355-3.057-3.027-3.057c-1.672 0-3.027 1.369-3.027 3.057s1.355 3.056 3.027 3.056z"
															 fill="url(#id-15a)"></path>
															<path d="M0 0h20v20H0z"></path>
														</g>
													</svg></span>
												<div class="location"><span><b>服务地址：</b><!-- react-text: 16 --> 广州市
														<!-- /react-text --></span></div>
												<div class="icon-right-arrow">编辑</div><span class="arrow"><span class="SVGInline"><svg class="SVGInline-svg"
														 style="width: 1em;height: 0.8em;" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
															<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
															 fill="#999" fill-rule="evenodd"></path>
														</svg></span></span>
											</div>
										</section>
									</div>
								</div>
							</section>
							<section class="Select magic-widget" data-track-spm="m-list.Filter_product_search_filter:Select_filter_artisan_level.$.5a9d63">
								<div class="select-with-title-widget">
									<h4>匠星</h4>
									<div class="select-widget">
										<ul class="options">
											<li class="option" data-track-pos="0" data-track-scm="匠星.1 星"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>1 星</span></li>
											<li class="option" data-track-pos="1" data-track-scm="匠星.2 星"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>2 星</span></li>
											<li class="option" data-track-pos="2" data-track-scm="匠星.3 星"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>3 星</span></li>
											<li class="option" data-track-pos="3" data-track-scm="匠星.4 星"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>4 星</span></li>
											<li class="option" data-track-pos="4" data-track-scm="匠星.5 星"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>5 星</span></li>
										</ul>
									</div>
								</div>
							</section>
							<section class="Select magic-widget" data-track-spm="m-list.Include_filter_product_quick:Select_kjsx_weizhengxing.$.716a35">
								<div class="select-with-title-widget">
									<h4>快捷选项</h4>
									<div class="select-widget">
										<ul class="options">
											<li class="option" data-track-pos="0" data-track-scm="快捷选项.2人团"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>2人团</span></li>
											<li class="option" data-track-pos="1" data-track-scm="快捷选项.水光针"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>水光针</span></li>
											<li class="option" data-track-pos="2" data-track-scm="快捷选项.玻尿酸"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>玻尿酸</span></li>
											<li class="option" data-track-pos="3" data-track-scm="快捷选项.菲洛嘉"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>菲洛嘉</span></li>
											<li class="option" data-track-pos="4" data-track-scm="快捷选项.隆鼻"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
													 style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>隆鼻</span></li>
											<li class="option" data-track-pos="5" data-track-scm="快捷选项.双眼皮"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>双眼皮</span></li>
										</ul>
									</div>
								</div>
							</section>
							<section class="PriceRange magic-widget" data-track-spm="m-list.Filter_product_search_filter:PriceRange_filter_price_range.$.5a9d63">
								<div class="price-range-filter-widget">
									<h4>价格区间（元）</h4>
									<form><input type="number" name="min" placeholder="最低价" value=""><span class="divider"></span><input type="number"
										 name="max" placeholder="最高价" value=""></form>
									<div class="select-widget">
										<ul class="options">
											<li class="option" data-track-pos="0" data-track-scm="价格区间（元）.100元以下"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>100元以下</span></li>
											<li class="option" data-track-pos="1" data-track-scm="价格区间（元）.100元-200元"><span class="SVGInline check-icon"><svg
													 class="SVGInline-svg check-icon-svg" style="width: 1em;height: 1em;" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
														<g fill="none" fill-rule="evenodd">
															<path d="M14 0v12a2 2 0 0 1-2 2H0L14 0z" fill="#c3902c"></path>
															<path fill="#FFF" d="M10.53 9.823l1.768-1.768-.707-.707-1.768 1.768-1.768-1.768-.707.707 1.768 1.768-1.768 1.768.707.707 1.768-1.768 1.768 1.768.707-.707z"></path>
														</g>
													</svg></span><span>100元-200元</span></li>
										</ul>
									</div>
								</div>
							</section>
						</section>
						<footer><button type="reset" data-track-scm="重置">重置</button><button type="submit" data-track-scm="确定">确定</button></footer>
					</section>
				</div>
			</div>
		</div>
	
</template>

<script>
	import $ from 'jquery';
	export default {
		props: ["indx"],
		data() {
			return {
				
		

			};
		},
		computed: {
			
			isShowMu() {
				return this.$store.getters.getShowMu
			}
		},

		methods: {
			close() {
				this.$store.dispatch('setShowMu', {
					isShowMu: !this.$store.getters.getShowMu
				})
			}
		},
				mounted() {

					
				}
	}
</script>

<style scoped>
	.dirty {
		z-index: 100000;
		position: relative;
	}

	.dropdown-select-widget {
		will-change: transform;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		position: relative;
		z-index: 3000;
	}

	.dropdown-select-widget .options {
		margin: 0 auto;
		position: fixed;
		z-index: 3000;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		-webkit-box-shadow: 0 540px 0 500px rgba(0, 0, 0, 0.5);
		box-shadow: 0 540px 0 500px rgba(0, 0, 0, 0.5);
	}

	@media only screen and (min-width: 800px) {
		.dropdown-select-widget .options {
			max-width: 414px;
		}
	}

	.dropdown-select-widget .options .placeholder {
		height: 40px;
	}

	.dropdown-select-widget .options>ul {
		background: #fff;
	}

	.dropdown-select-widget .options>ul li {
		position: relative;
		margin-left: 1.5rem;
		color: #1a1a1a;
	}

	.dropdown-select-widget .options>ul li:after {
		height: 0;
		border-bottom: 1px solid #E6E6E6;
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		-ms-transform-origin: left bottom;
		transform-origin: left bottom;
		-webkit-transform-origin: left bottom;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.dropdown-select-widget .options>ul li:after {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.dropdown-select-widget .options>ul li:after {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.dropdown-select-widget .options>ul li .num {
		font-size: 0.5rem;
		margin-left: 0.25rem;
		font-family: "PingFangSC";
		color: #999;
	}

	.dropdown-select-widget .options>ul li.active {
		color: #C3902C;
	}

	.dropdown-select-widget .options>ul li.active .num {
		color: #C3902C;
	}

	.dropdown-select-widget .options>ul li.disabled {
		color: #ccc;
	}

	.dropdown-select-widget .options>ul li.disabled .num {
		color: #ccc;
	}

	.dropdown-select-widget .options>ul.depth-0 {
		overflow: auto;
	}

	.dropdown-select-widget .options>ul ul.depth-1 {
		position: absolute;
		left: 10em;
		right: 0;
		top: 40px;
		background: #fff;
		border-left: 1px solid #E6E6E6;
	}

	.dropdown-select-widget .options.max-level-1 ul {
		position: relative;
		max-height: 500px;
		overflow: auto;
		width: 100%;
	}

	.dropdown-select-widget .options.max-level-1 ul:before {
		height: 0;
		border-top: 1px solid #E6E6E6;
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		width: 100%;
		-ms-transform-origin: left top;
		transform-origin: left top;
		-webkit-transform-origin: left top;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.dropdown-select-widget .options.max-level-1 ul:before {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.dropdown-select-widget .options.max-level-1 ul:before {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.dropdown-select-widget .options.max-level-2 ul {
		height: 500px;
		overflow: auto;
	}

	.dropdown-select-widget .overlay {
		width: 5000px;
		height: 5000px;
		position: fixed;
		z-index: 100;
		left: -2500px;
		top: -2500px;
		cursor: pointer;
	}

	/* ===== */

	/* == */
	.Controls.magic-widget {
		z-index: 2000;
		height: 2rem;
	}

	.Controls.magic-widget.ui-anchor-top-fixed .ui-anchor-top-box {
		z-index: 2000;
		height: 2rem;
	}

	.Controls.magic-widget mark {
		color: #666;
	}

	.Controls.magic-widget .search-controls-widget {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		background: #fff;
		color: #666;
		height: 2.1rem;
		font-size: 0.7rem;
		line-height: 2.1rem;
		padding: 0 0.75rem 0 0;
	}

	.Controls.magic-widget .search-controls-widget .ItemSizeSwitch.magic-widget {
		position: absolute;
		right: 3.6rem;
		padding: 0 0.75rem;
	}

	.Controls.magic-widget .search-controls-widget .ItemSizeSwitch.magic-widget .item-size-switch-widget button {
		padding: 0;
	}

	.Controls.magic-widget .search-controls-widget .Filter.magic-widget {
		position: relative;
		position: absolute;
		right: 0.75rem;
		top: 0;
		padding-left: 0.75rem;
	}

	.Controls.magic-widget .search-controls-widget .Filter.magic-widget:before {
		width: 0;
		border-left: 1px solid #E6E6E6;
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		height: 100%;
		-ms-transform-origin: left top;
		transform-origin: left top;
		-webkit-transform-origin: left top;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.Controls.magic-widget .search-controls-widget .Filter.magic-widget:before {
			height: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.Controls.magic-widget .search-controls-widget .Filter.magic-widget:before {
			height: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.Controls.magic-widget .search-controls-widget mark {
		cursor: pointer;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.Controls.magic-widget .search-controls-widget mark .SVGInline {
		color: #999;
	}

	.Controls.magic-widget .search-controls-widget mark .SVGInline.dropdown {
		font-size: 8px;
		margin-left: 4px;
	}

	.Controls.magic-widget .with-item-size-switch .search-controls-widget {
		padding-right: 2.15rem;
	}

	.Controls.magic-widget .with-filter .search-controls-widget {
		padding-right: 3.6rem;
	}

	.Controls.magic-widget .with-item-size-switch.with-filter .search-controls-widget {
		padding-right: 5.75rem;
	}

	.popup-component.srv-time .content {
		top: 30%;
	}

	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */

	/* ==== */

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
	.ServiceAddress.magic-widget {
		height: 1.9rem;
	}

	.ServiceAddress.magic-widget>[data-sticky-index] {
		height: 100%;
	}

	.ServiceAddress.magic-widget .location-selector {
		position: fixed;
		z-index: 100;
		background: #000;
		margin: 0 auto;
		color: #C3902C;
		height: 1.9rem;
		line-height: 1.45rem;
		font-size: 0.75rem;
		padding: 0 0.75rem 0.75rem 0.75rem;
		left: 0;
		right: 0;
	}

	@media only screen and (min-width: 800px) {
		.ServiceAddress.magic-widget .location-selector {
			max-width: 414px;
		}
	}

	.ServiceAddress.magic-widget .location-selector .SVGInline {
		margin-right: 4px;
	}

	.ServiceAddress.magic-widget .location-selector .location {
		color: inherit;
	}

	.ServiceAddress.magic-widget .location-selector .local-bottom {
		position: static;
		border-top: 0;
		background: none;
		line-height: inherit;
		height: auto;
	}

	.ServiceAddress.magic-widget .location-selector .local-bottom .icon-location {
		margin-left: 0;
	}

	.search_in_studio.mode .ServiceAddress.magic-widget .location-selector,
	.is-studio-shop.mode .ServiceAddress.magic-widget .location-selector {
		background: #bb7bb1;
		color: #fff;
	}

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
	.filter-pannel-widget {
		padding: 0.75rem 0 2.5rem 0.75rem;
		height: 100%;
		overflow: scroll;
		font-size: 12px;
	}

	.filter-pannel-widget footer {
		position: absolute;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: stretch;
		-webkit-align-items: stretch;
		-moz-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		bottom: 0.75rem;
		right: 0.75rem;
		width: 9rem;
		height: 1.8rem;
		font-size: 0.75rem;
		font-weight: bold;
	}

	.filter-pannel-widget footer>button {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		background: -webkit-linear-gradient(315deg, #CCCCCC, #666666);
		background: -o-linear-gradient(315deg, #CCCCCC, #666666);
		background: linear-gradient(135deg, #CCCCCC, #666666);
		color: #fff;
	}

	.filter-pannel-widget footer>button[type=reset] {
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	.filter-pannel-widget footer>button[type=submit] {
		background: -webkit-linear-gradient(315deg, #E7C269, #C3902C);
		background: -o-linear-gradient(315deg, #E7C269, #C3902C);
		background: linear-gradient(135deg, #E7C269, #C3902C);
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	.filter-pannel-widget h4 {
		color: #1A1A1A;
		font-weight: normal;
		margin: 0 0 0.5rem 0;
	}

	.filter-pannel-widget .options li.option {
		line-height: 1;
	}

	.filter-pannel-widget .widgets .magic-widget {
		position: relative;
		padding: 0.5rem 0;
	}

	.filter-pannel-widget .widgets .magic-widget:after {
		height: 0;
		border-bottom: 1px solid #EBEBEB;
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		-ms-transform-origin: left bottom;
		transform-origin: left bottom;
		-webkit-transform-origin: left bottom;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.filter-pannel-widget .widgets .magic-widget:after {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.filter-pannel-widget .widgets .magic-widget:after {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.filter-pannel-widget .widgets .magic-widget:last-child::after {
		display: none;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget {
		height: auto;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector {
		position: static;
		font-size: 12px;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .default-local-bottom {
		height: 1rem;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .location {
		color: #1a1a1a;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .location b {
		display: none;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow {
		font-size: 0.55rem;
		visibility: visible;
		color: #C3902C;
		position: relative;
	}

	.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow:after {
		width: 100%;
		border: 1px solid #C3902C;
		border-radius: 9px;
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
		.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow:after {
			width: 200%;
			border-radius: 18px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow:after {
			width: 300%;
			border-radius: 27px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow:after {
			height: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.filter-pannel-widget .widgets .ServiceAddress.magic-widget .location-selector .icon-right-arrow:after {
			height: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.popup-component.filter-pannel .content {
		left: 4.5em;
	}

	/* ====== */
	#popup {
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-size: .8rem;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
	}

	.popup-component.half .content {
		height: 60%;
		top: auto;
		bottom: 0;
	}

	.popup-component .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
	}

	.popup-component .content {
		position: absolute;
		background: #fff;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.popup-component section.widget {
		height: 100%;
	}

	.popup-component.effect-fade-appear .overlay {
		opacity: 0;
		-webkit-transition: 500ms opacity;
		-o-transition: 500ms opacity;
		transition: 500ms opacity;
	}

	.popup-component.effect-fade-appear .content {
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
		-webkit-transition: 500ms -webkit-transform;
		transition: 500ms -webkit-transform;
		-o-transition: 500ms transform;
		transition: 500ms transform;
		transition: 500ms transform, 500ms -webkit-transform;
	}

	.popup-component.effect-fade-appear-active .overlay {
		opacity: 1;
	}

	.popup-component.effect-fade-appear-active .content {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	}

	.popup-component.effect-fade-leave .overlay {
		-webkit-transition: 300ms opacity;
		-o-transition: 300ms opacity;
		transition: 300ms opacity;
	}

	.popup-component.effect-fade-leave .content {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 300ms opacity, 300ms -webkit-transform;
		transition: 300ms opacity, 300ms -webkit-transform;
		-o-transition: 300ms opacity, 300ms transform;
		transition: 300ms opacity, 300ms transform;
		transition: 300ms opacity, 300ms transform, 300ms -webkit-transform;
	}

	.popup-component.effect-fade-leave-active .overlay {
		opacity: 0;
	}

	.popup-component.effect-fade-leave-active .content {
		opacity: 0;
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
	}

	.popup-component.effect-slideup-appear .overlay {
		opacity: 0;
		-webkit-transition: 500ms opacity;
		-o-transition: 500ms opacity;
		transition: 500ms opacity;
	}

	.popup-component.effect-slideup-appear .content {
		top: 100%;
		opacity: 0;
		-webkit-transition: 300ms top, 300ms opacity;
		-o-transition: 300ms top, 300ms opacity;
		transition: 300ms top, 300ms opacity;
	}

	.popup-component.effect-slideup-appear-active .overlay {
		opacity: 1;
	}

	.popup-component.effect-slideup-appear-active .content {
		top: 0;
		opacity: 1;
	}

	.popup-component.effect-slideup-leave .overlay {
		-webkit-transition: 300ms opacity;
		-o-transition: 300ms opacity;
		transition: 300ms opacity;
	}

	.popup-component.effect-slideup-leave .content {
		-webkit-transition: 300ms top, 300ms opacity;
		-o-transition: 300ms top, 300ms opacity;
		transition: 300ms top, 300ms opacity;
	}

	.popup-component.effect-slideup-leave-active .overlay {
		opacity: 0;
	}

	.popup-component.effect-slideup-leave-active .content {
		top: 100%;
		opacity: 0;
	}

	/* === */
	.filter-dropdown-widget mark {
		color: #666;
	}

	.filter-dropdown-widget mark.dirty {
		color: #C3902C;
	}

	.filter-dropdown-widget mark .SVGInline {
		color: inherit !important;
		margin-left: 4px;
	}

	.filter-dropdown-widget mark .SVGInline svg path {
		fill: currentColor;
	}

	/* ==== */

	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
	.price-range-filter-widget form {
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
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 5px;
		background: #F7F7F7;
		color: #666;
		margin-bottom: 5px;
		margin-right: 0.75rem;
	}

	.price-range-filter-widget form input {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: 0.6rem;
		width: 5.35rem;
		color: #cccccc;
		padding: 4px 8px;
		text-align: center;
		border-radius: 2px;
		border-color: transparent;
	}

	.price-range-filter-widget form .divider {
		display: block;
		height: 0.1rem;
		width: 0.6rem;
		margin: 0 7px;
		background: #666;
		border-bottom: 0;
	}

	/* === */
	.ServiceAddress.magic-widget .service-address-filter-widget .location-selector {
		background: none;
		color: #666;
		padding: 0;
		height: 1rem;
	}

	.ServiceAddress.magic-widget .service-address-filter-widget .location-selector i {
		color: inherit;
	}

	/* === */

	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
	.price-range-filter-widget form {
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
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 5px;
		background: #F7F7F7;
		color: #666;
		margin-bottom: 5px;
		margin-right: 0.75rem;
	}

	.price-range-filter-widget form input {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: 0.6rem;
		width: 5.35rem;
		color: #cccccc;
		padding: 4px 8px;
		text-align: center;
		border-radius: 2px;
		border-color: transparent;
	}

	.price-range-filter-widget form .divider {
		display: block;
		height: 0.1rem;
		width: 0.6rem;
		margin: 0 7px;
		background: #666;
		border-bottom: 0;
	}

	/* === */

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
	.filter-dropdown-widget mark {
		color: #666;
	}

	.filter-dropdown-widget mark.dirty {
		color: #C3902C;
	}

	.filter-dropdown-widget mark .SVGInline {
		color: inherit !important;
		margin-left: 4px;
	}

	.filter-dropdown-widget mark .SVGInline svg path {
		fill: currentColor;
	}

	/* ==== */
	.location-selector .local-bottom,
	.choose-address .input-btn,
	.choose-address .load-text span,
	.choose-address .list-address li,
	.add-address .search-cont {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	/**
 * 简单1px解决方案
 */
	.location-selector .default-local-bottom {
		bottom: 0;
		height: 2rem;
		line-height: 2rem;
		width: 100%;
	}

	.location-selector .studio-local-bottom {
		width: 95%;
		font-size: 0.75rem;
	}

	.location-selector .studio-weapp-bottom {
		width: 56%;
		font-size: 0.75rem;
	}

	.location-selector .local-bottom {
		position: fixed;
		z-index: 1000;
		background: #fff;
		border-top: 1px solid #f7f7f7;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	@media only screen and (min-width: 800px) {
		.location-selector .local-bottom {
			max-width: 414px;
		}
	}

	.location-selector .local-bottom .location {
		width: 80%;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: block;
		white-space: nowrap;
		color: #FFF;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.location-selector .local-bottom .location b {
		font-weight: bold;
		color: inherit;
	}

	.location-selector .local-bottom .location i {
		display: inline-block;
		color: #BD9D62;
		border: 1px solid currentColor;
		border-radius: 2px;
		font-size: 0.6rem;
		padding: 1px 0.2rem;
		line-height: 1;
		font-style: normal;
		margin-right: 0.15rem;
	}

	.location-selector .local-bottom .location-studio-title {
		color: #FFF;
		font-size: 0.7rem;
	}

	.location-selector .local-bottom .icon-location {
		margin: 0 4px 0 0.6rem;
		width: 1rem;
		display: block;
	}

	.location-selector .local-bottom .default-icon-location {
		width: 1rem;
	}

	.location-selector .local-bottom .studio-icon-location {
		width: 1rem;
	}

	.location-selector .icon-right-arrow {
		padding: 0 .9rem;
		height: 0.9rem;
		line-height: 0.9rem;
		margin-right: 0.5rem;
		visibility: hidden;
	}

	.location-selector .arrow {
		display: none;
	}

	.choose-address {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		-webkit-animation: slide-from-right 0.3s;
		animation: slide-from-right 0.3s;
		background: #f6f6f6;
		position: relative;
	}

	@media only screen and (min-width: 800px) {
		.choose-address {
			max-width: 414px;
		}
	}

	.choose-address .overlay {
		background: none;
	}

	.choose-address .default-top {
		background: #000;
	}

	.choose-address .studio-top {
		background: -webkit-gradient(linear, left top, right bottom, from(#C5A7DF), to(#B15286));
		background: -webkit-linear-gradient(left top, #C5A7DF, #B15286);
		background: -o-linear-gradient(left top, #C5A7DF, #B15286);
		background: linear-gradient(to right bottom, #C5A7DF, #B15286);
	}

	.choose-address .title-top {
		height: 2.5rem;
		line-height: 2.5rem;
		width: 100%;
		position: relative;
	}

	.choose-address .title-top .title-top-text {
		text-align: center;
		color: #fff;
		font-size: 0.85rem;
	}

	.choose-address .title-top .title-back {
		padding-left: 0.5rem;
		color: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 1.5rem;
		height: 2.6rem;
		display: inline-block;
		text-align: center;
	}

	.choose-address .title-top .title-back .icon-left-arrow {
		width: 0.45rem;
	}

	.choose-address .title-top .title-back .icon-left-arrow svg path {
		fill: #C3902C;
	}

	.choose-address .title-top .title-back .studio-left-arrow path {
		fill: #FFF;
	}

	.choose-address .title-top .title-add-address {
		position: absolute;
		right: 0.75rem;
		top: 0;
		color: #fff;
		font-size: 0.7rem;
	}

	.choose-address .title-top .title-add-address .plus-sign {
		margin: 0 0.2rem 0.15rem 0;
	}

	.choose-address.active {
		-webkit-transform: translateX(0);
		-ms-transform: translateX(0);
		transform: translateX(0);
	}

	.choose-address .local-btn-tit {
		background: #fff;
		color: #999;
		font-size: 0.7rem;
		padding: 0.7rem 0 0 1rem;
		margin-top: 0.5rem;
	}

	.choose-address .local-btn-tit .diliver {
		display: inline-block;
		position: relative;
		width: 100%;
	}

	.choose-address .local-btn-tit .diliver:after {
		height: 0;
		border-bottom: 1px solid #e6e6e6;
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		-ms-transform-origin: left bottom;
		transform-origin: left bottom;
		-webkit-transform-origin: left bottom;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.choose-address .local-btn-tit .diliver:after {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.choose-address .local-btn-tit .diliver:after {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.choose-address .local-btn-tit .edit-btn {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-right: 0.75rem;
		float: right;
		color: #C3902C;
	}

	.choose-address .local-btn-tit .edit-btn .edit-icon-svg {
		width: 1rem;
		height: 1rem;
	}

	.choose-address .local-btn-tit .edit-btn .btn-title {
		margin-left: 0.4rem;
	}

	.choose-address .input-btn {
		background: #fff;
		padding: 0.5rem 0 0.5rem 0.75rem;
		margin-top: 0.5rem;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.choose-address .input-btn .input-text {
		border-radius: 2px;
		height: 1.5rem;
		background: #f6f6f6;
		line-height: 1.5rem;
		padding-left: 0.5rem;
		font-size: 0.7rem;
		margin-left: 0.4rem;
		color: #B5B5B9;
		border-radius: 1rem;
		width: 72%;
	}

	.choose-address .input-btn svg {
		margin-right: 0.2rem;
	}

	.choose-address .local-text,
	.choose-address .load-text {
		padding-left: 1rem;
		color: #1a1a1a;
		background: #fff;
		line-height: 2rem;
		font-size: 0.75rem;
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
	}

	.choose-address .local-text .city-name,
	.choose-address .load-text .city-name {
		display: inline-block;
		width: 70%;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.choose-address .local-text .icon-locate,
	.choose-address .load-text .icon-locate {
		display: inline-block;
		color: #C3902C;
		font-size: 0.7rem;
		padding-right: 0.75rem;
	}

	.choose-address .local-text .icon-locate .SVGInline,
	.choose-address .load-text .icon-locate .SVGInline {
		margin-right: 0.1rem;
	}

	.choose-address .local-cont {
		height: 2rem;
	}

	.choose-address .local-cont .local-tit {
		font-size: 0.7rem;
		color: #ddd;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
		padding: 0.5rem 0.7rem;
	}

	.choose-address .local-cont .local-list {
		background: #fff;
		overflow: hidden;
	}

	.choose-address .local-cont .local-list>li {
		display: table;
		color: #1a1a1a;
		font-size: 0.75rem;
		margin-left: 0.7rem;
		width: 100%;
		height: 2.2rem;
		position: relative;
	}

	.choose-address .local-cont .local-list>li:after {
		height: 0;
		border-bottom: 1px solid #e6e6e6;
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		-ms-transform-origin: left bottom;
		transform-origin: left bottom;
		-webkit-transform-origin: left bottom;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.choose-address .local-cont .local-list>li:after {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.choose-address .local-cont .local-list>li:after {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.choose-address .local-cont .local-list>li span {
		display: table-cell;
		padding: 0.7rem 0;
		vertical-align: middle;
	}

	.choose-address .withoutAddress {
		color: #999;
		text-align: center;
		margin-top: 13rem;
	}

	.choose-address .load-text {
		color: #999;
		margin-top: 1rem;
	}

	.choose-address .load-text span {
		height: 1.25rem;
		line-height: 0.9rem;
		font-size: 0.55rem;
		width: 2.7rem;
		color: #C3902C;
		float: right;
		margin: 0.5rem 0.75rem;
		position: relative;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
	}

	.choose-address .load-text span:after {
		width: 100%;
		border: 1px solid #C3902C;
		border-radius: 1rem;
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
		.choose-address .load-text span:after {
			width: 200%;
			border-radius: 2rem;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.choose-address .load-text span:after {
			width: 300%;
			border-radius: 3rem;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.choose-address .load-text span:after {
			height: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.choose-address .load-text span:after {
			height: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.choose-address .def-address {
		max-height: 15rem;
		-webkit-overflow-scrolling: touch;
	}

	.choose-address .wechat-address {
		max-height: 19rem;
	}

	.choose-address .list-address {
		background: #fff;
		overflow: scroll;
	}

	.choose-address .list-address li {
		padding: 0.4rem 0.75rem 0.4rem 0;
		margin-left: 0.75rem;
		border-bottom: 1px solid #e6e6e6;
		font-size: 0.75rem;
		line-height: 1.5;
		min-height: 2rem;
		word-break: break-all;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.choose-address .list-address li i {
		margin-right: 0.15rem;
	}

	.choose-address .list-address li .address {
		vertical-align: middle;
	}

	.choose-address .list-address li:last-child {
		border-bottom: 0;
	}

	.add-address {
		background: #ddd;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		-webkit-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
		-webkit-transform: translateY(100%);
		-ms-transform: translateY(100%);
		transform: translateY(100%);
	}

	@media only screen and (min-width: 800px) {
		.add-address {
			max-width: 414px;
		}
	}

	.add-address.active {
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0);
	}

	.add-address .search-cont {
		position: relative;
		width: 100%;
		z-index: 2;
		background: #000;
		height: 2.5rem;
		overflow: hidden;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.add-address .search-cont .search-input {
		padding-left: 1.5rem;
		font-size: 0.7rem;
		background: #fff;
		color: #1a1a1a;
		height: 1.5rem;
		display: block;
		border: 0;
		outline: 0;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
		margin-left: 0.5rem;
	}

	.add-address .search-cont .delete-icon {
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		position: absolute;
		top: 50%;
		right: 4.5rem;
	}

	.add-address .search-cont .search-icon {
		position: absolute;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		top: 50%;
		left: 1rem;
	}

	.add-address .search-cont .btn-cancel {
		font-size: 0.7rem;
		color: #fff;
		width: 4rem;
		text-align: center;
		display: block;
	}

	.add-address .address-list-replace {
		display: block;
		line-height: 8rem;
		height: 8rem;
		margin-top: 2.5rem;
		text-align: center;
		color: #888;
		font-size: 0.8rem;
	}

	.add-address .address-list {
		width: 100%;
		overflow: auto;
		max-height: 100%;
		background: #fff;
	}

	.add-address .address-list li {
		margin-left: 0.8rem;
		border-bottom: 1px solid #e6e6e6;
	}

	.add-address .address-list li p {
		font-size: 0.7rem;
		line-height: 1.1rem;
		max-width: 100%;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.add-address .address-list li p.add-name {
		color: #1a1a1a;
	}

	.add-address .address-list li p.add-area {
		color: #999;
	}

	#area-selector-pop .content {
		z-index: 100000;
	}
</style>
