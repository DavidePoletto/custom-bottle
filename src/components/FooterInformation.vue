<template>
  <div class="footer-container">
    <div class="summary">
      <h3>Bottle 500ml</h3>
      <ul>
        <li class="changes" v-for="(color, part) in modifications" :key="part">{{ part }}:{{ color }} / </li>
      </ul>
    </div>
    <button @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'FooterInformation',
  props: {
    modifications: Object,
    isLastPart: Boolean
  },
  computed: {
    buttonText() {
      return this.isLastPart ? 'Finish' : 'Next';
    }
  },
  methods: {
    handleClick() {
      if (this.isLastPart) {
        this.$emit('finish');
      } else {
        this.$emit('next');
      }
    }
  }
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(189, 188, 188);
}

button {
  border: 1px solid rgb(255, 111, 0);
  padding: 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: rgb(255, 132, 0);
  background-color: transparent;
  margin: 20px;
  width: 296px;
  height: 70px;
}

button:hover {
  background-color: #ff9900;
  color: aliceblue;
}

.summary {
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-size: 15px;
  column-gap: 5px;
  padding: 20px;
}

.summary ul {
  display: flex;
  padding: 0;
  margin: 0;
}

.changes {
  display: flex;
}

@media (max-width: 768px) {
  .summary {
    padding: 0;
    width: auto;
  }

  .summary h3 {
    font-size: 12px;
  }

  .footer-container {
    flex-direction: column;
  }

  .footer-container button {
    margin: 0;
    padding: 15px;
  }

  .changes {
    font-size: 12px;
  }
}
</style>
