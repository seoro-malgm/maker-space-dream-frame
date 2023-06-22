<template>
  <div>this is main</div>
</template>

<script>
import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
  components: {},
  // async asyncData({ app, $firebase, query }) {
  //   const items = await $firebase().getAllBoardItems(query, 30);
  //   const pending = {
  //     items: true,
  //   };
  //   if (items) {
  //     pending.items = false;
  //   }
  //   return {
  //     items,
  //     pending,
  //   };
  // },
  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      items: [{}, {}, {}, {}],
      allCategories,
      pending: {
        items: false,
      },
      intro: null,
    };
  },
  computed: {
    itemPinned() {
      if (!this.items?.length) return [];
      const pinned = this.items.filter((i) => i.pinned);
      return pinned;
    },
    query() {
      return this.$route.query;
    },
  },
  watch: {
    query(n) {
      // this.getItems(n);
    },
  },
  // async mounted() {
  //   await this.init();
  // },
  // methods: {
  //   async init() {
  //     try {
  //       const [intro] = await Promise.all([this.getIntro()]);
  //       this.intro = intro;
  //     } catch (error) {
  //       console.error("error:", error);
  //     }
  //   },
  //   async getIntro() {
  //     try {
  //       const data = await this.$firebase().getBoardItem("intro-image", "1");
  //       if (data) {
  //         return data;
  //       }
  //     } catch (error) {
  //       console.error("error:", error);
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
section.intro {
  width: 100%;
  position: relative;
  overflow: hidden;
  // min-height: 100vh;
  min-height: calc(100vh - 200px);
  // max-height: calc(100vh - 210px);
  object-fit: cover;
  &.loading {
    background-color: #ededed;
  }
  > img.image {
    width: 100%;
    height: auto;
    margin-bottom: -1rem;
  }
  > .text {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;
    h3 {
      color: white;
      mix-blend-mode: difference;
      font-weight: 300;
    }
    .btn {
      mix-blend-mode: difference;
      color: white;
      &:hover {
        color: #111;
      }
    }
  }
  > video {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // z-index: 10;
    @media (max-width: $breakpoint-xl) {
      width: auto;
      min-height: 100vh;
    }
  }
}
</style>
