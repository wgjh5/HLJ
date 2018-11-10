<template>
	<section class="product-img">
		<section class="carousel-widget" >
			<mt-swipe :show-indicators="false" class="style__horizontalDeck___2PWmZ style__deck___3GxuK carousel-component">
				<mt-swipe-item v-for="(p,index) in pics">
					<div class="style__currentSlide___1yXCC style__slide___jy-my deck-slide" style="">
						<div class="ui-image-component status-show">
							<img class="image" :src="'https://img-ucdn-static.helijia.com/zmw'+p">
						</div>
					</div>
				</mt-swipe-item>
				<!-- <mt-swipe-item>
					<div class="style__slideAfter___1dREn style__slide___jy-my deck-slide" style="">
						<div class="ui-image-component status-show">
							<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/20181019/08fd200d9a814509b8df2589d063a7c3.jpg!/0/w-1080/format-webp">
						</div>
					</div>
				</mt-swipe-item> -->
			</mt-swipe>
		</section>
	</section>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui'
	import 'mint-ui/lib/style.css'
	export default {
		props:["pics"],
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
		}
	}
</script>

<style scoped>
	.product-img {
		height: 18.5rem;
		position: relative;
		border: none;
	}

	.product-img {
		position: relative;
		border: none;
	}

	.product-img {
		background: url(https://hlj-img.b0.upaiyun.com/zmw/m/155593427f4cb61a44432c99115f6004.png);
	}

	.carousel-widget {
		position: relative;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
	}

	*, *:after, *:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.carousel-widget .carousel-component {
		height: 18.5rem;
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.carousel-widget img {
		width: 100%;
		display: block;
	}

	.carousel-widget .carousel-component .deck-slide {
		height: auto;
		bottom: 0;
		right: 0;
	}

	.style__horizontalDeck___2PWmZ > .style__slideBefore___6l7TA {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}

	.style__slide___jy-my {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		overflow: hidden;
	}

	.ui-image-component {
		position: relative;
		overflow: hidden;
	}

	.product-img .ui-image-component.status-show .image {
		visibility: visible;
	}
</style>
