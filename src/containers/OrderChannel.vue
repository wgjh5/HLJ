<template>
	<div>
		<XfilterBar />
<!-- 		<div class="group-lead-component"></div> -->
		<div class="list-widget">
			<div>
				<div class="group-lead-component"></div>
				<XlistWidget />
				<Xrecommend />
			</div>
		</div>
	</div>
</template>

<script>
	import XfilterBar from '../components/OrderChannel/XfilterBar.vue';
	import XlistWidget from '../components/OrderChannel/XlistWidget.vue';
	import Xrecommend from '../components/Homes/Xrecommend.vue';
	export default {
		components: {
			XfilterBar,
			XlistWidget,
			Xrecommend
			
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	
	/* ======== */
	.group-lead-component {
		width: 100%;
		overflow: hidden;
	}

	.group-lead-component .gl-wrap {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		padding: 0 0.75rem;
		background-color: #FAE4BB;
		height: 2.4rem;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		color: #666;
		font-size: 0.7rem;
	}

	.group-lead-component .gl-wrap a {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.group-lead-component .gl-wrap .SVGInline-svg {
		width: 0.6rem;
		height: 0.6rem;
	}

	.group-lead-component .gl-wrap .SVGInline-svg path {
		fill: #BD9D62;
	}
	/* == */
	
</style>
