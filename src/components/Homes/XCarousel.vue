<template>
	<section class="Carousel magic-widget">
		<div class="carousel-component">
			<div class="slick-initialized slick-slider">
				<div class="slick-list">
					<mt-swipe class="slick-track carousel-component" :auto="0">
						<!-- <div class="slick-track carousel-component" style="opacity: 1;"> -->
						
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current " >
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_9289604824321e00c0f31642f897b98a.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current"  >
								
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_0ea47017accb67c9b42d8426a33fb818.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current"  >
								
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_71686612ce15773c65f545f5e5e0e0f3.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current " >
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_71686612ce15773c65f545f5e5e0e0f3.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current " >
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_0ea47017accb67c9b42d8426a33fb818.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
							<mt-swipe-item>
								<a href="javascript:void(0)" class="slick-slide slick-active slick-current " >
									<div class="ui-image-component status-show animate animate-end">
										<img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_9289604824321e00c0f31642f897b98a.jpg!/0/w-1080/format-webp">
									</div>
								</a>
							</mt-swipe-item>
						<!-- </div> -->
					</mt-swipe>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui'
	import 'mint-ui/lib/style.css'
	export default {
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
		}
	}
</script>

<style scoped>
	.mt-swipe-item{
		max-height: 12rem; 
	}
	.carousel-component {
		max-height: 12rem;
	}

	.slick-slider {
		position: relative;
		display: block;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		-khtml-user-select: none;
		-ms-touch-action: pan-y;
		touch-action: pan-y;
		-webkit-tap-highlight-color: transparent;
	}

	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}


	.slick-list {
		height: 12rem;
		position: relative;
		display: block;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	.carousel-component .slick-dots {
		bottom: 8px;
	}

	.slick-dots {
		position: absolute;
		bottom: -25px;
		display: block;
		width: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
	}

	ul,
	li,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.carousel-component .slick-dots>li {
		width: auto;
		height: auto;
		margin: 0 4px;
	}

	.slick-dots li {
		position: relative;
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 0 5px;
		padding: 0;
		cursor: pointer;
	}

	.carousel-component .slick-dots>li button {
		opacity: .5;
		background-color: #fff;
		border-radius: 50%;
		width: 6px;
		height: 6px;
		padding: 0;
	}

	.slick-dots li button {
		font-size: 0;
		line-height: 0;
		display: block;
		width: 20px;
		height: 20px;
		padding: 5px;
		cursor: pointer;
		color: transparent;
		border: 0;
		outline: none;
		background: transparent;
	}

	button,
	select {
		text-transform: none;
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

	.slick-track {
		position: relative;
		top: 0;
		left: 0;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.slick-initialized .slick-slide {
		display: inline-block;
	}

	.slick-slide {
		display: none;
		float: left;
		height: 12rem;
		min-height: 1px;
	}

	a {
		text-decoration: none;
		color: #1a1a1a;
	}

	a {
		background-color: transparent;
	}

	.slick-track:before,
	.slick-track:after {
		display: table;
		content: '';
	}

	.slick-track:after {
		clear: both;
	}

	.slick-track:before,
	.slick-track:after {
		display: table;
		content: '';
	}

	@media only screen and (min-width: 375px) html {
		font-size: 20px;
	}

	@media only screen and (min-width: 360px) html {
		font-size: 19.2px;
	}

	@media only screen and (min-width: 320px) html {
		font-size: 17.067px;
	}
</style>
