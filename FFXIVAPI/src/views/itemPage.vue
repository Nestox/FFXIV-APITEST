<template>
    <div class="container-xl ">
        <div class="row">
            <div class="col-1">
                <router-link to="/" class="sticky-xl-top">
                    <div class="bg-color-FFblue text-center rounded-1">
                        Return
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
            <div class="col-1">
                
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

    const nextPage = ref([]);
    const prevPage = ref([]);
    const maxPage = ref([]);

    const actualPage = ref(3);

    onBeforeMount(async () => {
        const respond = await fetch(`https://xivapi.com/item?page=${actualPage.value}`);
        const data = await respond.json();
        
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
    })
</script>