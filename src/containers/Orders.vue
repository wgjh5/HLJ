<template>
	<div>
		<section data-reactroot="" class="order-list">
			<XorderTopBar status="order" />
			<router-view></router-view>
			<Xnavbar />
			
		</section>
	</div>
</template>
<script>
	import XorderTopBar from '../components/Orders/XorderTopBar.vue';
	import Xnavbar from '../components/Homes/Xnavbar.vue';
	export default {

		components: {
			XorderTopBar,
			Xnavbar
		}
	}
</script>
<style>
@charset "UTF-8";
/**
 * 简单1px解决方案
 */
.order-list {
  overflow: hidden;
}

.order-list .widget-topbar {
  position: fixed;
  width: 100%;
  z-index: 999;
  z-index: 999;
}

@media only screen and (min-width: 800px) {
  .order-list .widget-topbar {
    max-width: 414px;
  }
}

.order-list .filter-bar {
  position: fixed;
  width: 100%;
  height: 2rem;
  z-index: 99;
  margin-top: 2.2rem;
  white-space: nowrap;
  overflow-x: scroll;
  background-color: white;
}

@media only screen and (min-width: 800px) {
  .order-list .filter-bar {
    max-width: 414px;
  }
}

.order-list .filter-bar li {
  display: inline-block;
  font-size: 0.7rem;
  height: 100%;
  line-height: 2.2rem;
  margin: 0 0.7rem;
}

.order-list .filter-bar li.current {
  color: #C3902C;
  border-bottom: 2px solid #C3902C;
}

.order-list .filter-bar .orderCount {
  position: absolute;
  top: 15%;
  border-radius: 50%;
  border: 1px solid #C3902C;
  color: #C3902C;
  font-style: normal;
  font-size: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.65rem;
  text-align: center;
  background: #fff;
}

.order-list .filter-bar .maxCount {
  font-size: 0.35rem;
}

.order-list .group-lead-component {
  margin-top: 4.2rem;
}

.order-list .list-widget {
  margin-bottom: 2.5rem;
  overflow: hidden;
	
}

.order-list .list-widget .no-result {
  margin: 35% auto 30%;
  color: #666;
	
}

.order-list .list-widget .no-result .SVGInline-svg path {
  fill: #999;
}

.order-list .list-widget .item-header-wrap {
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
  margin-left: 0.75rem;
  height: 2.25rem;
  font-size: 0.7rem;
  overflow: hidden;
  border-bottom: 1px solid #f3f3f3;
}

.order-list .list-widget .item-header-wrap .item-header {
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
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.order-list .list-widget .item-header-wrap .item-header .artisan-name-component {
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
}

.order-list .list-widget .item-header-wrap .item-header .header-right-svg {
  height: 0.55rem;
  margin-left: 0.25rem;
}

.order-list .list-widget .item-header-wrap .order-status {
  float: right;
  margin-right: 0.75rem;
  color: #666;
}

.order-list .list-widget .advertising {
  line-height: 1;
  font-size: .6rem;
  margin-bottom: .5rem;
}

.order-list .list-widget .advertising .shop-card-icon {
  width: 1.4rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.75rem;
}

.order-list .list-widget .advertising .shop-card-icon img {
  display: block;
  width: 100%;
}

.order-list .list-widget .advertising span {
  font-size: .6rem;
  color: #BD9D62;
  margin-left: .2rem;
}

.order-list .list-widget .order-list-item {
  background-color: white;
  margin-top: 0.5rem;
  overflow: hidden;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
     -moz-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap .active-tag-placeholder {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap .active-tag-placeholder .benefit-tag {
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap .order-price {
  -webkit-box-flex: 0;
  -webkit-flex: none;
     -moz-box-flex: 0;
      -ms-flex: none;
          flex: none;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap .order-price .normal-price {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
     -moz-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}

.order-list .list-widget .order-list-item .order-product-brief .product-info-wrap .order-price-wrap .order-price .normal-price .order-name {
  line-height: 0.8rem;
}

.order-list .list-widget .order-list-item .order-buytimes {
  height: 2.25rem;
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
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
     -moz-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-left: 0.75rem;
  padding-right: 0.75rem;
  border-top: 1px solid #f3f3f3;
  font-size: 0.6rem;
  color: #999;
}

.order-list .list-widget .order-list-item .order-buytimes .buyTimes-left-wrap {
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

.order-list .list-widget .order-list-item .order-buytimes .buyTimes-left-wrap .buyTimes-left {
  font-size: 0.7rem;
  color: #1a1a1a;
}

.order-list .list-widget .order-list-item .order-buytimes .content {
  margin-right: 0.25rem;
  line-height: 1;
}

.order-list .list-widget .order-list-item .order-buytimes .right-arrow-svg {
  width: 0.3rem;
  height: 0.55rem;
}

.order-list .list-widget .order-list-item .service-item {
  margin-left: 0.75rem;
  border-top: 1px solid #f3f3f3;
  padding: 0.5rem 0.75rem 0.5rem 0;
}

.order-list .list-widget .order-list-item .service-item .location-wrap {
  margin-top: 0.3rem;
  line-height: 1;
  color: #666;
}

.order-list .list-widget .order-list-item .service-item .item-header {
  border: none;
}

.order-list .list-widget .order-list-item .service-item .service-content {
  border-radius: 5px;
  background-color: #f7f7f7;
}

.order-list .list-widget .order-list-item .service-item .service-content .service-extra-wrap {
  margin-left: 1rem;
  border-top: 1px solid #e6e6e6;
  margin-top: 0.4rem;
  padding-top: 0.4rem;
  font-size: 0.6rem;
}

.order-list .list-widget .order-list-item .service-item .service-content .service-extra-wrap .extra-price {
  font-size: 0.7rem;
  vertical-align: baseline;
}

.order-list .list-widget .order-list-item .order-buytimes ~ .service-item {
  border: none;
  padding-top: 0;
}

.order-list .list-widget .order-list-item .jump-detail {
  height: 2rem;
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 0 0.75rem 0.5rem 0.75rem;
  background-color: #f7f7f7;
  color: #666;
  font-size: 0.7rem;
}

.order-list .list-widget .order-list-item .jump-detail .SVGInline-svg {
  width: 0.3rem;
  height: 0.55rem;
  margin-left: 0.25rem;
}

.order-list .list-widget .order-list-item .order-btns-widget {
  width: 100%;
  height: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  border-top: 1px solid #f3f3f3;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
     -moz-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap {
  -webkit-box-flex: 0;
  -webkit-flex: none;
     -moz-box-flex: 0;
      -ms-flex: none;
          flex: none;
}

.order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap.em .order-btn {
  border: none;
}

.order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn {
  font-size: 0.6rem;
  padding: 0.3rem 0;
  position: relative;
  border-radius: 2rem;
  width: 3.5rem;
  line-height: 0.7rem;
  margin-right: 0.5rem;
  white-space: nowrap;
  text-align: center;
}

.order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn:after {
  width: 100%;
  border: 1px solid #E6E6E6;
  border-radius: 2rem;
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
  .order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn:after {
    width: 200%;
    border-radius: 4rem;
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn:after {
    width: 300%;
    border-radius: 6rem;
  }
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn:after {
    height: 200%;
    -ms-transform: scale(0.5);
        transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .order-list .list-widget .order-list-item .order-btns-widget .order-btn-wrap .order-btn:after {
    height: 300%;
    -ms-transform: scale(0.333);
        transform: scale(0.333);
    -webkit-transform: scale(0.333);
  }
}

.order-list .list-widget .order-list-item .order-item-service-widget {
  border-top: 1px solid #f3f3f3;
  margin-left: 0.75rem;
  padding: 0.5rem 0.75rem 0.5rem 0;
}

.order-list .list-widget .order-list-item .order-item-service-widget .item-service-header {
  font-size: 0.6rem;
  color: #999;
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
  line-height: 1rem;
  margin: 0.1rem 0 0.6rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .item-service-header .item-remain {
  font-size: 0.7rem;
  color: #1a1a1a;
}

.order-list .list-widget .order-list-item .order-item-service-widget .item-service-header .backslash {
  font-size: 0.7rem;
  margin: 0 0.2rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .item-service-header .header-jump-all {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  text-align: right;
}

.order-list .list-widget .order-list-item .order-item-service-widget .item-service-header .header-jump-all .header-right-svg {
  height: 0.55rem;
  margin-left: 0.25rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service {
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.6rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .item-service-status {
  color: #C3902C;
  text-align: right;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .calendar-wrap {
  margin-top: 0.2rem;
  line-height: 1;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .calendar-wrap .no-reserve {
  color: #F4364E;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .calendar-wrap .no-reserve-text {
  color: #999;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .item-service-svg {
  width: 0.6rem;
  height: 0.7rem;
  margin-right: 0.5rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .item-service-svg path {
  fill: #999;
}

.order-list .list-widget .order-list-item .order-item-service-widget .order-item-service .soon-tag {
  color: white;
  background-color: #F4364E;
  font-size: 0.55rem;
  padding: 0.1rem;
  margin-left: 0.25rem;
}

.order-list .list-widget .order-list-item .order-item-service-widget .jump-all-service {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 2rem;
  font-size: 0.7rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-radius: 2px;
  margin-top: 0.5rem;
  background-color: #f7f7f7;
  color: #666;
}

.order-list .list-widget .order-list-item .order-item-service-widget .jump-all-service .jump-right-svg {
  width: 0.35rem;
  height: 0.6rem;
  margin-left: 0.25rem;
}

.order-list .list-widget .service-mode-item {
  background-color: white;
  margin-top: 0.5rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.order-list .list-widget .service-mode-item .order-product-wrap .product-img {
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap {
  margin-left: .75rem;
  display: block;
  padding-bottom: .75rem;
  border-bottom: 1px solid #f3f3f3;
}

.order-list .list-widget .service-mode-item .order-product-wrap main {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.order-list .list-widget .service-mode-item .order-product-wrap main .product-info-wrap {
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
}

.order-list .list-widget .service-mode-item .order-product-wrap main .product-info-wrap .product-name-price {
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
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
     -moz-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.order-list .list-widget .service-mode-item .order-product-wrap main .product-info-wrap .product-name-price .product-name {
  font-size: 0.7rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-right: 0.5rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap main .product-info-wrap .product-name-price .product-name .golden-tag {
  margin-right: 0.3rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap main .product-info-wrap .product-name-price .price-component {
  font-size: 0.6rem;
  color: #1a1a1a;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info {
  font-size: 0.6rem;
  color: #666;
  margin-top: 0.5rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .item-service-svg {
  margin-right: 0.3rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .location-wrap .SVGInline svg path {
  fill: #999;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .location-wrap .content {
  display: inline-block;
  width: 16rem;
  vertical-align: top;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .calendar-wrap {
  position: relative;
  margin-bottom: 0.35rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .calendar-wrap .calender {
  position: absolute;
  top: 0.05rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .calendar-wrap .calender svg path {
  fill: #999;
}

.order-list .list-widget .service-mode-item .order-product-wrap .order-info .calendar-wrap > span:last-child {
  margin-left: 1rem;
}

.order-list .list-widget .service-mode-item .order-product-wrap .studio-summary-component {
  margin-top: .5rem;
}

.order-list .list-widget .service-mode-item .order-price-wrap {
  width: 100%;
  font-size: 0.6rem;
}

.order-list .list-widget .service-mode-item .order-price-wrap .question-icon-svg {
  width: 1rem;
  height: 1rem;
  margin: 0.1rem 0 0.3rem 0.4rem;
}

.order-list .list-widget .service-mode-item .order-price-wrap .active-tag-placeholder {
  float: left;
}

.order-list .list-widget .service-mode-item .order-price-wrap .price-info {
  float: right;
}

.order-list .list-widget .service-mode-item .order-price-wrap .price-info .price-component {
  color: #F4364E;
  font-size: 0.7rem;
}

.order-list .list-widget .service-mode-item .order-btn-wrap {
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
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
     -moz-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding-right: 0.75rem;
}

.order-list .list-widget .service-mode-item .order-btn-wrap .item-service-btn {
  font-size: 0.6rem;
  display: inline-block;
  padding: 0.3rem 0;
  border: 1px solid #E6E6E6;
  border-radius: 2rem;
  width: 3.5rem;
  height: 1.5rem;
  line-height: 0.85rem;
  margin-right: 0.5rem;
  white-space: nowrap;
  text-align: center;
}

.order-list .list-widget .service-mode-item .order-btn-wrap .item-service-btn.em {
  border: none;
  background: -webkit-gradient(linear, left top, right top, from(#E7C269), to(#C3902C));
  background: -webkit-linear-gradient(left, #E7C269, #C3902C);
  background: -o-linear-gradient(left, #E7C269, #C3902C);
  background: linear-gradient(to right, #E7C269, #C3902C);
  color: white;
}

.popup-component.srv-time .content {
  top: 8rem;
}

.confirm.popup-component.refundDetainDesc .content {
  border-radius: 2px;
  left: 2.4rem;
  right: 2.4rem;
  width: auto;
}

.confirm.popup-component.refundDetainDesc .content .confirm-component div {
  text-align: left;
  font-size: 14px;
  color: #1A1A1A;
  line-height: 21px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.confirm.popup-component.refundDetainDesc .content .confirm-component footer .confirm-btn {
  font-size: 0.75rem;
  color: #C3902C;
}
/* ========= */
body {
  background-color: #F7F7F7;
  color: #1a1a1a;
}

.cate .msg {
  height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  padding: 0 0.2rem;
}

.cate .msg .SVGInline-svg {
  height: 1.5rem;
}

.cate .msg .msg-count {
  background-color: red;
  border-radius: 20rem;
  height: 0.6rem;
  min-width: 0.6rem;
  padding: 0 0.2rem;
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: white;
  position: absolute;
  text-align: center;
  right: 0.3rem;
}

.cate .topbar-component .back {
  display: none;
}

.cate .topbar-component .input-field {
  margin-right: 0;
}

.cate .cate-wrap {
  position: relative;
}

.cate .cate-wrap .cate-nav {
  width: 4rem;
  position: fixed;
  top: 2.5rem;
  bottom: 2.5rem;
  background: #fff;
  overflow-y: auto;
}

.cate .cate-wrap .cate-nav .nav-cell {
  height: 2.5rem;
  width: 100%;
  color: #1a1a1a;
  border-left: 2px solid #fff;
  line-height: 2.5rem;
  font-size: 0.75rem;
  text-align: center;
  overflow: hidden;
}

.cate .cate-wrap .cate-nav .nav-cell > a {
  display: block;
  width: 100%;
  height: 100%;
}

.cate .cate-wrap .cate-nav .nav-cell.active {
  color: #bd9d62;
  background: #F7F7F7;
  border-left: 2px solid #bd9d62;
}

.cate .cate-wrap .cate-right {
  position: relative;
  padding-top: 2.5rem;
  margin-left: 4rem;
  clear: both;
}

.cate .cate-wrap .cate-right.weapp-cate {
  padding-top: 0;
}

.cate .cate-wrap .cate-right .more {
  color: #bd9d62;
  float: right;
  padding-right: 0.5rem;
  font-size: 0.7rem;
  line-height: 1.9rem;
  position: relative;
  z-index: 5;
}

.cate .cate-wrap .cate-right .more svg path {
  fill: #bd9d62;
}

.cate .cate-wrap .cate-right .cate-banner {
  overflow: hidden;
  width: 100%;
  padding: 0.5rem;
}

.cate .cate-wrap .cate-right .cate-list {
  position: relative;
}

.cate .cate-wrap .cate-right .cate-list .tit {
  font-size: 0.7rem;
  line-height: 1.6rem;
  height: 1.9rem;
  color: #1a1a1a;
  padding-left: 0.5rem;
  display: block;
  width: 100%;
  overflow: hidden;
}

.cate .cate-wrap .cate-right .cate-list .cont {
  overflow: hidden;
  clear: both;
  width: 100%;
  padding: 0 0.25rem;
}

.cate .cate-wrap .cate-right .cate-list .cont li {
  float: left;
  width: 33.33%;
  padding: 0 0.25rem 0.5rem;
}

.cate .cate-wrap .cate-right .cate-list .cont li .picture-cont {
  position: relative;
}

.cate .cate-wrap .cate-right .cate-list .cont li .picture-cont .picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
          background-size: cover;
}

.cate .cate-wrap .cate-right .cate-list .cont li .picture-cont .holder {
  position: relative;
  padding-bottom: 100%;
}

.cate .cate-wrap .cate-right .cate-list .cont li .name {
  color: #666;
  line-height: 1.25rem;
  font-size: 0.6rem;
  background: #fff;
  text-align: center;
  width: 100%;
  overflow: hidden;
  display: block;
  height: 1.25rem;
  word-break: break-all;
}

.cate {
  padding-bottom: 13%;
}

</style>
