<template>
    <div class="container-xl ">
        <div class="row d-flex px-2 justify-content-center">
            <div v-for="(element, index) in ItemsIcon" class="col-2 text-lg-center m-1 align-items-lg-center bg-color-FFblue rounded-3">
                <p>{{ ItemsName[index] }}</p>
                <img :src="'https://xivapi.com'+element" class="mb-2" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        ItemsID: Array,
        ItemsIcon: Array,
        ItemsName: Array,
        Itemslink: Array
    })
</script>