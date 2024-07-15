<template>
    <footer class="information-container">
        <div class="information"></div>
        <div class="button-container">
            <button>AVANTI</button>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterInformation',
};
</script>
<style scoped>

.information-container {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-top: 0.5px solid rgb(183, 183, 183);
}

.information {
    width: 50%;
    height: 100%;
}

.button-container {
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
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
    background-color: rgb(255, 132, 0);
    color: rgb(255, 255, 255);
    transition: 0.5s;
}

</style>