<template>
  <b-container>
    <board-item :title="title" :items="items" boardId="board" />
    <div class="py-3">
      <b-row align-h="between">
        <b-col cols="12" md="5">
          <b-pagination class="mx-auto"></b-pagination>
        </b-col>
        <b-col cols="6" md="3" lg="2">
          <b-btn variant="outline-black w-100" @click="goWrite">
            <span class="text-14"> 글쓰기</span>
          </b-btn>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: `공주특별시 | 잡담게시판`,
    };
  },
  async asyncData({ app, $firebase }) {
    const items = await $firebase().getAllBoardItems();
    return {
      items,
    };
  },
  data() {
    return {
      title: "잡담게시판",
      items: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async goWrite() {
      if (!this.user) {
        const bool = await window.confirm(
          "로그인이 필요합니다. 로그인하시겠습니까?"
        );
        if (bool) {
          this.$router.push("/auth/login");
        }
      } else {
        this.$router.push("/write");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
