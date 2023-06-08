<template>
  <div>
    <!-- intro -->
    <section class="intro" :class="{ loading: !intro }">
      <!-- <clint-only> -->
      <template v-if="intro">
        <!-- <transition> -->
        <img
          :src="intro.image?.url"
          alt="공주살롱 인트로 이미지"
          class="image"
        />
        <div class="text">
          <h3 class="text-24 text-md-48">
            {{ intro.text }}
          </h3>
          <div class="mt-4">
            <a
              class="btn btn-outline-white text-16 text-md-20 rounded-0"
              :href="intro.btnLink"
              target="_blank"
            >
              {{ intro.btnText }}
            </a>
          </div>
        </div>
        <!-- </transition> -->
      </template>
      <template v-else>
        <Loading />
      </template>
      <!-- </clint-only> -->
    </section>
    <section class="bg-black text-white py-5">
      <b-container class="py-5"> asd... </b-container>
    </section>
    <!-- <section class="section-gap">
      <b-container>
        <header class="py-3 mb-5">
          <div class="d-flex align-items-center">
            <brand-symbol icon="time" />
            <h5 class="ml-2 text-16 text-md-30">살롱 일정</h5>
          </div>

          <p class="text-13 text-md-15 mt-3">
            공주살롱은 소멸되는 로컬 콘텐츠를 SAVE하며 건강한 커뮤니티를
            조성하는 마담 역할을 합니다.
          </p>
        </header>
        <div class="mt-3 mb-5">
          <calendar-default :admin="false" />
        </div>
      </b-container>
    </section> -->
    <!-- <section class="section-gap">
      <map-google />
    </section> -->
    <!-- sns -->
    <!-- <section class="section-gap mb-0">
      <header class="py-3 text-center mb-5">
        <h5 class="text-16 text-md-30">@gongjusalon</h5>
        <p class="text-13 text-md-15 mt-3">
          공주살롱은 소멸되는 로컬 콘텐츠를 SAVE하며 건강한 커뮤니티를 조성하는
          마담 역할을 합니다.
        </p>
      </header>
      <b-row class="mx-0">
        <b-col
          cols="6"
          md="4"
          lg="3"
          class="px-0"
          v-for="(item, i) in items"
          :key="i"
        >
          <figure class="image-wrapper ratio-100">
            <img
              src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
              alt=""
            />
          </figure>
        </b-col>
      </b-row>
    </section> -->
  </div>
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
  async mounted() {
    await this.init();
  },
  methods: {
    async init() {
      try {
        const [intro] = await Promise.all([this.getIntro()]);
        this.intro = intro;
      } catch (error) {
        console.error("error:", error);
      }
    },
    async getIntro() {
      try {
        const data = await this.$firebase().getBoardItem("intro-image", "1");
        if (data) {
          return data;
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section.intro {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 210px);
  object-fit: cover;
  &.loading {
    background-color: #ededed;
  }
  > img.image {
    width: 100%;
    height: auto;
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
}
</style>
