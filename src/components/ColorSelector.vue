<template>
  <div class="color-container">
    <div class="title-section">
      <h2>Seleziona il colore per il {{ currentPart }}</h2>
      <p>Il colore è molto importante</p>
    </div>
    <div class="swiper-navigation-container">
      <button @click="goPrev" class="navigation-button prev-button">
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"/>
        </svg>
      </button>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="button in buttons" :key="button.id" class="swiper-slide">
            <button @click="handleButtonClick(button.id)"
                    :style="{ backgroundColor: colors[(button.id - 1) % colors.length] }"
                    :class="{ active: button.id === activeButton }"
                    class="my-button">
            </button>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <button @click="goNext" class="navigation-button next-button">
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M8.59 16.58L13.17 12l-4.58-4.58L10 6l6 6-6 6z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'ColorSelector',
  props: {
    colors: Array,
    currentPart: String,
  },
  data() {
    return {
      buttons: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
      activeButton: 1, // Id del bottone attualmente attivo
      swiper: null,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        loopAdditionalSlides: 1,
        loopedSlides: 10, // Numero totale di bottoni
      });
    },
    handleButtonClick(buttonId) {
      const color = this.colors[(buttonId - 1) % this.colors.length];
      this.activeButton = buttonId;
      this.$emit('colorSelected', color); // Passa il colore invece dell'ID del bottone
    },
    goNext() {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    },
    goPrev() {
      if (this.swiper) {
        this.swiper.slidePrev();
      }
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

.swiper-navigation-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 60%; /* Puoi regolare questa larghezza come necessario */
}

.swiper-container {
  width: 100%;
  position: relative;
  overflow: hidden; /* Nasconde il contenuto che esce */
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  text-align: center;
  width: 50px; /* Larghezza dei bottoni */
  flex-shrink: 0; /* Evita che gli elementi si restringano */
}

.my-button {
  padding: 20px;
  margin: 5px;
  border: none;
  border-radius: 50%; /* Per rendere il pulsante circolare */
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.navigation-button {
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: all; /* Rendere i pulsanti interagibili */
  fill: #ff9900;
  display: flex;
  align-items: center;
}

.navigation-button:hover {
  fill: #2980b9;
}

.arrow {
  width: 50px;
  height: 50px;
}

.swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

</style>

