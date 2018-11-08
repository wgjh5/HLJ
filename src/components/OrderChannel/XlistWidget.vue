<template>
	<div>
		<div v-if="cha==1" class="no-result">
			<span class="SVGInline"><svg class="SVGInline-svg" style="width: 4rem;height: 4rem;" width="266.797" height="200"
				 viewBox="0 0 266.797 200" xmlns="http://www.w3.org/2000/svg">
					<path d="M164.64 197.5H68.309c-6.878 0-12.475-5.614-12.475-12.515v-175c0-4.127 3.36-7.485 7.49-7.485h134.993c6.902 0 12.517 5.613 12.517 12.513v118.389L164.641 197.5zM63.324 7.5a2.49 2.49 0 0 0-2.49 2.485v175c0 4.144 3.354 7.515 7.475 7.515h93.773l43.752-60.712V15.012c0-4.142-3.372-7.512-7.517-7.512H63.323zm100.01 184.998h-5v-57.495c0-4.138 3.355-7.503 7.478-7.503h40.044v5h-40.044c-1.366 0-2.478 1.123-2.478 2.502v57.495zM115.143 85h-25a2.5 2.5 0 0 1 0-5h25a2.5 2.5 0 0 1 0 5zm0-15h-25a2.5 2.5 0 0 1 0-5h25a2.5 2.5 0 0 1 0 5zm-11.81 27.5a2.5 2.5 0 0 1-2.5-2.5V67.5a2.5 2.5 0 0 1 5 0V95a2.5 2.5 0 0 1-2.5 2.5zm.002-27.5a2.5 2.5 0 0 1-2.183-1.279l-15-26.795a2.5 2.5 0 1 1 4.363-2.442l15 26.795a2.5 2.5 0 0 1-2.18 3.721zm-.004 0a2.5 2.5 0 0 1-2.18-3.722l15.001-26.794a2.5 2.5 0 0 1 4.363 2.442l-15 26.795a2.5 2.5 0 0 1-2.184 1.28z"
					 fill="#272636"></path>
				</svg></span>
			<div>还没有相关订单哦</div>
		</div>

		<!-- ==== -->
		<div v-if="cha==0" class="list-widget">
			<div class="order-list-item">
				<div class="item-header-wrap" data-track-spm="b-default.order.$">
					<div class="item-header" data-track-scm="artisan.f7462522d2154ec4a97a4cbb5603ab32"><span>手艺人：</span><span class="artisan-name-component"><span
							 class="nick-name">
								<!-- react-text: 3205 -->
								<!-- /react-text -->
								<!-- react-text: 3206 -->可青
								<!-- /react-text --></span></span><span class="SVGInline header-right"><svg class="SVGInline-svg header-right-svg"
							 viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
								 fill="#999" fill-rule="evenodd"></path>
							</svg></span></div><span class="order-status">等待支付</span>
				</div>
				<section class="order-product-brief multi-line segment" data-track-spm="b-default.orderProduct.$" data-track-scm="orderSeq.2018110811282111345">
					<main>
						<div class="product-img-wrap"><img class="product-img" src="https://img-ucdn-static.helijia.com/zmw/upload/20180412/8e260dcf4a3a4e74a83fcc718fb40611!/0/w-140/format-webp"
							 alt="img"></div>
						<div class="product-info-wrap">
							<div class="product-name-wrap">
								<div class="product-name" style="display: -webkit-box;"><span>芭比款0.07微密水貂毛200根</span></div>
								<div class="product-price"><span class="price-component "><span class="yen">¥</span><span><span class="round">176</span><span
											 class="decimal">.00</span></span></span>
									<div class="buy-times">
										<!-- react-text: 3224 -->x
										<!-- /react-text -->
										<!-- react-text: 3225 -->1
										<!-- /react-text -->
									</div>
								</div>
							</div>
							<div class="order-price-wrap"><span class="active-tag-placeholder"><span class="active-tag-wrap"><span class="benefit-tag">8折抢购</span></span></span>
								<div class="order-price"><span class="normal-price"><span class="order-name">需付款：</span><span class="price-component "><span
											 class="yen">¥</span><span><span class="round">176</span><span class="decimal">.00</span></span></span></span></div>
							</div>
						</div>
					</main>
					<section class="studio-summary-component">
						<!-- react-empty: 3239 -->
						<div class="flag-row"><span class="studio-tag">品牌馆</span><!-- react-text: 3242 -->
							<!-- /react-text --><span class="studio-name">冬青工作室</span></div>
					</section>
				</section>
				<div class="advertising">
					<div class="shop-card-icon"><img src="https://hlj-img.b0.upaiyun.com/zmw/m/af78f494de79165878f1769047863dd3.png"></div><span>限时抢购店铺充值卡&gt;&gt;</span>
				</div>
				<div class="order-btns-widget" data-track-spm="b-order_detail.order_btns.$">
					<div data-track-scm="取消订单" data-track-pos="0" class="order-btn-wrap">
						<div class="order-btn">取消订单</div>
					</div>
					<div data-track-scm="去支付" data-track-pos="1" class="order-btn-wrap em">
						<div class="order-btn">去支付</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ==== -->
	</div>
</template>

<script>
	export default {
		props: ["cha"],
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
.product-img {
  background: url(https://hlj-img.b0.upaiyun.com/zmw/m/155593427f4cb61a44432c99115f6004.png);
}

.product-img .ui-image-component .image {
  visibility: hidden;
}

.product-img .ui-image-component .draft {
  display: none;
}

.product-img .ui-image-component.status-show .image {
  visibility: visible;
}
/* === */
@charset "UTF-8";
/**
 * 清除浮动
 */
/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
.order-product-brief {
  margin-left: .75rem;
}

.order-product-brief.multi-line.segment {
  display: block;
  border-bottom: 0;
  padding-bottom: .5rem;
}

.order-product-brief main {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
}

.order-product-brief main .product-img-wrap {
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  overflow: hidden;
}

.order-product-brief main .product-img-wrap .product-img {
  width: 100%;
}

.order-product-brief main .product-img-wrap .one-more {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: .8rem;
  font-size: .55rem;
}

.order-product-brief main .product-info-wrap {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.5rem;
  font-size: 0.7rem;
}

.order-product-brief main .product-info-wrap .product-name-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-name {
  width: 9rem;
  height: 0.75rem;
  line-height: 0.7rem;
  max-height: 1.7rem;
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

.order-product-brief main .product-info-wrap .product-name-wrap .product-name .golden-tag {
  margin-right: 0.3rem;
  vertical-align: top;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-price {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: right;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-price .price-component {
  font-size: 0.7rem;
  line-height: 1.3;
  color: #000;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-price .price-component .yen {
  font-size: 90%;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-price .price-component .round, .order-product-brief main .product-info-wrap .product-name-wrap .product-price .price-component .decimal {
  font-size: 100%;
}

.order-product-brief main .product-info-wrap .product-name-wrap .product-price .buy-times {
  font-size: 0.6rem;
  margin-top: 0.25rem;
}

.order-product-brief main .product-info-wrap .order-price-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.25rem;
  font-size: 0.6rem;
}

.order-product-brief main .product-info-wrap .order-price-wrap .active-tag-wrap {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-right: .2rem;
}

.order-product-brief main .product-info-wrap .order-price-wrap .active-tag-wrap .active-info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  color: #999;
  font-size: 0.6rem;
  line-height: 0.85rem;
  margin-left: 0.2rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: right;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price .order-name {
  vertical-align: text-top;
  line-height: 0.9rem;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price .price-component {
  font-size: 0.8rem;
  color: #F23030;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price .price-component .round {
  font-size: 100%;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price .price-component .yen {
  font-size: 90%;
}

.order-product-brief main .product-info-wrap .order-price-wrap .order-price .extra-price {
  position: absolute;
  right: 0.75rem;
  font-size: 0.55rem;
  color: #999;
  display: block;
  line-height: 1.5;
}

.order-product-brief .studio-summary-component {
  margin-top: .5rem;
}

</style>
