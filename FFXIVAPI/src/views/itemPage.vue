<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <input type="input" name="" v-model="searchValue" class="mb-2">
                <button type="button" id="searchButton" @click="startSearching = true">search</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-1">
                <!-- TODO: Add navbar for navigation and filters -->
                <router-link to="/" class="sticky-xl-top">
                    <div class="bg-color-FFblue text-center rounded-1">
                        Return
                    </div>
                </router-link>
            </div>
            <div class="col-12 col-lg-10">
                <itemFrameComponent
                :ItemsID = "ItemID"
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
    import { ref, watch } from 'vue';
    import itemFrameComponent from '@/components/itemFrameComponent.vue';

    const ItemID = ref([]);
    const ItemIDPersistent = ref([])
    const ItemIcon = ref([]);
    const ItemIconPersistent = ref([])
    const ItemName = ref([]);
    const ItemNamePersistent = ref([])
    const ItemLink = ref([]);
    const ItemLinkPersistent = ref([])

    const searchValue = ref('')

    const nextPage = ref([]);
    const prevPage = ref([]);
    const maxPage = ref([]);

    const actualPage = ref(1);

    let firstLoading = false;
    let startSearching = ref(false);

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
                ItemID.value.push(element.ID)
                ItemIcon.value.push(element.Icon)
                ItemName.value.push(element.Name)
                ItemLink.value.push(element.Url)
            }
        });
    }

    async function loadAllNames(params) {
        const respond = await fetch(`https://xivapi.com/item?page=${params}`);
        const data = await respond.json();
        
        // console.log(data)
        data.Results.forEach(element => {
            if (element.Name != "") {
            ItemIDPersistent.value.push(element.ID);
            ItemNamePersistent.value.push(element.Name);
            ItemIconPersistent.value.push(element.Icon);
            ItemLinkPersistent.value.push(element.Url);
            }
        })
        // console.log(ItemIDPersistent)
        // console.log(ItemNamePersistent)
    }

    watch(
    () => startSearching.value,
    async()=>{
        // console.log(startSearching.value)
        // console.log(searchValue.value)
        if (searchValue.value == '') {
            await getInfo(1);
        } else {
            ItemID.value = []
            ItemIcon.value = []
            ItemName.value = []
            ItemLink.value = []
            startSearching.value = false;
            // console.log(ItemIDPersistent.value.length)
            for (let i = 0; i < ItemIDPersistent.value.length; i++) 
            {
                // console.log(ItemNamePersistent.value[i])
                if (searchValue.value == ItemNamePersistent.value[i]) 
                // if (searchValue.value.match(ItemNamePersistent.value[i])) 
                {
                    console.log("entra")
                    console.log(i)
                    console.log(ItemNamePersistent.value[i])
                    
                    ItemID.value.push(ItemIDPersistent.value[i])
                    ItemIcon.value.push(ItemIconPersistent.value[i])
                    ItemName.value.push(ItemNamePersistent.value[i])
                    ItemLink.value.push(ItemLinkPersistent.value[i])
                }
            }
        }
    })

    const restraso = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    watch(
    () => actualPage.value,
    async (newId, oldId) => {
        ItemID.value = []
        ItemIcon.value = []
        ItemName.value = []
        ItemLink.value = []
        await getInfo(actualPage.value);

        if(firstLoading == false){
            for (let i = 1; i < 5; i++) {
                loadAllNames(i);
                if (i % 10 === 0) {
                    await restraso(5000)
                }
            }
            firstLoading = true;
        }
    },
    { immediate: true }
);
</script>