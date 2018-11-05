<template>
	<section class="product-detail-container" id="project">
		<topShare />
		<productImg />
		<DetailComponents />
		<daysContainer />
	</section>

</template>

<script>
	import topShare from "../components/Details/topShare.vue";
	import productImg from "../components/Details/product-img.vue";
	import DetailComponents from "../components/Details/Detail-components.vue";
	import daysContainer from "../components/Details/daysContainer.vue";
	export default {
		data() {
			return {

			};
		},
		components: {
			topShare,
			productImg,
			DetailComponents,			
			daysContainer
		}
	}
</script>

<style>
.product-detail-container {
    padding-bottom: 2.5rem;
}
.product-detail-container > section {
    border-bottom: 0.5rem solid #f7f7f7;
}
</style>
