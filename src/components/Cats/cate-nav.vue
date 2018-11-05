<template>
	<section class="m-cate-nav">
		<ul class="nav-list">
			<li v-for="(n,index) in navCell" class="nav-cell " :class="{active:nav==index}" @click="catClick(index)"><a
				 data-track-scm="美甲" v-text="n.title">美甲</a></li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				navCell: [{
						title: "美甲",
						path: ""
					},
					{
						title: "美容",
						path: ""
					},
					{
						title: "微整形",
						path: ""
					},
					{
						title: "美体",
						path: ""
					},
					{
						title: "美睫",
						path: ""
					},
					{
						title: "美发",
						path: ""
					},
					{
						title: "健身",
						path: ""
					},
					{
						title: "化妆",
						path: ""
					},
					{
						title: "半永久",
						path: ""
					},
					{
						title: "瘦身",
						path: ""
					},
					{
						title: "体雕塑形",
						path: ""
					}
				],
				
			};
		},
		methods: {
			catClick(index) {
				this.nav = index;
				this.$store.dispatch("setNav", index);
			}
		},
		computed:{
			nav: {
				// getter
				get: function() {
					return this.$store.getters.getNav;
				},
				// setter
				set: function(newValue) {
					this.$store.state.nav = newValue;
				}
			}
		}

	}
</script>

<style scoped>
	.m-cate-nav {
		width: 4rem;
		position: fixed;
		top: 2.5rem;
		bottom: 2.5rem;
		background: #fff;
		overflow-y: auto;
	}

	ul,
	li,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.m-cate-nav .nav-cell.active {
		color: #bd9d62;
		background: #F7F7F7;
		border-left: 2px solid #bd9d62;
	}

	.m-cate-nav .nav-cell {
		height: 2.5rem;
		width: 100%;
		color: #1a1a1a;
		border-left: 2px solid #fff;
		line-height: 2.5rem;
		font-size: 0.75rem;
		text-align: center;
		overflow: hidden;
	}

	.m-cate-nav .nav-cell>a {
		display: block;
		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: #1a1a1a;
	}

	a {
		background-color: transparent;
	}
</style>
