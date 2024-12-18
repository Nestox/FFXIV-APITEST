<template>
    <div class="container-xl ">
        <div class="row d-flex px-2 justify-content-center">
            <div v-for="(element, index) in ItemsIcon" class="col-4 col-md-2 text-center m-1 align-items-center bg-color-FFblue rounded-3">
                <button type="button" class=" btn text-white" data-bs-toggle="modal" data-bs-target="#ItemModal">
                    <p>{{ ItemsName[index] }}</p>
                    <!-- <a href="https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/b2cab67854f/" class="eorzeadb_link">Dreadwyrm Blade</a> -->
                    <img :src="'https://xivapi.com' + element" class="mb-2" alt="">
                    <!--TODO: Add a modal that shows information of each item-->
                </button>
            </div>
        </div>
    </div>
    
    
    <div class="modal fade" id="ItemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="itemModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
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