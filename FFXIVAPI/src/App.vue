<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <!-- Añadir aqui cosas que se mantengan durante toda la navegacion de la pagina -->
  <div class="container-xxl">
    <h1 class="bg-color-FFblue text-md-center rounded-3 m-sm-1 m-md-3 m-lg-4 m-xl-4 p-1">Final Fantasy 14 Mini Data
      Requester</h1>

  </div>
  <RouterView />
  
    <div class="footer text-center p-3 text-white mt-5 bg-dark border-top">
      <p>
        This page is not affiliated with XIVAPI, Square-Enix, Final Fantasy 14 or the Lodestone in any way of form 
      </p>
      <p>
        This is a personal proyect for learning how to consume APIs with Vue
      </p>
    </div>
</template>
