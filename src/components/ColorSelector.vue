<template>
  <div class="color-container">
    <div class="title-section">
      <h2>Selezione il colore per il {{ Text }}</h2>
      <p>Il colore è molto importante</p>
    </div>
    <div class="button-section"></div>
  </div>
</template>
<script>
export default {
  name: 'ColorSelector'
}
</script>
<style>
  .color-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>