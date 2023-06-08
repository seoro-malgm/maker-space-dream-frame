<template>
  <div class="main-inner-padding">
    <b-container class="mb-3">
      <header class="page-header">
        <h1 class="page-title">Menu</h1>
        <p class="page-description">공주살롱의 메뉴는 지역의 기준이 됩니다</p>
      </header>
    </b-container>

    <section class="section-gap mt-3">
      <b-container>
        <b-row>
          <b-col
            cols="6"
            md="4"
            v-for="(item, i) in items"
            :key="i"
            class="mb-4"
          >
            <a
              class="link"
              @click="
                $router.push({
                  path: `/menu/${item.id}`,
                })
              "
            >
              <figure
                class="image-wrapper ratio-100"
                :class="{ 'image-dummy': !item?.thumbnail?.url }"
              >
                <header class="menu-header">
                  <div
                    class="badge"
                    v-for="(opt, l) in getOptions(item)"
                    :key="l"
                    v-if="opt"
                    :style="{
                      backgroundColor: opt.variant,
                    }"
                  >
                    {{ opt.name }}
                  </div>
                </header>
                <img
                  v-if="item?.thumbnail?.url"
                  :src="item.thumbnail.url"
                  :alt="`${item.name} 썸네일 이미지, 클릭할 시 디테일 페이지로 이동`"
                />
              </figure>
              <figcaption class="py-2">
                <h6>{{ item.name }}</h6>
                <!-- <span>ㅁㄴㅇ</span> -->
              </figcaption>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import {
  getLocale,
  // getCostRatio,
  // getPercent,
  // getPriceByPercent,
} from "~/plugins/commons.js";

export default {
  async asyncData({ app, query, store }) {
    const menuId = query?.id;
    const { getBoardItem, getAllBoardItems } = app.$firebase();
    const [items] = await Promise.all([getAllBoardItems("menu")]);
    console.log("items:", items);
    return {
      items,
    };
  },
  data() {
    return {};
  },

  methods: {
    // async getItems() {
    //   this.pending = true;
    //   try {
    //     const data = await this.$firebase().getAllBoardItems("menu");
    //     if (data) {
    //       this.items = [...data];
    //     }
    //   } catch (error) {
    //     console.error("error:", error);
    //   }
    //   this.pending = false;
    // },
    getOptions(item) {
      return [
        {
          name: "BEST",
          value: item.isBest,
          variant: "#111",
        },
        { name: "NEW", value: item.isNew, variant: "#111" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  .menu-header {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 2;
    display: inline-flex;
    max-width: calc(100% - 1rem);
    flex-wrap: wrap;
    .badge {
      border-radius: 10rem;
      padding: 0.25rem 0.75rem;
      color: white;
      margin-right: 8px;
    }
  }
}
</style>
