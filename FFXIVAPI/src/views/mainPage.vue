<template>
    <div class="container">
        <div class="row">
            <MapCompTest></MapCompTest>
            <div class="col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link to="/items" class="router-items ">
                    <div class="bg-color-FFblue text-center rounded-1 ">
                        Item list
                    </div>
                </router-link>
            </div>

            <div class=" col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link to="/maps">
                    <div class="bg-color-FFblue text-center rounded-1 ">
                        Maps List
                    </div>
                </router-link>
            </div>

            <div class=" col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link to="/recipes">
                    <div class="bg-color-FFblue text-center rounded-1 ">
                        Recipes List
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>


<script>
import MapCompTest from '@/components/mapCompTest.vue';
import { onBeforeMount } from 'vue';

    onBeforeMount(async () => {

    })
</script>