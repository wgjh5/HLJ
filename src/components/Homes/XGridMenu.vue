<template>
	<div>
		<section class="ImageLink magic-widget">
			<div class="image-link-component"><a data-track-scm="imglink">
					<div class="ui-image-component status-show animate animate-end"><img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_514f6774ff559282ecbf8de15bddf797.gif!/0/w-640/format-webp"><img
						 class="draft" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_514f6774ff559282ecbf8de15bddf797.gif!/0/w-100/quality-10/format-webp"></div>
				</a></div>
		</section>
		<section class="GridMenu magic-widget">
			<section class="grid-menus" style="background-image: url(https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2ecf074….jpg!/0/w-1080/format-webp);">
				<div class="placeholder"></div>
				<div @touchmove="getElementLeft" class="scroll-menus" ref="viewBox">
					<div class="menus-grid" style="width: 200%;">
						<ul class="grid-menu" style="width: 50%;">
							<li class="list-10">
								<div class="link-component"><a @click="publishList" href="javascript:void(0);" data-track-scm="美甲" data-track-pos="0">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_8e1a40b286196940d0eba4c3d55fbd70.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美甲</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="微整形" data-track-pos="1">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_5da6988fecc260148bcda3638c5a32a2.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">微整形</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="美容" data-track-pos="2">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_e3b1612ab2ff92b6ed129acae11d8c7e.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美容</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="理疗" data-track-pos="3">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2031068c9357e287409a87d4b53f5db8.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">理疗</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="美足" data-track-pos="4">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_9e6f925e2a7721a37a8916b0162baa56.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美足</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="美睫" data-track-pos="5">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_f4e576f0ac36372886d19099b2316fcc.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美睫</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="医疗美容" data-track-pos="6">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_1e3bd2cb3cff89f7ef9e9462764d367d.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">医疗美容</span><span class="cate-desc"></span>
												</div>
											</div><img class="corner-img" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_21d4f151cd926696c1582f70cbad7559.png!/0/w-1080/format-webp">
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component">
									<a @click="publishList" data-track-scm="美体" data-track-pos="7">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_ac0f130e1b66102e0cfa38a844813cb0.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美体</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="化妆" data-track-pos="8">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_426c01a900ac2a8dff0b0a38ea217ba6.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">化妆</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="品牌馆" data-track-pos="9">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_eee28a5346f855012c036551d09f59b3.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">品牌馆</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
						</ul>
						<ul class="grid-menu" style="width: 50%;">
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="玻尿酸" data-track-pos="0">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_bc8bd042f31c7d94730df305de54e548.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">玻尿酸</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="健身" data-track-pos="1">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_cd39bb2ecc676f7d3fdd07fd8a590856.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">健身</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="半永久" data-track-pos="2">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_706b15bce49d81474cd71bcabf7ef061.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">半永久</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="折扣区" data-track-pos="3">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_69893a4933978971fc3aaacdd3b6d8c2.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">折扣区</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="瘦身" data-track-pos="4">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_008d030918b744054a1735e05af2ddcc.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">瘦身</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="脱毛" data-track-pos="5">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_10078a0ef63356de9817d8b5e84c4157.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">脱毛</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="美发" data-track-pos="6">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_3372bc9ffd6948bd095ae4f995459b3c.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">美发</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="体雕" data-track-pos="7">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_07713f4ff774673dafad3d0fc7e524cf.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">体雕</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="新人专享" data-track-pos="8">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_160108925a25123775bd8b7efb535d2f.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">新人专享</span><span class="cate-desc"></span>
												</div>
											</div>
										</div>
									</a></div>
							</li>
							<li class="list-10">
								<div class="link-component"><a @click="publishList" data-track-scm="全部分类" data-track-pos="9">
										<div class="holder-wrap">
											<div class="holder-cont">
												<div class="cate-wrap">
													<div class="cate-img"><img src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_b8277a5c1e0c649b9f9f0b57ca272949.jpg!/0/w-1080/format-webp"></div><span
													 class="cate-name" style="color: rgb(26, 26, 26);">全部分类</span><span class="cate-desc"></span>
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
					<div class="ui-image-component status-show animate animate-end"><img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_44b991d83d81caf737fa1879c9b96676.jpg!/0/w-640/format-webp"><img
						 class="draft" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_44b991d83d81caf737fa1879c9b96676.jpg!/0/w-100/quality-10/format-webp"></div>
				</a></div>
		</section>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isactualLeft: 1
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
					name: 'list'
				});
			}
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
