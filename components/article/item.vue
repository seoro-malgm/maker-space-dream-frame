<template>
  <article
    class="ariticle-item"
    @click="
      $router.push({
        path: `/archive/${item.id}`,
      })
    "
    :spread="spread"
  >
    <!-- <header class="article-header">
      <figure class="article-image" v-if="item?.thumbnail">
        <img :src="item.thumbnail" :alt="`${item.title} 썸네일`" />
      </figure>
    </header>
    <div class="article-info">
      <section class="article-body">
        <span class="text-category mb-1" v-if="item?.category">
          {{ item.category }}
        </span>
        <h6
          class="title text-truncate line-2 text-1 text-md-2"
          v-if="item?.title"
        >
          {{ item.title }}
        </h6>
      </section>
      <footer class="article-footer">
        <time>
          {{ createdDate }}
        </time>
      </footer>
    </div> -->
    <b-row class="mx-n1">
      <b-col cols="2" md="1" v-if="item?.thumbnail" class="px-1">
        <figure class="article-image" v-if="item?.thumbnail">
          <img :src="item.thumbnail" :alt="`${item.title} 썸네일`" />
        </figure>
      </b-col>
      <b-col
        :cols="item?.thumbnail ? 10 : 12"
        :md="item?.thumbnail ? 11 : 12"
        class="px-1 article-body"
      >
        <span class="text-category mb-1" v-if="item?.category">
          {{ item.category }}
        </span>
        <h6 class="title text-truncate line-2" v-if="item?.title">
          {{ item.title }}
        </h6>
      </b-col>
    </b-row>
    <footer>
      <ul class="article-info">
        <li class="d-flex align-items-center">
          <i class="icon icon-heart"></i>
          <span>{{ item?.like }}</span>
        </li>
        <li class="d-flex align-items-center">
          <i class="icon icon-eye"></i>
          <span>{{ item?.viewer }}</span>
        </li>
        <li class="d-flex align-items-center">
          <i class="icon icon-comment"></i>
          <span>999+</span>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    spread: {
      type: String,
      defualt: null,
    },
  },
  computed: {
    createdDate() {
      const { seconds } = this.item?.createdAt;
      return seconds
        ? new Date(seconds * 1000).toLocaleDateString()
        : "2023-01-01";
    },
  },
  mounted() {
    console.log("this.item:", this.item);
  },
};
</script>

<style lang="scss" scoped>
.ariticle-item {
  // border-radius: 24px;
  padding: 12px 0 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid $light;

  .article-header {
    transition: all 0.2s;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.1);
    // border-radius: 24px;
    overflow: hidden;
  }
  .article-body {
    .category {
      font-size: 13px;
      color: $light;
      filter: grayscale(100%);
      text-transform: capitalize;
    }
    h6.title {
      margin-top: 2px;
      margin-bottom: 6px;
      font-size: 1.1rem;
    }
  }
  .article-image {
    // min-height: 270px;
    width: 100%;
    position: relative;
    padding-bottom: 100%;
    overflow: hidden;

    img {
      min-width: 100%;
      width: auto;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      object-fit: contain;
      transform: translate(-50%, -50%);
    }
  }
  .article-info {
    margin: 6px 0 2px;
    font-size: 0.85rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    color: $gray-500;
    li {
      margin: 0 4px;
    }
  }

  &:hover {
    cursor: pointer;
    .article-header {
      transform: translateY(-10px);
      box-shadow: 0px 10px 30px rgba($color: #000000, $alpha: 0.3);
    }
    .article-body {
      h6.title {
        // color: $primary;
      }
    }
  }

  // &[spread="lg"] {
  //   @media (min-width: 992px) {
  //     display: flex;
  //     flex-direction: row;
  //     .article-header {
  //       flex: 20% 0 0;
  //       max-width: 20%;
  //     }
  //   }
  // }
}
</style>
