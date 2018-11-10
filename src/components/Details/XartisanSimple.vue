<template>
	<section class="artisan-simple-container" data-track-spm="b-default.simpleInfo.$" data-track-scm="artisan.56473b3e5be64bab8b62f433bec3e9f9">
		<div class="content">
			<div class="photo-box">
				<div class="ui avatar-component" v-bind:style="{background:'url('+'https://img-ucdn-static.helijia.com/zmw'+artisan[0]+') 0% 0% / 100% no-repeat'}"></div>
			</div>
			<div class="info">
				<div class="title"><span class="artisan-name-component"><span class="nick-name">
							<!-- react-text: 504 -->
							<!-- /react-text -->
							<!-- react-text: 505 -->{{artisan[1]}}
							<!-- /react-text --></span></span></div>
				<div class="artisan-level">
					<div class="level-star-component"><img class="star" src="//hlj-img.b0.upaiyun.com/zmw/upload/mobile/star/star4.gif"><span
						 class="artisan-desc">
							<!-- react-text: 510 -->(
							<!-- /react-text --><span class="desc">{{artisan[2]}}</span><span class="type">{{artisan[3]}}</span><!-- react-text: 513 -->)
							<!-- /react-text --></span></div>
				</div>
				<div class="satisfy">
					<!-- react-text: 515 -->{{artisan[4]}}
					<!-- /react-text --><span class="undefined-satisfaction satisfaction"></span></div>
			</div>
			<div class="jumpto-artisan jumpto-studio-artisan">店员主页</div>
		</div>
	</section>
</template>

<script>
	export default {
		props:["artisan"],
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
.artisan-simple-container .content {
  font-size: 0.75rem;
  overflow: hidden;
  margin: 0.75rem;
  position: relative;
}

.artisan-simple-container .photo-box {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  height: 3rem;
  width: 3rem;
  position: absolute;
  left: 0;
  top: 0;
}

.artisan-simple-container .info {
  height: 3rem;
  padding-left: 3.5rem;
  margin-left: 0.5rem;
}

.artisan-simple-container .info .title {
  height: 1rem;
  line-height: 1rem;
}

.artisan-simple-container .info .title .nick-name {
  color: #1a1a1a;
  max-width: 8rem;
}

.artisan-simple-container .info .title .artisan-type {
  color: #666;
  font-size: 0.6rem;
}

.artisan-simple-container .info .artisan-level {
  height: 1rem;
  line-height: 1rem;
}

.artisan-simple-container .info .artisan-level img {
  height: 125%;
  vertical-align: middle;
}

.artisan-simple-container .info .artisan-level .artisan-desc {
  top: 0.1rem;
}

.artisan-simple-container .info .satisfy {
  height: 1rem;
  line-height: 1rem;
  color: #666;
  font-size: 0.6rem;
}

.artisan-simple-container .info .satisfy .satisfaction {
  vertical-align: baseline;
  font-size: 0.55rem;
  color: white;
  margin-left: 0.3rem;
  border-radius: 0.1rem;
  padding: 0.05rem 0.1rem;
}

.artisan-simple-container .info .satisfy .satisfaction.high-satisfaction {
  background-color: #F73831;
}

.artisan-simple-container .info .satisfy .satisfaction.middle-satisfaction {
  background-color: #DEBB76;
}

.artisan-simple-container .info .satisfy .satisfaction.low-satisfaction {
  background-color: #51CE78;
}

.artisan-simple-container .jumpto-artisan {
  position: absolute;
  right: 0;
  top: 70%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  border: 1px solid #C3902C;
  color: #C3902C;
  border-radius: 2rem;
  font-size: 0.6rem;
  padding: 0.3rem 0.75rem;
}

.artisan-simple-container .jumpto-artisan.jumpto-studio-artisan {
  border: 1px solid #BA82CC;
  color: #BA82CC;
}

/* ======= */
.ui.avatar-component {
  -webkit-flex-flow: column;
  -moz-flex-flow: column;
  -ms-flex-flow: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-flow: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -moz-box-pack: center;
       justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ddd;
  -webkit-background-size: cover;
          background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
