<template>
  <div>
    <div
      class="action-wrap text-center"
      v-if="!hidden"
      :style="{
        ...actionWrapStyles,
      }"
    >
      <h1
        class="text-100 text-md-120 text-lg-160 text-xl-240 fw-900 lh-88 text-black-han"
      >
        <span class="word" :class="{ shown: scrollY >= 0 }"> DIVE <br /> </span>
        <span class="word" :class="{ shown: scrollY >= 200 }"> into</span>
      </h1>
      <div class="">
        <div class="letter">
          <h1
            class="text-100 text-md-120 text-lg-160 text-xl-240 fw-900 lh-88 text-black-han"
            :style="{
              backgroundImage: `url(${require(`@/assets/snapshot/snapshot_${index}.png`)})`,
              backgroundColor: 'black',
              backgroundPosition: `center ${scrollY / 100}%`,
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
            }"
          >
            <span class="word" :class="{ shown: scrollY >= 700 }">
              DIGITAL <br
            /></span>
            <span class="word" :class="{ shown: scrollY >= 1500 }">
              HERITAGE
            </span>
          </h1>
          <!-- <div class="content"></div> -->
        </div>
      </div>
    </div>
    <div id="intro-interaction" />
  </div>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: [String, Number],
      default: 0,
    },
    hidden: {
      type: [Boolean],
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      observer: null,
      pinned: false,
    };
  },
  computed: {
    actionWrapStyles() {
      const scaleUp = !!(this.scrollY % 3000);
      return {
        transform: `scale(${
          this.scrollY / 5000 + 0.2
          // scaleUp ? this.scrollY / 3000 : 1
        }) translate(-50%, -50%)`,
        letterSpacing: `${this.scrollY / 500}px`,
        transformOrigin: "0 0",
      };
    },
  },
  watch: {
    scrollY(n) {
      if (!(n % 3)) {
        this.index = Math.round(Math.random() * 13);
      }
    },
  },
  // mounted() {
  //   this.observer = new IntersectionObserver((entries) => {
  //     // We only have one entry. Is it visible?
  //     console.log(entries[0].intersectionRatio);
  //     if (entries[0].intersectionRatio) {
  //       this.$emit("trigger");
  //       // console.log("%c Hello ", "background: #333399; color: #ededed");
  //       this.pinned = true;
  //     } else {
  //       if (this.pinned) {
  //         this.pinned = false;
  //       }
  //     }
  //   });

  //   // Observe the dummy footer element
  //   this.observer.observe(this.$refs.target);
  // },
};
</script>

<style lang="scss" scoped>
#intro-interaction {
  height: 6000px;
  background-size: cover;
}
.action-wrap {
  position: fixed;
  // top:
  top: 50%;
  left: 50%;
  z-index: 1;
  // transform: translateY(-50%);
  .letter {
    position: relative;
    display: inline-block;
    h1 {
      position: relative;
      display: inline-block;
      z-index: 10;
      background-size: cover;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: background-image 0.5s $default-ease;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    top: -0.75rem;
    left: 0;
    z-index: 9;
  }
}

.word {
  opacity: 0;
  transition: opacity 0.5s $default-ease;
  &.shown {
    opacity: 1;
  }
}
</style>
