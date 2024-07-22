<template>
    <header class="main-bar">
      <nav>
        <router-link to="/">Home</router-link>
        <img src="../assets/IMG/SUNNEE.png" alt="logo">
        <router-link to="/Customize">Bottle</router-link>
      </nav>
    </header>
  </template>
  <script>
    export default {
      name: 'MainBar',
    };
  </script>
  <style scoped>
  .main-bar {
    background-color: #333;
    color: #fff;
    padding: 10px;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 90px;
    
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
    font-size: large;
    font-weight: 600;
  }
  
  nav a:hover {
    text-decoration: underline;
  }

  img {
    filter: invert(1);
    width: 180px;
  }

  </style>
  