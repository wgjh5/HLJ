<template>
    <div>
		<XTopbar />
		<XCarousel />
		<XGridMenu />
        <XsmallImglink />
        <Xproduct />
        <XbigImglink />
        <Xproduct />
        <XbigImglink />
        <Xproduct />
        <XbigImglink />
        <Xproduct />
        <XbigImglink />
        <Xproduct />
        <Xspace />
        <Xrecommend />
    </div>
</template>
<script>
import XTopbar from '../components/XTopbar.vue';
import XCarousel from '../components/XCarousel.vue';
import XGridMenu from '../components/XGridMenu.vue';
import XsmallImglink from '../components/XsmallImglink.vue';
import Xproduct from '../components/Xproduct.vue';
import XbigImglink from '../components/XbigImglink.vue';
import Xspace from '../components/Xspace.vue';
import Xrecommend from '../components/Xrecommend.vue';
export default {
    components: {
		XTopbar,
		XCarousel,
		XGridMenu,
        XsmallImglink,
        Xproduct,
        XbigImglink,
        Xspace,
        Xrecommend
    }
}
</script>
<style scoped>
	
</style>