<template>
  <b-container class="pt-4 pb-5">
    <template v-if="currentBoardItem">
      <article class="mb-5">
        <header class="mb-4">
          <h1 class="text-18 text-md-20">
            {{ currentBoardItem.title }}
          </h1>
          <div
            class="mt-2 d-flex justify-content-between bg-lightest border-top border-bottom border-gray p-2 text-13"
          >
            <span>username</span>
            <small
              >{{ createdDate }} | 조회수
              {{ currentBoardItem.viewer || 0 }}</small
            >
          </div>
        </header>
        <section class="bg-white p-4">
          <div class="board-desc" v-html="currentBoardItem.desc" />
        </section>
      </article>
      <b-btn
        variant="secondary btn-go-top d-inline-flex align-items-center shadow"
        :class="{ active }"
        @click="goTop"
        aria-label="맨 위로 이동 버튼"
        aria-description="스크롤을 맨 위로 이동시키는 버튼입니다"
      >
        맨위로
      </b-btn>
    </template>
    <template v-else>
      <Loading />
    </template>
  </b-container>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ params, $firebase }) {
    const boardItem = await $firebase().getNews(params.id);

    return {
      id: params.id,
      currentBoardItem: boardItem,
    };
  },

  data() {
    return {
      active: false,
    };
  },
  computed: {
    createdDate() {
      return this.currentBoardItem?.date;
    },
  },

  mounted() {
    this.$firebase().addViewer("boardItems", this.id);
  },

  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
  },

  head() {
    return {
      title: `${this.currentBoardItem.title}`,
      meta: [
        {
          hid: "title",
          name: "title",
          content: `${this.currentBoardItem.title}`,
        },
        {
          hid: "description",
          name: "description",
          content: this.currentBoardItem.desc,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.board-desc::v-deep iframe {
  width: 100%;
  height: 320px;
}
@media all and (max-width: 768px) {
  .board-desc::v-deep iframe {
    height: 360px;
  }
}
</style>
