<template>
  <header class="underbar-header">
    <h1 class="underbar" v-if="title" :variant="variant" :id="id">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.underbar-header {
  text-align: center;
  h1.underbar {
    font-size: 40px;
    position: relative;
    display: inline-block;
    z-index: 2;
    font-family: "Black Han Sans", "Noto Sans KR", sans-serif;
    font-weight: 400;
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      bottom: 25%;
      left: 50%;
      width: 120%;
      height: 35%;
      transform: translateX(-50%);
      background-color: $primary;
    }
    @each $color, $order in $theme-colors {
      &[variant="#{$color}"] {
        &:after {
          background-color: $order;
        }
      }
    }

    @media (min-width: $breakpoint-md) {
      font-size: 64px;
    }
  }
}
</style>
