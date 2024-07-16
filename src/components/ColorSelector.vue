<template>
  <div class="color-container">
    <div class="title-section">
      <h2>Seleziona il colore per il {{ currentPart }}</h2>
      <p>Il colore è molto importante</p>
    </div>
    <div class="swiper-container">
      <div class="navigation-buttons">
        <button @click="goPrev" class="navigation-button prev-button">
          <svg class="arrow" viewBox="0 0 24 24">
            <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"/>
          </svg>
        </button>
        <button @click="goNext" class="navigation-button next-button">
          <svg class="arrow" viewBox="0 0 24 24">
            <path d="M8.59 16.58L13.17 12l-4.58-4.58L10 6l6 6-6 6z"/>
          </svg>
        </button>
      </div>
      <div class="swiper-wrapper">
        <div v-for="button in buttons" :key="button.id" class="swiper-slide">
          <button @click="handleButtonClick(button.id)"
                  :style="{ backgroundColor: colors[(button.id - 1) % colors.length] }"
                  :class="{ active: button.id === activeButton }"
                  class="my-button">
          </button>
        </div>
      </div>
      <div class="swiper-fade-left"></div> <!-- Div per effetto di fade sinistro -->
      <div class="swiper-fade-right"></div> <!-- Div per effetto di fade destro -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'ColorSelector',
  data() {
    return {
      currentPart: 'componente', // Aggiungi la parte corrente come variabile data se necessario
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
      colors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#f1c40f', '#e67e22', '#34495e', '#95a5a6'],
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
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        loop: true,
        loopFillGroupWithBlank: true,
      });
    },
    handleButtonClick(buttonId) {
      this.activeButton = buttonId; // Imposta il bottone attivo quando viene cliccato
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

.swiper-container {
  width: 60%;
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
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0)),
              linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0));
}



.navigation-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
}

.navigation-button {
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: all; /* Rendere i pulsanti interagibili */
  fill: #3498db;
  display: flex;
  align-items: center;
}

.navigation-button:hover {
  fill: #2980b9;
}

.arrow {
  width: 24px;
  height: 24px;
}

/* Effetto di fade ai lati dello Swiper */
.swiper-fade-left,
.swiper-fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px; /* Larghezza del fade */
  z-index: 10;
  pointer-events: none; /* Non interagibile */
}

.swiper-fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2));
}

.swiper-fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5));
}
</style>
