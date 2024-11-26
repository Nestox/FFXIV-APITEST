<template>
    <div class="container-xl">
        <router-link to="/">
            <div class="bg-color-FFblue text-center rounded-3 ">
                Return to main page
            </div>
        </router-link>
    </div>
    
    <itemFrameComponent
    :ItemsID = "ItemsID"
    :ItemsIcon = "ItemIcon"
    :ItemsName = "ItemName"
    :Itemslink = "ItemLink"
    />
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import itemFrameComponent from '@/components/itemFrameComponent.vue';

    const ItemsID = ref([]);
    const ItemIcon = ref([]);
    const ItemName = ref([]);
    const ItemLink = ref([]);
    // Icon
    // Name
    // link

    onBeforeMount(async () => {
        const respond = await fetch("https://xivapi.com/item");
        const data = await respond.json();
        
        data.Results.forEach(element => {
            if (element.Name != "") {
                ItemsID.value.push(element.ID)
                ItemIcon.value.push(element.Icon)
                ItemName.value.push(element.Name)
                ItemLink.value.push(element.Url)
            }
        });
    })
</script>