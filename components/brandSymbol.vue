<template>
  <div class="symbol-wrapper">
    <div
      class="symbol"
      :style="{
        backgroundImage: `url(${require('@/assets/symbol-empty.svg')})`,
      }"
    >
      <div
        class="icon"
        :style="{
          backgroundImage: `url(${require(`@/assets/icons/${icon}.svg`)})`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "play",
    },
  },
};
</script>

<style lang="scss" scoped>
.symbol-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .symbol {
    width: 48px;
    height: 48px;
    background-size: cover;
    background-position: center center;
    position: relative;
    .icon {
      width: 36px;
      height: 36px;
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
