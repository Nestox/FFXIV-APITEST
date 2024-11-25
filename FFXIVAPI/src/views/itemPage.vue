<template>
    <div class="container-xl">
        <div class="row d-flex p-2 ">
            <div v-for="element in ItemsID" class="col-2 text-lg-center m-1 align-items-lg-center bg-color-FFblue rounded-3">
                <p>{{ element.Name }}</p>
                <img :src="'https://xivapi.com'+element.Icon" class="mb-2" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';

    const ItemsID = ref([]);

    onBeforeMount(async () => {
        const respond = await fetch("https://xivapi.com/item");
        const data = await respond.json();
        
        data.Results.forEach(element => {
            if (element.Name != "") {
                ItemsID.value.push(element)
            }
        });
    })
</script>