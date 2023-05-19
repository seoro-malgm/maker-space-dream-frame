<template>
  <div class="loading-wrapper">
    <div
      class="loading"
      :style="{
        backgroundImage: `url(${require('@/assets/symbol-empty.svg')})`,
      }"
    >
      <div
        class="icon"
        :style="{
          backgroundImage: `url(${require(`@/assets/icons/${icons[index]}.svg`)})`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      icons: [
        "beverage",
        "play",
        "coffee",
        "dessart",
        "notice",
        "services",
        "signature",
        "time",
      ],
      index: 0,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.index = Math.round(Math.random() * (this.icons.length - 1));
    }, 1000);
  },
  beforeMount() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.loading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  .loading {
    width: 120px;
    height: 120px;
    background-size: cover;
    background-position: center center;
    position: relative;
    .icon {
      width: 88px;
      height: 88px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      background-size: cover;
      background-position: center center;
      transition: background-image 0.3s;
    }
  }
}
</style>
