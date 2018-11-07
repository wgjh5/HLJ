<template>
	<div>
		<XQuickFilter :channel="channel" />
		<XlistProducts :channel="channel" />
		<XArtisans :channel="channel" />
		
	</div>
</template>

<script>
	import XQuickFilter from '../components/List/XQuickFilter.vue';
	import XlistProducts from '../components/ListChannel/XlistProducts.vue';
	import XArtisans from '../components/ListChannel/XArtisans.vue';
	export default {
		components: {
			XQuickFilter,
			XlistProducts,
			XArtisans
		},
		data() {
			return {
				channel: 0
			};
		},
		methods: {
			setChannel() {
				var route = this.$router.history.current.path;
				switch (route) {
					case "/list/doctor":
						this.channel = 0;
						break;
					case "/list/choiceness":
						this.channel = 1;
						break;
					default:
						this.channel = 0;
				};
			}
		},
		mounted() {
			this.setChannel();

		},
		watch: {
			$route() {
				this.setChannel();
			}
		}
	}
</script>

<style>

</style>
