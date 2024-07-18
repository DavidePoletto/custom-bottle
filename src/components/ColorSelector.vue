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
          <div v-for="(color, index) in colors" :key="index" class="swiper-slide">
            <button @click="handleButtonClick(color)"
                    :style="{ backgroundColor: color }"
                    :class="{ active: color === activeColor }"
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
      activeColor: this.colors[0], // Colore attualmente attivo
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
        loopedSlides: this.colors.length,
      });
    },
    handleButtonClick(color) {
      this.activeColor = color;
      this.$emit('colorSelected', color); // Passa il colore selezionato
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
  width: 60%;
}

.swiper-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  text-align: center;
  width: 50px;
  flex-shrink: 0;
}

.my-button {
  padding: 20px;
  margin: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.navigation-button {
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: all;
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
