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
                <!-- Here is the map component -->
                <MapCompTest :mapUrl="mapImgUrl" />
            </div>
            <div class="col-2">
                <div class="accordion bg-color-FFblue text-center sticky-xl-top" id="accordionMap">
                    <!-- LA NOSCEA -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-color-FFblue" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                La Noscea
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionMap">
                            <div class="accordion-body" v-on:click="getMapData(16)">
                                Lower La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(17)">
                                Eastern La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(18)">
                                Western La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(19)">
                                Upper La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(30)">
                                Outer La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(15)">
                                Middle La Noscea
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(12)">
                                Limsa Lominsa Lower Decks
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(11)">
                                Limsa Lominsa Upper Decks
                            </div>
                            <!-- <div class="accordion-body" v-on:click="getMapData(51)">
                                Wolves' Den Pier
                            </div> -->
                            <div class="accordion-body">
                                Mist
                            </div>
                        </div>
                    </div>
                        <!-- THE BLACK SHROUD -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-color-FFblue" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                The Black Shroud
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionMap">
                            <div class="accordion-body" v-on:click="getMapData(2)">
                                New Gridania
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(3)">
                                Old Gridania
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(4)">
                                Central Shroud
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(5)">
                                East Shroud
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(6)">
                                South Shroud
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(7)">
                                North Shroud
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(1)">
                                Lily Hills
                            </div>
                        </div>
                    </div>
                    <!-- THANALAN -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-color-FFblue" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Thanalan
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionMap">
                            <div class="accordion-body" v-on:click="getMapData(13)">
                                Ul'Dah - Steps of Nald
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(14)">
                                Ul'Dah - Steps of Thald
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(21)">
                                Central Thanalan
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(23)">
                                Southern Thanalan
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(24)">
                                Northern Thanalan
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(20)">
                                Western Thanalan
                            </div>
                            <div class="accordion-body" v-on:click="getMapData(22)">
                                Eastern Thanalan
                            </div>
                            <div class="accordion-body">
                                The Goblet
                            </div>
                            <div class="accordion-body">
                                The Gold Saucer
                            </div>
                            <div class="accordion-body">
                                Chocobo Square
                            </div>
                            <div class="accordion-body">
                                Blunderville Square
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

    let mapImgUrl = ref("/m/default/default.00.jpg");
    let mapName = ref([])
    let mapRegionName = ref([])

    let firstLoading = false;

    // async function loadAllMaps(params) {
    //     const respond = await fetch(`https://xivapi.com/map/${params}?columns=ID,MapFilename,PlaceName.Name,PlaceNameRegion.Name`);
    //     const data = await respond.json();
        
    //     console.log(data)
    //     data.Results.forEach(element => {
    //         if (element.Name != "") {
    //             mapImgUrl.value.push(element.MapFilename)
    //             mapName.value.push(element.PlaceName.Name)
    //             mapRegionName.value.push(element.PlaceNameRegion.Name)
    //         }
    //     })
    //     console.log(ItemIDPersistent)
    //     console.log(ItemNamePersistent)
    // }

    
    async function getMapData(params) {
        const response = await fetch(`https://xivapi.com/map/${params}?columns=ID,MapFilename,PlaceName.Name,PlaceNameRegion.Name`);
        const data = await response.json()
        // TODO: añadir el resto de mapas al template
        mapImgUrl.value = []

        mapImgUrl.value.push(data.MapFilename)
        // console.log(mapImgUrl)
    }


//     watch(
//     () => actualPage.value,
//     async () => {

//         if(firstLoading == false){
//             for (let i = 1; i < 5; i++) {
//                 loadAllMaps(i);
//                 if (i % 10 === 0) {
//                     await restraso(5000)
//                 }
//             }
//             firstLoading = true;
//         }
//     },
//     { immediate: true }
// );

</script>
