<template>
    <div class="row">
        <div class="col-12 col-md-10 col-lg-10 col-xl-8 mx-auto mb-2">
            <Splide id="expansions-Splide" :options="{type: 'loop', width: '100%', height: '250px', perPage: 1}">
                <SplideSlide class="expansions-item">
                    <a href="https://eu.finalfantasyxiv.com/lodestone">
                        <div class="centerTest" style="background-image: url('../../public/img/LodestoneBannr.png');">
                            <p class="SplideText">
                                The Lodestone
                            </p>
                        </div>
                    </a>
                </SplideSlide>
                <SplideSlide class="expansions-item">
                    <a href="https://eu.finalfantasyxiv.com/">
                        <div class="centerTest" style="background-image: url('../../public/img/FF14Bannr.png');">
                            <p class="SplideText">
                                Get the game
                            </p>
                        </div>
                    </a>
                </SplideSlide>
                <SplideSlide class="expansions-item">
                    <a href="https://www.square-enix-games.com/en_EU/home">
                        <div class="centerTest" style="background-image: url('../../public/img/Square-Enix.jpg');">
                            <p class="SplideText">
                                Browse other Square Enix products
                            </p>
                        </div>
                    </a>
                </SplideSlide>
            </Splide>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-3 col-md-4">
                <router-link to="/items" class="router-items ">
                    <div class="bg-color-FFblue text-center rounded-1 d-flex flex-column ">
                        <img src="../../public/img/gladiator.png" class="img-thumbnail item-img bg-black ">
                        Item list
                    </div>
                </router-link>
            </div>

            <div class=" col-12 mb-3 col-md-4">
                <router-link to="/maps">
                    <div class="bg-color-FFblue text-center rounded-1 d-flex flex-column ">
                        <img src="../../public/img/PlaceName.png" class="img-thumbnail item-img bg-black ">
                        Maps List
                    </div>
                </router-link>
            </div>

            <div class=" col-12 mb-3 col-md-4">
                <router-link to="/recipes">
                    <div class="bg-color-FFblue text-center rounded-1 d-flex flex-column ">
                        <img src="../../public/img/blacksmith.png" class="img-thumbnail item-img bg-black ">
                        Recipes List
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onBeforeMount } from 'vue';

    onBeforeMount(async () => {

    })
</script>