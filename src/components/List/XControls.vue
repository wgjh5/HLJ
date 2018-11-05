<template>
	<div class="Controls magic-widget ui-anchor-top ui-anchor-top-sticky" style="top: 110.125px;">
		<div class="ui-anchor-top-box" style="top: 110.125px;">
			<div data-sticky-index="4" data-sticky-top="110.125">
				<div class="item-count-5 with-item-size-switch with-filter">
					<section class="widgets search-controls-widget Controls magic-widget">
						<section class="ServiceTimeDropdown magic-widget" data-track-spm="m-list.Controls_YM_filter:ServiceTimeDropdown_service_time_fillter.$.8ca823">
							<div class="service-time-dropdown-widget"><mark class="">
									<!-- react-text: 1932 -->服务时间
									<!-- /react-text --><span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 1em;height: 1em;"
										 xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
											<path class="svgpath" data-index="path_7" fill="#272636" d="M163.397 289.169c-40.578 0-66.526 54.184-35.442 85.258l349.263 349.278c20.031 20.032 49.823 20.032 69.853 0l349.275-349.278c30.305-30.294 6.678-85.258-34.929-85.258h-698.02z"></path>
										</svg></span></mark></div>
						</section>
						<section class="DropdownSelect magic-widget" data-track-spm="m-list.Include_product_search_category:DropdownSelect_category_weizhengxing.$.1dc692">
							<div class="dropdown-select-widget"><mark class="dirty">
									<!-- react-text: 1937 -->全部微整形
									<!-- /react-text --><span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;"
										 width="7" height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
										</svg></span></mark></div>
						</section>
						<section class="DropdownSelect magic-widget" data-track-spm="m-list.Controls_YM_filter:DropdownSelect_zhinengpaixu.$.8ca823">
							<div class="dropdown-select-widget"><mark class="dirty">
									<!-- react-text: 1942 -->智能排序
									<!-- /react-text --><span class="SVGInline dropdown"><svg class="SVGInline-svg dropdown-svg" style="width: 7px;height: 4px;"
										 width="7" height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.5 4L0 0h7z" fill="#999" fill-rule="evenodd"></path>
										</svg></span></mark></div>
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
							<div class="filter-dropdown-widget"><mark class="">
									<!-- react-text: 1951 -->筛选
									<!-- /react-text --><span class="SVGInline"><svg class="SVGInline-svg" style="width: 10px;height: 11px;" width="10"
										 height="11" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 1l3.171 3.252v4.093L5.8 10V4.252L9 1H1zm0-1h8c.887 0 1.335 1.07.713 1.701l-3.2 3.252.287-.701V10c0 .895-1.085 1.34-1.713.701L3.46 9.046a1 1 0 0 1-.288-.701V4.252l.284.698-3.17-3.252C-.335 1.065.114 0 1 0z"
											 fill="#191919" fill-rule="evenodd"></path>
										</svg></span></mark></div>
						</section>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
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

</style>
