<template>
    <div class="container-xl">
        <div class="map">
            <img :src="'https://xivapi.com' + mapUrl" alt="" class="img-fluid overflow-auto">
        </div>
        <!-- <p>Map should be above this</p> -->
    </div>
</template>

<script setup>
    const props = defineProps({
        mapUrl: String
    })

</script>

