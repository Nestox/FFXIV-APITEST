<template>
    <div class="container-xxl ">
        <div class="row">
            <div class="col-1">
                <router-link to="/" class="sticky-xl-top">
                    <div class="bg-color-FFblue text-center rounded-1 p-1 ">
                        Return
                    </div>
                </router-link>
            </div>
            <div class="col-9">
                <MapCompTest :mapUrl="'/m/f1t1/f1t1.00.jpg'" />
            </div>
            <div class="col-2">
                <div class="accordion bg-color-FFblue text-center" id="accordionMap">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-color-FFblue" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                La Noscea
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionMap">
                            <div class="accordion-body">
                                Old Gridania
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-color-FFblue" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Thanalan
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse"
                            data-bs-parent="#accordionMap">
                            <div class="accordion-body">
                                Thanalan Central
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MapCompTest from '@/components/mapCompTest.vue';
import { onBeforeMount, onMounted, ref } from 'vue';

    let mapImgUrl = ref([]);
    let mapName = ref([])
    let mapRegionName = ref([])

    onBeforeMount(async () => {
        const response = await fetch("https://xivapi.com/map/2?columns=ID,MapFilename,PlaceName.Name,PlaceNameRegion.Name");
        const data = await response.json()
        console.log(data)
    }) 
    onMounted(async () => {
        
    })
</script>
