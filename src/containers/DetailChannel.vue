<template>
	<section class="new-order-container full-height">
		<XtopBar status="indent" />
		<orderCont :zhifu="zhifu"/>
		<Xpopup />
		<sites />
		<Xfooter start="detall" :zhifu="zhifu"/>
	</section>
</template>

<script>
	import axios from 'axios';
	import Xfooter from '../components/Details/Xfooter.vue';
	import XtopBar from '../components/Register/XtopBar.vue';
	import orderCont from '../components/DetailChannel/order-cont.vue';
	import Xpopup from '../components/DetailChannel/Xpopup.vue';
	import sites from '../components/DetailChannel/sites.vue';
	export default {
		data() {
			return {
				zhifu:{},
			};
		},
		components: {
			Xfooter,
			XtopBar,
			orderCont,
			Xpopup,
			sites
		},
		mounted: function() {
			this.$nextTick(function() {
				this.getSomething();
			})
		},
		methods: {
			getSomething() {
				var self = this;
				axios.get('http://localhost:3000/api/getThing', {
						params: {
							id: localStorage.getItem("something")
						}
					})
					.then(function(response) {
						var data = response.data.data;
						let fukuan= new Object;
						fukuan['name']=data.artisan.name;
						fukuan['productName']=data.productName;
						fukuan['maxZhimaPrice']=data.priceInfo.maxZhimaPrice;
						fukuan['img']=data.largePics[0];
						self.zhifu = fukuan;
// 						self.pics = data.pics;
// 						self.productName.push(data.productName);
// 						self.productName.push(data.priceInfo.maxZhimaPrice)
// 						self.productName.push(data.marketPrice)
// 						self.productName.push(data.likeNum)
// 						self.productName.push(data.favNumInfo)
// 						self.productName.push(data.productAdditionalInfo.cardTemplates)
// 						self.productName.push(data.descTag);
// 						self.deList.push(data.desc);
// 						self.serviceRange.push(data.artisan.serviceRange)
// 						self.artisan.push(data.artisan.avatar)
// 						self.artisan.push(data.artisan.name)
// 						self.artisan.push(data.artisan.artisanLevelValue)
// 						self.artisan.push(data.artisan.artisanTypeDesc)
// 						self.artisan.push(data.artisan.satisfaction)
// 						console.log(self.artisan)
// 						for (var i = 0; i < self.serviceRange[0].length; i++) {
// 							self.str += self.serviceRange[0][i] + "、"
// 
// 						}
// 						self.str = self.str.slice(0, -1)
					})
					.catch(function(error) {
						console.log(error);
					});

			}
		}
	}
</script>

<style>
	@import url("../assets/home.css");

	section.full-height {
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		-moz-box-orient: vertical !important;
		-moz-box-direction: normal !important;
		flex-direction: column !important;
		height: 100%;
		overflow: auto;
		background: #f7f7f7;
		color: #1a1a1a;
		padding-bottom: 2.5rem;
	}

	.new-order-container {
		padding-top: 2.5rem;
		background: #f7f7f7;
		font-size: 0.7rem;
	}

	section.full-height:after {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #f7f7f7;
		z-index: -1;
	}

	section.widget header,
	.bar,
	.segment,
	section.full-height,
	section.full-height header,
	section.full-height footer,
	section.widget {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.new-order-container footer.footer {
		background: #FFFFFF;
	}

	.button.primary.inverted {
		color: #fff;
		background: -webkit-gradient(linear, , from(right), color-stop(#E7C269), to(#C3902C));
		background-image: -webkit-linear-gradient(left, rgb(231, 194, 105), rgb(195, 144, 44));
		background: -o-linear-gradient(left, #E7C269, #C3902C);
		background: linear-gradient(to, right, #E7C269, #C3902C);
		border: 0;
	}

	button {
		background: none;
		border: none;
		outline: none;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	.new-order-container footer.footer button {
		padding: 0 1em;
		width: 8rem;
	}

	.button.primary {
		color: #C3902C;
		border-color: #C3902C;
	}

	.button {
		color: #666;
		background: #fff;
		border: 1px solid rgba(102, 102, 102, 0.3);
	}

	.block-level {
		display: block;
		width: 100%;
	}

	.new-order-container footer.footer .pay-text span {
		vertical-align: baseline;
	}

	.new-order-container footer.footer .pay-text .price-component {
		margin-left: 1rem;
	}

	.price-component {
		color: #F23030;
	}

	.price-component {
		font-size: 0.55rem;
		color: #F73831;
	}

	.new-order-container footer.footer .pay-text .price-component .yen {
		font-size: 1rem;
		font-weight: bold;
		color: #F23030;
	}

	.price-component .yen {
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		font-size: 100%;
	}

	.new-order-container footer.footer .pay-text .round,
	.new-order-container footer.footer .pay-text .decimal {
		font-size: 1rem;
		font-weight: bold;
		color: #F23030;
	}

	.new-order-container footer.footer .pay-text span {
		vertical-align: baseline;
	}

	.price-component .round {
		font-size: 100%;
	}

	.price-component span {
		vertical-align: baseline;
		line-height: 1;
	}

	section.full-height footer {
		/* -webkit-box-direction: normal; */
		/* -webkit-box-orient: horizontal; */
		/* -webkit-flex-direction: row; */
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		/* flex-direction: row; */
		/* -webkit-box-pack: center; */
		-ms-flex-pack: center;
		/* -webkit-justify-content: center; */
		-moz-justify-content: center;
		-moz-box-pack: center;
		/* justify-content: center; */
		/* -webkit-flex-wrap: nowrap; */
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		/* flex-wrap: nowrap; */
		/* -webkit-box-align: stretch; */
		-ms-flex-align: stretch;
		/* -webkit-align-items: stretch; */
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		/* align-items: stretch; */
		-moz-box-orient: horizontal !important;
		-moz-box-direction: normal !important;
		/* flex-direction: row !important; */
		height: 2.5rem;
		line-height: 2.5rem;
		background: rgba(255, 255, 255, 0.9);
		border-top: 1px solid #f7f7f7;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.topbar-component {
		position: fixed;
		z-index: 1002;
		width: 100%;
		height: 2.5rem;
		color: #fff;
		padding-right: 0.2rem;
		top: 0;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
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

	.topbar-component {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.topbar-component button.back {
		margin-right: .75rem;
		padding-left: 0rem;
		color: #BD9D62;
		font-size: 1.2rem;
		height: 1.2rem;
		padding: 0;
	}

	.topbar-component h1,
	.topbar-component .title {
		font-size: inherit;
		margin: 0;
		font-weight: normal;
		padding: 0;
		text-align: center;
		position: absolute;
		left: 2rem;
		right: 2rem;
		top: 0;
		bottom: 0;
		line-height: 2.5rem;
		pointer-events: none;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.topbar-component button.back .icon {
		vertical-align: initial;
	}

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block;
	}

	.SVGInline-svg {
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.new-order-container .new-order-cont {
		padding-top: 0.5rem;
	}

	.segments {
		padding-left: .75rem;
		margin-bottom: 0.5rem;
		color: #1a1a1a;
		background: #fff;
	}

	.user-address-info-wrap.selected {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.user-address-info-wrap {
		width: 100%;
		border-bottom: 0.05rem solid #F7F7F7;
		padding: 0.75rem 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		overflow: hidden;
	}

	.new-order-container .segment {
		border-color: #f3f3f3;
		padding-right: 0.75rem;
	}

	.segment:last-child {
		border-bottom: none;
	}

	.segment {
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		-moz-box-orient: horizontal !important;
		-moz-box-direction: normal !important;
		flex-direction: row !important;
		position: relative;
		height: 2.5rem;
		line-height: 2.5rem;
		padding-right: .75em;
		border-bottom: 1px solid #e6e6e6;
	}

	.user-address-info-wrap .user-wrap {
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		margin-bottom: 0.5rem;
	}

	.user-address-info-wrap .user-wrap .user-info {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.user-address-info-wrap .right-arrow {
		width: 0.3rem;
		height: 0.55rem;
		margin-right: 0.75rem;
	}

	.segment label {
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}

	.new-order-container .segment .choose-time {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
	}

	.new-order-container .segment .info-line {
		text-align: left;
		padding-left: 0.4rem;
	}

	.segment .info-line {
		padding-right: 1em;
		white-space: nowrap;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: block;
	}

	.muted {
		color: #999;
	}

	.new-order-container .icon-right {
		width: 0.3rem;
		height: 0.55rem;
	}

	.new-order-container .segment .SVGInline-svg {
		vertical-align: middle;
	}

	.order-submit-product-brief.multi-line.segment {
		display: block;
		padding-top: 0;
		padding-right: 0;
	}

	.new-order-container .segment {
		border-color: #f3f3f3;
		padding-right: 0.75rem;
	}

	.segment.multi-line {
		padding-top: .75rem;
		padding-bottom: .75rem;
		height: auto;
		line-height: 1.25;
	}

	order-submit-product-brief .item-header-wrap {
		margin-bottom: .8rem;
	}

	.order-submit-product-brief .main {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding-right: .75rem;
	}

	.order-submit-product-brief .main .pd-img {
		width: 3rem;
		height: 3rem;
	}

	.order-submit-product-brief .main .pro-info {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	.order-submit-product-brief .main .price-wrap {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		text-align: right;
	}

	.order-submit-product-brief .main .pro-info .name-wrap {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		max-height: 1.7rem;
	}

	.order-submit-product-brief .main .pro-info .name-wrap .pd-name {
		line-height: 0.8rem;
		max-height: 1.6rem;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.order-submit-product-brief .main .price-wrap .amount {
		color: #666;
		font-size: 0.6rem;
	}

	.order-submit-product-brief .main .price-wrap .pro-price .price-component {
		font-size: 0.6rem;
		color: #1A1A1A;
	}

	.artisan-name-component {
		display: inline-block;
		vertical-align: middle;
	}

	.artisan-name-component .nick-name {
		display: inline-block;
		vertical-align: middle;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-right: 0.3em;
	}

	.order-submit-product-brief .item-header-wrap {
		margin-bottom: .8rem;
	}

	.order-submit-product-brief .item-header-wrap .item-header {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		height: 2.5rem;
		font-size: 0.7rem;
		line-height: 2rem;
		border-bottom: 1px #f7f7f7 solid;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
	}

	.new-order-container .timesCard {
		padding-left: 0;
		border-bottom: 1px solid #f3f3f3;
	}

	.timesCard {
		padding: 0 0.75rem;
	}

	.shop-card-select {
		color: #1a1a1a;
		font-size: .7rem;
		border-bottom: 1px solid #f3f3f3;
		height: 2.48rem;
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

	.order-coupon {
		height: 2.5rem;
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
		border-bottom: 1px solid #f3f3f3;
	}

	.segments {
		padding-left: .75rem;
		margin-bottom: 0.5rem;
		color: #1a1a1a;
		background: #fff;
	}

	.timesCard .container {
		background-color: #fff;
		width: 100%;
	}

	.timesCard .container .count-wrap {
		padding: 0.4rem 0;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.timesCard .container .count-wrap {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.new-order-container .timesCard .container .count-wrap span {
		font-size: 0.7rem;
		color: #1a1a1a;
	}

	.timesCard .container .count-wrap .title {
		font-size: 0.75rem;
		color: #666;
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.timesCard .container .count-wrap .count-box {
		display: inline-block;
		vertical-align: middle;
		line-height: 1.3rem;
		border-radius: 0.1rem;
		overflow: hidden;
		border: 1px solid #e6e6e6;
	}

	.timesCard .container .count-wrap .count-box button.disable {
		color: #cecece;
	}

	.timesCard .container .count-wrap .count-box button {
		width: 1.5rem;
		padding: 0;
		margin: 0;
		font-size: 0.8rem;
	}

	.timesCard .container .count-wrap .count-box {
		display: inline-block;
		vertical-align: middle;
		line-height: 1.3rem;
		border-radius: 0.1rem;
		overflow: hidden;
		border: 1px solid #e6e6e6;
	}

	.timesCard .container .count-wrap .count-box input {
		border-top: none;
		border-bottom: none;
	}

	.timesCard .container .count-wrap .count-box span,
	.timesCard .container .count-wrap .count-box input {
		display: inline-block;
		width: 1.75rem;
		text-align: center;
		font-size: 0.7rem;
		border-left: 1px solid #e6e6e6;
		border-right: 1px solid #e6e6e6;
		border-radius: 0;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	.shop-card-select .disable {
		color: #999;
	}

	.shop-card-select .error-tip {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: .55rem;
		color: #666;
		text-align: right;
		margin-right: 1rem;
		padding-top: 0.1rem;
	}

	.shop-card-select .select-card .radio-box {
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

	.shop-card-select .select-card .card-icon {
		display: inline-block;
		margin-right: 0.5rem;
	}

	.shop-card-select .select-card .card-icon img {
		width: 0.75rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.order-coupon .coupon-info {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: .55rem;
		text-align: right;
		color: #666;
	}

	.order-coupon .right-arrow {
		width: 0.3rem;
		height: 0.55rem;
		margin-left: 0.4rem;
		margin-right: 0.75rem;
	}

	.insured-form .insured-wrap {
		font-size: .7rem;
		height: 2.5rem;
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

	.insured-form .info-select {
		background-color: white;
		padding-bottom: 0.5em;
		overflow: hidden;
	}

	.insured-form .insured-wrap button {
		padding: 0;
		margin-right: 0.4rem;
	}

	.insured-form .insured-wrap button .SVGInline {
		vertical-align: baseline;
	}

	.insured-form .insured-wrap button .radioCheckedIcon .radioCheckedIcon-svg {
		width: 0.8rem;
		height: 0.8rem;
		padding-right: 0.1rem;
	}

	.insured-form .insured-wrap button .radioCheckedIcon path {
		fill: #B19270;
	}

	.insured-form .info-select {
		background-color: white;
		padding-bottom: 0.5em;
		overflow: hidden;
	}

	.insured-form .info-select .input-box {
		position: relative;
		margin: .5rem .5rem 0 0;
		overflow: hidden;
		background: #fff;
		color: #666;
		border: 1px solid #e6e6e6;
		line-height: 1.2rem;
	}

	.insured-form .info-select .declare {
		line-height: 1rem;
		font-size: .6rem;
		color: #1A1A1A;
	}

	.insured-form .info-select .input-box input {
		padding: .5rem;
		line-height: 1rem;
		width: 100%;
		border: 0;
		outline: 0;
		background: transparent;
	}

	.insured-form .info-select .declare {
		line-height: 1rem;
		font-size: .6rem;
		color: #1A1A1A;
	}

	.insured-form .info-select .declare .declare-link {
		color: #BD9D62;
	}

	.order-remark-component {
		padding: 0.75rem 0.75rem 0.75rem 0;
	}

	.order-remark-component .remark-input {
		resize: none;
		width: 100%;
		height: 3rem;
		border: 1px solid #e6e6e6;
		border-radius: 2px;
		margin-top: 0.5rem;
		padding: 0.3rem;
		line-height: 1.25;
	}

	textarea {
		overflow: auto;
	}

	.order-remark-component .remark-list {
		max-height: 2rem;
		overflow: hidden;
	}
</style>
