<template>
    <div class="container">
        <div class="row">

            <!-- <h1 class="bg-color-FFblue text-md-center rounded-3 m-sm-1 m-md-3 m-lg-4 m-xl-4 p-1">Final Fantasy 14 Mini Data Requester</h1> -->
            <div class="col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link to="/items" class="router-items ">
                    <div class="bg-color-FFblue text-center rounded-3 ">
                        Item list
                    </div>
                </router-link>
            </div>

            <div class=" col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link>
                    <div class="bg-color-FFblue text-center rounded-3 ">
                        test
                    </div>
                </router-link>
            </div>

            <div class=" col-sm-12 mb-sm-3 col-md-2 col-lg-2 col-xl-2">
                <router-link>
                    <div class="bg-color-FFblue text-center rounded-3 ">
                        test
                    </div>
                </router-link>
            </div>

            
        </div>
    </div>
</template>


<script>
import { onBeforeMount } from 'vue';

    onBeforeMount(async () => {

    })
</script>