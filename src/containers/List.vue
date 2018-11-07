<template>
	<section data-reactroot="" class="widgets search-page mode weizheng_index">
		<XTopbar status="list"/>
		<XserviceAddress />
		<XserchTab />
		<XMultipleImages />
		<XMultipleImages2 />
		<XControls />
		<XQuickFilter />
    <XlistProducts />
		
	</section>
</template>

<script>
	import XTopbar from '../components/Homes/XTopbar.vue';
	import XserviceAddress from '../components/List/XserviceAddress.vue';
	import XserchTab from '../components/List/XserchTab.vue';
	import XMultipleImages from '../components/List/XMultipleImages.vue';
	import XMultipleImages2 from '../components/List/XMultipleImages2.vue';
	import XControls from '../components/List/XControls.vue';
	import XQuickFilter from '../components/List/XQuickFilter.vue';
  import XlistProducts from '../components/List/XlistProducts.vue';


	
	export default {
		components:{
			XTopbar,
			XserviceAddress,
			XserchTab,
			XMultipleImages,
			XMultipleImages2,
			XControls,
			XQuickFilter,
      XlistProducts


			
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
@charset "UTF-8";
.multiple-images-component {
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
.multiple-images-component {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -moz-box-pack: center;
       justify-content: center;
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

.multiple-images-component > div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.multiple-images-component img {
  width: 100%;
  display: block;
}

.multiple-images-component.inner-line > div {
  position: relative;
}

.multiple-images-component.inner-line > div:after {
  width: 0;
  border-right: 1px solid #D2C7AB;
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  height: 100%;
  -ms-transform-origin: right top;
      transform-origin: right top;
  -webkit-transform-origin: right top;
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .multiple-images-component.inner-line > div:after {
    height: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .multiple-images-component.inner-line > div:after {
    height: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

.multiple-images-component.inner-line > div:last-child:after {
  border: none;
}

.multiple-images-component.top-line {
  position: relative;
}

.multiple-images-component.top-line:before {
  height: 0;
  border-top: 1px solid #D2C7AB;
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
  .multiple-images-component.top-line:before {
    width: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .multiple-images-component.top-line:before {
    width: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

.multiple-images-component.top-line:before {
  top: -1px;
}

.multiple-images-component.bottom-line {
  position: relative;
}

.multiple-images-component.bottom-line:after {
  height: 0;
  border-bottom: 1px solid #D2C7AB;
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
  .multiple-images-component.bottom-line:after {
    width: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .multiple-images-component.bottom-line:after {
    width: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

/* == */
.search-page {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: #f4f4f4;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.search-page .Products.magic-widget {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.search-page mark .SVGInline.dropdown svg path {
  fill: currentColor;
}

.search-page mark.dirty .SVGInline {
  color: #C3902C !important;
}

.search-page .topbar-component .searchinput-component .input-field {
  margin-right: 0;
}

.search-page.mode.search_in_shop.in-app .search-input-widget, .search-page.mode.search_in_studio.in-app .search-input-widget, .search-page.mode.is-studio-shop.in-app .search-input-widget {
  height: 3.25rem;
}

.search-page.mode.search_in_shop.in-app.in-iphonex .search-input-widget, .search-page.mode.search_in_studio.in-app.in-iphonex .search-input-widget, .search-page.mode.is-studio-shop.in-app.in-iphonex .search-input-widget {
  height: 4.5rem;
}

.search-page .box-no-result {
  width: 60%;
}

.search-page .box-no-result .no-result, .search-page .box-no-result .loading-indicator {
  color: #999;
  display: block;
  text-align: center;
}

.search-page .box-no-result .no-result-text {
  text-align: center;
  margin-bottom: 10%;
  margin-top: 0;
  line-height: 1.2rem;
  word-wrap: break-word;
}

.search-page .box-no-result .no-result {
  padding: 1.5rem 0;
  position: relative;
}

.search-page .box-no-result .no-result .SVGInline svg path {
  fill: currentColor;
}

.search-page .maylike .product-list-container {
  padding-top: 0;
}

.search-page mark {
  background-color: transparent;
}

.search-page mark.dirty {
  color: #C3902C;
}

.search-page .SearchTypeSwitch.magic-widget, .search-page .CompoundSwitch.magic-widget {
  z-index: 1000;
  height: 2rem;
}

.search-page .SearchTypeSwitch.magic-widget.ui-anchor-top-fixed .ui-anchor-top-box, .search-page .CompoundSwitch.magic-widget.ui-anchor-top-fixed .ui-anchor-top-box {
  z-index: 1000;
  height: 2rem;
}

.search-page .cross-page {
  width: 100%;
}

.search-page .cross-page .cross {
  width: 100%;
  z-index: 1001;
  background: #fff;
}

.search-page .cross-page .cross .pos {
  position: relative;
}

.search-page .cross-page .cross .pos .right-arrow {
  position: absolute;
  right: 0.75rem;
  top: 2.5rem;
}

.search-page .cross-page .cross .more {
  text-align: left;
  border-bottom: 0.4rem solid #f6f7f8;
  border-top: 1px solid #f3f3f3;
  line-height: 2rem;
  position: relative;
  color: #999;
  font-size: 0.6rem;
}

.search-page .cross-page .cross .more span {
  position: absolute;
  right: 0.75rem;
  top: 0;
}

.search-page .cross-page .cross .item-pro {
  margin-top: 0.5rem;
}

.search-page .cross-page .cross .item-pro a {
  display: block;
  overflow: hidden;
  padding-left: 0.1rem;
  line-height: 1.5;
}

.search-page .cross-page .cross .item-pro a .product-img {
  float: left;
  width: 6rem;
}

.search-page .cross-page .cross .item-pro a .intro {
  float: left;
  padding-left: 0.5rem;
  padding-top: 0.6rem;
  width: 11rem;
}

.search-page .cross-page .cross .item-pro a .intro > h4 {
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
}

.search-page .cross-page .cross .item-pro a .intro .price {
  color: #ff3332;
  font-size: 0.7rem;
}

.search-page .cross-page .cross .item-pro a .intro .muted {
  font-size: 0.5rem;
  margin-left: 1rem;
}

.search-page .cross-page .cross .item-pro a .intro .artisan {
  position: relative;
  padding-left: 1.8rem;
  margin-top: 0.4rem;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .artisan-img {
  position: absolute;
  top: 0.2rem;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .artisan-name-component {
  font-size: 0.65rem;
  color: #999;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .artisan-name-component .nick-name {
  max-width: 7rem;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .level {
  line-height: 1;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .level img {
  height: 0.7rem;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .level .shop {
  display: inline-block;
  -webkit-align-self: flex-end;
      -ms-flex-item-align: end;
          align-self: flex-end;
  font-size: 0.5rem;
  color: #BD9D62;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  word-break: break-all;
  word-wrap: break-word;
  padding-top: 0.1rem;
  float: right;
}

.search-page .cross-page .cross .item-pro a .intro .artisan .level .shop img {
  width: 0.65rem;
  margin: 0 0.2rem 0 0.7rem;
}

.search-page .cross-page .cross .artisan-list-container {
  padding: 0 0 .5rem 0;
}

.search-page .cross-page .cross .artisan-list-container .infos {
  border-bottom: 0;
}

.search-page .Studios .studio-desc {
  margin-top: .3rem;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
     -moz-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
}

.search-page .products-component.layout-2x1 .artisan-item {
  margin-top: 0.25rem;
}

.search-page .ProductsSlider.magic-widget .products-component .product-item .product-props .market-price {
  color: #999;
}

.search-page .ProductsSlider.magic-widget .products-component .product-item .product-props .group-price .mute {
  color: #999;
}

#popup .popup-component .overlay {
  background: rgba(0, 0, 0, 0.5);
}

.search-in-app .SearchInput, .search-in-app-high .SearchInput, .search-in-app .ServiceAddress, .search-in-app-high .ServiceAddress, .search-in-app .ImageLink, .search-in-app-high .ImageLink, .search-in-app .SearchTypeSwitch, .search-in-app-high .SearchTypeSwitch, .search-in-app .Controls, .search-in-app-high .Controls, .search-in-app .QuickFilter, .search-in-app-high .QuickFilter {
  display: none;
}

.search-in-app-high .SearchInput {
  display: block;
}

.search-in-app-high .SearchInput .searchinput-component {
  display: none;
}

#popup {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.ui-anchor-top.ui-anchor-top-sticky {
  will-change: transform;
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
		
}

/* == */
	.ui-anchor-top.ui-anchor-top-sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

.ui-anchor-top.ui-anchor-top-fixed .ui-anchor-top-box {
  position: fixed;
  top: 0;
  width: 100%;
}
/* ====== */
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

.ServiceAddress.magic-widget > [data-sticky-index] {
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

.filter-pannel-widget footer > button {
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

.filter-pannel-widget footer > button[type=reset] {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.filter-pannel-widget footer > button[type=submit] {
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

</style>
