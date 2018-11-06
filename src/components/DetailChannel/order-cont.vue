<template>
	<div class="new-order-cont">
		<div class="segments">
			<div class="user-address-info-wrap selected">
				<div class="user-wrap"><span class="user-info">130****3974 13036943974</span><span class="SVGInline right-arrow"><svg
						 class="SVGInline-svg right-arrow-svg" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
							 fill="#999" fill-rule="evenodd"></path>
						</svg></span></div>
				<div><span class="loc-content">广东省广州市 天河区 344</span></div>
			</div>
			<div class="segment"><label>服务时间:</label>
				<div @click="Subscribe" class="choose-time"><span class="info-line muted" style="padding-right: 0px;"><span><span style="color: rgb(51, 51, 51);">暂不选择</span><span
							 style="font-size: 0.55rem; color: rgb(102, 102, 102);"> (下单后180天内可选择)</span></span></span><span class="SVGInline icon icon-right"><svg
						 class="SVGInline-svg icon-svg icon-right-svg" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
							 fill="#999" fill-rule="evenodd"></path>
						</svg></span></div>
			</div>
		</div>
		<div class="segments">
			<section class="order-submit-product-brief multi-line segment">
				<div class="item-header-wrap" >
					<div class="item-header" ><span>手艺人：</span><span class="artisan-name-component"><span
							 class="nick-name">
								<!-- react-text: 37 -->
								<!-- /react-text -->
								<!-- react-text: 38 -->丹清
								<!-- /react-text --></span></span><span class="SVGInline header-right"><svg class="SVGInline-svg header-right-svg"
							 viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
								 fill="#999" fill-rule="evenodd"></path>
							</svg></span></div><span class="order-status"></span>
				</div>
				<div class="main"><img src="https://img-ucdn-static.helijia.com/zmw/upload/20180904/835d7e82d5c04e0eb750545f6fb5a587!/0/w-1080/format-webp"
					 alt="pd-img" width="3rem" class="pd-img">
					<div class="pro-info">
						<div class="name-wrap"><span class="pd-name">大肩颈深度调理赠送30分钟局部</span></div>
					</div>
					<div class="price-wrap">
						<div class="pro-price"><span class="price-component "><span class="yen">¥</span><span><span class="round">118</span><span
									 class="decimal">.00</span></span></span></div><span class="amount">x1</span>
					</div>
				</div><!-- react-empty: 54 -->
			</section>
			<div class="timesCard">
				<div class="container">
					<div class="count-wrap"><span class="title">
							<!-- react-text: 59 -->购买数量:
							<!-- /react-text --></span>
						<div class="count-box"><button @click="value--" class="disable">-</button><input type="tel"  :value="value"><button  @click="value++" class="disable">+</button></div>
					</div>
				</div>
			</div>
			<div class="shop-card-select"><span class="select-card disable"><span class="radio-box"><span class="card-icon"><img
							 src="https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_1552517a87b9fb8fd35a54540e0b503f.png"></span><span
						 class="title">店铺充值卡</span></span></span><span class="error-tip">无可用店铺充值卡</span></div>
			<div class="order-coupon"><span>优惠券:</span><span class="coupon-info">无可用优惠券</span><span class="SVGInline right-arrow"><svg
					 class="SVGInline-svg right-arrow-svg" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
						 fill="#999" fill-rule="evenodd"></path>
					</svg></span></div>
			<div class="insured-form">
				<div class="insured-wrap">
				<button @click="insurance=!insurance">
							<span v-show="insurance" class="SVGInline radioCheckedIcon"><svg class="SVGInline-svg radioCheckedIcon-svg"
							 style="width: 17px;height: 16px;" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.999 18A9 9 0 0 1 0 9a9 9 0 1 1 17.998 0 9 9 0 0 1-8.999 9zm-3.65-8.499a.5.5 0 1 0-.699.715l2.687 2.63a.5.5 0 0 0 .71-.009l5.312-5.49a.5.5 0 1 0-.718-.695L7.677 11.78 5.35 9.501z"
								 fill="#F34270" fill-rule="evenodd"></path>
							</svg></span>
							<span v-show="!insurance" class="SVGInline radioIcon"><svg class="SVGInline-svg radioIcon-svg" style="width: 17px;height: 16px;" viewBox="0 0 18 18"
								 xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
									<path d="M8.999 18a9 9 0 0 0 8.999-9A9 9 0 1 0 0 9a9 9 0 0 0 8.999 9zm0-1.2A7.8 7.8 0 0 0 16.798 9a7.8 7.8 0 1 0-7.799 7.8z"
									 fill="#b5b5b9"></path>
								</svg></span>
				</button><span>免费意外险：保障人身及财产安全</span></div>
				<div v-show="insurance" class="info-select">
					<div class="input-box"><input placeholder="请输入投保人姓名" class="insure-man" name="userName" value="" maxlength="20"></div>
					<div class="input-box"><input placeholder="请输入身份证号" class="insure-card" name="cardId" value="" maxlength="20"></div>
					<p class="declare muted">
						<!-- react-text: 205 -->本保险费由河狸家承担,无需消费者额外支付。
						<!-- /react-text --><br><!-- react-text: 207 -->选择即为默认同意
						<!-- /react-text --><a href="//www.helijia.com/active/safe/index.html" target="_blank" class="declare-link">《投保须知》&amp;《保险同款》</a><!-- react-text: 209 -->。
						<!-- /react-text -->
					</p>
				</div>
			</div>
		</div>
		<div class="segments">
			<div class="order-remark-component">
				<div class="remark-title">备注:</div><textarea class="remark-input" maxlength="50" placeholder="可输入对手艺人的要求或你的偏好"></textarea>
				<div class="remark-tag-wrap">
					<div class="remark-list"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:1,
				insurance:false
			};
		},
		methods:{
			Subscribe(){
				this.$store.dispatch("setSubscribe", true);
			}

		},
		watch:{
			value:function(newvalue,old){
				newvalue<1? this.value=1:this.value=newvalue;
			}
		}
		
	}
</script>

<style>

</style>
