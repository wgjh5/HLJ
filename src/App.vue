<template>
	<div id="app">
		<section data-reactroot="" class="widgets clientapp-index home index mode">
			<router-view></router-view>
		</section>

	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {}
	}
</script>

<style>
	@charset "UTF-8";

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap,
	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-img,
	.home.index .daily-shop,
	.home.index .daily-shop .artisan-photo-wrap,
	.home.index .daily-shop .artisan-nearby,
	.home.index .recommend,
	.home.index .recommend .dapai,
	.home.index .nearby,
	.home.index .newComposition,
	.home.index .newComposition .spike .sp-cont,
	.home.index .newComposition .spike .sp-cont .sp-top,
	.home.index .countdown,
	.home.index .themeActivities .active .ac-text {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	/**
 * 清除浮动
 */
	/**
 * 将px转化成rem
 * 注意retina屏中的尺码要先除以2
 */
	body {
		background-color: #fbf4e2;
		color: #1a1a1a;
	}

	.app {
		position: relative;
	}

	.home.index {
		padding-bottom: 2.5rem;
	}

	.home.index .msg {
		height: 1.5rem;
		padding: 0 0.2rem;
	}

	.home.index .msg .SVGInline-svg {
		height: 1.5rem;
	}

	.home.index .msg .SVGInline-svg g {
		fill: white;
	}

	.home.index .msg .msg-count {
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

	.home.index .index-menu {
		background: #000;
	}

	.home.index .index-menu li {
		list-style: none;
	}

	.home.index .index-menu ul {
		padding: 0;
		margin: 0;
	}

	.home.index .index-menu img {
		display: block;
	}

	.home.index .index-menu .menu {
		width: 100%;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		position: relative;
		overflow: hidden;
	}

	.home.index .index-menu .menu li {
		float: left;
		width: 25%;
		position: relative;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap {
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
		width: 100%;
		height: 100%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-img {
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

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-name {
		text-align: center;
		font-size: 0.6rem;
		color: #e8523e;
		display: block;
		line-height: 1;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap .cate-desc {
		text-align: center;
		font-size: 0.5rem;
		color: #ffffff;
		display: block;
		line-height: 2;
	}

	.home.index .index-menu .menu li .holder-wrap .holder-cont .cate-wrap img {
		width: 2.5rem;
		max-height: 2.5rem;
		margin: 0 auto;
	}

	.home.index .index-menu .menu li .holder-wrap .corner-img {
		position: absolute;
		right: 0;
		top: 0;
		width: 50%;
	}

	.home.index .index-menu .menu li .holder-wrap .holder {
		position: relative;
		padding-bottom: 100%;
	}

	.home.index .new-only {
		width: 100%;
	}

	.home.index .new-only img {
		display: block;
		width: 100%;
	}

	.home.index .daily-shop {
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: stretch;
		-ms-flex-pack: stretch;
		-webkit-justify-content: stretch;
		-moz-justify-content: stretch;
		-moz-box-pack: stretch;
		justify-content: stretch;
		background: #fbf4e2;
	}

	.home.index .daily-shop .daily-tit {
		width: 1.5rem;
		background: #bd9d62;
		color: #fff;
		font-size: 0.75rem;
		position: relative;
	}

	.home.index .daily-shop .daily-tit img {
		width: 100%;
		vertical-align: middle;
	}

	.home.index .daily-shop .artisan-photo-wrap {
		width: 5rem;
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
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-moz-box-pack: center;
		justify-content: center;
		overflow: hidden;
	}

	.home.index .daily-shop .artisan-photo-wrap .artisan-photo {
		border-radius: 50%;
		-webkit-background-size: cover;
		background-size: cover;
		background-position: center;
		width: 3rem;
		height: 3rem;
		margin: auto;
	}

	.home.index .daily-shop .artisan-info {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
		border-right: 1px solid #efe7d2;
		position: relative;
		padding: 0.5rem 1rem 0.5rem 0;
	}

	.home.index .daily-shop .artisan-info p {
		padding: 0;
		margin: 0.2rem 0;
	}

	.home.index .daily-shop .artisan-info .artisan-name {
		font-size: 0.85rem;
		margin-right: 0.2rem;
	}

	.home.index .daily-shop .artisan-info .artisan-type {
		color: #999;
		font-size: 0.5rem;
	}

	.home.index .daily-shop .artisan-info .artisan-label {
		color: #bd9d62;
		font-size: 0.65rem;
		max-width: 100%;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: block;
		max-width: 6rem;
	}

	.home.index .daily-shop .artisan-info .last {
		width: 100%;
	}

	.home.index .daily-shop .artisan-info .last .star {
		width: 100%;
		height: 0.8rem;
		-webkit-background-size: auto 100%;
		background-size: auto 100%;
		display: inline-block;
		background-repeat: no-repeat;
	}

	.home.index .daily-shop .artisan-info .last a {
		position: absolute;
		right: 0;
		bottom: 0.8rem;
		color: #999;
		font-size: 0.55rem;
		margin-right: 1rem;
	}

	.home.index .daily-shop .artisan-nearby {
		width: 4rem;
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
		background: #f9f6e2;
	}

	.home.index .daily-shop .artisan-nearby a {
		display: block;
	}

	.home.index .daily-shop .artisan-nearby img {
		width: 100%;
	}

	.home.index .ov {
		overflow: hidden;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		word-break: break-all;
		word-wrap: break-word;
	}

	.home.index .recommend {
		color: #1a1a1a;
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

	.home.index .recommend .bor {
		border-right: 1px solid #efe7d2;
	}

	.home.index .recommend .dapai {
		background: #fbf4e2;
		padding: 1rem 0.2rem 1rem 0.7rem;
		width: 50%;
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
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.home.index .recommend .dapai .img {
		position: relative;
	}

	.home.index .recommend .dapai .img img {
		width: 2.5rem;
		height: 2.5rem;
	}

	.home.index .recommend .dapai .img .artisanProfile {
		border-radius: 50%;
		margin-top: 0.4rem;
	}

	.home.index .recommend .dapai .img .fl-img {
		position: absolute;
		top: -0.3rem;
		left: -0.5rem;
		width: 3.5rem;
		height: 3.5rem;
	}

	.home.index .recommend .dapai .txt {
		padding-left: 0.6rem;
		line-height: 0.8rem;
	}

	.home.index .recommend .dapai .txt h3 {
		font-weight: normal;
		font-size: 0.75rem;
		margin: 0;
	}

	.home.index .recommend .dapai .txt h3 .nick-name {
		max-width: 4rem;
	}

	.home.index .recommend .dapai .txt h3 .cate {
		display: block;
		font-size: 0.55rem;
		color: #999;
	}

	.home.index .recommend .dapai .txt .artisanTag {
		font-size: 0.6rem;
		color: #bd9d62;
	}

	.home.index .recommend .dapai .txt .star {
		height: 0.65rem;
		font-size: 0.5rem;
		color: #999;
	}

	.home.index .recommend .dapai .txt .star span {
		vertical-align: baseline;
	}

	.home.index .recommend .dapai .txt .star img {
		height: 100%;
	}

	.home.index .recommend .dapai .txt .star .small {
		height: 80%;
	}

	.home.index .nearby {
		background: #000;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
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

	}

	/*====================*/
	@charset "UTF-8";

	section.widget>header,
	.bar,
	.segment,
	section.full-height,
	section.full-height>header,
	section.full-height>footer,
	section.widget {
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
	/* Base Application Styles */
	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	html {
		font-size: 20px;
	}

	@media only screen and (min-width: 320px) {
		html {
			font-size: 17.067px;
		}
	}

	@media only screen and (min-width: 360px) {
		html {
			font-size: 19.2px;
		}
	}

	@media only screen and (min-width: 375px) {
		html {
			font-size: 20px;
		}
	}

	@media only screen and (min-width: 414px) {
		html {
			font-size: 22.08px;
		}
	}

	@media only screen and (min-width: 480px) {
		html {
			font-size: 25.6px;
		}
	}

	@media only screen and (min-width: 640px) {
		html {
			font-size: 34.13px;
		}
	}

	@media only screen and (min-width: 720px) {
		html {
			font-size: 38.918px;
		}
	}

	@media only screen and (min-width: 750px) {
		html {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 800px) {
		html {
			font-size: 22.08px;
		}
	}

	/* ----------- Non-Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 1) {
		html {
			font-size: 20px;
		}
	}

	/* ----------- Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2),
	screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (-o-min-device-pixel-ratio: 2/1),
	screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
		html {
			font-size: 20px;
		}
	}

	html {
		width: 100%;
	}

	html>* {
		font-family: "PingHei", "Helvetica Neue", "Helvetica", "Arial", "Verdana", "sans-serif";
		font-size: 0.8rem;
	}

	html body {
		margin: auto;
	}

	@media only screen and (min-width: 800px) {
		html body {
			max-width: 414px;
		}
	}

	a {
		text-decoration: none;
		color: #1a1a1a;
	}

	b {
		color: #bd9d62;
		font-weight: normal;
	}

	ul,
	li,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.float-right {
		float: right;
	}

	button {
		background: none;
		border: none;
		outline: none;
	}

	button>*,
	a>* {
		pointer-events: none;
	}

	.btn {
		display: inline-block;
		padding: 0.5rem;
		line-height: 1.5;
		border: 1px solid #ccc;
	}

	.btn-primary {
		display: inline-block;
		padding: 0.5rem;
		line-height: 1.5;
		background: #BD9D62;
		color: #fff;
	}

	.no-scroll {
		overflow: hidden;
	}

	body.no-scroll #app {
		pointer-events: none;
	}

	html.no-scroll {
		height: 100%;
		position: fixed;
	}

	/** animations **/
	@-webkit-keyframes slide-from-right {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
	}

	@keyframes slide-from-right {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
	}

	@-webkit-keyframes slide-from-bottom {
		0% {
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
		}
	}

	@keyframes slide-from-bottom {
		0% {
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
		}
	}

	#app {
		width: 100%;
		position: relative;
	}

	@media screen and (min-width: 800px) {
		#app {
			-webkit-box-shadow: 0 -10px 10px #aaa;
			box-shadow: 0 -10px 10px #aaa;
		}
	}

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block !important;
	}

	.SVGInline-svg {
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	input:focus {
		outline: 0;
	}

	input::-webkit-input-placeholder {
		padding-left: 4px;
	}

	.block-level {
		display: block;
		width: 100%;
	}

	.muted {
		color: #999;
	}

	.button {
		color: #666;
		background: #fff;
		border: 1px solid rgba(102, 102, 102, 0.3);
	}

	.button.primary {
		color: #C3902C;
		border-color: #C3902C;
	}

	.button.primary.inverted {
		color: #fff;
		background: -webkit-gradient(linear, , from(right), color-stop(#E7C269), to(#C3902C));
		background: -webkit-linear-gradient(left, #E7C269, #C3902C);
		background: -o-linear-gradient(left, #E7C269, #C3902C);
		background: linear-gradient(to, right, #E7C269, #C3902C);
		border: 0;
	}

	.button.disabled,
	.button[disabled] {
		pointer-events: none;
		background: #fff;
		color: #b9b9b9;
	}

	.button.disabled.inverted,
	.button[disabled].inverted {
		background: #b9b9b9;
		color: #fff;
	}

	section.widget>header,
	.bar {
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
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
		line-height: 2;
		padding: 0 .3rem;
		background: #fff;
		color: #999;
		border-bottom: 1px solid #f7f7f7;
		height: 2.5rem;
		position: relative;
	}

	section.widget>header.inverted,
	.bar.inverted {
		background: #000;
		color: #fff;
	}

	section.widget>header.inverted h1,
	.bar.inverted h1 {
		color: #fff;
	}

	section.widget>header.inverted .primary.button,
	.bar.inverted .primary.button {
		background: none;
		border: 0;
	}

	section.widget>header.inverted input[type=text],
	.bar.inverted input[type=text] {
		background: #383838;
		color: #fff;
	}

	section.widget>header button:first-child,
	.bar button:first-child {
		padding: .5em;
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	section.widget>header h1,
	.bar h1 {
		margin: 0;
		font-size: 100%;
		font-weight: normal;
		color: #1a1a1a;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}

	section.widget>header input[type=text],
	.bar input[type=text] {
		border: 0;
		padding: 0;
		display: inline-block;
		border-radius: 2px;
	}

	section.widget>header .button,
	.bar .button {
		border: none;
	}

	section.widget>header .SVGInline,
	section.widget>header .SVGInline-svg,
	.bar .SVGInline,
	.bar .SVGInline-svg {
		display: block;
	}

	.segments {
		padding-left: .75rem;
		margin-bottom: 0.5rem;
		color: #1a1a1a;
		background: #fff;
	}

	.segment {
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
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		/* 防止 sass 优化后造成问题 */
		-moz-box-orient: horizontal !important;
		-moz-box-direction: normal !important;
		flex-direction: row !important;
		position: relative;
		height: 2.5rem;
		line-height: 2.5rem;
		padding-right: .75em;
		border-bottom: 1px solid #e6e6e6;
	}

	.segment:last-child {
		border-bottom: none;
	}

	.segment label {
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}

	.segment .info-line {
		padding-right: 1em;
		white-space: nowrap;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: block;
	}

	.segment .full-width {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.segment.primary {
		background: #e6e6e6;
		font-size: 80%;
		margin-left: -.75rem;
		padding-left: .75rem;
		height: auto;
		line-height: 2.5;
		color: #999;
	}

	.segment.multi-line {
		padding-top: .75rem;
		padding-bottom: .75rem;
		height: auto;
		line-height: 1.25;
	}

	.segment.multi-line .info-line {
		white-space: inherit;
	}

	section {
		/** 优化渲染性能，隔离每个 section **/
	}

	section.full-height {
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
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
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		/* 防止 sass 优化后造成问题 */
		-moz-box-orient: vertical !important;
		-moz-box-direction: normal !important;
		flex-direction: column !important;
		height: 100%;
		overflow: auto;
		background: #f7f7f7;
		color: #1a1a1a;
		padding-bottom: 2.5rem;
	}

	section.full-height:after {
		content: '';
		position: fixed;
		top: 0;
	}

	/* ====================================================== */
	/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

	/* Document
   ========================================================================== */

	/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

	html {
		line-height: 1.15;
		/* 1 */
		-webkit-text-size-adjust: 100%;
		/* 2 */
	}

	/* Sections
   ========================================================================== */

	/**
 * Remove the margin in all browsers.
 */

	body {
		margin: 0;
	}

	/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}

	/* Grouping content
   ========================================================================== */

	/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

	hr {
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		/* 1 */
		height: 0;
		/* 1 */
		overflow: visible;
		/* 2 */
	}

	/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

	pre {
		font-family: monospace, monospace;
		/* 1 */
		font-size: 1em;
		/* 2 */
	}

	/* Text-level semantics
   ========================================================================== */

	/**
 * Remove the gray background on active links in IE 10.
 */

	a {
		background-color: transparent;
	}

	/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

	abbr[title] {
		border-bottom: none;
		/* 1 */
		text-decoration: underline;
		/* 2 */
		-webkit-text-decoration: underline dotted;
		-moz-text-decoration: underline dotted;
		text-decoration: underline dotted;
		/* 2 */
	}

	/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

	b,
	strong {
		font-weight: bolder;
	}

	/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		/* 1 */
		font-size: 1em;
		/* 2 */
	}

	/**
 * Add the correct font size in all browsers.
 */

	small {
		font-size: 80%;
	}

	/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/* Embedded content
   ========================================================================== */

	/**
 * Remove the border on images inside links in IE 10.
 */

	img {
		border-style: none;
	}

	/* Forms
   ========================================================================== */

	/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		/* 1 */
		font-size: 100%;
		/* 1 */
		line-height: 1.15;
		/* 1 */
		margin: 0;
		/* 2 */
	}

	/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

	button,
	input {
		/* 1 */
		overflow: visible;
	}

	/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

	button,
	select {
		/* 1 */
		text-transform: none;
	}

	/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	/**
 * Remove the inner border and padding in Firefox.
 */

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	/**
 * Restore the focus styles unset by the previous rule.
 */

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	/**
 * Correct the padding in Firefox.
 */

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

	legend {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		/* 1 */
		color: inherit;
		/* 2 */
		display: table;
		/* 1 */
		max-width: 100%;
		/* 1 */
		padding: 0;
		/* 3 */
		white-space: normal;
		/* 1 */
	}

	/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

	progress {
		vertical-align: baseline;
	}

	/**
 * Remove the default vertical scrollbar in IE 10+.
 */

	textarea {
		overflow: auto;
	}

	/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

	[type="checkbox"],
	[type="radio"] {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		/* 1 */
		padding: 0;
		/* 2 */
	}

	/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

	[type="search"] {
		-webkit-appearance: textfield;
		/* 1 */
		outline-offset: -2px;
		/* 2 */
	}

	/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		/* 1 */
		font: inherit;
		/* 2 */
	}

	/* Interactive
   ========================================================================== */

	/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

	details {
		display: block;
	}

	/*
 * Add the correct display in all browsers.
 */

	summary {
		display: list-item;
	}

	/* Misc
   ========================================================================== */

	/**
 * Add the correct display in IE 10+.
 */

	template {
		display: none;
	}

	/**
 * Add the correct display in IE 10.
 */

	[hidden] {
		display: none;
	}
</style>
