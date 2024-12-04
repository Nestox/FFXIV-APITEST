<template>
    <div class="container-xl ">
        <div class="row">
            <div class="col-2">
                <router-link to="/">
                    <div class="bg-color-FFblue text-center rounded-1 ">
                        Return to main page
                    </div>
                </router-link>
            </div>
            <div class="col-10">
                <recipe-component
                    
                />
                Here goes the component
            </div>
        </div>
    </div>
</template>

<script setup>
import RecipeComponent from '@/components/recipeComponent.vue';

</script>