<template>
  <div class="progress-bar">
    <div
      v-for="part in parts"
      :key="part"
      :class="{ 'active': part === currentPart, 'unlocked': isUnlocked(part) }"
      @click="selectPart(part)"
    >
      {{ part }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPart: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      parts: ['bottle', 'cap', 'holder'],
      unlockedParts: ['bottle']
    };
  },
  methods: {
    selectPart(part) {
      if (this.isUnlocked(part)) {
        this.$emit('partSelected', part);
      }
    },
    unlockNextPart() {
      const currentIndex = this.parts.indexOf(this.currentPart);
      const nextPart = this.parts[currentIndex + 1];
      if (nextPart && !this.unlockedParts.includes(nextPart)) {
        this.unlockedParts.push(nextPart);
      }
    },
    isUnlocked(part) {
      return this.unlockedParts.includes(part);
    }
  }
};
</script>

<style scoped>
.progress-bar {
  display: flex;
  justify-content: center;
  column-gap: 20%;
  font-size: 14px;
  padding: 15px;
  box-shadow: 0 2px 20px rgba(61, 61, 61, 0.2);
  text-transform: uppercase;
}
.progress-bar div {
  cursor: pointer;
  color: grey;
}
.progress-bar div.active, .progress-bar div.unlocked {
  color: rgb(120, 119, 119);
}
.progress-bar div.active {
  font-weight: 900;
  text-decoration: underline;
  color: rgb(255, 123, 0);
}
</style>
