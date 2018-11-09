<template>
	<div>
		<section class="ImageLink magic-widget">
			<div class="image-link-component"><a data-track-scm="imglink">
					<div class="ui-image-component status-show animate animate-end"><img class="image" :src="status[0]"></div>
				</a></div>
		</section>
		<section class="GridMenu magic-widget">
			<section class="grid-menus" :style="{background: 'url('+status[3]+')'}">
				<div class="placeholder"></div>
				<div @touchmove="getElementLeft" class="scroll-menus" ref="viewBox">
					<div class="menus-grid" style="width: 200%;">
						<ul class="grid-menu" style="width: 50%;">
							<li class="list-10" v-for="a in status[1]">
								<div class="link-component"><a @click="publishList" href="javascript:void(0);" data-track-scm="美甲" data-track-pos="0">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img :src="a.imageUrl"></div><span class="cate-name" style="color: rgb(26, 26, 26);" v-text="a.categoryName">美甲</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
						</ul>
						<ul class="grid-menu" style="width: 50%;">
							<li class="list-10" v-for="a in status[2]">
								<div class="link-component"><a @click="publishList" data-track-scm="玻尿酸" data-track-pos="0">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img :src="a.imageUrl"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);" v-text="a.categoryName">玻尿酸</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							
						</ul>
					</div>
				</div>
				<div class="scroll-dot"><span :class="{ dot:isactualLeft<187} "></span><span :class="{ dot:isactualLeft>187} "></span></div>
			</section>
		</section>
		<section class="ImageLink magic-widget">
			<div class="image-link-component"><a data-track-scm="imglink">
					<div class="ui-image-component status-show animate animate-end"><img class="image" :src="status[4]"></div>
				</a></div>
		</section>
	</div>

</template>

<script>
	export default {
		props: ["status"],
		data() {
			return {
				isactualLeft: 1,
	
			}
		},
		components: {

		},
		mounted() {},
		methods: {
			getElementLeft() {
				var actualLeft = this.$refs.viewBox.scrollLeft;
				this.isactualLeft = actualLeft;
			},
			publishList() {
				this.$router.push({
					name: 'choiceness'
				});
			}
		},
		computed:{
			
		}


	}
</script>

<style scoped>
	.ui-image-component {
		position: relative;
		overflow: hidden;
	}

	.ui-image-component .image {
		display: block;
		width: 100%;
	}

	.ui-image-component.status-show.animate-end .draft {
		display: none;
	}

	.ui-image-component.status-show.animate .draft {
		display: block;
		opacity: 0;
	}

	.ui-image-component.animate .draft {
		opacity: 1;
		-webkit-transition: 300ms opacity;
		-o-transition: 300ms opacity;
		transition: 300ms opacity;
	}

	.ui-image-component .draft {
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}

	.ui-image-component .draft {
		display: block;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.grid-menus {
		font-size: 12px;
		width: 100%;
		position: relative;
		-webkit-background-size: 200% 100%;
		background-size: 200% 100%;
	}

	.grid-menus .placeholder {
		height: 0;
		padding-bottom: 49.6%;
		visibility: hidden;
	}

	.grid-menus .scroll-menus {
		width: 100%;
		overflow: auto;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-overflow-scrolling: touch;
	}

	.grid-menus .scroll-dot {
		position: absolute;
		left: 50%;
		bottom: 0.4rem;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
	}

	.grid-menus .scroll-menus .menus-grid {
		height: 100%;
		overflow: hidden;
		padding-top: 1.984%;
		padding-bottom: 3.307%;
		background-repeat-y: no-repeat;
	}

	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu {
		float: left;
		height: 100%;
	}

	.grid-menus ul {
		padding: 0;
		margin: 0;
	}

	ul,
	li,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li.list-10 {
		width: 20%;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li {
		float: left;
		position: relative;
		height: 48%;
	}

	.grid-menus li {
		list-style: none;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component {
		height: 100%;
	}

	.home.index .link-component {
		border: 0;
	}

	.link-component {
		border: 1px dashed #f00;
	}

	.link-component {
		border-style: none;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a {
		display: block;
		height: 100%;
	}

	.link-component a:link {
		text-decoration: none;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap {
		height: 100%;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
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
		height: 100%;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap,
	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap .cate-img {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap .cate-img {
		min-height: 2.5rem;
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

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap .cate-name {
		text-align: center;
		display: block;
		line-height: 1;
		margin-top: 0.1rem;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap .cate-desc {
		text-align: center;
		color: #ffffff;
		display: block;
		line-height: 2;
	}

	.grid-menus .scroll-menus .menus-grid .grid-menu li .link-component a .holder-wrap .holder-cont .cate-wrap img {
		width: 2.5rem;
		max-height: 2.5rem;
		margin: 0 auto;
	}

	.grid-menus img {
		display: block;
	}

	img {
		border-style: none;
	}

	.grid-menus .scroll-dot {
		position: absolute;
		left: 50%;
		bottom: 0.4rem;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
	}

	.grid-menus .scroll-dot span {
		float: left;
		height: 0.1rem;
		width: 0.5rem;
		margin-right: 0.25rem;
		background-color: rgba(26, 26, 26, 0.1);
		border-radius: 0.5rem;
	}

	.grid-menus .scroll-dot span:last-child {
		margin-right: 0;
	}

	.grid-menus .scroll-dot span.dot {
		background-color: #BD9D62;
	}

	.grid-menus .scroll-dot span {
		float: left;
		height: 0.1rem;
		width: 0.5rem;
		margin-right: 0.25rem;
		background-color: rgba(26, 26, 26, 0.1);
		border-radius: 0.5rem;
	}
</style>
