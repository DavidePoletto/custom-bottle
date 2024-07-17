<template>
    <div class="swiper-navigation-container">
      <button @click="goPrev" class="navigation-button prev-button">
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"/>
        </svg>
      </button>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <button @click="goNext" class="navigation-button next-button">
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M8.59 16.58L13.17 12l-4.58-4.58L10 6l6 6-6 6z"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'SwiperContainer',
  props: {
    colors: Array,
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.initSwiper();
  },
  watch: {
    colors: {
      handler() {
        if (this.swiper) {
          this.swiper.destroy(true, true); // Distruggi Swiper completamente
          this.initSwiper(); // Reinizializza Swiper con i nuovi dati
        }
      },
      deep: true, // Monitora anche i cambiamenti nei sottoggetti di colors
    },
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
  