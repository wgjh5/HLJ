<template>
	<section class="ServiceAddress magic-widget" data-track-spm="m-list.ProductLayout_1:ServiceAddress_YM_address.$.f19c2a">
		<div data-sticky-index="1">
			<section class="location-selector">
				<div class="local-bottom default-local-bottom"><span data-track-pos="0" data-track-scm="定位" class="SVGInline icon-location icon default-icon-location"><svg
						class="SVGInline-svg icon-location-svg icon-svg default-icon-location-svg" width="20" height="20" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-16a">
									<stop stop-color="#E7C269" offset="0%"></stop>
									<stop stop-color="#C3902C" offset="100%"></stop>
								</linearGradient>
							</defs>
							<g fill="none" fill-rule="evenodd">
								<path d="M10.237 18.16s-6.39-5.606-6.39-9.17c0-3.563 2.86-6.452 6.39-6.452s6.39 2.89 6.39 6.453-6.39 9.169-6.39 9.169zm0-6.113c1.672 0 3.027-1.368 3.027-3.056s-1.355-3.057-3.027-3.057c-1.672 0-3.027 1.369-3.027 3.057s1.355 3.056 3.027 3.056z"
								fill="url(#id-16a)"></path>
								<path d="M0 0h20v20H0z"></path>
							</g>
						</svg></span>
					<div class="location"><span><b>服务地址：</b><!-- react-text: 1890 -->北京市
							<!-- /react-text --></span></div>
					<div class="icon-right-arrow">编辑</div><span class="arrow"><span class="SVGInline"><svg class="SVGInline-svg"
							style="width: 1em;height: 0.8em;" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
								fill="#999" fill-rule="evenodd"></path>
							</svg></span></span>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
@charset "UTF-8";
/**
 * 清除浮动
 */
/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
.ServiceAddress.magic-widget {
  height: 1.9rem;
}

.ServiceAddress.magic-widget > [data-sticky-index] {
  height: 100%;
}

.ServiceAddress.magic-widget .location-selector {
  position: fixed;
  z-index: 100;
  background: #000;
  margin: 0 auto;
  color: #C3902C;
  height: 1.9rem;
  line-height: 1.45rem;
  font-size: 0.75rem;
  padding: 0 0.75rem 0.75rem 0.75rem;
  left: 0;
  right: 0;
}

@media only screen and (min-width: 800px) {
  .ServiceAddress.magic-widget .location-selector {
    max-width: 414px;
  }
}

.ServiceAddress.magic-widget .location-selector .SVGInline {
  margin-right: 4px;
}

.ServiceAddress.magic-widget .location-selector .location {
  color: inherit;
}

.ServiceAddress.magic-widget .location-selector .local-bottom {
  position: static;
  border-top: 0;
  background: none;
  line-height: inherit;
  height: auto;
}

.ServiceAddress.magic-widget .location-selector .local-bottom .icon-location {
  margin-left: 0;
}

.search_in_studio.mode .ServiceAddress.magic-widget .location-selector,
.is-studio-shop.mode .ServiceAddress.magic-widget .location-selector {
  background: #bb7bb1;
  color: #fff;
}

/* === */
  @charset "UTF-8";
.location-selector .local-bottom, .choose-address .input-btn, .choose-address .load-text span, .choose-address .list-address li, .add-address .search-cont {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
}

/**
 * 简单1px解决方案
 */
.location-selector .default-local-bottom {
  bottom: 0;
  height: 2rem;
  line-height: 2rem;
  width: 100%;
}

.location-selector .studio-local-bottom {
  width: 95%;
  font-size: 0.75rem;
}

.location-selector .studio-weapp-bottom {
  width: 56%;
  font-size: 0.75rem;
}

.location-selector .local-bottom {
  position: fixed;
  z-index: 1000;
  background: #fff;
  border-top: 1px solid #f7f7f7;
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

@media only screen and (min-width: 800px) {
  .location-selector .local-bottom {
    max-width: 414px;
  }
}

.location-selector .local-bottom .location {
  width: 80%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  color: #FFF;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.location-selector .local-bottom .location b {
  font-weight: bold;
  color: inherit;
}

.location-selector .local-bottom .location i {
  display: inline-block;
  color: #BD9D62;
  border: 1px solid currentColor;
  border-radius: 2px;
  font-size: 0.6rem;
  padding: 1px 0.2rem;
  line-height: 1;
  font-style: normal;
  margin-right: 0.15rem;
}

.location-selector .local-bottom .location-studio-title {
  color: #FFF;
  font-size: 0.7rem;
}

.location-selector .local-bottom .icon-location {
  margin: 0 4px 0 0.6rem;
  width: 1rem;
  display: block;
}

.location-selector .local-bottom .default-icon-location {
  width: 1rem;
}

.location-selector .local-bottom .studio-icon-location {
  width: 1rem;
}

.location-selector .icon-right-arrow {
  padding: 0 .9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  margin-right: 0.5rem;
  visibility: hidden;
}

.location-selector .arrow {
  display: none;
}

.choose-address {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-animation: slide-from-right 0.3s;
          animation: slide-from-right 0.3s;
  background: #f6f6f6;
  position: relative;
}

@media only screen and (min-width: 800px) {
  .choose-address {
    max-width: 414px;
  }
}

.choose-address .overlay {
  background: none;
}

.choose-address .default-top {
  background: #000;
}

.choose-address .studio-top {
  background: -webkit-gradient(linear, left top, right bottom, from(#C5A7DF), to(#B15286));
  background: -webkit-linear-gradient(left top, #C5A7DF, #B15286);
  background: -o-linear-gradient(left top, #C5A7DF, #B15286);
  background: linear-gradient(to right bottom, #C5A7DF, #B15286);
}

.choose-address .title-top {
  height: 2.5rem;
  line-height: 2.5rem;
  width: 100%;
  position: relative;
}

.choose-address .title-top .title-top-text {
  text-align: center;
  color: #fff;
  font-size: 0.85rem;
}

.choose-address .title-top .title-back {
  padding-left: 0.5rem;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1.5rem;
  height: 2.6rem;
  display: inline-block;
  text-align: center;
}

.choose-address .title-top .title-back .icon-left-arrow {
  width: 0.45rem;
}

.choose-address .title-top .title-back .icon-left-arrow svg path {
  fill: #C3902C;
}

.choose-address .title-top .title-back .studio-left-arrow path {
  fill: #FFF;
}

.choose-address .title-top .title-add-address {
  position: absolute;
  right: 0.75rem;
  top: 0;
  color: #fff;
  font-size: 0.7rem;
}

.choose-address .title-top .title-add-address .plus-sign {
  margin: 0 0.2rem 0.15rem 0;
}

.choose-address.active {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
}

.choose-address .local-btn-tit {
  background: #fff;
  color: #999;
  font-size: 0.7rem;
  padding: 0.7rem 0 0 1rem;
  margin-top: 0.5rem;
}

.choose-address .local-btn-tit .diliver {
  display: inline-block;
  position: relative;
  width: 100%;
}

.choose-address .local-btn-tit .diliver:after {
  height: 0;
  border-bottom: 1px solid #e6e6e6;
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
  .choose-address .local-btn-tit .diliver:after {
    width: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .choose-address .local-btn-tit .diliver:after {
    width: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

.choose-address .local-btn-tit .edit-btn {
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
  margin-right: 0.75rem;
  float: right;
  color: #C3902C;
}

.choose-address .local-btn-tit .edit-btn .edit-icon-svg {
  width: 1rem;
  height: 1rem;
}

.choose-address .local-btn-tit .edit-btn .btn-title {
  margin-left: 0.4rem;
}

.choose-address .input-btn {
  background: #fff;
  padding: 0.5rem 0  0.5rem 0.75rem;
  margin-top: 0.5rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -moz-box-align: center;
       align-items: center;
}

.choose-address .input-btn .input-text {
  border-radius: 2px;
  height: 1.5rem;
  background: #f6f6f6;
  line-height: 1.5rem;
  padding-left: 0.5rem;
  font-size: 0.7rem;
  margin-left: 0.4rem;
  color: #B5B5B9;
  border-radius: 1rem;
  width: 72%;
}

.choose-address .input-btn svg {
  margin-right: 0.2rem;
}

.choose-address .local-text, .choose-address .load-text {
  padding-left: 1rem;
  color: #1a1a1a;
  background: #fff;
  line-height: 2rem;
  font-size: 0.75rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
     -moz-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.choose-address .local-text .city-name, .choose-address .load-text .city-name {
  display: inline-block;
  width: 70%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
}

.choose-address .local-text .icon-locate, .choose-address .load-text .icon-locate {
  display: inline-block;
  color: #C3902C;
  font-size: 0.7rem;
  padding-right: 0.75rem;
}

.choose-address .local-text .icon-locate .SVGInline, .choose-address .load-text .icon-locate .SVGInline {
  margin-right: 0.1rem;
}

.choose-address .local-cont {
  height: 2rem;
}

.choose-address .local-cont .local-tit {
  font-size: 0.7rem;
  color: #ddd;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.5rem 0.7rem;
}

.choose-address .local-cont .local-list {
  background: #fff;
  overflow: hidden;
}

.choose-address .local-cont .local-list > li {
  display: table;
  color: #1a1a1a;
  font-size: 0.75rem;
  margin-left: 0.7rem;
  width: 100%;
  height: 2.2rem;
  position: relative;
}

.choose-address .local-cont .local-list > li:after {
  height: 0;
  border-bottom: 1px solid #e6e6e6;
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
  .choose-address .local-cont .local-list > li:after {
    width: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .choose-address .local-cont .local-list > li:after {
    width: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

.choose-address .local-cont .local-list > li span {
  display: table-cell;
  padding: 0.7rem 0;
  vertical-align: middle;
}

.choose-address .withoutAddress {
  color: #999;
  text-align: center;
  margin-top: 13rem;
}

.choose-address .load-text {
  color: #999;
  margin-top: 1rem;
}

.choose-address .load-text span {
  height: 1.25rem;
  line-height: 0.9rem;
  font-size: 0.55rem;
  width: 2.7rem;
  color: #C3902C;
  float: right;
  margin: 0.5rem 0.75rem;
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -moz-box-align: center;
       align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -moz-box-pack: center;
       justify-content: center;
}

.choose-address .load-text span:after {
  width: 100%;
  border: 1px solid #C3902C;
  border-radius: 1rem;
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
  .choose-address .load-text span:after {
    width: 200%;
    border-radius: 2rem;
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .choose-address .load-text span:after {
    width: 300%;
    border-radius: 3rem;
  }
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .choose-address .load-text span:after {
    height: 200%;
  }
 }
</style>
