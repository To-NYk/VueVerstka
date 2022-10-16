<template>
  <div id="app" class="wrap d-flex flex-column min-vh-100">
    <Header />
    
    <!-- Убрал align-items-center  из main стало красиво -->
      <main class="flex-fill d-flex justify-content-center ">
        <router-view />
        <div v-for="picture in filteredPictures" :key="picture.title"></div>
        <Picture :picture="picture"></Picture>
        
      </main>
    <Footer />
  </div>
</template>


<script >
import './global.scss';

import Picture from "./components/Picture.vue";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  name: "App",
  components: {
    Picture,
    Header,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
/* * {
  font-family: 'Merriweather', serif;
}
#app {
  font-family: 'Merriweather', serif;
} */

</style>
