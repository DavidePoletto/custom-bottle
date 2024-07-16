<template>
  <div class="customize-page">
    <MainBar />
    <ProgressBar />
    <div class="customize-section">
      <div class="bottle-img">
        <img :src="bottleImages.body" alt="Corpo della Borraccia" />
        <img :src="bottleImages.cap" alt="Tappo della Borraccia" />
        <img :src="bottleImages.bottom" alt="Fondo della Borraccia" />
      </div>
      <div class="color-selector">
        <ColorSelector :colors="colors" :currentPart="currentPart" @colorSelected="updateColor" />
      </div>
    </div>
    <div class="footer">
      <FooterInformation @next="nextPart" />
    </div>
  </div>
</template>

<script>
import MainBar from '@/components/MainBar.vue';
import ProgressBar from '@/components/ProgressBar.vue';
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
      currentPart: 'body', // Parte iniziale da personalizzare
      bottleImages: {
        body: require('@/assets/IMG/bottle-body.png'),
        cap: require('@/assets/IMG/bottle-cap.png'),
        bottom: require('@/assets/IMG/bottle-bottom.png'),
      },
      colors: ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#F033F0', '#33F0F0', '#FF33A8', '#A833FF', '#FF8F33', '#33FF8F'],
    };
  },
  methods: {
    updateColor(color) {
      console.log(`Colore selezionato per ${this.currentPart}: ${color}`);
      // Implementa qui la logica per aggiornare il colore
    },
    nextPart() {
      const parts = ['body', 'cap', 'bottom'];
      const currentIndex = parts.indexOf(this.currentPart);
      if (currentIndex < parts.length - 1) {
        this.currentPart = parts[currentIndex + 1];
      } else {
        console.log('Personalizzazione completata');
      }
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
  background-color: rgba(245, 245, 245, 0.359);
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
