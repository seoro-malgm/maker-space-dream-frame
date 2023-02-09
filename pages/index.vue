<template>
  <div>
    <b-container>
      <section class="intro mb-5">
        <div class="bg-img ratio-40 bg-primary">
          <div class="text-white">
            광고영상, 광고배너, 이미지 슬라이드로 활용
          </div>
        </div>
      </section>
      <b-row>
        <b-col cols="12" md="6" v-for="(board, i) in boards" :key="i">
          <board-item
            :title="board.title"
            :items="board.items"
            :boardId="board.id"
          />
        </b-col>
      </b-row>
    </b-container>
    <div class="my-5">
      <newsletter-invite />
    </div>
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'

export default {
  layout: "default",
  async asyncData({ app, $firebase }) {
    const [news, boardItems] = await Promise.all([
      $firebase().getAllNews(5),
      $firebase().getAllBoardItems(5),
    ]);
    return {
      news,
      boardItems,
    };
  },

  computed: {
    boards() {
      return [
        {
          title: "소식",
          id: "news",
          items: this.news?.length ? this.news : [],
        },
        {
          title: "잡담게시판",
          id: "board",
          items: this.boardItems?.length ? this.boardItems : [],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
