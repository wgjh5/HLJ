<template>
	<section v-if="channel==0" class="Artisans magic-widget" data-track-spm="m-list.ArtisanLayout_3:Artisans_artisan_list.$.446466">
		<section class="artisans-widget">
			<div class="scroll-view-component ending">
				<div class="content">
					<ul class="artisans">
						<li v-for="(b,index) in bb">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=ef7c48d938214a9c975c47a731ebc6bc">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" v-bind:style="{background:'url('+'https://img-ucdn-static.helijia.com/zmw/'+ b.avatar+')',backgroundSize:'100%',backgroundRepeat:'no-repeat'}"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">
															

															{{b.nick}}
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star5.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">{{b.artisanLevelValue}}</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														{{b.satisfyPercent}}
													</span><span class="ave-price">{{b.favCount}}</span></div>
												<section class="studio-summary-component">
													
													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=ef7c48d938214a9c975c47a731ebc6bc"><span
												 class="general-tag" rel="店铺优惠券" >{{b.labels[1]}}</span><span class="general-tag" rel="今日可约">{{b.labels[0]}}</span></a></div>
									</div>
								</div>
							</section>
						</li>
					<!-- 	<li data-track-scm="artisan.69eae0828a674a648fe24c1ba3043f64" data-track-pos="1">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=69eae0828a674a648fe24c1ba3043f64">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20170523/c497ba880aca4a769c032a00bc870905.png!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">
															

															广州美恩医院雷涛博士
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star5.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">顶级</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:92%
													</span><span class="ave-price">关注数:779</span></div>
												<section class="studio-summary-component">
													
													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=69eae0828a674a648fe24c1ba3043f64"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
			<!-- 			<li data-track-scm="artisan.b75878474ed3443aa5e6163cffb0d8da" data-track-pos="2">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=b75878474ed3443aa5e6163cffb0d8da">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180412/b1cdf79764d74f6fa3f6316edba356c0!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">
															

															广州壹加壹美容张红艳院长
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">卓越</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:90%
													</span><span class="ave-price">关注数:3134</span></div>
												<section class="studio-summary-component">
													
													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=b75878474ed3443aa5e6163cffb0d8da"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
				<!-- 		<li data-track-scm="artisan.6281c24373ce43889761d25163da874e" data-track-pos="3">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=6281c24373ce43889761d25163da874e">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180913/336cd8b6473141baa60da5868eda2b38.jpg!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">
															

															广州仁爱天河医院体检中心
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">卓越</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:94%
													</span><span class="ave-price">关注数:2</span></div>
												<section class="studio-summary-component">
													
													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=6281c24373ce43889761d25163da874e"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
			<!-- 			<li data-track-scm="artisan.98a2cb2099aa4a6b90b2811812abb68b" data-track-pos="4">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=98a2cb2099aa4a6b90b2811812abb68b">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180601/5e43d884e60b4428be953c1d08e6cb3c.jpeg!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">
															

															广州韩妃整形刘志刚院长
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">卓越</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:99%
													</span><span class="ave-price">关注数:18</span></div>
												<section class="studio-summary-component">
													
													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=98a2cb2099aa4a6b90b2811812abb68b"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
				<!-- 		<li data-track-scm="artisan.46129e9ad70b4d2ebd86800689f3562c" data-track-pos="5">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=46129e9ad70b4d2ebd86800689f3562c">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180410/1cf76f71f3ee4e0186594bdb92d16ed0.jpg!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">


															广州广大医疗美容徐院长
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star5.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">顶级</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:91%
													</span><span class="ave-price">关注数:2125</span></div>
												<section class="studio-summary-component">

													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=46129e9ad70b4d2ebd86800689f3562c"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li>
						<li data-track-scm="artisan.429252f0a4ff436592ab32844daebe05" data-track-pos="6">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=429252f0a4ff436592ab32844daebe05">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180427/ef31a2a6d6d84c1ca14b08c5f658b456!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">


															广州华美医疗美容郝院长
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star5.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">顶级</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:90%
													</span><span class="ave-price">关注数:1844</span></div>
												<section class="studio-summary-component">

													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=429252f0a4ff436592ab32844daebe05"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
					<!-- 	<li data-track-scm="artisan.a3a32253bc894689a34b7aac84eccd40" data-track-pos="7">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=a3a32253bc894689a34b7aac84eccd40">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20180115/5900e36a1ff843219088c4c659d84a28.jpg!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">


															广州晨曦美容医院陈柯院长
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">卓越</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:90%
													</span><span class="ave-price">关注数:1058</span></div>
												<section class="studio-summary-component">

													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=a3a32253bc894689a34b7aac84eccd40"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
					<!-- 	<li data-track-scm="artisan.0e8dc965abfb4afd917aceb0ec96a56f" data-track-pos="8">
							<section class="artisan-item-component"><a href="https://m.helijia.com/artisan.html?artisan=0e8dc965abfb4afd917aceb0ec96a56f">
									<div class="artisan">
										<div class="photo-cont">
											<div class="photo" style="background-image: url(&quot;https://img-ucdn-static.helijia.com/zmw/upload/20170305/d641e851524443d999c10caf2ae2eae8.jpg!/0/w-140/format-webp&quot;);"></div>
										</div>
										<div class="infos infos-comments">
											<div class="infos-text">
												<div class="name-info"><span class="artisan-name-component"><span class="nick-name">


															广州健丽医美王科学主任
														</span></span></div>
												<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
													 class="artisan-desc">
														(
														<span class="desc">卓越</span><span class="type"></span>)
													</span></div>
												<div class="order"><span class="count">
														满意度:90%
													</span><span class="ave-price">关注数:1108</span></div>
												<section class="studio-summary-component">

													<div class="flag-row flag"><span class="studio-name"></span></div>
												</section>
											</div>
											<div class="distance"></div>
										</div>
									</div>
								</a>
								<div class="artisan-other-info have-labels">
									<div class="shop_coupon">
										<div class="labels"><a href="https://m.helijia.com/artisan.html?artisan=0e8dc965abfb4afd917aceb0ec96a56f"><span
												 class="general-tag" rel="今日可约">今日可约</span></a></div>
									</div>
								</div>
							</section>
						</li> -->
					</ul>
				</div>
				<div class="footer"></div>
			</div>
		</section>
	</section>
</template>

<script>
	import axios from 'axios';
	export default {
		props: ["channel"],
		data() {
			return {
				bb: []
			};
		},
		mounted() {
			var self = this;
			axios.get('http://localhost:3000/api/getDoctor')
				.then(function(response) {
					var data = response.data.data.resultList;
					self.bb = data;
					console.log(data);

					// console.log(response.data.data.cards);
				})
				.catch(function(error) {
					console.log(error);
				});
		}

	}
</script>

<style scoped>
	/**
 * 简单1px解决方案
 */
	.Artisans.magic-widget {
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
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.Artisans.magic-widget .artisans-widget {
		width: 100%;
		-webkit-align-self: flex-start;
		-ms-flex-item-align: start;
		align-self: flex-start;
	}

	.Artisans.magic-widget ul.artisans {
		background: #F4F4F4;
		padding-top: 0.5rem;
	}

	.Artisans.magic-widget ul.artisans>li {
		background: #fff;
		margin-bottom: 0.5rem;
	}

	/* ==== */
	@charset "UTF-8";

	.artisan-item-component .artisan,
	.artisan-item-component .artisan .photo-cont,
	.artisan-item-component .artisan .infos,
	.artisan-item-component .artisan-other-info .shop_coupon {
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
	.artisan-item-component .artisan {
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
		width: 100%;
		position: relative;
	}

	.artisan-item-component .artisan .photo-cont {
		padding: 0 0.9rem 0 0.75rem;
		position: absolute;
		top: 0.7rem;
	}

	.artisan-item-component .artisan .photo-cont .photo {
		width: 2.5rem;
		height: 2.5rem;
		margin: auto;
		background-color: #ddd;
		border-radius: 50%;
		position: relative;
		-webkit-background-size: cover;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		-webkit-flex-flow: column;
		-moz-flex-flow: column;
		-ms-flex-flow: column;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-flow: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
	}

	.artisan-item-component .artisan .photo-cont .photo .img-wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.artisan-item-component .artisan .photo-cont .photo .img-wrap:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		opacity: 0.5;
		border-radius: 50%;
	}

	.artisan-item-component .artisan .photo-cont .photo .img-wrap .artisan-state {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: #999;
		color: #fff;
		font-size: 0.6rem;
		text-align: center;
		border-radius: 0.5rem;
	}

	.artisan-item-component .artisan .infos {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-flex: 3;
		-webkit-flex: 3;
		-moz-box-flex: 3;
		-moz-flex: 3;
		-ms-flex: 3;
		flex: 3;
		padding: 0.4rem 0 0 4.2rem;
	}

	.artisan-item-component .artisan .infos:nth-child(1) {
		border: 0;
	}

	.artisan-item-component .artisan .infos .infos-text {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.artisan-item-component .artisan .infos .infos-text .name-info {
		color: #1a1a1a;
		line-height: 1.1rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
	}

	.artisan-item-component .artisan .infos .infos-text .name-info .artisan-name-component {
		font-size: 0.7rem;
		margin-top: 0.1rem;
	}

	.artisan-item-component .artisan .infos .infos-text .name-info .artisan-name-component .nick-name {
		max-width: 9rem;
		display: inline-block;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.artisan-item-component .artisan .infos .infos-text .name-info .job {
		color: #666;
		font-size: 0.55rem;
		display: inline-block;
		margin-top: 0.2rem;
		line-height: 1rem;
	}

	.artisan-item-component .artisan .infos .infos-text .level-star-component {
		position: relative;
		top: -0.05rem;
	}

	.artisan-item-component .artisan .infos .infos-text .level {
		line-height: 1.1rem;
	}

	.artisan-item-component .artisan .infos .infos-text .level .star {
		height: 0.7rem;
		vertical-align: text-top;
	}

	.artisan-item-component .artisan .infos .infos-text .level .text {
		color: #999;
		vertical-align: text-top;
		font-size: 0.55rem;
		position: relative;
		top: -2px;
	}

	.artisan-item-component .artisan .infos .infos-text .order {
		color: #999;
		font-size: 0.5rem;
		margin: 0.5rem 0 0.3rem;
	}

	.artisan-item-component .artisan .infos .infos-text .order .count .satisfaction {
		vertical-align: baseline;
		font-size: 0.55rem;
		color: white;
		margin-left: 0.3rem;
		border-radius: 0.1rem;
		padding: 0.05rem 0.1rem;
	}

	.artisan-item-component .artisan .infos .infos-text .order .count .satisfaction.high-satisfaction {
		background-color: #F73831;
	}

	.artisan-item-component .artisan .infos .infos-text .order .count .satisfaction.middle-satisfaction {
		background-color: #DEBB76;
	}

	.artisan-item-component .artisan .infos .infos-text .order .count .satisfaction.low-satisfaction {
		background-color: #51CE78;
	}

	.artisan-item-component .artisan .infos .infos-text .order .ave-price {
		margin-left: 0.6rem;
	}

	.artisan-item-component .artisan .infos .infos-text .studio-summary-component {
		color: #999;
		font-size: 0.5rem;
	}

	.artisan-item-component .artisan .infos .infos-text .studio-summary-component .dsr-row {
		margin-bottom: 0.3rem;
	}

	.artisan-item-component .artisan .infos .infos-text .tags-wrap {
		color: #999;
		padding-bottom: 0.25rem;
	}

	.artisan-item-component .artisan .infos .infos-text .tags-wrap .general-tag {
		margin: 0 0.25rem 0.25rem 0;
		vertical-align: middle;
	}

	.artisan-item-component .artisan .infos .distance {
		width: 3rem;
		text-align: center;
		line-height: 1.2rem;
		color: #999;
		font-size: 0.6rem;
		margin-top: 1rem;
	}

	.artisan-item-component .artisan .infos.infos-comments .order {
		margin-bottom: 0.45rem;
	}

	.artisan-item-component .artisan .infos.infos-comments .order.order-count {
		margin-bottom: 0.3rem;
	}

	.artisan-item-component .artisan .infos.infos-comments .studio-summary-component .dsr-row {
		margin-bottom: 0.45rem;
	}

	.artisan-item-component .artisan-other-info {
		margin-left: 4.2rem;
		padding-top: 0.4rem;
		position: relative;
	}

	.artisan-item-component .artisan-other-info:before {
		height: 0;
		border-top: 1px solid #E6E6E6;
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		width: 100%;
		-ms-transform-origin: left top;
		transform-origin: left top;
		-webkit-transform-origin: left top;
	}

	@media (-webkit-min-device-pixel-ratio: 2) {
		.artisan-item-component .artisan-other-info:before {
			width: 200%;
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			-webkit-transform: scale(0.5);
		}
	}

	@media (-webkit-min-device-pixel-ratio: 3) {
		.artisan-item-component .artisan-other-info:before {
			width: 300%;
			-ms-transform: scale(0.333);
			transform: scale(0.333);
			-webkit-transform: scale(0.333);
		}
	}

	.artisan-item-component .artisan-other-info .studio-summary-component {
		padding: 0.15rem 0 0.4rem 0;
	}

	.artisan-item-component .artisan-other-info .shop_coupon {
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
		padding: 0rem .5rem 0.5rem 0;
	}

	@media (-webkit-min-device-pixel-ratio: 2),
	(-o-min-device-pixel-ratio: 2/1),
	(min-resolution: 2dppx) {
		.artisan-item-component .artisan-other-info .shop_coupon {
			border-width: .5px;
		}
	}

	.artisan-item-component .artisan-other-info .shop_coupon .labels {
		-webkit-box-flex: 2;
		-webkit-flex: 2;
		-moz-box-flex: 2;
		-moz-flex: 2;
		-ms-flex: 2;
		flex: 2;
		margin-right: 0.5rem;
	}

	.artisan-item-component .artisan-other-info .shop_coupon .labels .general-tag {
		margin-right: 0.25rem;
	}

	.artisan-item-component .artisan-other-info .artisan-self-support {
		padding-bottom: 0.4rem;
	}

	.artisan-item-component .artisan-other-info .artisan-self-support .shops {
		font-size: 0.55rem;
		color: #666;
	}

	.artisan-item-component .artisan-other-info.have-labels .studio-summary-component {
		padding: 0.15rem 0 0.1rem 0;
	}

	.artisan-item-component .artisan-other-info.have-labels .artisan-self-support {
		padding-bottom: 0.2rem;
	}
</style>
