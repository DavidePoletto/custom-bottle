<template>
    <div>
      <MainBar />
      <div class="about-page">
        <router-link to="/">Torna alla Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import MainBar from '../components/MainBar.vue';
  
  export default {
    components: {
      MainBar
    }
  };
  </script>
  
  <style scoped>
  .about-page {
    text-align: center;
    padding: 20px;
  }
  </style>
  