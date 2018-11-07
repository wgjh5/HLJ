<template>
	<div>
		<div class="bg"></div>
		<div  class="loading-spin">
			<div class="icon">
				<img class="pic" src="https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_16b647486bea5215910c1fd8ea5478eb.png">
				<div class="shadow"></div>
			</div>
			<p>小河狸正在使劲加载中，<br>请稍候</p>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	
	}
</script>

<style>
	.bg{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: absolute;
		top:0;
		left: 0;
		z-index: 9998;
	}
	.loading-spin {
		z-index: 9999;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		color: #999;
		font-family: PingHei, "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif
	}

	.loading-spin .icon {
		width: 80px;
		text-align: center;
		display: inline-block
	}

	.loading-spin .pic {
		display: inline-block;
		width: 100%;
		-webkit-animation: jump .4s infinite linear alternate;
		animation: jump .4s linear infinite linear alternate
	}

	.loading-spin .shadow {
		margin: -5px auto auto 22px;
		width: 50px;
		height: 10px;
		border-radius: 50%;
		background: #bfc0c0;
		-webkit-animation: zoomIn .4s infinite linear alternate;
		animation: zoomIn .4s linear infinite linear alternate;
		-webkit-transform-origin: center center;
		transform-origin: center center
	}

	.loading-spin p {
		text-align: left
	}

	@-webkit-keyframes zoomIn {
		50% {
			-webkit-transform: scale(.5);
			transform: scale(.5)
		}
	}

	@keyframes zoomIn {
		100% {
			-webkit-transform: scale(.5);
			transform: scale(.5)
		}
	}

	@-webkit-keyframes jump {
		50% {
			-webkit-transform: translateY(-15px);
			transform: translateY(-15px)
		}
	}

	@keyframes jump {
		100% {
			-webkit-transform: translateY(-15px);
			transform: translateY(-15px)
		}
	}
</style>
