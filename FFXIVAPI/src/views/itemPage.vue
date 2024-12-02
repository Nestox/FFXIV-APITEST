<template>
    <div class="container-xl ">
        <div class="row">
            <div class="d-none d-lg-block col-lg-1">
                <!-- TODO: Add navbar for navigation and filters -->
                <router-link to="/" class="sticky-xl-top">
                    <div class="bg-color-FFblue text-center rounded-1">
                        Return
                    </div>
                </router-link>
            </div>
            <div class="col-12 col-lg-10">
                <itemFrameComponent
                :ItemsID = "ItemsID"
                :ItemsIcon = "ItemIcon"
                :ItemsName = "ItemName"
                :Itemslink = "ItemLink"
                />
                <nav aria-label="Page navigation" class="m-3">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"> <button class="page-link bg-color-FFblue" @click="actualPage = 1">First</button></li>
                        <li class="page-item" v-if=" actualPage != 1"> <button class="page-link bg-color-FFblue" @click="actualPage = actualPage - 1">{{ prevPage }}</button></li>
                        <li class="page-item"> <button class="page-link bg-color-FFblue" href="#">{{ actualPage }}</button></li>
                        <li class="page-item" v-if="actualPage != maxPage"> <button class="page-link bg-color-FFblue" @click="actualPage = actualPage + 1">{{ nextPage }}</button></li>
                        <li class="page-item"> <button class="page-link bg-color-FFblue" @click="actualPage = maxPage">last</button></li>
                    </ul>
                </nav>
            </div>
            <div class=" col-lg-1">
                
            </div>
        </div>
    </div>
    <!-- TODO: Add a search functionalilty for the items -->
</template>

<script setup>
    import { ref, onBeforeMount, watch } from 'vue';
    import itemFrameComponent from '@/components/itemFrameComponent.vue';

    const ItemsID = ref([]);
    const ItemIcon = ref([]);
    const ItemName = ref([]);
    const ItemLink = ref([]);

    const nextPage = ref([]);
    const prevPage = ref([]);
    const maxPage = ref([]);

    const actualPage = ref(1);

    async function getInfo(params)
    {
        const respond = await fetch(`https://xivapi.com/item?page=${params}`);
        const data = await respond.json();
        
        prevPage.value = []
        nextPage.value = []
        maxPage.value = []

        prevPage.value.push(data.Pagination.PagePrev);
        nextPage.value.push(data.Pagination.PageNext);
        maxPage.value.push(data.Pagination.PageTotal);

        data.Results.forEach(element => {
            if (element.Name != "") {
                ItemsID.value.push(element.ID)
                ItemIcon.value.push(element.Icon)
                ItemName.value.push(element.Name)
                ItemLink.value.push(element.Url)
            }
        });
    }

    onBeforeMount(async () => {
        // getInfo(actualPage.value)
        
    })

    watch(
    () => actualPage.value,
    async (newId, oldId) => {
        ItemsID.value = []
        ItemIcon.value = []
        ItemName.value = []
        ItemLink.value = []
        console.log('El id cambió de', oldId, 'a', newId)
        getInfo(actualPage.value);
    },
    { immediate: true }
);
</script>