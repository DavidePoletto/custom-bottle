<template>
  <div>
    <MainBar />
    <div class="welcome-page">
      <div class="video-background">
        <video autoplay muted loop class="video-bg">
          <source src="../assets/Video/backgroundVideo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="title-container">
        <p>SUNNEE CUSTOM EXPERIENCE</p>
        <h2>CREATE YOUR SUNNEE BOTTLE</h2>
        <router-link to="/Customize">
          <button>CUSTOMIZE NOW</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from '../components/MainBar.vue';

export default {
  components: {
    MainBar
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.welcome-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 0;
  box-sizing: border-box;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: brightness(90%);
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-container {
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 80%;
  color: aliceblue;
}

.title-container p {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.title-container h2 {
  font-size: 25px;
  font-weight: 900;
  margin: 10px 0;
}

button {
  background-color: transparent;
  border: 1px solid rgb(255, 255, 255);
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  color: aliceblue;
}

button:hover {
  background-color: aliceblue;
  color: black;
  transition-duration: 0.6s;
}

</style>
