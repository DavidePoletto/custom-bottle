<template>
  <div>
    <MainBar />
    <div class="welcome-page">
      <div class="video-background">
        <video autoplay muted loop playsinline class="video-bg">
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
    <div class="box-container">
      <div class="box box1">
        <h2>Recycle♻️</h2>
        <p>The importance of recycling cannot be underestimated. Recycling helps reduce the amount of waste in our oceans and landfills, conserves natural resources, and reduces our carbon footprint. Actively participating in recycling is a crucial step towards a sustainable future for the next generations.</p>
      </div>
      <div class="box box2">
        <img src="../assets/IMG/recycle.jpg" alt="recycle img">
      </div>
      <div class="box box3">
        <img src="../assets/IMG/bottle-recycle.jpg" alt="bottle img">
      </div>
      <div class="box box4">
        <h2>Our Bottle!</h2>
        <p>Discover our exclusive bottle, made entirely from recycled materials. With your first order, you will receive this bottle as a gift, a small contribution to reducing the use of single-use plastics and promoting an eco-friendly lifestyle. Join us in making a difference!</p>
        <RouterLink to="/customize"><button>CUSTOMIZE NOW</button></RouterLink>
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
  height: 90vh;
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
  pointer-events: none;
}

.title-container {
  position: absolute;
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

.box-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 120vh;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffdf7;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
}

.box h2{
  margin: 0;
  color: #333;
  font-size: 26px;
  font-weight: 900;
}

.box1 {
  grid-area: 1 / 1 / 2 / 2;
  padding: 60px;
}

.box2 {
  grid-area: 1 / 2 / 2 / 3;
}

.box3 {
  grid-area: 2 / 1 / 3 / 2;
}

.box4 {
  grid-area: 2 / 2 / 3 / 3;
  padding: 60px;
  background-color: #e6e6e6;
}

.box4 button {
  color: #333333ca;
  border: 1px solid #333333a0;
  width: 200px;
}

.box4 button:hover {
  background-color: #333;
  color: aliceblue;
}

@media (max-width: 768px) {

  .welcome-page {
    height: 85vh;
  }

  .box-container {
    display: flex;
    flex-direction: column;
    height: 200vh;
  }

  .box {
    height: 700px;
    width: 100%;
    align-items: start;
    text-align: left;
  }

  .box p {
    font-size: 14px;
  }

  .box4, .box1 {
    height: 300px;
    padding: 30px;
  }

  .box h2 {
    font-size: 19px;
    text-transform: uppercase;
    font-weight: 900;
  }

  .box1{order: 1;}
  .box2{order: 2;}
  .box3{order: 4;}
  .box4{order: 3;}

}
</style>
