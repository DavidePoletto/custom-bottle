<template>
    <MainBar />
    <div class="thank-you-page">
      <div class="container">
        <div class="bottle-image">
          <img :src="bottleImg" alt="Customized Bottle" />
          <img :src="capImg" alt="Bottle Cap" />
          <img :src="holderImg" alt="Bottle Holder" />
        </div>
        <div class="summary">
          <h2>Your Sunne Bottle</h2>
          <p>Thank you for customizing your Sunne bottle! Here are the details of your selection:</p>
          <ul>
            <li>Bottle color: <span :style="{ color: bottleColor }">{{ bottleColor }}</span></li>
            <li>Cap color: <span :style="{ color: capColor }">{{ capColor }}</span></li>
            <li>Holder color: <span :style="{ color: holderColor }">{{ holderColor }}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-container">
        <footer>
          <RouterLink to="/Customize"><button class="go-back">GO BACK</button></RouterLink>
          <button class="check-out">CHECK OUT</button>
        </footer>
      </div>
      <div class="newsletter-signup">
        <h3>Stay Updated</h3>
        <p>Sign up for our newsletter to receive updates and special offers:</p>
        <input type="email" placeholder="Enter your email" />
        <button class="subscribe">SUBSCRIBE</button>
      </div>
    </div>
</template>

<script>
import MainBar from '@/components/MainBar.vue';

export default {
  name: 'ThankYouPage',
  components: {
    MainBar
  },
  data() {
    return {
      bottleColor: this.$route.query.bottle || 'white',
      capColor: this.$route.query.cap || 'white',
      holderColor: this.$route.query.holder || 'white',
      bottleImg: '',
      capImg: '',
      holderImg: ''
    };
  },
  created() {
    this.updateImages();
  },
  methods: {
    updateImages() {
      this.bottleImg = require(`@/assets/IMG/bottle_${this.bottleColor}.png`);
      this.capImg = require(`@/assets/IMG/cap_${this.capColor}.png`);
      this.holderImg = require(`@/assets/IMG/holder_${this.holderColor}.png`);
    },
  }
};
</script>

<style scoped>
.thank-you-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden;
  background-color: #bdbdbd;
  box-shadow:  0 4px 8px rgba(0, 0, 0, 0.051);
}

.summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  text-align: left;
  width: 100%;
}

.summary h2 {
  color: #333;
  width: 100%;
  margin: 0;
}

.summary p {
  color: #666;
}

.summary ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.summary li {
  margin: 10px 0;
  font-size: 16px;
  color: #333;
}

.summary span {
  font-weight: bold;
}

.bottle-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 50%;
}

.bottle-image img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}

.footer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
}

.check-out, .go-back {
  border: 1px solid rgb(255, 111, 0);
  padding: 16px 32px;
  cursor: pointer;
  font-size: 16px;
  color: #ff7700;
  background-color: transparent;
  margin: 10px;
  width: 200px;
  transition: 0.3s;
}

.check-out:hover, .go-back:hover {
  background-color: #ff8800;
  color: #f0f0f0;
}

.newsletter-signup {
  text-align: center;
}

.newsletter-signup h3 {
  margin-bottom: 10px;
  color: #333;
}

.newsletter-signup p {
  margin-bottom: 20px;
  color: #666;
}

.newsletter-signup input[type="email"] {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.newsletter-signup button.subscribe {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #ff8800;
  color: #fff;
  border-radius: 5px;
  transition: 0.3s;
}

.newsletter-signup button.subscribe:hover {
  background-color: #ff6200;
}

/* Media Queries for responsiveness */
@media (max-width: 1024px) {

  .container {
    padding: 10px;
    width: 90%;
    height: 200px;
    margin: 8px;
  }
}

@media (max-width: 768px) {

  .container {
    width: 90%;
    height: 200px;
  }

  .thank-you-page {
    display: block;
    padding: 20px;
  }

  .check-out, .go-back {
    padding: 12px;
    width: auto;
  }

  .newsletter-signup input[type="email"] {
    width: 150px;
    margin-bottom: 20px;
  }

  .newsletter-signup {
    margin: 0;
  }

  .summary{
    padding: 5px;
  }

  .bottle-image{
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .summary p {
    display: none;
  }

  .summary h2 {
    font-size: 16px;
  }
}
</style>
