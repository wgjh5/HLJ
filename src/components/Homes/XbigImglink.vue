<template>
    <section class="ImageLink magic-widget" >
        <div class="image-link-component">
            <a href="javascript:void(0)" >
                <div class="ui-image-component status-show animate animate-end">
                    <img class="image" :src="status">
                </div>
            </a>
        </div>
    </section>
</template>
<script>
export default {
	props: ["status"],
   
}
</script>