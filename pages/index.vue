<template>
  <div>
    <b-container class="mt-3 mb-5 pb-5">
      <!-- <section class="section-intro"> -->
      <!-- <client-only>
        <carousel
          :perPage="1"
          :navigationEnabled="false"
          :paginationEnabled="false"
          :autoplay="true"
          :loop="true"
        >
          <slide v-for="slide in slides" :key="slide">
            
          </slide>
        </carousel>
      </client-only> -->
      <!-- <div class="bg-img w-100 ratio-40 ratio-sm-70">
          <img :src="require('@/assets/intro.png')" alt="" />
        </div> -->
      <!-- </section> -->
      <b-row>
        <b-col cols="12" md="5" class="mb-4" order="1" order-md="0">
          <article class="bg-primary p-4 mb-4">
            <header class="mb-3 pb-2 border-bottom border-darkest">
              <h3>신물결이 뭔가요?</h3>
            </header>
            <section>
              <p class="lh-200 break-keep">
                충남 공주시의 폐쇄적인 커뮤니티 문화를 개선하고 많은 사람들이
                쉽게 소통할 수 있게 도와주는 커뮤니티 툴(tool)입니다!
                <br />
                익명을 보장하며 자유롭게 이야기할 수 있는 공간을 사용해보세요.
                <br />
                동네 정보, 구인구직, 모임결성, 소식을 나누는 입니다.
              </p>
            </section>
          </article>
          <!-- <section class="d-none d-md-block mb-4">
            <b-input-group>
              <b-form-input class="border" :placeholder="searchPlaceholder" />
              <template #append>
                <b-btn>
                  <i class="icon icon-search"></i>
                </b-btn>
              </template>
            </b-input-group>
          </section> -->
          <!-- hot topics -->
          <!-- <section class="mt-3 mb-4 mb-md-5">
            <header class="mb-2 text-center text-md-left">
              <h5 class="bg-flow pr-1 text-2">
                Hot Topics
                <svg-line-path />
              </h5>
              <strong class="fw-700 d-block">인기 글</strong>
            </header>
            <article-list-item :items="hotTopics" title="인기 글" />
          </section> -->

          <!-- hot tags -->
          <section class="mb-4">
            <header class="mb-2 text-center text-md-left">
              <h5 class="bg-flow pr-1 text-2">
                Categories
                <svg-line-path />
              </h5>
              <strong class="fw-700 d-block">카테고리</strong>
            </header>
            <group-tags :items="allCategories" />
          </section>
        </b-col>
        <b-col cols="12" md="7" class="mb-4" order="0" order-md="1">
          <section class="mb-5">
            <header class="mb-2 text-center text-md-left">
              <h1 class="bg-flow text-2 text-lg-4 pr-1">
                New Waves
                <svg-line-path />
              </h1>
              <strong class="text-1 text-lg-2 d-block">최신 글</strong>
            </header>
            <ul class="list-unstyled border-top border-gray-500">
              <li v-for="(item, i) in items" :key="i">
                <article-item :item="item" />
              </li>
            </ul>
          </section>
          <!-- <div class="text-center mt-5">
            <b-btn
              variant="outline-light"
              class="btn-arr-right px-4"
              pill
              @click="getItems"
            >
              <span class="text-1 fw-700">More Waves</span>
              <i class="icon icon-right-big text-1" />
            </b-btn>
          </div> -->
        </b-col>
      </b-row>
    </b-container>

    <!-- <hr class="hr" /> -->

    <!-- <b-container class="pb-5">
      <section>
        <header class="section-header">
          <div>
            <h1 class="bg-flow text-4 pr-2">
              Discussions
              <svg-line-path />
            </h1>
            <div>더 나은 세상을 위해 토론하기</div>
          </div>
        
        </header>
        <b-row class="pt-3" align-v="center">
          <b-col cols="12" md="6">
            <div class="bg-img bg-lightest rounded-circle">토론 이미지</div>
          </b-col>
          <b-col cols="12" md="6">
            <article>
              <header class="py-3 mb-2">
                <h2 class="text-2 text-md-4">AI는 도구가 될 수 있을까요?</h2>
              </header>
              <p class="text-1 lh-180 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                ad veritatis laboriosam? Provident dolore quo magnam tempore
                nam. Unde distinctio rem iusto sed vero harum sint eius illo.
                Eos, earum!
              </p>
              <group-tags :tags="['지역', '경제']" />
            </article>
          </b-col>
        </b-row>
      </section>

      <section class="mt-5">
        <section class="mb-5">
          <discuss-item :items="discussItems"></discuss-item>
        </section>
        <div class="text-center">
          <b-btn
            variant="outline-light"
            class="btn-arr-right px-4"
            pill
            to="/discussion"
          >
            <span class="text-2 fw-700">More Discussions</span>
            <i class="icon icon-right-big text-2" />
          </b-btn>
        </div>
      </section>
    </b-container>
    <section class="my-5">
      <marquee-bar :items="allTags" variant="primary" />
      <b-container class="my-5 py-5">
        <b-row align-v="center" align-h="center" class="my-lg-5">
          <b-col cols="12" md="8" order="1" order-md="0">
            <div class="py-3 px-lg-4">
              <h3 class="mb-2 text-2 text-lg-3 bg-flow pr-0 pt-2 pt-md-0">
                토론하고 싶은 주제가 있나요?
                <svg-line-path />
              </h3>
              <p class="text-1 text-md-1 my-4">
                토론에 참여하세요 주제신청이 가능합니다 Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iure quod facilis nobis
                voluptatibus necessitatibus, eaque eius quaerat velit illo,
                placeat obcaecati numquam iusto consectetur labore! dolor unde
                reiciendis!
              </p>
              <b-row>
                <b-col cols="12" lg="8">
                  <discuss-apply-form />
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="10" md="4" order="0" order-md="1">
            <div class="bg-img bg-lightest rounded-circle">토론 이미지</div>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
  </div>
</template>

<script>
import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
  components: {},
  async asyncData({ app, $firebase }) {
    const items = await $firebase().getAllBoardItems(null, 30);
    return {
      items,
    };
  },
  props: {
    auth: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      hotTopics: [
        {
          title: "이거왜안됨?",
        },
        {
          title:
            "길게쓰면이렇게됩니다길게쓰면이렇게됩니다길게쓰면이렇게됩니다길게쓰면이렇게됩니다길게쓰면이렇게됩니다",
        },
        {
          title: "할머니가 유산 다 임영웅한테 물려준대 어떡하지?",
        },
        {
          title:
            "트리케라톱스 20마리랑 티라노사우르스 1마리랑 싸우면 누가이김?",
        },
        {
          title: "ㅇㅇ집에서 아르바이트를 구합니다",
        },
        {
          title: "세종에 산책모임같은 건 없나요?",
        },
        {
          title: "공주대학교 ㅇㅇ동아리 인원 모집",
        },
        {
          title: "당진 놀러가려는데 갈만한 곳 있음?",
        },
      ],
      allCategories,
      items: [],
    };
  },
  computed: {
    categorySeelcted() {
      return this.$router.query?.category;
    },
  },
  mounted() {},
  methods: {
    getItems() {
      window.toast("todo: 불러오기 실행");
    },
  },
};
</script>

<style lang="scss" scoped>
// .intro {
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   h1 {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
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
