<template>
	<section class="service-area-container">
		<div class="head"><label class="tit-text">
				服务商圈 (

				55

				)
			</label><button @click="findAll" class="button-right" ><span>查看全部</span><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;"
					 viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
						 fill="#999" fill-rule="evenodd"></path>
					</svg></span></button></div>
		<div class="cont" :class="{open:isSelect==true}">{{serviceRange}}</div>
	</section>
</template>

<script>
	export default {
		props:["serviceRange"],
		data() {
			return {
				isSelect:false
			};
			
		},
		methods:{
			findAll(){
				this.isSelect = !this.isSelect
			}
		}
	}
</script>

<style scoped>
	
	/*  =============*/
.service-area-container {
  padding: 0.75rem;
  font-size: 0.75rem;
  background: #fff;
}

.service-area-container .head .tit-text {
  color: #1a1a1a;
}

.service-area-container .head .button-right {
  float: right;
  color: #666;
  font-size: 0.6rem;
  padding: 0;
}

.service-area-container .cont {
  margin-top: 0.55rem;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  font-size: 0.7rem;
  color: #666;
  line-height: 1rem;
}

.service-area-container .cont.open {
  white-space: normal;
  line-height: 1.4;
}

</style>
