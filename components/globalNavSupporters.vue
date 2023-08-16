<template>
  <header id="gnb">
    <b-navbar variant="transparent">
      <!-- 로고 -->
      <b-btn
        variant="text p-0"
        class="logo"
        :style="{
          opacity: onScrolled ? 1 : 0,
          transform: `translate(-50%, ${onScrolled ? '2.5rem' : '0'})`,
        }"
        @click="scrollTo(0, 0)"
      >
        <img :src="require('@/assets/images/letter-supporters.png')" alt="" />
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
    text-align: center;
    transition: all 0.3s $default-ease;
    width: 200px;
    max-width: 50vw;
    margin-top: 96px;
    img {
      width: 100%;
    }
  }
  @media (min-width: $breakpoint-lg) {
    .logo {
      margin-top: 0;
      width: 300px;
      max-width: 60vw;
    }
  }
}
</style>
