<template>
	<section v-if="channel==1" class="Products magic-widget" data-track-spm="m-list.ProductLayout_1:Products_YM_goodslist.$.f19c2a">
		<section class="products-widget">
			<div class="products-widget">
				<div class="cross"></div>
				<div class="scroll-view-component">
					<div class="content">
						<div class="products-component layout-2x1" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
							<!-- ==== -->
							<ul >
								<!-- <li v-for="item in list"> -->
								<!-- {{ item }} -->
								<!-- v-for="(a,index) in aa" -->
								<div class="product-item" v-for="item in list">
									<div class="box">
										<div class="product-image-box"><a @click="publishDetail">
												<div class="product-img">
													<div class="ui-image-component status-show">
														<img class="image" :src="'https://img-ucdn-static.helijia.com/zmw/'+item.coverPic">
														<img class="draft" src="https://img-ucdn-static.helijia.com/zmw/upload/20171130/99e5d507ad5e4f1a83c44e4fa543d585!/0/w-100/quality-10/format-webp"></div>
												</div>
											</a>
											<div class="promotion-tag"></div>
										</div>
										<div class="wrap"><a >
												<div class="product-name">
													<span class="name">{{item.name}}</span></div>
											</a>
											<div>
												<div class="product-props">
													<div class="box">
														<div class="price-part"><span class="price-component "><span class="yen">¥</span><span><span class="round">{{item.price}}</span></span></span><span
															 class="market-price">
																¥
																{{item.marketPrice}}

															</span>
															<div class="new-line"><span class="service-type"><span class="tag bg-gold">到店</span></span><!-- react-empty: 50847 --><span
																 class="status"><span class="status-text">{{item.likeNum}} {{item.favNumInfo}}</span></span></div>
														</div>
														<div class="right-part"></div>
													</div>
												</div>
												<div class="Artisan-part">
													<!-- 0% 0% / cover no-repeat; -->
													<div class="artisan-item">
														<div class="avatar" v-bind:style="{background:'url('+'https://img-ucdn-static.helijia.com/zmw/'+ item.artisanAvatar+')',backgroundSize:'100%',backgroundRepeat:'no-repeat'}"></div>
														<div class="wrap"><span class="artisan-name-component"><span class="nick-name">


																	{{item.artisanNick}}
																</span></span>
															<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star5.gif"></div>
														</div>
													</div>
													<div class="distancePart"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- </li> -->
							</ul>
							
							<!-- == -->
						</div>
					</div>
					<div class="footer"></div>
				</div>
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
					list: []
				};
			},
			methods: {
				loadMore() {
					console.log(1)
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
					}, 2500);
					this.qingqiu();
				},
				qingqiu() {
					var self = this;
					axios.get('http://localhost:3000/api/getlists')
						.then(function(response) {
							var data = response.data.data.resultList;
							self.list = self.list.concat(data);
	
							// console.log(response.data.data.cards);
						})
						.catch(function(error) {
							console.log(error);
						});
				},
				publishDetail(){
					this.$router.push({
						name: "detail"
					});
				}
	
			},
			mounted() {
				// this.loadMore();
				// this.qingqiu();
				// this.scroll(this.list)
				var self = this;
				axios.get('http://localhost:3000/api/getList')
					.then(function(response) {
						var data = response.data.data.resultList;
						self.list = data;
						console.log(data);
	
						// console.log(response.data.data.cards);
					})
					.catch(function(error) {
						console.log(error);
					});
	
			}
			// ===
			
	
		}


</script>

<style>

</style>
