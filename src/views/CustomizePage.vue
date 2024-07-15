<template>
  <div class="customize-page">
    <MainBar />
    <ProgressBar />
    <div class="customize-section">
      <div class="bottle-img"></div>
      <div class="color-selector"><ColorSelector /></div>
    </div>
    <div class="footer">
      <FooterInformation />
    </div>
  </div>
  
</template>

<script>
import MainBar from '@/components/MainBar.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import FooterInformation from '@/components/Footer.vue'
import ColorSelector from '@/components/ColorSelector.vue';

export default {
  name: 'CustomizePage',
  components: {
    MainBar,
    ProgressBar,
    FooterInformation,
    ColorSelector,
  },
};
</script>

<style scoped>
.customize-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.customize-section{
  width: 100%;
  height: 75%;
  display: flex;
}

.bottle-img {
  width: 50%;
  background-color: rgba(245, 245, 245, 0.359);
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
