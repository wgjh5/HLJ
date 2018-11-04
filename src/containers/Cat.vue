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
	import Xnavbar from '../components/Xnavbar.vue';
	import XTopbar from '../components/XTopbar.vue';
	import catNav from '../Cats/cate-nav.vue';
	import catRight from '../Cats/catRight.vue';
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
