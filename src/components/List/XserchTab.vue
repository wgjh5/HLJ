<template>
	
	<div  class="SearchTypeSwitch magic-widget ui-anchor-top ui-anchor-top-sticky " style="top: 75.425px;">
		<div class="ui-anchor-top-box" style="top: 75.425px;">
			<div data-sticky-index="3" data-sticky-top="75.42499923706055">
				<ul class="search-type-switch-widget" data-track-spm="m-list.ProductLayout_1:SearchTypeSwitch_39.$.f19c2a">
					<li @click="changeDoctor(index)" v-for="(n,index) in nav" v-text="n.title"  :class="{current:tab==index}" style="min-width: auto;"></li>
					<!-- <li @click="changeDoctor" data-track-pos="1" data-track-scm="医生" class="" style="min-width: auto;">医生</li> -->
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				tab:0,
				nav:[{
					title:"精选",
					path:"choiceness"
				},{
					title:"医生",
					path:"doctor"
				}]
			};
		},
		methods:{
			changeDoctor(tab) {
				this.tab = tab;
				// this.status = this.nav[tab].path
				this.$router.push({
					name: this.nav[tab].path
				});
			}
// 			changeChoiceness(){
// 				this.$router.push({ name: 'choiceness' });
// 			}
		}

	}
</script>

<style scoped>
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
	.search-type-switch-widget {
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
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		background: #f8f8f8;
		color: #111;
		height: 2rem;
		line-height: 1.85rem;
		position: relative;
	}

	.search-type-switch-widget:after {
		height: 0;
		border-bottom: 1px solid #ccc;
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
		.search-type-switch-widget:after {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.search-type-switch-widget:after {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.search-type-switch-widget>li {
		text-align: center;
		border-bottom: 3px solid transparent;
	}

	.search-type-switch-widget>li.current {
		color: #C3902C;
		border-bottom-color: #C3902C;
	}

	.search-type-switch-widget.default {
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
	}

	.search-type-switch-widget.scroll {
		overflow: scroll;
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-moz-box-pack: start;
		-ms-flex-pack: start;
		justify-content: flex-start;
	}

	/* ==== */

		
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
	

</style>
