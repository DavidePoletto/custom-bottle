<template>
  <div class="footer-information">
    <button @click="goToNextPart">Avanti</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToNextPart() {
      this.$emit('next');
    }
  }
};
</script>

<style scoped>

.footer-information {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
.footer-information button {
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
.footer-information button:hover {
  background-color: rgb(255, 132, 0);
  color: rgb(255, 255, 255);
  transition: 0.5s;
}
</style>
