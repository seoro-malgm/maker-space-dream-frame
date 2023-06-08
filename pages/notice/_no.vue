<template>
  <b-container class="pt-4 pb-5">
    <template v-if="currentBoardItem">
      <article class="mb-5">
        <header class="mb-4">this is heaer</header>
        <section class="p-4">
          <div class="board-desc" v-html="currentBoardItem.desc" />
        </section>
        <!-- 글 하단 버튼 -->
        <section>
          <b-btn
            variant="outline-heart d-flex align-items-center mx-auto px-4 py-3 like-button"
            :class="{ active: onLikeToggle }"
            pill
            :disabled="!auth"
            @click="likeToggle"
          >
            <i class="icon icon-heart text-16 text-md-20 mr-3" />
            <span class="text-16 fw-700">
              {{ currentBoardItem?.like }}
            </span>
          </b-btn>
          <div class="mt-2 text-center">
            <b-btn
              variant="outline-gray-600"
              pill
              @click="copyText(url, '글 주소가')"
            >
              <i class="icon icon-share" />
              공유하기
            </b-btn>
          </div>
        </section>
      </article>
      <div class="d-flex justify-content-between">
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
import allCategories from "~/assets/json/allCategories";
import { getTimestamp, copyText } from "~/plugins/commons";
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
      allCategories,
      toggleUtil: false,
      isReported: false,
    };
  },
  computed: {
    no() {
      return this.$route.params?.no;
    },
    url() {
      return process.env.BASE_URL + this.$route.fullPath;
    },
    createdDate() {
      const { seconds } = this.currentBoardItem?.createdAt;
      return seconds ? getTimestamp(new Date(seconds * 1000)) : "";
    },
    // 내가 쓴 글인경우
    isMine() {
      return this.currentBoardItem?.user?.id === this.auth?.id;
    },
    // todo: 신고한 글인 경우
    // isReported(){

    // }
  },
  onLikeToggle: {
    onLikeToggle(n) {
      // console.log("n:", n);
    },
  },

  async mounted() {
    const { incrementViewer } = this.$firebase();
    await incrementViewer(this.no);
  },

  methods: {
    copyText,
    // 카테고리 불러오기
    getCategory(category) {
      return this.allCategories[category]
        ? this.allCategories[category]
        : this.allCategories["ETC"];
    },
    // 맨 위로
    goTop() {
      window.scrollTo(0, 0);
    },
    // 댓글 추가
    addReply() {
      // console.log("%c Hello ", "background: #333399; color: #ededed");
    },
    // 좋아요 버튼
    async likeToggle() {
      this.onLikeToggle = true;
      const { incrementLike } = this.$firebase();
      incrementLike(this.no);
      this.currentBoardItem.like += 1;
      // this.pending.like = false;
      this.onLikeToggle = false;
    },
    // 글 삭제
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
