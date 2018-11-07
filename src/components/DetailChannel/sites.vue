<template>
	<div v-show="siteshow" id="popup">
		<div class="popup-component address-popup">
			<div class="overlay"></div>
			<div class="content">
				<div class="address-component">
					<div class="bg"></div>
					<div class="addr-list">
						<div class="list-wrap">
							<div style="position: relative;">
								<div class="addr-item">
									<div class="info-content">
										<div class="info-wrap">
											<div>130****3974 13036943974</div>
											<div class="local-content">
												<!-- react-text: 18 -->广东省广州市 天河区 344
												<!-- /react-text -->
											</div>
										</div><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg" width="16" height="16"
											 viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
												<defs>
													<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-32a">
														<stop stop-color="#E7C269" offset="0%"></stop>
														<stop stop-color="#C3902C" offset="100%"></stop>
													</linearGradient>
												</defs>
												<path d="M8.004 15.986C3.59 15.986.01 12.409.01 7.999S3.59.013 8.004.013C12.42.013 16 3.59 16 8s-3.58 7.987-7.995 7.987zm4.523-11.842L6.874 9.792l-3.392-3.39-1.13 1.13 3.39 3.389 1.132 1.129 1.13-1.13 5.653-5.646-1.13-1.13z"
												 fill="url(#id-32a)" fill-rule="nonzero"></path>
											</svg></span>
									</div>
									<div class="btns-wrap"><span class="btn-item default-btn"><span class="SVGInline check-icon"><svg class="SVGInline-svg check-icon-svg"
												 width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<defs>
														<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-32a">
															<stop stop-color="#E7C269" offset="0%"></stop>
															<stop stop-color="#C3902C" offset="100%"></stop>
														</linearGradient>
													</defs>
													<path d="M8.004 15.986C3.59 15.986.01 12.409.01 7.999S3.59.013 8.004.013C12.42.013 16 3.59 16 8s-3.58 7.987-7.995 7.987zm4.523-11.842L6.874 9.792l-3.392-3.39-1.13 1.13 3.39 3.389 1.132 1.129 1.13-1.13 5.653-5.646-1.13-1.13z"
													 fill="url(#id-32a)" fill-rule="nonzero"></path>
												</svg></span><span class="btn-title">默认地址</span></span><span class="btn-item edit-btn"><span class="SVGInline edit-icon"><svg
												 class="SVGInline-svg edit-icon-svg" style="width: 1rem;height: 1rem;" width="18" height="18" viewBox="0 0 18 18"
												 xmlns="http://www.w3.org/2000/svg">
													<defs>
														<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-17a">
															<stop stop-color="#E7C269" offset="0%"></stop>
															<stop stop-color="#C3902C" offset="100%"></stop>
														</linearGradient>
													</defs>
													<g fill="none" fill-rule="evenodd">
														<path d="M13.596 6.732l-2.828-2.828a2 2 0 1 1 2.828 2.828zm-.707.707l-5.657 5.657-2.84-.012.012-2.816L10.06 4.61l2.828 2.828z"
														 fill="url(#id-17a)"></path>
														<path d="M0 0h18v18H0z"></path>
													</g>
												</svg></span><span class="btn-title">编辑</span></span><span class="btn-item del-btn"><span class="SVGInline del-icon"><svg
												 class="SVGInline-svg del-icon-svg" style="width: 1rem;height: 1rem;" width="18" height="18" viewBox="0 0 18 18"
												 xmlns="http://www.w3.org/2000/svg">
													<defs>
														<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-31a">
															<stop stop-color="#E7C269" offset="0%"></stop>
															<stop stop-color="#C3902C" offset="100%"></stop>
														</linearGradient>
													</defs>
													<g fill="none" fill-rule="evenodd">
														<path d="M0 0h18v18H0z"></path>
														<path d="M0 2.362c0-.343.28-.622.625-.622H3.75v-.62c0-.343.28-.62.625-.62h1.25c.345 0 .626.278.626.62v.622h3.124c.345 0 .625.278.625.621v.622H0v-.623zm9.375 1.861V11.878c0 .344-.28.622-.625.622h-7.5a.623.623 0 0 1-.625-.622V3.604h8.75v.62zm-6.25 1.242a.625.625 0 0 0-1.25 0v5.173c0 .343.28.62.625.62a.623.623 0 0 0 .625-.62V5.465zm2.5 0a.625.625 0 0 0-1.25 0v5.173c0 .343.28.62.626.62a.624.624 0 0 0 .625-.62V5.465zm2.5 0a.624.624 0 0 0-1.25 0v5.173c0 .343.28.62.625.62a.623.623 0 0 0 .625-.62V5.465z"
														 transform="translate(4 2)" fill="url(#id-31a)" fill-rule="nonzero"></path>
													</g>
												</svg></span><span class="btn-title">删除</span></span></div>
								</div>
								<div class="addr-item">
									<div class="info-content">
										<div class="info-wrap">
											<div>130****3974 13036943974</div>
											<div class="local-content">
												<!-- react-text: 35 -->广东省广州市海珠区金纺路2号-e3-a109 越秀 22
												<!-- /react-text -->
											</div>
										</div>
									</div>
									<div class="btns-wrap"><span class="btn-item default-btn"><span class="check-icon-holder"></span><span class="btn-title">设为默认</span></span><span
										 class="btn-item edit-btn"><span class="SVGInline edit-icon"><svg class="SVGInline-svg edit-icon-svg" style="width: 1rem;height: 1rem;"
												 width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
													<defs>
														<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-17a">
															<stop stop-color="#E7C269" offset="0%"></stop>
															<stop stop-color="#C3902C" offset="100%"></stop>
														</linearGradient>
													</defs>
													<g fill="none" fill-rule="evenodd">
														<path d="M13.596 6.732l-2.828-2.828a2 2 0 1 1 2.828 2.828zm-.707.707l-5.657 5.657-2.84-.012.012-2.816L10.06 4.61l2.828 2.828z"
														 fill="url(#id-17a)"></path>
														<path d="M0 0h18v18H0z"></path>
													</g>
												</svg></span><span class="btn-title">编辑</span></span><span class="btn-item del-btn"><span class="SVGInline del-icon"><svg
												 class="SVGInline-svg del-icon-svg" style="width: 1rem;height: 1rem;" width="18" height="18" viewBox="0 0 18 18"
												 xmlns="http://www.w3.org/2000/svg">
													<defs>
														<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="id-31a">
															<stop stop-color="#E7C269" offset="0%"></stop>
															<stop stop-color="#C3902C" offset="100%"></stop>
														</linearGradient>
													</defs>
													<g fill="none" fill-rule="evenodd">
														<path d="M0 0h18v18H0z"></path>
														<path d="M0 2.362c0-.343.28-.622.625-.622H3.75v-.62c0-.343.28-.62.625-.62h1.25c.345 0 .626.278.626.62v.622h3.124c.345 0 .625.278.625.621v.622H0v-.623zm9.375 1.861V11.878c0 .344-.28.622-.625.622h-7.5a.623.623 0 0 1-.625-.622V3.604h8.75v.62zm-6.25 1.242a.625.625 0 0 0-1.25 0v5.173c0 .343.28.62.625.62a.623.623 0 0 0 .625-.62V5.465zm2.5 0a.625.625 0 0 0-1.25 0v5.173c0 .343.28.62.626.62a.624.624 0 0 0 .625-.62V5.465zm2.5 0a.624.624 0 0 0-1.25 0v5.173c0 .343.28.62.625.62a.623.623 0 0 0 .625-.62V5.465z"
														 transform="translate(4 2)" fill="url(#id-31a)" fill-rule="nonzero"></path>
													</g>
												</svg></span><span class="btn-title">删除</span></span></div>
								</div>
							</div>
							<div class="add-addr-btn">
								<div @click="siteshow=false" class="close-btn">关闭</div>
								<div class="addr-divider">|</div>
								<div class="add-btn">新增地址</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			back() {
				this.$router.history.go(-1);
			}
		},
		computed: {
			siteshow: {
				// getter
				get: function() {
					return this.$store.getters.getSiteshow;
				},
				// setter
				set: function(newValue) {
					this.$store.state.siteshow = newValue;
				}
			},
			
		},
	}
</script>

<style scoped>
.address-component {
    height: 100%;
    overflow-y: scroll;
}
.address-component .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #f7f7f7;
    z-index: 0;
}
.address-component .addr-list .list-wrap {
    margin-bottom: 3rem;
}
.address-component .addr-list .list-wrap .add-addr-btn {
    position: fixed;
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
    width: 100%;
    height: 2.5rem;
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.04);
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
    font-size: 0.7rem;
    color: #C3902C;
}
.address-component .addr-item {
    padding: 0.75rem 0 0 0.75rem;
    margin-top: 0.5rem;
    background-color: white;
}
.address-component .addr-item .info-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.7rem;
    color: #1a1a1a;
    padding: 0 0.75rem 0.5rem 0;
    border-bottom: 1px solid #f3f3f3;
}
.address-component .addr-item .btns-wrap {
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
    height: 2.5rem;
    font-size: 0.6rem;
    color: #666;
}
.address-component .addr-item .info-content .info-wrap {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.address-component .addr-item .info-content .local-content {
    word-break: break-all;
    margin-top: 0.5rem;
    line-height: 1.3;
}
.address-component .addr-item .btns-wrap .default-btn {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.address-component .addr-item .btns-wrap .btn-item {
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
.address-component .addr-item .btns-wrap .edit-btn {
    margin-right: 1rem;
}
.address-component .addr-item .btns-wrap .del-btn {
    margin-right: 0.75rem;
}
.address-component .addr-item .btns-wrap .btn-item .btn-title {
    margin-left: 0.4rem;
}
.address-component .addr-item .btns-wrap .default-btn .check-icon-holder {
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
}
.address-component .addr-list .list-wrap .add-addr-btn .close-btn {
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
    color: black;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.address-component .addr-list .list-wrap .add-addr-btn .addr-divider {
    opacity: 0.3;
    color: black;
}
.address-component .addr-list .list-wrap .add-addr-btn .add-btn {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
</style>
