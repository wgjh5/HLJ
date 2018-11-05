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
		<div class="cont" :class="{open:isSelect==true}">朝阳公园、十八里店、劲松、双井、三元桥、工体、CBD、团结湖、北苑、来广营、芍药居、太阳宫、安贞、安慧桥、健翔桥、奥运村、京旺家园、望京、酒仙桥、东坝、定福庄、姚家园、十里堡、垡头、常营、王府井、崇文门、广渠门、北新桥、安定门、北太平庄、大钟寺、北京大学、中关村、五道口、车道沟、苏州桥、魏公村、颐和园、上地、公主坟、西单、积水潭、阜成门、西直门、金融街、宣武门、方庄、金地格林、豆会庄、崔各庄、高碑店、管庄、马家堡、南苑</div>
	</section>
</template>

<script>
	export default {
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
