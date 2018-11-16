<template>
	<section class="product-detail-container" id="project">
		<XtopShare :AscrollTop="scrollTop" />
		<div class="step-jump"></div>
		<XproductImg :pics="pics" />
		<XDetailComponents :something="productName" />
		<XdaysContainer style="position: absolute; width: 100%; height: 25vh;" />
		<div class="posistion"></div>
		<Xservice :serviceRange="this.str" />
		<div class="step-jump"></div>
		<Xcomment />
		<div class="step-jump"></div>
		<Xdetail :deList="deList" />
		<XfloatHelpcomponent />
		<XserviceStepComponents />
		<XitemProductComponents />
		<XitemIntro />
		<XartisanSimple :artisan="artisan" />
		<XsecStudio />
		<div class="step-jump"></div>
		<div class="title-belt-component gray-bg"><span class="SVGInline title-belt"><svg class="SVGInline-svg title-belt-svg"
				 width="32" height="6" viewBox="0 0 32 6" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<path d="M21 3H1" stroke="#1A1A1A" stroke-width=".5" stroke-linecap="square"></path>
						<path fill="#1A1A1A" d="M29 .172L26.172 3 29 5.828 31.828 3z"></path>
					</g>
				</svg></span><span class="title-text">热门推荐</span><span class="SVGInline title-belt"><svg class="SVGInline-svg title-belt-svg"
				 width="32" height="6" viewBox="0 0 32 6" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<path d="M11 3h20" stroke="#1A1A1A" stroke-width=".5" stroke-linecap="square"></path>
						<path fill="#1A1A1A" d="M3 .172L5.828 3 3 5.828.172 3z"></path>
					</g>
				</svg></span></div>
		<Xrecommend />
		<XbackTop />
		<Xfooter />
	</section>
</template>

<script>
	import axios from 'axios';
	import XtopShare from '../components/Details/XtopShare.vue';
	import XproductImg from '../components/Details/Xproduct-img.vue';
	import XdaysContainer from '../components/Details/XdaysContainer.vue';
	import XDetailComponents from '../components/Details/XDetail-components.vue';
	import Xservice from '../components/Details/Xservice.vue';
	import Xcomment from '../components/Details/Xcomment.vue';
	import Xdetail from '../components/Details/Xdetail.vue';
	import XfloatHelpcomponent from '../components/Details/XfloatHelpcomponent.vue';
	import XserviceStepComponents from '../components/Details/XserviceStepComponents.vue';
	import XitemProductComponents from '../components/Details/XitemProductComponents.vue';
	import XitemIntro from '../components/Details/XitemIntro.vue';
	import XartisanSimple from '../components/Details/XartisanSimple.vue';
	import XsecStudio from '../components/Details/XsecStudio.vue';
	import Xrecommend from '../components/Homes/Xrecommend.vue';
	import XbackTop from '../components/Homes/XbackTop.vue';
	import Xfooter from '../components/Details/Xfooter.vue';
	export default {
		components: {
			XtopShare,
			XproductImg,
			XDetailComponents,
			XdaysContainer,
			Xservice,
			Xcomment,
			Xdetail,
			XfloatHelpcomponent,
			XserviceStepComponents,
			XitemProductComponents,
			XitemIntro,
			XartisanSimple,
			XsecStudio,
			Xrecommend,
			XbackTop,
			Xfooter
		},
		data() {
			return {
				scrollTop: [],
				detailList: [],
				pics: [],
				productName: [],
				deList: [],
				serviceRange: [],
				str: "",
				artisan: []

			};
		},
		mounted: function() {
			this.$nextTick(function() {
				this.onScroll();
				this.getSomething();
			})
		},
		methods: {
			onScroll() {
				let article = document.querySelectorAll('.step-jump');
				for (var i = 0; i < article.length; i++) {
					this.scrollTop.push(this.getPoint(article[i]));
				}
			},
			getPoint(obj) {
				let t = obj.offsetTop;
				while (obj = obj.offsetParent) {
					t += obj.offsetTop;
				}
				return t;
			},
			getSomething() {
				var self = this;
// 				var params = new URLSearchParams();
// 				params.append('id', localStorage.getItem("something"));
// 				axios.post('http://localhost:3000/api/getThing',params
// 					 
// 				)
// 				.then(function(response) {

				// });
								axios.get('http://localhost:3000/api/getThing',{params: {id:localStorage.getItem("something")}})
									.then(function(response) {
				var data = response.data.data;
				self.pics = data.pics;
				self.productName.push(data.productName);
				self.productName.push(data.priceInfo.maxZhimaPrice)
				self.productName.push(data.marketPrice)
				self.productName.push(data.likeNum)
				self.productName.push(data.favNumInfo)
				self.productName.push(data.productAdditionalInfo.cardTemplates)
				self.productName.push(data.descTag);
				self.deList.push(data.desc);
				self.serviceRange.push(data.artisan.serviceRange)
				self.artisan.push(data.artisan.avatar)
				self.artisan.push(data.artisan.name)
				self.artisan.push(data.artisan.artisanLevelValue)
				self.artisan.push(data.artisan.artisanTypeDesc)
				self.artisan.push(data.artisan.satisfaction)
				for (var i = 0; i < self.serviceRange[0].length; i++) {
					self.str += self.serviceRange[0][i] + "、"

				}
				self.str = self.str.slice(0, -1)
			})
		.catch(function(error) {
			console.log(error);
		});

		if (JSON.stringify(this.$route.params) === '{}') {
			return false;
		}
		localStorage.setItem("something", this.$route.params.dataObj.id || this.$route.params.dataObj.productId);

	}
	}



	}
</script>

<style>
	.posistion {
		width: 100%;
		height: 25vh;
	}

	.product-detail-container {
		padding-bottom: 2.5rem;
	}

	.product-detail-container>section {
		border-bottom: 0.5rem solid #f7f7f7;
	}

	.product-detail-container .skeleton-component {
		background-image: -webkit-gradient(linear, left top, left bottom, color-stop(100vw, #ccc), color-stop(0, #fff), color-stop(120vw, #fff), color-stop(0, #f7f7f7), color-stop(140vw, #f7f7f7), color-stop(0, #fff));
		background-image: -webkit-linear-gradient(top, #ccc 100vw, #fff 0, #fff 120vw, #f7f7f7 0, #f7f7f7 140vw, #fff 0);
		background-image: -o-linear-gradient(top, #ccc 100vw, #fff 0, #fff 120vw, #f7f7f7 0, #f7f7f7 140vw, #fff 0);
		background-image: linear-gradient(to bottom, #ccc 100vw, #fff 0, #fff 120vw, #f7f7f7 0, #f7f7f7 140vw, #fff 0);
		height: 100%;
		height: 100vh;
	}

	.product-detail-container>section {
		border-bottom: 0.5rem solid #f7f7f7;
	}

	.product-detail-container>section.top-share-component {
		border-bottom: none;
	}

	.product-detail-container>section.carousel-widget {
		border: 0;
		height: 100vw;
		max-height: 414px;
		background: #f7f7f7;
	}

	.product-detail-container>section>h4 {
		margin: 0 0 0.5rem 0;
		font-weight: normal;
		color: #1a1a1a;
	}

	.product-detail-container .item-intro .title {
		margin: 0.75rem 0 0.5rem 0.75rem;
	}

	.product-detail-container .item-intro .limit-desc,
	.product-detail-container .item-intro .desc {
		padding: 0 0.75rem;
		margin-top: 0.3rem;
		font-size: 0.7rem;
		color: #666;
	}

	.product-detail-container .item-intro .limit-desc {
		padding-bottom: 0.75rem;
	}

	.product-detail-container .item-intro .time {
		margin: 0.3rem 0;
		padding: 0 0 0 0.75rem;
	}

	.product-detail-container .item-intro .time .item {
		font-size: 0.7rem;
		margin-right: 1rem;
	}

	.product-detail-container .item-intro .time .item .SVGInline {
		margin-top: -0.2rem;
		position: relative;
	}

	.product-detail-container .item-intro .service-sex {
		margin: 0.5rem 0 0 0;
		border-top: 1px dashed #ddd;
		padding: 0.5rem 0;
		font-size: 0.6rem;
	}

	.product-detail-container .item-intro .service-sex div {
		margin: 0 0.75rem;
	}

	.product-detail-container .item-intro .service-sex span {
		vertical-align: inherit;
		margin: 0 0.2rem 0 0;
		padding: 0.025rem 0.1rem;
		border-radius: 1px;
		background: rgba(255, 0, 131, 0.05);
		color: #FF0083;
		font-size: 0.5rem;
		border: none;
		position: relative;
	}

	.product-detail-container .item-intro .service-sex span:after {
		width: 100%;
		border: 1px solid rgba(255, 0, 131, 0.2);
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
		.product-detail-container .item-intro .service-sex span:after {
			width: 200%;
			border-radius: 2px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.product-detail-container .item-intro .service-sex span:after {
			width: 300%;
			border-radius: 3px;
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.product-detail-container .item-intro .service-sex span:after {
			height: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.product-detail-container .item-intro .service-sex span:after {
			height: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.product-detail-container .product-img {
		position: relative;
		border: none;
	}

	.product-detail-container .product-img .floating-img {
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.product-detail-container .multi-detail {
		padding: 0.5rem 0;
		position: relative;
		padding-bottom: 0;
	}

	.product-detail-container .multi-detail h4 {
		margin: 0 0 .5rem 0.75rem;
		font-size: .8rem;
		font-weight: 400;
	}

	.product-detail-container .multi-detail div {
		margin-top: 0.25rem;
		color: #666;
		line-height: 1.5;
	}

	.product-detail-container .multi-detail div.price {
		overflow: hidden;
		margin-top: .5rem;
		color: #666;
		line-height: 1.5;
		font-size: .7rem;
		padding: 0 0.75rem 0.7rem 0.75rem;
		border-bottom: 1px solid #f7f7f7;
	}

	.product-detail-container .multi-detail div.price .round {
		font-size: 1.1rem;
	}

	.product-detail-container .multi-detail div.price strong {
		color: #f4364e;
		font-size: 0.8rem;
		font-weight: normal;
	}

	.product-detail-container .multi-detail div.price del {
		margin-left: 0.25rem;
		font-size: 0.6rem;
	}

	.product-detail-container .multi-detail div.price .tag-icon {
		background: #f4364e;
		color: #fff;
		display: inline-block;
		padding: 0 0.2rem;
		font-size: 0.5rem;
		margin-left: 0.5rem;
	}

	.product-detail-container .multi-detail .icon-ontomore {
		position: absolute;
		right: 0;
		top: 0.4rem;
	}

	.product-detail-container .multi-detail .icon-ontomore path {
		fill: #BD9D62;
	}

	.product-detail-container .multi-detail .count {
		position: absolute;
		right: 0.75rem;
		bottom: 0.9rem;
		font-size: 0.6rem;
		text-align: center;
		color: #999;
	}

	.product-detail-container .service-info div {
		padding: 0.6rem 0.75rem 0.6rem 0;
		border-top: 1px solid #eee;
		color: #666;
		font-size: 0.7rem;
	}

	.product-detail-container .service-info div>.SVGInline {
		margin-left: 0.75rem;
		margin-right: 0.5rem;
		margin-top: 0.1rem;
		vertical-align: top;
	}

	.product-detail-container .service-info div .muted {
		margin-left: 0.75rem;
		color: #666;
		display: inline-block;
		max-width: 15.5rem;
	}

	.product-detail-container .service-info div:first-child {
		border-top: 0;
	}

	.product-detail-container .service-info .desc-tag {
		border-top: 1px dashed #ddd;
	}

	.product-detail-container .recent-days-container {
		border-top: 1px solid #f7f7f7;
	}

	.product-detail-container .artisan-simple-container .desc,
	.product-detail-container .artisan-simple-container .type {
		color: #666666;
	}

	.product-detail-container .product-list-container .product-list {
		padding-top: 0;
	}

	.product-detail-container .small-coupons-list-component {
		border-bottom: 1px solid #f7f7f7;
	}

	.title-belt-component {
		text-align: center;
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 0.7rem;
		color: #1A1A1A;
	}

	.title-belt-component.gray-bg {
		background-color: #f7f7f7;
	}

	.title-belt-component .title-belt {
		vertical-align: middle;
		margin: -0.1rem 0.5rem 0 0.5rem;
	}
</style>
