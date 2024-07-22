<template>
  <div class="color-container">
    <div class="title-section">
      <h2>Current part: {{ currentPart }}</h2>
      <p>Select a color for the {{ currentPart }}</p>
    </div>
    <div class="swiper-navigation-container">
      <button @click="goPrev" class="navigation-button prev-button">
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"/>
        </svg>
      </button>
      <div class="swiper-container">
        <div class="fade-left"></div>
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
        <div class="fade-right"></div>
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
      activeColor: this.colors[0],
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
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: false,
        loopAdditionalSlides: 1,
        loopedSlides: this.colors.length,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
    },
    handleButtonClick(color) {
      this.activeColor = color;
      this.$emit('colorSelected', color);
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
  line-height: 15px;
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

.fade-left, .fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  pointer-events: none;
  z-index: 2;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 60%);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 60%);
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
  border: 1px solid rgb(195, 195, 195);
  transition: 0.2s;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0)),
              linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.2));
}

.my-button:hover {
  transform: scale(1.2);
}

.my-button.active {
  border: 2px solid rgb(255, 132, 0);
}

.navigation-button {
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: all;
  fill: #ff9900;
  display: flex;
  align-items: center;
  padding: 0;
}

.navigation-button:hover {
  fill: #ff6200;
}

.arrow {
  width: 40px;
  height: 40px;
}

.swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
}

@media (max-width: 768px) {

  .title-section h2 {
    margin: 0px;
  }

  .title-section p {
    display: none;
  }

  .swiper-navigation-container {
    width: 80%;
  }

  .arrow {
    width: 25px;
  }
}
</style>
