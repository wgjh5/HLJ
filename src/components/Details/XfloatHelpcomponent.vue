<template>
	<div class="floating-helper-component" id="floating-helper" style="opacity: 1;width: 21%;top: 55%;transform: translate(0px, 0px);"></div>
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
.floating-helper-component {
  position: fixed;
  right: 0;
  z-index: 9999;
}

.floating-helper-component img {
  width: 100%;
  display: block;
}

</style>
