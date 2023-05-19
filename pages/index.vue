<template>
  <div>
    <!-- intro -->
    <section class="bg-darkest min-vh-100"></section>
    <!-- ? -->
    <section class="section-gap">
      <b-container> asd </b-container>
    </section>
    <!-- sns -->
    <section class="section-gap mb-0">
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
    </section>
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
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      items: [{}, {}, {}, {}],
      allCategories,
      pending: {
        items: false,
      },
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
  mounted() {
    // this.getItems();
  },
  methods: {
    async getItems(query) {
      this.pending.items = true;
      try {
        const data = await this.$firebase().getAllBoardItems(query, 30);
        if (data) {
          this.items = data;
          console.log("data:", data);
          this.pending.items = false;
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error("error:", error);
        this.pending.items = false;
      }
    },
    selectCategory(category) {
      this.$router.push({
        name: "index",
        query: {
          category,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h1.logo {
  img {
    width: 140px;
  }
}

.section-intro {
  .col-carousel {
  }
  .col-info {
    border: 1px solid $lightest;
    border-top-width: 0;
    @media (min-width: $breakpoint-md) {
      border-left-width: 0;
      border-top-width: 1px;
    }
  }
}
</style>
