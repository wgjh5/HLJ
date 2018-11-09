<template>
	<section class="ItemDetail-components">
		<div class="intro-box">
			<h4><span>显手白、性感豹纹奢华</span>
			</h4>
			<div class="price">
				<div class="price-item-wrap"><span class="price-component"><span class="yen">¥</span><span class="round">199</span></span><del
					 class="muted">
						¥

						490
					</del></div><span class="like muted">108人喜欢</span>
			</div>
			<div class="act-tag-subtitle"></div>
			<div class="shop-card-wrap" data-track-spm="b-default.shopCardSliderList.$">
				<div class="title">充值卡</div>
				<ul class="shop-card-list">
					<li class="item">
						<div class="shop-card" data-track-scm="cardId.card_20180303082212719433" data-track-pos="0">
							<div class="recharge">
								充
								<span class="unit">￥</span>500

							</div>
							<div class="giving">
								送
								<span class="unit">￥</span>50

							</div>
							<div class="buy-btn">立即充值 &gt;&gt;</div>
						</div>
					</li>
					<li class="item">
						<div class="shop-card" data-track-scm="cardId.card_20181007084008299884" data-track-pos="1">
							<div class="recharge">
								充
								<span class="unit">￥</span>1000

							</div>
							<div class="giving">
								送
								<span class="unit">￥</span>120

							</div>
							<div class="buy-btn">立即充值 &gt;&gt;</div>
						</div>
					</li>
				</ul>
			</div>
			<section class="small-coupons-list-component">
				<div class="title">优惠券</div>
				<ul class="coupons">
					<li class="coupon">满230减10</li>
					<li class="coupon">满360减20</li>
					<li class="coupon">5元通用券</li>
				</ul>
				<div class="more"><span class="SVGInline"><svg class="SVGInline-svg" style="height: 0.75rem;" width="15" height="3"
						 viewBox="0 0 15 3" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
							 fill="#999" fill-rule="evenodd"></path>
						</svg></span></div>
			</section>
			<div class="productBanner"><a href="https://p.helijia.com/l/1328?city=440100" data-track-pos="0"><img src="https://img-ucdn-static.helijia.com/zmw/upload/ms18ssy.gif!/0/w-600/format-webp"></a></div>
			<div class="timesCard-cont">
				<div class="timesCard">
					<div class="container">
						<div class="count-wrap"><span class="title">
								购买数量:
							</span>
							<div class="count-box"><button @click="subtract" :class="{disable:value<=1}">-</button><input type="tel" :value="value"><button @click="plus" class="">+</button></div>
						</div>
					</div>
				</div>
			</div>
			<div class="desc-tag"><span class="item"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 0.6rem;height: 0.6rem;"
						 width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
							<g fill="#C3902C" fill-rule="evenodd">
								<path d="M7.926.316l-.975.978a4.8 4.8 0 1 0 2.676 1.56l.849-.85A6 6 0 1 1 7.926.316z" fill-rule="nonzero"></path>
								<path d="M10.316 2.168l-5.16 5.176L2.61 4.802l-.847.847L4.307 8.19l.849.847.847-.847 5.16-5.175z"></path>
							</g>
						</svg></span>可上门
				</span><span class="item"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 0.6rem;height: 0.6rem;"
						 width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
							<g fill="#C3902C" fill-rule="evenodd">
								<path d="M7.926.316l-.975.978a4.8 4.8 0 1 0 2.676 1.56l.849-.85A6 6 0 1 1 7.926.316z" fill-rule="nonzero"></path>
								<path d="M10.316 2.168l-5.16 5.176L2.61 4.802l-.847.847L4.307 8.19l.849.847.847-.847 5.16-5.175z"></path>
							</g>
						</svg></span>明星热荐
				</span><span class="item"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 0.6rem;height: 0.6rem;"
						 width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
							<g fill="#C3902C" fill-rule="evenodd">
								<path d="M7.926.316l-.975.978a4.8 4.8 0 1 0 2.676 1.56l.849-.85A6 6 0 1 1 7.926.316z" fill-rule="nonzero"></path>
								<path d="M10.316 2.168l-5.16 5.176L2.61 4.802l-.847.847L4.307 8.19l.849.847.847-.847 5.16-5.175z"></path>
							</g>
						</svg></span>安全保障
				</span></div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				value:1
			};
		},
		methods: {
			subtract() {
				this.value<=1? this.value=1:this.value--;
			},
			plus(){
				this.value++;
			}
		}
	}
</script>

<style scoped>
	.shop-card {
		position: relative;
		width: 7.5rem;
		height: 4.5rem;
		background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_5151e9675dd066fcae385b1c5623773e.png) no-repeat;
			-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 0.6rem;
		margin: .25rem;
		padding: .4rem .35rem 2rem;
	}
.small-coupons-list-component .coupons li {
    float: left;
    min-width: 4.1rem;
    height: 1.1rem;
    line-height: 1.1rem;
    margin-right: 0.2rem;
    background: url(https://hlj-img.b0.upaiyun.com/zmw/m/f1333c6cae503f87509bd5f7789dd242.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
}
	.ItemDetail-components .intro-box {
		padding: 0.5rem 0;
		line-height: 1.5;
		font-size: 0.7rem;
	}

	.ItemDetail-components .intro-box h4 {
		margin: 0 0 0.5rem 0.75rem;
		line-height: 1.15;
		font-size: 0.8rem;
		font-weight: normal;
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

	*, *:after, *:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.ItemDetail-components .intro-box > div.price {
		overflow: hidden;
		margin: 0 0.75rem;
	}

	.ItemDetail-components .intro-box > div {
		margin-top: 0.3rem;
		color: #666;
	}

	.ItemDetail-components .intro-box > div .price-item-wrap {
		display: inline;
	}

	.ItemDetail-components .intro-box > div span.like.muted {
		color: #999999;
	}

	.ItemDetail-components .intro-box > div.price .like {
		float: right;
		font-size: 0.6rem;
		line-height: 2;
	}

	.price-component {
		color: #F23030;
	}

	.ItemDetail-components .intro-box > div.act-tag-subtitle {
		padding: 0 0.3rem 0.3rem 0.75rem;
		border-bottom: 1px solid #f7f7f7;
		color: #F23030;
		font-size: 0.6rem;
	}

	.ItemDetail-components .intro-box > div {
		margin-top: 0.3rem;
		color: #666;
	}

	.ItemDetail-components .intro-box > div .price-item-wrap .muted {
		color: #999999;
	}

	.ItemDetail-components .intro-box > div.price del {
		margin-left: 0.25rem;
		font-size: 0.6rem;
	}

	.shop-card-wrap {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		line-height: 1 !important;
	}

	.shop-card-wrap .title {
		padding: 0.75rem 0 0 0.75rem;
		font-size: 0.7rem;
		color: #1A1A1A;
		line-height: 0.7rem;
	}

	.shop-card-wrap .shop-card-list {
		overflow-x: scroll;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-box;
		padding: 0.45rem 0;
		margin-left: 0.5rem;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.shop-card-wrap .shop-card-list .item .shop-card {
		width: 7.5rem;
		height: 4.5rem;
		padding: 1.22rem 0.5rem 2rem;
		letter-spacing: 0.05rem;
		margin: 0.25rem 0 0.25rem 0.25rem;
	}

	.shop-card .giving {
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}

	.shop-card-wrap .shop-card-list .item .shop-card .buy-btn {
		right: 0.4rem;
		letter-spacing: 0;
	}

	.shop-card .buy-btn {
		position: absolute;
		right: 0.25rem;
		bottom: 0.4rem;
	}
	.shop-card-wrap::after {
    content: '';
    width: 95%;
    height: 1px;
    position: absolute;
    margin-left: 0.75rem;
    bottom: 0;
    left: 0;
    background: #f7f7f7;
}
.product-detail-container .small-coupons-list-component {
    border-bottom: 1px solid #f7f7f7;
}
.small-coupons-list-component {
    overflow: hidden;
    position: relative;
}
.small-coupons-list-component .title {
    float: left;
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: #1A1A1A;
    padding: 0.75rem 0.65rem 0.75rem 0.75rem;
}
.small-coupons-list-component .coupons {
    width: 13rem;
    overflow: hidden;
    padding-top: 0.5rem;
}
.small-coupons-list-component .more {
    color: #999;
    position: absolute;
    top: 0.55rem;
    right: 0.75rem;
    letter-spacing: 1px;
}
.SVGInline {
    line-height: 1;
    vertical-align: middle;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    display: inline-block !important;
}
.ItemDetail-components .intro-box > div.productBanner {
    padding: 0;
    margin: 0;
}
.ItemDetail-components .intro-box > div.productBanner a {
    display: block;
    height: 100%;
}
.ItemDetail-components .intro-box > div.productBanner img {
    width: 100%;
    height: 100%;
}
.ItemDetail-components .intro-box > div.timesCard-cont {
	background: #fff;
    padding: 0;
    margin-top: 0;
    font-size: 0.75rem;
    color: #1a1a1a;
}
.timesCard {
    padding: 0 0.75rem;
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
button {
    background: none;
    border: none;
    outline: none;
}
button, [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
}
.timesCard .container .count-wrap .count-box input {
    border-top: none;
    border-bottom: none;
}
.timesCard .container .count-wrap .count-box span, .timesCard .container .count-wrap .count-box input {
    display: inline-block;
    width: 1.75rem;
    text-align: center;
    font-size: 0.7rem;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-radius: 0;
}
.desc-tag {
    padding: 0.5rem 0 0 0;
    border-top: 1px dashed #ddd;
}
.desc-tag .item {
    font-size: 0.6rem;
    color: #666;
    padding-left: 0.75rem;
}
.desc-tag .item .SVGInline {
    margin-top: -0.1rem;
    margin-right: 0.2rem;
    position: relative;
}
.SVGInline-svg {
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
	opacity: ;
}
</style>
