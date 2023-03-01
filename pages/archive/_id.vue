<template>
  <b-container class="pt-4 pb-5">
    <template v-if="currentArchiveItem">
      <article class="mb-5">
        <header class="mb-4">
          <span class="text-category mb-1">
            {{ currentArchiveItem.category }}
          </span>
          <h1 class="text-3 text-md-4 mt-1">
            {{ currentArchiveItem.title }}
          </h1>
          <div
            class="mt-3 d-flex justify-content-between border-top border-bottom border-skeleton p-2 text-1"
          >
            <span>username</span>
            <small
              >{{ createdDate }} | 조회수
              {{ currentArchiveItem.viewer || 0 }}</small
            >
          </div>
        </header>
        <section class="bg-white p-4">
          <div class="archive-desc" v-html="currentArchiveItem.desc" />
        </section>
        <section>
          <b-btn
            variant="outline-gray d-flex flex-column align-items-center mx-auto p-3"
            @click="addLike"
          >
            <i class="icon icon-heart text-1 text-md-2" />
            <span class="text-1 text-md-1 mt-1">
              {{ currentArchiveItem?.like }}
            </span>
          </b-btn>
        </section>
      </article>
      <article class="mb-5 py-3 border-top border-bottom">
        <h6>댓글</h6>
        <ul class="reply-list">
          <li>댓글1</li>
        </ul>
        <section class="mt-3">
          <b-row align-v="stretch" class="mx-n1">
            <b-col cols="11" class="px-1">
              <b-textarea
                class="border"
                v-model="newReply"
                placeholder="새 댓글"
              />
            </b-col>
            <b-col cols="1" class="px-1">
              <b-btn variant="primary w-100 h-100" @click="addReply"
                >등록</b-btn
              >
            </b-col>
          </b-row>
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
    const archiveItem = await $firebase().getArchiveItem(params.id);
    return {
      id: params.id,
      currentArchiveItem: archiveItem,
    };
  },

  data() {
    return {
      active: false,
      newReply: null,
      // pending: {
      //   like: false,
      // },
    };
  },
  computed: {
    createdDate() {
      const { seconds } = this.currentArchiveItem?.createdAt;
      return new Date(seconds * 1000).toLocaleDateString() || "";
    },
  },

  mounted() {
    this.$firebase().addViewer("archiveItems", this.id);
  },

  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    addReply() {
      console.log("%c Hello ", "background: #333399; color: #ededed");
    },
    async addLike() {
      // this.pending.like = true;
      this.$firebase().addLike("archiveItems", this.id);
      this.currentArchiveItem.like += 1;
      // this.pending.like = false;
    },
  },

  head() {
    return {
      title: `${this.currentArchiveItem.title}`,
      meta: [
        {
          hid: "title",
          name: "title",
          content: `${this.currentArchiveItem.title}`,
        },
        {
          hid: "description",
          name: "description",
          content: this.currentArchiveItem.desc,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.archive-desc::v-deep iframe {
  width: 50%;
  height: 320px;
}
@media all and (max-width: 768px) {
  .archive-desc::v-deep iframe {
    width: 100%;
    height: 360px;
  }
}

.archive-desc::v-deep p {
  margin: 0;
}

.archive-desc::v-deep img {
  width: 100%;
  margin-bottom: 24px;
}
.writing-text::v-deep * {
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.7;
  color: $gray;
  word-break: keep-all;
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.9;
  }
}
.writing-text::v-deep h2 {
  strong {
    font-size: 20px;
    line-height: 1.8;
    color: $gray;
    font-weight: 700;
    @media (min-width: 1024px) {
      font-size: 22px;
      line-height: 2;
    }
  }
}

.writing-text::v-deep h3 {
  strong {
    font-size: 18px;
    line-height: 1.8;
    color: $gray;
    font-weight: 700;
    @media (min-width: 1024px) {
      font-size: 20x;
      line-height: 2;
    }
  }
}
.writing-text::v-deep a {
  color: $gray;
  text-decoration: underline;
}
</style>
