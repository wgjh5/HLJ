<template>
	<div>
		<XTopbar status="cat" />
		<div class="cate-wrap">
			<catNav />
			<catRight />
		</div>
		<Xnavbar />
	</div>
</template>
<script>
	import Xnavbar from '../components/Homes/Xnavbar.vue';
	import XTopbar from '../components/Homes/XTopbar.vue';
	import catNav from '../components/Cats/cate-nav.vue';
	import catRight from '../components/Cats/catRight.vue';
	export default {

		components: {
			XTopbar,
			Xnavbar,
			catNav,
			catRight
		}
	}
</script>
<style scoped>
	.cate .cate-wrap {
		position: relative;
	}
</style>
