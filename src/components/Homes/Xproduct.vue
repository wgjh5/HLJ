<template>
	<section class="ProductsSlider magic-widget">
		<div class="products-component track-sideslip layout-slider">
			<div v-for="(a,index) in status" @click="ondetails(index)" class="product-item">
				<div class="product-image-box">
					<a>
						<div class="product-img">
							<div class="ui-image-component status-show">
								<img class="image" :src="'https://img-ucdn-static.helijia.com/zmw'+a.imageUrl">
							</div>
						</div>
					</a>
					<div class="promotion-tag">
						<div class="tag bg-red" v-show="a.activeTagName"><span v-text="a.activeTagName"></span></div>
					</div>
				</div><a>
					<div class="product-name"><span class="name" v-text="a.productName">衡力瘦脸针 一针见分“小”不知不觉小V脸</span></div>
				</a>
				<div class="product-props no-status">
					<div class="box">
						
						<div class="price-part" v-show="!a.priceInfo.simName">
							<span class="price-component "><span class="yen">¥</span><span><span class="round" v-text="a.priceInfo.artisanVisitPrice"></span></span></span>
							<span class="market-price" v-text="a.priceInfo.marketPrice"></span>
							<div class="new-line">
								<span class="price-act-tag" v-text="a.priceInfo.simName"></span>
								<!-- <span class="price-act-tag-pre"></span><span class="price" v-text="a.priceInfo.showCustomerPrice"></span> -->
								<span class="status"></span>
							</div>
						</div>
						
						<div class="act-product" v-show="a.priceInfo.simName">
							<span class="market-price" v-text="a.priceInfo.marketPrice"></span>
							<div>
								<div class="new-line">
									<!-- <span class="price-act-tag" v-text="a.priceInfo.simName"></span> -->
									<span class="price-act-tag-pre" v-text="a.priceInfo.simName"></span><span class="price" v-text="'￥'+a.priceInfo.showCustomerPrice"></span>
									<span class="status"></span>
								</div>
							</div>
						</div>
						<div class="right-part"></div>
					</div>
				</div>
			</div>
			<!-- <div class="product-item"  data-track-pos="1" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20180926/b35b2afaa5c640049f1ea65e2fcb8ef9!/0/w-200/format-webp">
					</div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">【劲爆价美牙套餐】美国3M树脂补牙一颗＋超声波洁牙</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">99</span></span></span>
                                <div class="new-line">
                                   
                                   <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>
                <div class="product-item"  data-track-pos="2" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20160919/f3544a292dd54edfa312d1d735d85837.jpg!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">天芮面部补水+背部减压+头部按摩</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">168</span></span></span>
                                <div class="new-line">
                                    <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>
                <div class="product-item"  data-track-pos="3" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20180106/93263611d65e4951b58794b614ac49fe!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">四星特惠 裸妆款 貂毛200根</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">285</span></span></span>
                                <div class="new-line">
                                    
                                    <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>
                <div class="product-item"  data-track-pos="4" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20181030/cf95089acae74c8fa75610aadc936745.jpg!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">四星上新 巧克力色晕染贝壳火爆款</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">199</span></span></span>
                                <div class="new-line">
                                    
                                    <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>
                <div class="product-item"  data-track-pos="5" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20180503/4c7a84a7c2b747bf8605eed25b76706a!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag">
                            <div class="tag bg-red"><span>双11 全场5折</span></div>
                        </div>
                    </div><a><div class="product-name"><span class="name">【骨胶原面膜】补水保湿抗衰老</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="act-product"><span class="price-component "><span class="yen">¥</span><span><span class="round">208</span></span></span>
                                <div>
                                    <div class="new-line">
										<span class="price-act-tag-pre">双11</span><span class="price">¥104</span>
                                        <span class="status"></span></div>
                                </div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>
                <div class="product-item"  data-track-pos="6" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20181011/97704ce600724c82b50c3e579a929c20.jpg!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">初秋来袭3D开花睫毛嫁接300根</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">198</span></span></span>
                                <div class="new-line">
                                   
                                    <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div> 
                <div class="product-item"  data-track-pos="7" data-track-show="init">
                    <div class="product-image-box"><a><div class="product-img"><div class="ui-image-component status-show">
					<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20181015/fc962aedf22642d8bb1f50236c40f517.jpg!/0/w-200/format-webp"></div></div></a>
                        <div class="promotion-tag"></div>
                    </div><a><div class="product-name"><span class="name">四星推荐秋季爆款晕染美甲</span></div></a>
                    <div class="product-props no-status">
                        <div class="box">
                            <div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">208</span></span></span>
                                <div class="new-line">
                                    <span class="status"></span></div>
                            </div>
                            <div class="right-part"></div>
                        </div>
                    </div>
                </div>-->
			<a class="show-more" data-track-scm="clickShowMore">
				<img class="show-more-img" src="https://img-ucdn-static.helijia.com/zmw/magic-view/show-more.png" alt="show-more"></a>
		</div>
	</section>
</template>
<script>
	export default {
		props: ["status"],
		components: {},
		methods: {
			ondetails(index) {
				this.$router.push({
					name: 'detail',
					params: { 
                dataObj: this.status[index]
            }
				});

			}

		}
	}
</script>
<style scoped>
	@import url("../../assets/uiImg.css");
	@import url("../../assets/product.css");

	.act-product .new-line .price-act-tag-pre {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 0.5rem;
		line-height: 0.7rem;
		padding: 0 2px;
		text-align: center;
		background: #F23030;
		position: relative;
		border-bottom-left-radius: 1px;
		border-top-left-radius: 1px;
		overflow: hidden;
		color: #fff;
		font-family: PingHei, Helvetica Neue, Helvetica, Arial, Verdana, "sans-serif";
	}

	.act-product .new-line .price {
		color: #F23030;
		font-size: 0.5rem;
		line-height: 0.65rem;
		padding: 1px 2px 0 2px;
		text-align: center;
		margin-top: 0.2rem;
		margin-right: 0.25rem;
		background: rgba(242, 48, 48, 0.05);
		position: relative;
		font-family: PingHei, Helvetica Neue, Helvetica, Arial, Verdana, "sans-serif";
	}

	.act-product .new-line .price-act-tag-pre:after {
		width: 100%;
		border: 1px solid #F23030;
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

	.act-product .new-line .price {
		color: #F23030;
		font-size: 0.5rem;
		line-height: 0.65rem;
		padding: 1px 2px 0 2px;
		text-align: center;
		margin-top: 0.2rem;
		margin-right: 0.25rem;
		background: rgba(242, 48, 48, 0.05);
		position: relative;
		font-family: PingHei, Helvetica Neue, Helvetica, Arial, Verdana, "sans-serif";
	}

	.act-product .new-line .price:after {
		width: 100%;
		border: 1px solid rgba(242, 48, 48, 0.2);
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
</style>
