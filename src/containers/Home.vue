<template>
	<section data-reactroot="" class="widgets clientapp-index home index mode">
		<XTopbar status="home" />
		<XCarousel />
		<XGridMenu />
		<XComplexmages />
		<XsmallImglink />
		<Xproduct />
		<XbigImglink />
		<Xproduct />
		<XbigImglink />
		<Xproduct />
		<XbigImglink />
		<Xproduct />
		<XbigImglink />
		<Xproduct />
		<Xspace />
		<Xrecommend status="home" />
		<XbackTop />
		<Xaccount />
		<Xnavbar />
	</section>
</template>
<script>
	import axios from 'axios';
	import XTopbar from '../components/Homes/XTopbar.vue';
	import XComplexmages from '../components/Homes/XComplexImages.vue';
	import XCarousel from '../components/Homes/XCarousel.vue';
	import XGridMenu from '../components/Homes/XGridMenu.vue';
	import XsmallImglink from '../components/Homes/XsmallImglink.vue';
	import Xproduct from '../components/Homes/Xproduct.vue';
	import XbigImglink from '../components/Homes/XbigImglink.vue';
	import Xspace from '../components/Homes/Xspace.vue';
	import Xrecommend from '../components/Homes/Xrecommend.vue';
	import XbackTop from '../components/Homes/XbackTop.vue';
	import Xnavbar from '../components/Homes/Xnavbar.vue';
	import Xaccount from '../components/Homes/Xaccount.vue';
	export default {
		data() {
			return {
				aa:[]
			}
		},
		components: {
			XTopbar,
			XCarousel,
			XGridMenu,
			XComplexmages,
			XsmallImglink,
			Xproduct,
			XbigImglink,
			Xspace,
			Xrecommend,
			XbackTop,
			Xaccount,
			Xnavbar
		},
		mounted() {
			var self = this;
			axios.get('http://localhost:12345/api/gethome')
				.then(function(response) {
					self.aa =  response.data.data.widgets;
					console.log(response.data.data.widgets);
					// console.log(response.data.data.cards);
				})
				.catch(function(error) {
					console.log(error);
				});
		}

	}
</script>
<style scoped>
	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap,
	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-img,
	.home.index .daily-shop,
	.home.index .daily-shop .artisan-photo-wrap,
	.home.index .daily-shop .artisan-nearby,
	.home.index .recommend,
	.home.index .recommend .dapai,
	.home.index .nearby,
	.home.index .newComposition,
	.home.index .newComposition .spike .sp-cont,
	.home.index .newComposition .spike .sp-cont .sp-top,
	.home.index .countdown,
	.home.index .themeActivities .active .ac-text {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	/**
	 * 清除浮动
	 */
	/**
	 * 将px转化成rem
	 * 注意retina屏中的尺码要先除以2
	 */
	body {
		width: 100%;
		height: 100%;
		background-color: #fbf4e2;
		color: #1a1a1a;
	}

	.app {
		position: relative;
	}

	.home.index {
		padding-bottom: 2.5rem;
		width: 100%;
		height: 100%;
	}

	.home.index .msg {
		height: 1.5rem;
		padding: 0 0.2rem;
	}

	.home.index .msg .SVGInline-svg {
		height: 1.5rem;
	}

	.home.index .msg .SVGInline-svg g {
		fill: white;
	}

	.home.index .msg .msg-count {
		background-color: red;
		border-radius: 20rem;
		height: 0.6rem;
		min-width: 0.6rem;
		padding: 0 0.2rem;
		font-size: 0.4rem;
		line-height: 0.6rem;
		color: white;
		position: absolute;
		text-align: center;
		right: 0.3rem;
	}

	.home.index .index-menu {
		background: #000;
	}

	.home.index .index-menu li {
		list-style: none;
	}

	.home.index .index-menu ul {
		padding: 0;
		margin: 0;
	}

	.home.index .index-menu img {
		display: block;
	}

	.home.index .index-menu .menu {
		width: 100%;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		position: relative;
		overflow: hidden;
	}

	.home.index .index-menu .menu li {
		float: left;
		width: 25%;
		position: relative;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
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
		width: 100%;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-img {
		min-height: 2.5rem;
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

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-name {
		text-align: center;
		font-size: 0.6rem;
		color: #e8523e;
		display: block;
		line-height: 1;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-desc {
		text-align: center;
		font-size: 0.5rem;
		color: #ffffff;
		display: block;
		line-height: 2;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap img {
		width: 2.5rem;
		max-height: 2.5rem;
		margin: 0 auto;
	}

	.home.index .index-menu .menu li .holder-wrap .corner-img {
		position: absolute;
		right: 0;
		top: 0;
		width: 50%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder {
		position: relative;
		padding-bottom: 100%;
	}

	.home.index .new-only {
		width: 100%;
	}

	.home.index .new-only img {
		display: block;
		width: 100%;
	}

	.home.index .daily-shop {
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: stretch;
		-ms-flex-pack: stretch;
		-webkit-justify-content: stretch;
		-moz-justify-content: stretch;
		-moz-box-pack: stretch;
		justify-content: stretch;
		background: #fbf4e2;
	}

	.home.index .daily-shop .daily-tit {
		width: 1.5rem;
		background: #bd9d62;
		color: #fff;
		font-size: 0.75rem;
		position: relative;
	}

	.home.index .daily-shop .daily-tit img {
		width: 100%;
		vertical-align: middle;
	}

	.home.index .daily-shop .artisan-photo-wrap {
		width: 5rem;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		overflow: hidden;
	}

	.home.index .daily-shop .artisan-photo-wrap .artisan-photo {
		border-radius: 50%;
		-webkit-background-size: cover;
		background-size: cover;
		background-position: center;
		width: 3rem;
		height: 3rem;
		margin: auto;
	}

	.home.index .daily-shop .artisan-info {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
		border-right: 1px solid #efe7d2;
		position: relative;
		padding: 0.5rem 1rem 0.5rem 0;
	}

	.home.index .daily-shop .artisan-info p {
		padding: 0;
		margin: 0.2rem 0;
	}

	.home.index .daily-shop .artisan-info .artisan-name {
		font-size: 0.85rem;
		margin-right: 0.2rem;
	}

	.home.index .daily-shop .artisan-info .artisan-type {
		color: #999;
		font-size: 0.5rem;
	}

	.home.index .daily-shop .artisan-info .artisan-label {
		color: #bd9d62;
		font-size: 0.65rem;
		max-width: 100%;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: block;
		max-width: 6rem;
	}

	.home.index .daily-shop .artisan-info .last {
		width: 100%;
	}

	.home.index .daily-shop .artisan-info .last .star {
		width: 100%;
		height: 0.8rem;
		-webkit-background-size: auto 100%;
		background-size: auto 100%;
		display: inline-block;
		background-repeat: no-repeat;
	}

	.home.index .daily-shop .artisan-info .last a {
		position: absolute;
		right: 0;
		bottom: 0.8rem;
		color: #999;
		font-size: 0.55rem;
		margin-right: 1rem;
	}

	.home.index .daily-shop .artisan-nearby {
		width: 4rem;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		background: #f9f6e2;
	}

	.home.index .daily-shop .artisan-nearby a {
		display: block;
	}

	.home.index .daily-shop .artisan-nearby img {
		width: 100%;
	}

	.home.index .ov {
		overflow: hidden;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		word-break: break-all;
		word-wrap: break-word;
	}

	.home.index .recommend {
		color: #1a1a1a;
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

	.home.index .recommend .bor {
		border-right: 1px solid #efe7d2;
	}

	.home.index .recommend .dapai {
		background: #fbf4e2;
		padding: 1rem 0.2rem 1rem 0.7rem;
		width: 50%;
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
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.home.index .recommend .dapai .img {
		position: relative;
	}

	.home.index .recommend .dapai .img img {
		width: 2.5rem;
		height: 2.5rem;
	}

	.home.index .recommend .dapai .img .artisanProfile {
		border-radius: 50%;
		margin-top: 0.4rem;
	}

	.home.index .recommend .dapai .img .fl-img {
		position: absolute;
		top: -0.3rem;
		left: -0.5rem;
		width: 3.5rem;
		height: 3.5rem;
	}

	.home.index .recommend .dapai .txt {
		padding-left: 0.6rem;
		line-height: 0.8rem;
	}

	.home.index .recommend .dapai .txt h3 {
		font-weight: normal;
		font-size: 0.75rem;
		margin: 0;
	}

	.home.index .recommend .dapai .txt h3 .nick-name {
		max-width: 4rem;
	}

	.home.index .recommend .dapai .txt h3 .cate {
		display: block;
		font-size: 0.55rem;
		color: #999;
	}

	.home.index .recommend .dapai .txt .artisanTag {
		font-size: 0.6rem;
		color: #bd9d62;
	}

	.home.index .recommend .dapai .txt .star {
		height: 0.65rem;
		font-size: 0.5rem;
		color: #999;
	}

	.home.index .recommend .dapai .txt .star span {
		vertical-align: baseline;
	}

	.home.index .recommend .dapai .txt .star img {
		height: 100%;
	}

	.home.index .recommend .dapai .txt .star .small {
		height: 80%;
	}

	.home.index .nearby {
		background: #000;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
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

	}
</style>
