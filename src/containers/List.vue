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
</style>
