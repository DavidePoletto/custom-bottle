<template>
  <div class="color-container">
    <div class="title-section">
      <h2>Seleziona il colore per il {{ currentPart }}</h2>
      <p>Il colore è molto importante</p>
    </div>
    <SwiperContainer :colors="colors">
      <ColorButton v-for="(color, index) in colors"
                   :key="index"
                   :color="color"
                   :is-active="color === activeColor"
                   @click="handleButtonClick(color)"
      />
    </SwiperContainer>
  </div>
</template>

<script>
import SwiperContainer from './SwiperContainer.vue';
import ColorButton from './ColorButton.vue';

export default {
  name: 'ColorSelector',
  components: {
    SwiperContainer,
    ColorButton,
  },
  props: {
    colors: Array,
    currentPart: String,
  },
  data() {
    return {
      activeColor: this.colors[0], // Colore attualmente attivo
    };
  },
  methods: {
    handleButtonClick(color) {
      this.activeColor = color;
      this.$emit('colorSelected', color); // Passa il colore selezionato
    },
  },
};
</script>

<style scoped>
.color-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-section {
  margin-bottom: 20px;
}
</style>

