<template>
  <div class="customize-page">
    <MainBar />
    <ProgressBar />
    <div class="customize-section">
      <div class="bottle-img">
        <img :src="baseImg" alt="Borraccia" />
        <img :src="capImg" alt="Tappo della Borraccia" />
        <img :src="holderImg" alt="Manico della Borraccia" />
      </div>
      <div class="color-selector">
        <!-- Includi il componente ColorSelector -->
        <ColorSelector :colors="colors" :currentPart="currentPart" @colorSelected="updateColor" />
      </div>
    </div>
    <div class="footer">
      <FooterInformation @next="nextPart" />
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import MainBar from '@/components/MainBar.vue';
import FooterInformation from '@/components/FooterInformation.vue';
import ColorSelector from '@/components/ColorSelector.vue';

export default {
  name: 'CustomizePage',
  components: {
    MainBar,
    ProgressBar,
    FooterInformation,
    ColorSelector,
  },
  data() {
    return {
      currentPart: 'bottle', // Parte iniziale da visualizzare (bottiglia)
      colors: ['white', 'black', 'blue', 'grey', 'green', 'lightblue', 'pink', 'brown', 'yellow', 'red'], // Array di colori disponibili
      baseImg: require('../assets/IMG/bottle_white.png'), // Immagine base della bottiglia (bianca)
      capImg: require('../assets/IMG/cap_white.png'), // Immagine del tappo della bottiglia
      holderImg: require('../assets/IMG/holder_white.png'), // Immagine del manico della bottiglia
    };
  },
  methods: {
    updateColor(color) {
      this.setPartColor(this.currentPart, color);
    },
    setPartColor(part, color) {
      if (part === 'bottle') {
        this.baseImg = require(`@/assets/IMG/${part}_${color}.png`);
      } else {
        this[`${part}Img`] = require(`@/assets/IMG/${part}_${color}.png`);
      }
    },
    nextPart() {
      const parts = ['bottle', 'cap', 'holder'];
      const currentIndex = parts.indexOf(this.currentPart);
      this.currentPart = parts[(currentIndex + 1) % parts.length];
    },
  },
};
</script>

<style scoped>
.customize-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.customize-section {
  width: 100%;
  height: 75%;
  display: flex;
}

.bottle-img {
  width: 50%;
  background-color: rgba(34, 31, 31, 0.359);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bottle-img img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}

.color-selector {
  width: 50%;
  height: 100%;
}

.footer {
  width: 100%;
  height: 100px;
}
</style>



