<template>
  <header id="gnb">
    <b-navbar variant="transparent">
      <!-- 로고 -->
      <b-btn
        variant="text p-0"
        class="logo"
        :style="{
          maxWidth: onScrolled ? '50vw' : 'unset',
          width: onScrolled ? '300px' : '100%',
          top: onScrolled ? '0rem' : '6rem',
          transform: `translate(-50%, ${onScrolled ? '0.5rem' : '0'})`,
        }"
        @click="scrollTo(0, 0)"
      >
        <svg-contest-logo />
        <span
          class="title text-20 text-lg-24"
          :style="{
            opacity: onScrolled ? 0 : 1,
            transform: `translate(-50%, 0rem)`,
          }"
        >
          당신만의 아름다운 공주를 만들어주세요
        </span>
      </b-btn>
    </b-navbar>
  </header>
</template>

<script>
export default {
  props: {
    onScrolled: {
      type: Boolean,
      default: false,
    },
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    mainActive() {
      return this.path === "/" && this.onScrolled;
    },
  },
  watch: {
    path(n) {
      this.visible = false;
    },
  },
  methods: {
    scrollTo(x, y) {
      window.scrollTo(x, y);
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  width: 100%;
  position: fixed;
  z-index: 3000;

  .logo {
    position: fixed;
    left: 50%;
    transition: all 0.3s $default-ease;
    max-width: 96vw;

    @media (max-width: $breakpoint-lg) {
      margin-top: 64px;
    }
  }
  .title {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    left: 50%;
    bottom: -30%;
    color: $contest-black;
    @media (min-width: $breakpoint-lg) {
      bottom: 15%;
    }
    transition: all 0.3s $default-ease;
    font-weight: 900;
  }
}
</style>
