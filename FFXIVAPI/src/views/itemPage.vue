<template>
    <div class="container-xl ">
        <div class="row">
            <div class="col-2">
                <router-link to="/" class="sticky-xl-top">
                    <div class="bg-color-FFblue text-center rounded-1">
                        Return to main page
                    </div>
                </router-link>
            </div>
            <div class="col-10">
                <itemFrameComponent
                :ItemsID = "ItemsID"
                :ItemsIcon = "ItemIcon"
                :ItemsName = "ItemName"
                :Itemslink = "ItemLink"
                />
            </div>
        </div>
    </div>
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

    async function getItemList(ind)
    {

    }

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