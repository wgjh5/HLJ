<template>
	<section  class="widget-topbar" data-track-spm="b-default.topbar.$">
		<div class="topbar"><span class="title" data-track-pos="1" data-track-scm="标题">订单</span></div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
.widget-topbar {
  background-color: #000;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
}

.widget-topbar .topbar {
  width: 100%;
  height: 2.1rem;
  line-height: 2.1rem;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
     -moz-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem 0.75rem;
}

.widget-topbar .topbar .back {
  display: inline-block;
  cursor: pointer;
  width: 0.6rem;
  height: 1rem;
}

.widget-topbar .topbar .back .back-svg {
  width: 100%;
  height: 100%;
}

.widget-topbar .topbar .title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: white;
  font-size: 0.75rem;
  margin: 0 auto;
}

.widget-topbar .topbar .right-btn {
  display: block;
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
}

.widget-topbar.fixed-style {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.widget-topbar.in-app {
  padding-top: 1rem;
}

.widget-topbar.in-iphonex.in-app {
  padding-top: 1.75rem;
}

</style>
