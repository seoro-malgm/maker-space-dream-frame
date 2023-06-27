<template>
  <div class="marquee-wrap">
    <div
      class="marquee"
      v-if="text"
      :style="{ transform: `translate(-${x}px, -50%)` }"
    >
      <div
        class="text mr-5 text-nowrap text-20 text-md-40 text-black-han"
        v-for="i in 50"
        :key="i"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      interval: false,
      x: 0,
    };
  },
  mounted() {
    console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV !== "development") {
    this.init();
    // }
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    async init() {
      this.interval = setInterval(() => {
        // console.log(this.bars);
        this.x += 1;
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
.marquee-wrap {
  padding: 1rem 0 2rem 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  overflow: hidden;
  position: relative;
  .marquee {
    position: absolute;
    margin-top: 4px;
    top: 50%;
    left: 0;
    display: inline-flex;
  }
}
</style>
