<template>
    <div class="progress-bar">
      <ul class="steps">
        <li>1.CORPO</li>
        <li>2.TAPPO</li>
        <li>3.FONDO</li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: 'ProgressBar',
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    background-color: rgb(242, 239, 239);
    box-shadow: 0 2px 20px rgba(61, 61, 61, 0.2);
    z-index: 1;
  }
  
  .steps {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: rgb(94, 94, 94);
  }
  
  .steps li {
    list-style-type: none;
    padding: 15px;
  }
  </style>
  
  