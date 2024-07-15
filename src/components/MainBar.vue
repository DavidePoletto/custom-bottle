<template>
    <header class="main-bar">
      <nav>
        <router-link to="/">Home</router-link>
        <img src="../assets/IMG/SUNNEE.png" alt="logo">
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .main-bar {
    background-color: #333;
    color: #fff;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
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
  }
  
  nav a:hover {
    text-decoration: underline;
  }

  img {
    filter: invert(1);
    width: 100px;
  }

  </style>
  