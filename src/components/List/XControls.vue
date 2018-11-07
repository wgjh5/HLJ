<template>
	<div class="Controls magic-widget ui-anchor-top ui-anchor-top-sticky" style="top: 110.125px;">
		<div class="ui-anchor-top-box" @click="showMu($event)" style="top: 110.125px;">
			<div data-sticky-index="4" data-sticky-top="110.125">
				<div class="item-count-5 with-item-size-switch with-filter">
					<section class="widgets search-controls-widget Controls magic-widget">
						<section class="ServiceTimeDropdown magic-widget " data-track-spm="m-list.Controls_YM_filter:ServiceTimeDropdown_service_time_fillter.$.8ca823">
							<div class="service-time-dropdown-widget"><mark class="">
									服务时间
									<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 1em;height: 1em;" xmlns="http://www.w3.org/2000/svg"
										 width="1024" height="1024" viewBox="0 0 1024 1024">
											<path class="svgpath" data-index="path_7" fill="#272636" d="M163.397 289.169c-40.578 0-66.526 54.184-35.442 85.258l349.263 349.278c20.031 20.032 49.823 20.032 69.853 0l349.275-349.278c30.305-30.294 6.678-85.258-34.929-85.258h-698.02z"></path>
										</svg></span></mark></div>
						</section>
						<section class="DropdownSelect magic-widget " data-track-spm="m-list.Include_product_search_category:DropdownSelect_category_weizhengxing.$.1dc692">
							<div class="dropdown-select-widget"><mark class="dirty" data-id="0" style="color: #C3902C;">
									{{text.text}}
									<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;" width="7"
										 height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
										</svg></span></mark>
								<!-- 下拉菜单 -->
								<div v-show="isShowMu==true&&indx=='0'" class="options max-level-1" style="top: 0px; left: -76.875px; right: -172.4px;">
									<div class="placeholder"></div>
									<ul class="depth-0">
										<li v-for="(d,index) in dropdown" v-text="d.title" @click="changeTab(index)" :class="{active:tab==index}">


										</li>

									</ul>
								</div>
								<!-- <div v-show="isShowMu==true" class="overlay"></div> -->
								<!-- ==下拉菜单end== -->
							</div>

						</section>



						<section class="DropdownSelect magic-widget" data-track-spm="m-list.Controls_YM_filter:DropdownSelect_zhinengpaixu.$.8ca823">
							<div class="dropdown-select-widget"><mark class="dirty" data-id="1" style="color: #C3902C;" v-text="textPx.text">

									<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;" width="7"
										 height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
										</svg></span></mark>
								<!-- ===== -->
								<div v-show="isShowMu==true&&indx=='1'" class="options max-level-1" style="top: 0px; left: -151.938px; right: -109.275px;">
									<div class="placeholder"></div>
									<ul class="depth-0">
										<li :class="{active:tab==index}" v-for="(i,index) in IntelligentSorting" @click="changeTabPx(index)"
										 data-active="false" data-track-scm="智能排序" data-track-pos="0" v-text="i.title">


										</li>

									</ul>
								</div>
								<!-- ===== -->
							</div>
						</section>
						<section class="ItemSizeSwitch magic-widget" data-track-spm="m-list.Controls_YM_filter:ItemSizeSwitch_product_item_swich.$.8ca823">
							<div class="item-size-switch-widget"><button class="toggleLists"><span class="SVGInline"><svg class="SVGInline-svg"
										 style="width: 0.65rem;height: 0.65rem;" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
											<g stroke="#666" fill="none" fill-rule="evenodd">
												<rect x=".5" y=".5" width="5" height="5" rx="1"></rect>
												<rect x=".5" y="7.5" width="5" height="5" rx="1"></rect>
												<rect x="7.5" y=".5" width="5" height="5" rx="1"></rect>
												<rect x="7.5" y="7.5" width="5" height="5" rx="1"></rect>
											</g>
										</svg></span></button></div>
						</section>
						<section class="Filter magic-widget" data-track-spm="m-list.Controls_YM_filter:Filter_product_search_filter.$.8ca823">
							<div class="filter-dropdown-widget">
								<mark class="dirty" data-id="2">
									筛选
									<span class="SVGInline"><svg class="SVGInline-svg" style="width: 10px;height: 11px;" width="10" height="11"
										 viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 1l3.171 3.252v4.093L5.8 10V4.252L9 1H1zm0-1h8c.887 0 1.335 1.07.713 1.701l-3.2 3.252.287-.701V10c0 .895-1.085 1.34-1.713.701L3.46 9.046a1 1 0 0 1-.288-.701V4.252l.284.698-3.17-3.252C-.335 1.065.114 0 1 0z"
											 fill="#191919" fill-rule="evenodd"></path>
										</svg></span></mark></div>
						</section>
					</section>
				</div>
			</div>
		</div>
		<!-- ========== -->
		<div id="popup">
			<div v-show="isShowMu==true&&indx=='2'" data-reactroot="" class="popup-component filter-pannel">
				<div class="overlay"></div>
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

		<!-- ========== -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: 0,
				indx: 0,
				isShowMu: false
			};
		},
		computed: {
			dropdown() {
				return this.$store.getters.getDropdown
			},
			IntelligentSorting() {
				return this.$store.getters.getPx
			},
			text() {

				return this.$store.getters.getText
			},
			textPx() {

				return this.$store.getters.getTextPx
			}
		},

		methods: {
			showMu(e) {
				console.log(e.target.className)
				if (e.target.className == "dirty") {
					this.indx = e.target.getAttribute("data-id");
					this.isShowMu = !this.isShowMu;
				}
			},
			changeTab(tab) {
				this.tab = tab;
				this.$store.dispatch('setText', {
					text: this.$store.getters.getDropdown[tab].title
				})
			},
			changeTabPx(tab) {
				this.tab = tab;
				this.$store.dispatch('setTextPx', {
					text: this.$store.getters.getPx[tab].title
				})
			}
		},
		mounted() {
			// 			var a = text;
			// 			console.log(a)	
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
	@charset "UTF-8";

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
</style>
