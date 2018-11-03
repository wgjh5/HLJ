<template>
    <div>
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
import XsmallImglink from '../components/XsmallImglink.vue';
import Xproduct from '../components/Xproduct.vue';
import XbigImglink from '../components/XbigImglink.vue';
import Xspace from '../components/Xspace.vue';
import Xrecommend from '../components/Xrecommend.vue';
export default {
    components: {
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