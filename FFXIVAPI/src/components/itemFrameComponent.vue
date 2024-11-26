<template>
    <div class="container-xl">
        <div class="row d-flex p-2 ">
            <div v-for="ItemsName in ItemsID" class="col-2 text-lg-center m-1 align-items-lg-center bg-color-FFblue rounded-3">
                <p>{{ ItemsName }}</p>
                <img :src="'https://xivapi.com'+ItemsIcon" class="mb-2" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { onBeforeMount } from 'vue';

    const props = defineProps({
        ItemsID: Number,
        ItemsIcon: String,
        ItemsName: String,
        Itemslink: String
    })

    onBeforeMount( async()=>{
        for (let i = 0; i < ItemsName.length; i++) {
            const element = ItemsName[i];
            console.log(element[i])
        }
    })
</script>