<template>
        <section class="ImageLink magic-widget" data-track-spm="m-clientapp-index.ImageLink_jin_ri_shang_xin.$.ee37f4">
            <div class="image-link-component">
                <a href="https://m.helijia.com/sub-product.html?recType=3&amp;city=110100" data-track-scm="imglink">
                    <div class="ui-image-component status-show animate animate-end">
                         <img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_31edf525d19e77c4e2e2491ec593a161.jpg!/0/w-750/format-webp">
                        <img class="draft" src="https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_31edf525d19e77c4e2e2491ec593a161.jpg!/0/w-100/quality-10/format-webp">
                    </div>
                </a>
            </div>
        </section>
</template>
<script>
export default {
    components: {}
}
</script>
<style scoped>
.ui-image-component {
  position: relative;
  overflow: hidden;
}

.ui-image-component .image {
  display: block;
  width: 100%;
}

.ui-image-component .draft {
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.ui-image-component .draft {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.ui-image-component.animate .draft {
  opacity: 1;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
}

.ui-image-component.status-show .draft {
  display: none;
}

.ui-image-component.status-show.animate .draft {
  display: block;
  opacity: 0;
}

.ui-image-component.status-show.animate-end .draft {
  display: none;
}

</style>