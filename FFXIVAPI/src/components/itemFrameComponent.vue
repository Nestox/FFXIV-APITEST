<template>
    <div class="container-xl ">
        <div class="row d-flex px-2 justify-content-center">
            <div v-for="(element, index) in ItemsIcon" class="col-4 col-md-2 text-center m-1 align-items-center bg-color-FFblue rounded-3">
                <p>{{ ItemsName[index] }}</p>
                <!-- <a href="https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/b2cab67854f/" class="eorzeadb_link">Dreadwyrm Blade</a> -->
                <img :src="'https://xivapi.com'+element" class="mb-2" alt="">
                <!--TODO: Add a modal that shows information of each item-->
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