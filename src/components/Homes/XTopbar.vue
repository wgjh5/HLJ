<template>
	<div>
		<section v-if="status==='cat'" class="Topbar magic-widget">
			<section data-sticky-index="0" class="topbar-component" style="background-color: rgba(0, 0, 0, 0.9);">
				<section class="searchinput-component" data-track-scm="搜索">
					<div class="input-field"><span class="SVGInline search"><svg class="SVGInline-svg search-svg" style="width: 0.7rem;height: 0.7rem;"
							 width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
								<g fill="#999" fill-rule="evenodd">
									<path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm0 1A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM10.14 11.82l2.04 2.04a.48.48 0 1 0 .68-.68l-2.04-2.04a.48.48 0 1 0-.68.68z"></path>
								</g>
							</svg></span><input type="search" class="search" placeholder="美睫" value=""></div>
				</section><button class="msg"><span class="SVGInline icon"><svg class="SVGInline-svg icon-svg" width="26" height="26"
						 viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 20.486c-.639 0-1.26-.058-1.866-.157l-4.373 2.653v-4.417c-2.28-1.602-3.744-4.056-3.744-6.813 0-4.824 4.47-8.735 9.983-8.735 5.513 0 9.983 3.91 9.983 8.735 0 4.824-4.47 8.734-9.983 8.734zM17.991 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zM13 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zm-4.991 0a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495z"
							 fill="#FFF" fill-rule="nonzero"></path>
						</svg></span></button>
			</section>
		</section>
		<section v-if="status==='home'" class="Topbar magic-widget">
			<section data-sticky-index="0" class="topbar-component" :style="{backgroundColor:'rgba(0, 0, 0,'+isactualTop+')'}">
				<section class="location-selector">
					<div class="local-bottom default-local-bottom"><span data-track-pos="0" data-track-scm="定位" class="SVGInline icon-location icon default-icon-location"><svg
							 class="SVGInline-svg icon-location-svg icon-svg default-icon-location-svg" width="20" height="20" viewBox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-27a">
										<stop stop-color="#E7C269" offset="0%"></stop>
										<stop stop-color="#C3902C" offset="100%"></stop>
									</linearGradient>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path d="M10.237 18.16s-6.39-5.606-6.39-9.17c0-3.563 2.86-6.452 6.39-6.452s6.39 2.89 6.39 6.453-6.39 9.169-6.39 9.169zm0-6.113c1.672 0 3.027-1.368 3.027-3.056s-1.355-3.057-3.027-3.057c-1.672 0-3.027 1.369-3.027 3.057s1.355 3.056 3.027 3.056z"
									 fill="url(#id-27a)"></path>
									<path d="M0 0h20v20H0z"></path>
								</g>
							</svg></span>
						<div class="location"><span><b>服务地址：</b>广州市
							</span></div>
						<div class="icon-right-arrow">编辑</div><span class="arrow"><span class="SVGInline"><svg class="SVGInline-svg"
								 style="width: 1em;height: 0.8em;" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
									 fill="#999" fill-rule="evenodd"></path>
								</svg></span></span>
					</div>
				</section>
				<section class="searchinput-component" data-track-scm="搜索">
					<div class="input-field"><span class="SVGInline search"><svg class="SVGInline-svg search-svg" style="width: 0.7rem;height: 0.7rem;"
							 width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
								<g fill="#999" fill-rule="evenodd">
									<path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm0 1A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM10.14 11.82l2.04 2.04a.48.48 0 1 0 .68-.68l-2.04-2.04a.48.48 0 1 0-.68.68z"></path>
								</g>
							</svg></span><input type="search" class="search" placeholder="美睫" value=""></div>
				</section><button class="msg"><span class="SVGInline icon"><svg class="SVGInline-svg icon-svg" width="26" height="26"
						 viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 20.486c-.639 0-1.26-.058-1.866-.157l-4.373 2.653v-4.417c-2.28-1.602-3.744-4.056-3.744-6.813 0-4.824 4.47-8.735 9.983-8.735 5.513 0 9.983 3.91 9.983 8.735 0 4.824-4.47 8.734-9.983 8.734zM17.991 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zM13 13a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495zm-4.991 0a1.248 1.248 0 1 0 0-2.495 1.248 1.248 0 0 0 0 2.495z"
							 fill="#FFF" fill-rule="nonzero"></path>
						</svg></span></button>
			</section>
		</section>
		<!-- list头部 -->
		<div v-if="status=='list'">
		<section class="SearchInput magic-widget" data-track-spm="m-list.ProductLayout_1:SearchInput_YM_searchbar.$.f19c2a">
			<div class="search-input-widget" data-sticky-index="0" style="height: 2.5rem;">
				<section data-sticky-index="0" class="topbar-component" style="background-color: rgb(0, 0, 0);"><button class="back"><span
						 class="SVGInline icon"><svg class="SVGInline-svg icon-svg" style="width: 1em;height: 1em;" width="24" height="24"
							 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-11a">
										<stop stop-color="#E7C269" offset="0%"></stop>
										<stop stop-color="#C3902C" offset="100%"></stop>
									</linearGradient>
								</defs>
								<path d="M30.9 52.092l-9.9-9.9 9.9-9.9a1 1 0 0 1 1.414 1.415l-8.486 8.485 8.486 8.486a1 1 0 0 1-1.415 1.414z"
								 fill="url(#id-11a)" transform="translate(-15 -30)" fill-rule="evenodd"></path>
							</svg></span></button>
					<section class="searchinput-component" data-track-scm="搜索">
						<div class="input-field"><span class="SVGInline search"><svg class="SVGInline-svg search-svg" style="width: 0.7rem;height: 0.7rem;"
								 width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
									<g fill="#999" fill-rule="evenodd">
										<path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm0 1A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM10.14 11.82l2.04 2.04a.48.48 0 1 0 .68-.68l-2.04-2.04a.48.48 0 1 0-.68.68z"></path>
									</g>
								</svg></span><input type="search" class="search" placeholder="美睫" value=""></div>
					</section>
				</section>
			</div>
		</section>

		<!-- === -->

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isactualTop: 0
			}
		},
		props: ["status"],
		components: {},
		// 		watch: {
		// 		  dat:function(newQuestion, oldQuestion){
		// 			  console.log(dat);
		// 		  }
		// 		},
		mounted: function() {
			this.$nextTick(function() {
				window.addEventListener('scroll', this.getElementTop)
			})
		},
		methods: {
			getElementTop() {
				var actualTop = document.documentElement.scrollTop || document.body.scrollTop;
				this.isactualTop = actualTop / 200 > 0.9 ? 0.9 : actualTop / 200;
			}
		}

	}
</script>

<style scoped>
	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.topbar-component {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.topbar-component {
		position: fixed;
		z-index: 1002;
		width: 100%;
		height: 2.5rem;
		color: #fff;
		padding-right: 0.2rem;
		top: 0;
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
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
	}

	.topbar-component .location-selector .local-bottom {
		font-family: PingFangSC-Regular;
		color: #fff;
		font-size: 0.6rem;
		background-color: rgba(0, 0, 0, 0.3);
		border: none;
		height: 1.5rem;
		position: static;
		border-radius: 0.75rem;
		padding: 0 0.1rem 0 0.4rem;
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

	.location-selector .default-local-bottom {
		bottom: 0;
		height: 2rem;
		line-height: 2rem;
		width: 100%;
	}

	.location-selector .local-bottom,
	.choose-address .input-btn,
	.choose-address .load-text span,
	.choose-address .list-address li,
	.add-address .search-cont {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.home.index .topbar-component .location-selector {
		margin: 0 0.5rem;
	}

	.topbar-component .searchinput-component {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.topbar-component .location-selector .local-bottom .location {
		max-width: 8rem;
		min-width: 2rem;
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

	.topbar-component .location-selector .local-bottom .icon-right-arrow {
		display: none;
	}

	.location-selector .icon-right-arrow {
		padding: 0 .9rem;
		height: 0.9rem;
		line-height: 0.9rem;
		margin-right: 0.5rem;
		visibility: hidden;
	}

	.home.index .topbar-component .location-selector .arrow {
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		line-height: 0.5rem;
		margin-left: 0.15rem;
	}

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block !important;
	}

	.home.index .msg {
		height: 1.5rem;
		padding: 0 0.2rem;
	}

	button {
		background: none;
		border: none;
		outline: none;
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

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block !important;
	}

	.topbar-component .searchinput-component {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.topbar-component .searchinput-component .input-field {
		border-radius: 0.75rem;
		font-size: 0.6rem;
	}

	.input-field {
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
		font-size: 0.6rem;
		background: white;
		padding: 0.1rem 0.4em;
		color: rgba(153, 153, 158, 0.3);
	}

	.input-field .search {
		margin: 0 0.25rem;
	}

	.topbar-component .searchinput-component .input-field input {
		padding-left: 0;
	}

	.input-field input.search {
		border-radius: 0.75rem;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: 0.6rem;
		margin-left: 0;
		color: #1a1a1a;
	}

	.input-field .search {
		margin: 0 0.25rem;
	}

	input.search {
		background: none;
		display: block;
		border: none;
		outline: none;
		height: 1.3rem;
		line-height: 1.3rem;
		width: 100%;
	}

	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
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


	.SVGInline-svg {
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.topbar-component .input-field {
		margin-right: 0.5rem;
	}

	.input-field,
	.searching header form {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.home.index .msg .SVGInline-svg {
		height: 1.5rem;
	}
</style>
