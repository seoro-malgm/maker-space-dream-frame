<template>
  <b-container>
    <header class="text-center mt-4 mb-5">
      <h1 class="text-24 text-md-48">공지사항</h1>
    </header>
    <section class="mt-3">
      <template v-if="pending.items">
        <Loading />
      </template>
      <template v-else>
        <template v-if="!items.length">
          <!-- <div class="p-4 text-center">
            <span class="text-light">글이 아직 없습니다.</span>
          </div> -->
        </template>
        <template v-else>
          <section>
            <ul class="border-top border-black">
              <li
                v-for="(item, i) in items"
                :key="i"
                class="border-bottom border-black"
              >
                <b-row class="py-3">
                  <b-col cols="2">
                    <strong class="text-15 text-md-20 fw-700 text-uppercase">
                      {{ item.type }}
                    </strong>
                  </b-col>
                  <b-col cols="10">
                    <b-btn
                      block
                      variant="text p-0 d-flex align-items-start"
                      to="/notice/1"
                    >
                      <span class="fw-700 text-15 text-md-20">
                        {{ item.title }}
                      </span>
                    </b-btn>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </section>
        </template>
      </template>
    </section>
    <!-- <btn-view-more /> -->
  </b-container>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: `신물결 | 메거진`,
    };
  },
  async asyncData({ app, $firebase, query }) {
    // const { category } = query;
    // if (!category) app.router.push("/");
    const items = [
      {
        type: "faq",
        title: "~은 어떻게 해야하나요?",
        content: "~해야합니다",
      },
      { type: "공지사항", title: "새로운 소식", content: "~해야합니다" },
      { type: "규정", title: "규정 제목", content: "규정입니다." },
      {
        type: "faq",
        title: "~은 어떻게 해야하나요?",
        content: "~해야합니다",
      },
      { type: "공지사항", title: "새로운 소식", content: "~해야합니다" },
      { type: "규정", title: "규정 제목", content: "규정입니다." },
      {
        type: "faq",
        title: "~은 어떻게 해야하나요?",
        content: "~해야합니다",
      },
      { type: "공지사항", title: "새로운 소식", content: "~해야합니다" },
      { type: "규정", title: "규정 제목", content: "규정입니다." },
      {
        type: "faq",
        title: "~은 어떻게 해야하나요?",
        content: "~해야합니다",
      },
      { type: "공지사항", title: "새로운 소식", content: "~해야합니다" },
      { type: "규정", title: "규정 제목", content: "규정입니다." },
      {
        type: "faq",
        title: "~은 어떻게 해야하나요?",
        content: "~해야합니다",
      },
      { type: "공지사항", title: "새로운 소식", content: "~해야합니다" },
      { type: "규정", title: "규정 제목", content: "규정입니다." },
    ]; // await $firebase().getAllBoardItems(null);
    return {
      items,
    };
  },
  data() {
    return {
      pending: {
        items: false,
      },
    };
  },
  computed: {
    category() {
      const { category } = this.$route.query;
      return category;
    },
    user() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    category(n) {
      this.getItems(n);
    },
  },
  methods: {
    async getItems(category) {
      this.pending.items = true;
      this.items = await this.$firebase().getAllBoardItems(category);
      this.pending.items = false;
    },
    async goWrite() {
      if (!this.user) {
        const bool = await window.confirm(
          "로그인이 필요합니다. 로그인하시겠습니까?"
        );
        if (bool) {
          this.$queryr.push({ name: "auth-login" });
        }
      } else {
        this.$router.push("/write");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
