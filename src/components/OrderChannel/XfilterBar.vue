<template>
	<div>
		<ul class="filter-bar">
			<li v-for="(t,index) in tabs" @click="changeTab(index)" class="all" :class="{current:tab==index}" v-text="t.title"></li>
			<!-- <li class="notPaid">待付款</li>
			<li class="beforeService">待服务</li>
			<li class="active">进行中</li>
			<li class="needComment">待评价</li>
			<li class="refund">退款</li>
			<li class="afterSale">售后</li> -->
		</ul>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: 0
			};
		},
		computed: {
			tabs() {
				return this.$store.getters.getTabs
			}
		},
		methods: {
			changeTab(tab) {
				this.tab = tab;
				this.$router.push({
					name: this.tabs[tab].path
				});
			}
		}
// 		setChannel(tab) {
// 			var route = this.$router.history.current.path;
// 			switch (route) {
// 				case "all":
// 					this.tab = 0;
// 					break;
// 				case "notPaid":
// 					this.tab = 1;
// 					break;
// 				case "beforeService":
// 					this.tab = 2;
// 					break;
// 				case "active":
// 					this.tab = 3;
// 					break;
// 				case "needComment":
// 					this.tab = 4;
// 					break;
// 				case "refund":
// 					this.tab = 5;
// 					break;
// 				case "afterSale":
// 					this.tab = 6;
// 					break;
// 				default:
// 					this.tab = 0;
// 			};
// 		},
// 		mounted() {
// 			this.setChannel()
// 		}
// 

	}
</script>

<style scoped>


</style>
