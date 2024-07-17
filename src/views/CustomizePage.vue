<template>
  <div class="customize-page">
    <MainBar />
    <ProgressBar />
    <div class="customize-section">
      <div class="bottle-img">
        <img :src="baseImg" alt="Borraccia" />
        <img v-if="currentPart !== 'bottle'" :src="getPartImage('cap')" alt="Tappo della Borraccia" />
        <img v-if="currentPart !== 'bottle'" :src="getPartImage('holder')" alt="Manico della Borraccia" />
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
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#f0f0f0', '#ff9900', '#9900ff', '#0099ff'], // Array di colori disponibili
      imgPath: '../assets/IMG/', // Percorso delle immagini
      baseImg: '../assets/IMG/bottle_white.jpg', // Immagine base della bottiglia (bianca)
      capImg: '', // Immagine del tappo della bottiglia
      holderImg: '', // Immagine del manico della bottiglia
    };
  },
  mounted() {
    // Carica le immagini base (bianche) all'avvio
    this.capImg = this.getPartImage('cap');
    this.holderImg = this.getPartImage('holder');
  },
  methods: {
    updateColor(color) {
      // Aggiorna il colore della parte corrente della borraccia
      this.setPartColor(this.currentPart, color);
    },
    setPartColor(part, color) {
      // Aggiorna dinamicamente il percorso dell'immagine per la parte specificata con il colore selezionato
      if (part === 'bottle') {
        this.baseImg = `${this.imgPath}${part}_${color}.jpg`;
      } else {
        this.$set(this, `${part}Img`, `${this.imgPath}${part}_${color}.jpg`);
      }
    },
    nextPart() {
      // Avanza alla parte successiva (se necessario)
      // Esempio: this.currentPart = 'cap';
    },
    getPartImage(part) {
      // Restituisce l'immagine corretta per la parte specificata della borraccia
      // Se non è ancora stato selezionato un colore, restituisce l'immagine base (bianca)
      return part === 'bottle' ? this.baseImg : `${this.imgPath}${part}_white.jpg`;
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

