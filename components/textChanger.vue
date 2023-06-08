<template>
  <div
    class="text-changer"
    :style="{
      color: textVariant,
      borderColor: borderVariant,
    }"
  >
    <transition name="fade">
      <span
        class="text"
        :style="{
          color: textVariant,
        }"
        v-for="(item, i) in items"
        :key="i"
        v-if="i === index"
      >
        {{ item }}
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    textVariant: {
      type: String,
      default: "#121212",
    },
    borderVariant: {
      type: String,
      default: "#121212",
    },
  },
  data() {
    return {
      index: 0,
      toggler: 0,
      interval: null,
    };
  },
  computed: {
    max() {
      return this.items?.length - 1;
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    init() {
      this.interval = setInterval(() => {
        if (this.index === this.max) {
          this.index = 0;
          return;
        }
        this.index++;
      }, 1300);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-changer {
  padding-bottom: 5rem;
  border-bottom-width: 3px;
  border-style: solid;
  position: relative;
  overflow: hidden;
  .text {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
