<template>
	<div>
		<XserchTab />
		<div class="Controls magic-widget ui-anchor-top ui-anchor-top-sticky" style="top: 110.125px;">
			<div class="Controls magic-widget ui-anchor-top ui-anchor-top-sticky" style="top: 110.125px;">
				<div class="ui-anchor-top-box" @click="showMu($event)" style="top: 110.125px;">
					<div data-sticky-index="4" data-sticky-top="110.125">
						<div class="item-count-5 with-item-size-switch with-filter">
							<section class="widgets search-controls-widget Controls magic-widget">
								<section class="ServiceTimeDropdown magic-widget " data-track-spm="m-list.Controls_YM_filter:ServiceTimeDropdown_service_time_fillter.$.8ca823">
									<div class="service-time-dropdown-widget"><mark class="">
											服务时间
											<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 1em;height: 1em;"
												 xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
													<path class="svgpath" data-index="path_7" fill="#272636" d="M163.397 289.169c-40.578 0-66.526 54.184-35.442 85.258l349.263 349.278c20.031 20.032 49.823 20.032 69.853 0l349.275-349.278c30.305-30.294 6.678-85.258-34.929-85.258h-698.02z"></path>
												</svg></span></mark></div>
								</section>
								<section class="DropdownSelect magic-widget " data-track-spm="m-list.Include_product_search_category:DropdownSelect_category_weizhengxing.$.1dc692">
									<div class="dropdown-select-widget"><mark class="dirty" data-id="0" style="color: #C3902C;">
											{{text.text}}
											<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;"
												 width="7" height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
												</svg></span></mark>
										<!-- 下拉菜单 -->
										<div v-show="isShowMu.isShowMu==true&&indx=='0'" class="options max-level-1" style="top: 0px; left: -95px; right: -190px;">
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

											<span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;"
												 width="7" height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
												</svg></span></mark>
										<!-- ===== -->
										<div v-show="isShowMu.isShowMu==true&&indx=='1'" class="options max-level-1" style="top: 0px; left: -170px; right: -114px;">
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
			</div>
		</div>
		
		<XMultipleImages />
		<XMultipleImages2 />
		<XControls :indx="indx" />
		<XQuickFilter :channel="channel" />
		<XlistProducts :channel="channel" />
		<XArtisans :channel="channel" />

	</div>
</template>

<script>
	import XQuickFilter from '../components/List/XQuickFilter.vue';
	import XlistProducts from '../components/ListChannel/XlistProducts.vue';
	import XArtisans from '../components/ListChannel/XArtisans.vue';
	import XControls from '../components/List/XControls.vue';
	import XMultipleImages from '../components/List/XMultipleImages.vue';
	import XMultipleImages2 from '../components/List/XMultipleImages2.vue';
	import XserchTab from '../components/List/XserchTab.vue';
	import $ from 'jquery';

	export default {
		components: {
			XQuickFilter,
			XlistProducts,
			XArtisans,
			XControls,
			XMultipleImages,
			XMultipleImages2,
			XserchTab


		},
		data() {
			return {
				channel: 0,
				tab: 0,
				indx: 0,
				ee :false,
				aa:true
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
					},
					isShowMu(){
						console.log(this.$store.getters.getShowMu)
						return this.$store.getters.getShowMu;
						
						
					}
				},
		
		methods: {
			
			setChannel() {
				var route = this.$router.history.current.path;
				switch (route) {
					case "/list/doctor":
						this.channel = 0;
						break;
					case "/list/choiceness":
						this.channel = 1;
						break;
					default:
						this.channel = 0;
				};
			},
			showMu(e) {
				if (e.target.className == "dirty") {
					this.indx = e.target.getAttribute("data-id");
					this.$store.dispatch('setShowMu', {
						isShowMu: this.aa
					})
				}
			},
			changeTab(tab) {
				this.tab = tab;
				this.$store.dispatch('setShowMu', {
					isShowMu : this.ee
				})
				this.$store.dispatch('setText', {
					text: this.$store.getters.getDropdown[tab].title
				})
			},
			changeTabPx(tab) {
				this.tab = tab;
				this.$store.dispatch('setShowMu', {
					isShowMu : this.ee
				})
				this.$store.dispatch('setTextPx', {
					text: this.$store.getters.getPx[tab].title
				})
			},
			close() {
				this.$store.dispatch('setShowMu', {
					isShowMu : this.ee
				})
			}

		},
		mounted() {
			this.setChannel()


		},
		watch: {
			$route() {
				this.setChannel();
			}
		}
		

	}
</script>

<style>

</style>
