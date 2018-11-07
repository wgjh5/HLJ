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

		
	
	

</style>
