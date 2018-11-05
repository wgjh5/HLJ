<template>
	<div id="popup">
		<div data-reactroot="" class="popup-component login">
			<div class="overlay"></div>
			<div class="content">
				<section class="login-container">
					<div class="bd">
						<XtopBar status="login" />
						<Xlogin />
						<div class="bottom-logo"></div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import XtopBar from '../Register/XtopBar.vue';
	import Xlogin from '../Register/Xlogin.vue';
	export default {
		props: ["status"],
		components: {
			XtopBar,
			Xlogin
		},
		data() {
			return {

			};
		}
		
	}
</script>

<style>
	#popup {
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-size: .8rem;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
	}

	.popup-component.half .content {
		height: 60%;
		top: auto;
		bottom: 0;
	}

	.popup-component .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
	}

	.popup-component .content {
		position: absolute;
		background: #fff;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.popup-component section.widget {
		height: 100%;
	}

	.popup-component.effect-fade-appear .overlay {
		opacity: 0;
		-webkit-transition: 500ms opacity;
		-o-transition: 500ms opacity;
		transition: 500ms opacity;
	}

	.popup-component.effect-fade-appear .content {
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
		-webkit-transition: 500ms -webkit-transform;
		transition: 500ms -webkit-transform;
		-o-transition: 500ms transform;
		transition: 500ms transform;
		transition: 500ms transform, 500ms -webkit-transform;
	}

	.popup-component.effect-fade-appear-active .overlay {
		opacity: 1;
	}

	.popup-component.effect-fade-appear-active .content {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	}

	.popup-component.effect-fade-leave .overlay {
		-webkit-transition: 300ms opacity;
		-o-transition: 300ms opacity;
		transition: 300ms opacity;
	}

	.popup-component.effect-fade-leave .content {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 300ms opacity, 300ms -webkit-transform;
		transition: 300ms opacity, 300ms -webkit-transform;
		-o-transition: 300ms opacity, 300ms transform;
		transition: 300ms opacity, 300ms transform;
		transition: 300ms opacity, 300ms transform, 300ms -webkit-transform;
	}

	.popup-component.effect-fade-leave-active .overlay {
		opacity: 0;
	}

	.popup-component.effect-fade-leave-active .content {
		opacity: 0;
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
	}

	.popup-component.effect-slideup-appear .overlay {
		opacity: 0;
		-webkit-transition: 500ms opacity;
		-o-transition: 500ms opacity;
		transition: 500ms opacity;
	}

	.popup-component.effect-slideup-appear .content {
		top: 100%;
		opacity: 0;
		-webkit-transition: 300ms top, 300ms opacity;
		-o-transition: 300ms top, 300ms opacity;
		transition: 300ms top, 300ms opacity;
	}

	.popup-component.effect-slideup-appear-active .overlay {
		opacity: 1;
	}

	.popup-component.effect-slideup-appear-active .content {
		top: 0;
		opacity: 1;
	}

	.popup-component.effect-slideup-leave .overlay {
		-webkit-transition: 300ms opacity;
		-o-transition: 300ms opacity;
		transition: 300ms opacity;
	}

	.popup-component.effect-slideup-leave .content {
		-webkit-transition: 300ms top, 300ms opacity;
		-o-transition: 300ms top, 300ms opacity;
		transition: 300ms top, 300ms opacity;
	}

	.popup-component.effect-slideup-leave-active .overlay {
		opacity: 0;
	}

	.popup-component.effect-slideup-leave-active .content {
		top: 100%;
		opacity: 0;
	}

	/* ============= */

	.login-container .code-login-container .input-cont .input-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	.popup-component.login .content {
		background: #f7f7f7;
	}

	.popup-component.login.light .content {
		top: auto;
		-webkit-animation: slide-from-bottom 100ms;
		animation: slide-from-bottom 100ms;
	}

	.popup-component.login.light .content .bottom-logo {
		display: none;
	}

	.login-container {
		background: #f7f7f7;
		/* 微信 */
		/* 微信绑定手机号 */
	}

	.login-container .wx-authorize,
	.login-container .wx-bind-mobile {
		font-size: 0.7rem;
		color: #1a1a1a;
		padding: 0 0.75rem;
	}

	.login-container .wx-authorize p,
	.login-container .wx-bind-mobile p {
		margin: 0;
	}

	.login-container .wx-authorize .wx-header,
	.login-container .wx-bind-mobile .wx-header {
		width: 5rem;
		height: 5rem;
		display: block;
		margin: 0.75rem auto;
		border-radius: 50%;
	}

	.login-container .wx-authorize .name-wrap,
	.login-container .wx-bind-mobile .name-wrap {
		font-size: 0.75rem;
		margin-bottom: 0.25rem;
	}

	.login-container .wx-authorize .name-wrap .name,
	.login-container .wx-bind-mobile .name-wrap .name {
		color: #999;
		margin-right: 0.1rem;
	}

	.login-container .wx-authorize .wx-btn,
	.login-container .wx-bind-mobile .wx-btn {
		width: 100%;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		background-color: #C3902C;
		color: white;
		margin-top: 0.25rem;
	}

	.login-container .wx-authorize .quick-wrap,
	.login-container .wx-bind-mobile .quick-wrap {
		margin-top: 1.5rem;
	}

	.login-container .wx-authorize .quick-wrap p,
	.login-container .wx-bind-mobile .quick-wrap p {
		color: #999;
	}

	.login-container .wx-authorize .connect-wrap,
	.login-container .wx-bind-mobile .connect-wrap {
		margin-top: 1.6rem;
	}

	.login-container .wx-authorize .connect-wrap .sub-title,
	.login-container .wx-bind-mobile .connect-wrap .sub-title {
		color: #999;
	}

	.login-container .wx-authorize .connect-wrap .hlj-logo,
	.login-container .wx-bind-mobile .connect-wrap .hlj-logo {
		height: 1.4rem;
		vertical-align: middle;
		margin-right: 0.2rem;
	}

	.login-container .wx-authorize .connect-wrap .wx-btn,
	.login-container .wx-bind-mobile .connect-wrap .wx-btn {
		background-color: transparent;
		color: #666;
		border: 1px solid #999;
	}

	.login-container .wx-bind-mobile {
		font-size: 0.7rem;
		color: #1a1a1a;
		padding: 0 0.75rem;
	}

	.login-container .wx-bind-mobile .bind-form {
		margin-top: 2rem;
	}

	.login-container .wx-bind-mobile .bind-form .phone-verify input {
		background-color: transparent;
		border: none;
	}

	.login-container .wx-bind-mobile .bind-form .phone-verify .input-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		height: 2.2rem;
	}

	.login-container .wx-bind-mobile .bind-form .phone-verify .input-box:last-child {
		border-bottom: 1px solid #b5b5b9;
	}

	.login-container .wx-bind-mobile .bind-form .phone-verify .input-box .phone-input-component {
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
		margin-right: 0.75rem;
		border-bottom: 1px solid #b5b5b9;
	}

	.login-container .wx-bind-mobile .bind-form .phone-verify .input-box .get-check-btn {
		width: 5rem;
	}

	.login-container .wx-bind-mobile .bind-form .submit-btn {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		margin-top: 2.5rem;
		height: 2rem;
		background-color: #C3902C;
		color: white;
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
		font-size: 0.7rem;
	}

	.login-container .code-login-container {
		font-size: .8rem;
		overflow: hidden;
		margin: 1.4rem 0.75rem 0.75rem;
	}

	.login-container .code-login-container .input-cont {
		width: 100%;
	}

	.login-container .code-login-container .input-cont .title-wrap {
		margin-bottom: 1.5rem;
	}

	.login-container .code-login-container .input-cont .title-wrap .subtitle {
		color: #C3902C;
		font-size: 0.8rem;
		vertical-align: baseline;
	}

	.login-container .code-login-container .input-cont .title-wrap .jump-quick {
		font-size: 0.7rem;
		color: #666;
		float: right;
		vertical-align: baseline;
	}

	.login-container .code-login-container .input-cont .title-wrap .jump-right-arrow {
		margin-top: -0.1rem;
	}

	.login-container .code-login-container .input-cont .input-box {
		background: #fff;
		margin-bottom: 0.5rem;
		border: 1px solid #e6e6e6;
		overflow: hidden;
		line-height: 2.5;
		height: 2.25rem;
		font-size: 0.75rem;
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
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
		/* 防止 sass 优化后造成问题 */
		-moz-box-orient: horizontal !important;
		-moz-box-direction: normal !important;
		flex-direction: row !important;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input-component {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input,
	.login-container .code-login-container .input-cont .input-box .verify-code {
		text-indent: 0.5rem;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input::-webkit-input-placeholder,
	.login-container .code-login-container .input-cont .input-box .verify-code::-webkit-input-placeholder {
		text-indent: 0.3rem;
		color: #b5b5b5;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input::-moz-placeholder,
	.login-container .code-login-container .input-cont .input-box .verify-code::-moz-placeholder {
		text-indent: 0.3rem;
		color: #b5b5b5;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input::-ms-input-placeholder,
	.login-container .code-login-container .input-cont .input-box .verify-code::-ms-input-placeholder {
		text-indent: 0.3rem;
		color: #b5b5b5;
	}

	.login-container .code-login-container .input-cont .input-box .phone-input::placeholder,
	.login-container .code-login-container .input-cont .input-box .verify-code::placeholder {
		text-indent: 0.3rem;
		color: #b5b5b5;
	}

	.login-container .code-login-container .input-cont .input-box input[type=text],
	.login-container .code-login-container .input-cont .input-box input[type=tel] {
		display: block;
		border: 0;
		outline: 0;
		height: 90%;
		width: 100%;
		line-height: 2;
	}

	.login-container .code-login-container .input-cont .input-box .get-check-btn {
		width: 5rem;
		font-size: 0.75rem;
		border: 0;
		-webkit-align-self: stretch;
		-ms-flex-item-align: stretch;
		align-self: stretch;
		padding: 0;
	}

	.login-container .code-login-container .input-cont .input-box:hover {
		border: 1px solid #C3902C;
	}

	.login-container .code-login-container .input-cont .jumpLogin {
		padding: 0 0 0.8rem 0;
	}

	.login-container .code-login-container .input-cont .jumpLogin .goBack {
		width: 2.5rem !important;
	}

	.login-container .code-login-container .pwd-container {
		margin-bottom: 0.5rem;
	}

	.login-container .code-login-container .password-tigs {
		font-size: 0.6rem;
		color: #666;
	}

	.login-container .code-login-container .login-btn {
		height: 2.2rem;
		line-height: 2.2rem;
		text-align: center;
		color: #C3902C;
		background: url( //www.helijia.com/mobile/app/resources/images/login/btn-log.png);
			-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		margin-top: 2rem;
	}

	.login-container .code-login-container .login-tips {
		margin-top: 0.9rem;
		color: #666;
		line-height: 0.8rem;
		font-size: 0.6rem;
	}

	.login-container .code-login-container .login-tips a {
		color: #C3902C;
	}

	.login-container .code-login-container .login-tips .sign-btn {
		font-size: 0.7rem;
		color: #666;
	}

	.login-container .code-login-container .login-tips .password-btn {
		font-size: 0.7rem;
		color: #999;
		float: right;
	}

	.login-container .bottom-logo {
		height: 2.8rem;
		width: 100%;
		background-image: url( //www.helijia.com/mobile/app/resources/images/login/hlj-logo.png);
			-webkit-background-size: auto 100%;
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		margin-top: 18%;
	}

	.login-container .agreement-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		background-color: #FFF;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		font-size: 0.7rem;
		text-align: justify;
		color: #7c7e7d;
		line-height: 0.9rem;
	}

	.login-container .agreement-container .agreement-close {
		padding: 0.75rem 0.75rem 0;
	}

	.login-container .agreement-container h2 {
		color: #333;
		font-size: 0.7rem;
		font-weight: 700;
	}

	.login-container .agreement-container .agreement-wrap {
		padding: 0.25rem 0.75rem;
	}

	.login-container .agreement-container .agreement-wrap .agreement-title {
		padding-bottom: 1rem;
		margin-bottom: 2rem;
		border-bottom: 1px dashed #e6e6e6;
	}

	.login-container .agreement-container .agreement-wrap ul {
		padding-left: 0.75rem;
	}

	.login-container .agreement-container .agreement-wrap ul li {
		margin: 1rem 0;
	}


	/* =========== */

	.pwd-container {
		position: relative;
		width: 100%;
		height: 2.25rem;
		border: 1px solid #e6e6e6;
		background-color: #FFF;
	}

	.pwd-container.focus {
		border-color: #C3902C;
	}

	.pwd-container .pwd-input {
		border: none;
		outline: none;
		width: 15rem;
		height: 100%;
		font-size: 0.75rem;
		line-height: 0.9rem;
		text-indent: 0.5rem;
	}

	.pwd-container .pwd-input::-webkit-input-placeholder {
		text-indent: 0.3rem;
		font-size: 0.75rem;
		color: #b5b5b5;
	}

	.pwd-container .pwd-input::-moz-placeholder {
		text-indent: 0.3rem;
		font-size: 0.75rem;
		color: #b5b5b5;
	}

	.pwd-container .pwd-input::-ms-input-placeholder {
		text-indent: 0.3rem;
		font-size: 0.75rem;
		color: #b5b5b5;
	}

	.pwd-container .pwd-input::placeholder {
		text-indent: 0.3rem;
		font-size: 0.75rem;
		color: #b5b5b5;
	}

	.pwd-container .clear {
		position: absolute;
		height: 100%;
		right: 3rem;
		padding: 0;
	}

	.pwd-container .eye {
		position: absolute;
		height: 100%;
		width: 0.85rem;
		right: 0.75rem;
		padding: 0;
	}

	.pwd-container .eye path {
		fill: #b5b5b5;
	}
</style>
