<template>
    <div>

		<XTopbar />
		<XCarousel />
		<XGridMenu />
		<XComplexmages />
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
        <XbackTop />
		<Xaccount />
        <Xnavbar />
    </div>
</template>
<script>
import XTopbar from '../components/XTopbar.vue';
import XComplexmages from '../components/XComplexImages.vue';
import XCarousel from '../components/XCarousel.vue';
import XGridMenu from '../components/XGridMenu.vue';
import XsmallImglink from '../components/XsmallImglink.vue';
import Xproduct from '../components/Xproduct.vue';
import XbigImglink from '../components/XbigImglink.vue';
import Xspace from '../components/Xspace.vue';
import Xrecommend from '../components/Xrecommend.vue';
import XbackTop from '../components/XbackTop.vue';
import Xnavbar from '../components/Xnavbar.vue';
import Xaccount from '../components/Xaccount.vue';
export default {
    components: {
		XTopbar,
		XCarousel,
		XGridMenu,
		XComplexmages,
        XsmallImglink,
        Xproduct,
        XbigImglink,
        Xspace,
        Xrecommend,
        XbackTop,
		Xaccount,
        Xnavbar
    }
}
</script>
<style scoped>
	
</style>