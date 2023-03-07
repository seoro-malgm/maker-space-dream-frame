<template>
  <b-container class="pt-4 pb-5">
    <template v-if="currentBoardItem">
      <article class="mb-5">
        <header class="mb-4">
          <span class="text-category mb-1" v-if="currentBoardItem.category">
            {{ getCategory(currentBoardItem.category) }}
          </span>
          <h1 class="text-2 text-md-4 mt-1">
            {{ currentBoardItem.title }}
          </h1>
          <div
            class="mt-3 d-flex justify-content-between border-top border-bottom border-skeleton p-2 text-1"
          >
            <div class="d-flex align-items-center">
              <b-avatar
                size="1.5rem"
                class="mr-2"
                :src="currentBoardItem?.user?.profile_image_url"
              >
              </b-avatar>
              <span class="text-light">{{
                currentBoardItem?.user?.nickname
              }}</span>
            </div>
            <small
              >{{ createdDate }} | 조회수
              {{ currentBoardItem.viewer + 1 || 0 }}</small
            >
          </div>
        </header>
        <section class="bg-white p-4">
          <div class="board-desc" v-html="currentBoardItem.desc" />
        </section>
        <section>
          <b-btn
            variant="outline-heart d-flex align-items-center mx-auto px-4 py-3 like-button"
            :class="{ actvie: onLikeToggle }"
            pill
            :disabled="!auth"
            @click="likeToggle"
          >
            <i class="icon icon-heart text-1 text-md-2 mr-3" />
            <span class="text-1 text-md-1 fw-700">
              {{ currentBoardItem?.like }}
            </span>
          </b-btn>
        </section>
        <!-- 수정/삭제용 utils -->
        <client-only>
          <section
            class="d-flex align-items-center justify-content-end"
            v-if="isMine"
          >
            <b-btn
              variant="outline-light mx-2"
              @click="
                $router.push({
                  name: 'board-write',
                  query: {
                    no: currentBoardItem.no,
                  },
                })
              "
              >수정</b-btn
            >
            <b-btn variant="outline-light" @click="onRemove">삭제</b-btn>
          </section>
        </client-only>
      </article>
      <article class="mb-5 py-3 border-top border-bottom">
        <h6>댓글</h6>
        <ul class="reply-list">
          <li>댓글 0</li>
        </ul>
        <section class="mt-3">
          <b-row align-v="stretch" class="mx-n1">
            <b-col cols="10" class="px-1">
              <b-textarea
                class="border"
                v-model="newReply"
                disabled
                placeholder="댓글 기능은 현재 준비중입니다!"
              />
            </b-col>
            <b-col cols="2" class="px-1">
              <b-btn
                variant="primary w-100 h-100"
                @click="addReply"
                :disabled="true"
                >등록</b-btn
              >
            </b-col>
          </b-row>
        </section>
      </article>
      <div class="text-right">
        <b-btn
          variant="secondary btn-go-top d-inline-flex align-items-center"
          pill
          @click="goTop"
          aria-label="맨 위로 이동 버튼"
          aria-description="스크롤을 맨 위로 이동시키는 버튼입니다"
        >
          맨 위로
        </b-btn>
      </div>
    </template>
    <template v-else>
      <Loading />
    </template>
  </b-container>
</template>

<script>
export default {
  layout: "default",
  name: "board-detail",
  props: {
    auth: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: `${this.currentBoardItem.title} | 신물결`,
      meta: [
        {
          hid: "title",
          name: "title",
          content: `${this.currentBoardItem.title} | 신물결`,
        },
        {
          hid: "description",
          name: "description",
          content: this.currentBoardItem.desc,
        },
      ],
    };
  },
  async asyncData({ params, $firebase }) {
    const { getBoardItem } = $firebase();
    const boardItem = await getBoardItem(params.no);
    return {
      currentBoardItem: boardItem,
    };
  },
  data() {
    return {
      newReply: null,
      onLikeToggle: false,
    };
  },
  computed: {
    no() {
      return this.$route.params?.no;
    },
    createdDate() {
      const { seconds } = this.currentBoardItem?.createdAt;
      return new Date(seconds * 1000).toLocaleString() || "";
    },
    // 내가 쓴 글인경우
    isMine() {
      return this.currentBoardItem?.user?.id === this.auth?.id;
    },
  },
  onLikeToggle: {
    onLikeToggle(n) {
      console.log("n:", n);
    },
  },

  async mounted() {
    const { incrementViewer } = this.$firebase();
    await incrementViewer(this.no);
  },

  methods: {
    getCategory(category) {
      const allCategories = {
        FREE: "아무말",
        QUESTION: "질문",
        ANNOUNCE: "알립니다",
        JOB: "구인/구직",
        WORRY: "고민",
        GROUPING: "모임/스터디",
        ETC: "기타",
      };
      return allCategories[category]
        ? allCategories[category]
        : allCategories["ETC"];
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    addReply() {
      console.log("%c Hello ", "background: #333399; color: #ededed");
    },

    async likeToggle() {
      this.onLikeToggle = true;
      const { incrementLike } = this.$firebase();
      incrementLike(this.no);
      this.currentBoardItem.like += 1;
      // this.pending.like = false;
      this.onLikeToggle = false;
    },

    async onRemove() {
      const bool = await window.confirm("정말 삭제하시겠습니까?");
      if (bool) {
        const { removeBoardItem } = this.$firebase();
        try {
          const response = await removeBoardItem(this.no);
          if (response) {
            window.toast("정상적으로 삭제되었습니다");
            this.$router.replace("/");
          }
        } catch (error) {
          window.alert("삭제에 실패했습니다");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.board-desc::v-deep iframe {
  width: 50%;
  height: 320px;
}
@media all and (max-width: 768px) {
  .board-desc::v-deep iframe {
    width: 100%;
    height: 360px;
  }
}

.board-desc::v-deep p {
  margin: 0;
}

.board-desc::v-deep img {
  width: 540px;
  max-width: 100%;
  height: auto;
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

.like-button {
}
</style>
