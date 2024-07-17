<template>
    <button @click="handleClick"
            :style="{ backgroundColor: color }"
            :class="{ active: isActive }"
            class="my-button">
    </button>
  </template>
  
  <script>
  export default {
    name: 'ColorButton',
    props: {
      color: String,
      isActive: Boolean,
    },
    methods: {
      handleClick() {
        this.$emit('click', this.color);
      },
    },
  };
  </script>
  
  <style scoped>
  .my-button {
    padding: 20px;
    margin: 5px;
    border: 1px solid rgb(199, 199, 199);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 1;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease;
  }
  
  .my-button:hover {
    transform: scale(1.1);
  }
  .active {
    /* Stile opzionale per evidenziare il pulsante attivo */
    border-width: 2px;
    border-color: #2980b9;
  }
  </style>
  