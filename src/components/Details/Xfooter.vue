<template>
	<div>
		<footer v-if="start=='detall'" class="footer">
			<div class="pay-text"><span>待支付: </span><span class="price-component"><span class="yen">¥</span><span><span class="round" v-text="zhifu.maxZhimaPrice">118</span><span
						 class="decimal">.00</span></span></span></div><button class="block-level inverted primary button">去付款</button>
		</footer>
		<footer v-else class="product-footer-component studio">
			<div class="secondary-btns"><a href="javascript:void(0)"><span class="SVGInline footer-icon">
				<svg class="SVGInline-svg footer-icon-svg" style="width: 1.3rem;height: 1.3rem;" width="26" height="26" viewBox="0 0 26 26"
						 xmlns="http://www.w3.org/2000/svg">
							<g fill="none" fill-rule="evenodd">
								<path d="M11.117 20.311l-4.373 2.654v-4.417C4.464 16.946 3 14.492 3 11.735 3 6.91 7.47 3 12.983 3c5.513 0 9.983 3.91 9.983 8.735 0 4.824-4.47 8.734-9.983 8.734-.639 0-1.26-.058-1.866-.158z"
								 stroke="#666" stroke-width="1.5" fill-rule="nonzero"></path>
								<path d="M17.974 12.982a1.248 1.248 0 1 1 0-2.495 1.248 1.248 0 0 1 0 2.495zM12.983 12.982a1.248 1.248 0 1 1 0-2.495 1.248 1.248 0 0 1 0 2.495zM7.991 12.982a1.248 1.248 0 1 1 0-2.495 1.248 1.248 0 0 1 0 2.495z"
								 fill="#666"></path>
							</g>
						</svg></span><span class="footer-des">联系TA</span></a><a href="javascript:void(0)"	><span class="SVGInline block-level studio-shop">
							<svg class="SVGInline-svg block-level-svg studio-shop-svg" style="width: 1.3rem;height: 1.3rem;" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
							<g fill="none" fill-rule="evenodd">
								<path d="M22.414 3.75H3.585l-.724 6.28A4.25 4.25 0 0 0 9.55 14.4l.451-.338.45.339c.73.548 1.617.849 2.55.849.933 0 1.82-.3 2.55-.85l.45-.338.45.339a4.25 4.25 0 0 0 6.688-4.37l-.014-.086-.71-6.195z"
								 stroke="#666" stroke-width="1.5"></path>
								<path fill="#666" d="M3 7h20v1.5H3zM4.5 16.5H3V24h20v-7.5h-1.5v6h-17v-6z"></path>
							</g>
						</svg></span><span class="footer-des">品牌馆</span></a><a href="javascript:void(0)">
						<span class="SVGInline block-level collected"><svg class="SVGInline-svg block-level-svg collected-svg" style="width: 1.3rem;height: 1.3rem;"
						 width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 21.885l1.037-.92c5.427-4.91 7.002-6.51 8.192-8.647.63-1.134.938-2.21.938-3.322-.003-2.92-2.268-5.163-5.22-5.163a5.712 5.712 0 0 0-4.316 1.998l-.634.742-.634-.742a5.712 5.712 0 0 0-4.315-1.998c-2.951 0-5.215 2.244-5.215 5.162 0 1.113.307 2.19.938 3.323 1.19 2.138 2.773 3.747 8.187 8.641l1.042.926z"
							 stroke="#666" stroke-width="1.667" fill-rule="nonzero" fill="none"></path>
						</svg></span><span class="footer-des">收藏</span></a></div><span @click="onsites" class="inverted block-level primary button">立即购买</span>
			
		</footer>
	</div>

</template>

<script>
	export default {
		props: ['start','zhifu'],
		data() {
			return {

			};
		},
		methods:{
			onsites(){
				this.$router.push({ name: 'detaliList'});
			}
		}
	}
</script>

<style scoped>
	.product-footer-component,
	.product-footer-component .secondary-btns {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}
	
	.product-footer-component {
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
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: white;
	}

	@media only screen and (min-width: 800px) {
		.product-footer-component {
			max-width: 414px;
		}
	}

	.product-footer-component .secondary-btns {
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
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.product-footer-component .secondary-btns>a {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		color: #1a1a1a;
		display: block;
		margin-top: -0.2rem;
	}

	.product-footer-component .secondary-btns>a .SVGInline {
		font-size: inherit;
	}

	.product-footer-component .secondary-btns>a .footer-des {
		margin-top: 0.05rem;
	}

	.product-footer-component .secondary-btns>a .shake-icon {
		width: 1.3rem;
		height: 1.3rem;
		margin-bottom: -0.1rem;
	}

	.product-footer-component .secondary-btns>a .footer-icon {
		display: block;
		text-align: center;
	}

	.product-footer-component .secondary-btns>a .footer-icon svg g path:first-child {
		fill: none;
	}

	.product-footer-component .secondary-btns>a span {
		font-size: 0.55rem;
		color: #666666;
		display: block;
	}

	.product-footer-component .secondary-btns>a .studio-shop svg path:first-child {
		fill: none;
	}

	.product-footer-component .secondary-btns>a .collected svg path {
		fill: none;
	}

	.product-footer-component .group-btns-wrap .buy-btn-item {
		display: inline-block;
		width: 4.7rem;
		height: 2.5rem;
		padding: 0.3rem 0;
		text-align: center;
		color: white;
		font-size: 0.7rem;
		background: -webkit-linear-gradient(315deg, #CCCCCC, #666666);
		background: -o-linear-gradient(315deg, #CCCCCC, #666666);
		background: linear-gradient(135deg, #CCCCCC, #666666);
	}

	.product-footer-component .group-btns-wrap .buy-btn-item.group-btn {
		background: #BD9D62;
	}

	.product-footer-component .group-btns-wrap .buy-btn-item .btn-wrap {
		display: inline-block;
	}

	.product-footer-component .group-btns-wrap .buy-btn-item .price-item {
		text-align: right;
		margin-bottom: 0.2rem;
	}

	.product-footer-component .primary.button {
		font-size: 0.75rem;
		font-weight: bold;
		width: 8rem;
		text-align: center;
		line-height: 2.5rem;
	}

	.product-footer-component.studio .primary.button {
		background: -webkit-linear-gradient(315deg, #BE94E2, #A73170);
		background: -o-linear-gradient(315deg, #BE94E2, #A73170);
		background: linear-gradient(135deg, #BE94E2, #A73170);
		color: #fff;
		font-weight: normal;
	}

	.product-footer-component.studio .group-btns-wrap .group-btn {
		background: -webkit-linear-gradient(315deg, #BE94E2, #A73170);
		background: -o-linear-gradient(315deg, #BE94E2, #A73170);
		background: linear-gradient(135deg, #BE94E2, #A73170);
	}
	section.full-height > footer {
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
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
    height: 2.5rem;
    line-height: 2.5rem;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #f7f7f7;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
}
section.widget > header, .bar, .segment, section.full-height, section.full-height > header, section.full-height > footer, section.widget {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
}
.new-order-container footer.footer .pay-text {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: right;
    padding-right: 1em;
    color: #1A1A1A;
}

</style>
