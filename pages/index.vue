<template>
  <div>
    <!-- gnb -->
    <global-nav class="mb-0" />

    <div v-if="!user">
      <div
        class="bg-primary d-flex align-items-center justify-content-center py-2"
      >
        <span class="text-1">아직 가입 안하셨나요? 지금 가입하세요 </span>
        <b-btn variant="white text-1 ml-2" pill to="/auth/signup">
          회원가입하기
        </b-btn>
      </div>
    </div>

    <section class="section-intro">
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
      <div class="bg-img w-100 ratio-40 ratio-sm-70">
        <img :src="require('@/assets/intro.png')" alt="" />
      </div>
    </section>

    <b-container class="py-5">
      <section>
        <header class="section-header">
          <div>
            <h1 class="bg-flow text-4 pr-1">
              New Archives
              <svg-line-path />
            </h1>
            <div>최신 아카이브 글</div>
          </div>
          <div class="ml-auto"></div>
        </header>
        <b-row>
          <b-col cols="6" lg="4" v-for="(item, i) in items" :key="i">
            <article-item :item="item" />
          </b-col>
        </b-row>
        <div class="text-center">
          <b-btn
            variant="outline-light"
            class="btn-arr-right px-4"
            pill
            to="/archive"
          >
            <span class="text-2 fw-700">More Archives</span>
            <i class="icon icon-right-big text-2" />
          </b-btn>
        </div>
      </section>
    </b-container>

    <hr class="hr" />

    <b-container class="pb-5">
      <section>
        <header class="section-header">
          <div>
            <h1 class="bg-flow text-4 pr-2">
              Discussions
              <svg-line-path />
            </h1>
            <div>더 나은 세상을 위해 토론하기</div>
          </div>
          <!-- <div class="ml-auto">
            <b-btn variant="text" class="btn-arr-right">
              <i class="icon icon-right-big text-4" />
            </b-btn>
          </div> -->
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
    </section>
    <!-- 뉴스레터 -->
    <!-- <newsletter-invite /> -->
    <!-- footer -->
    <global-footer />
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'
// import { Carousel, Slide } from "vue-carousel";
export default {
  layout: "empty",
  components: {},
  async asyncData({ app, $firebase }) {
    const items = await $firebase().getAllArchiveItems(null, 9);
    return {
      items,
    };
  },
  data() {
    return {
      slides: ["lightgray", "gray", "brown"],
      // items: [
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      //   {
      //     id: 0,
      //     category: "category",
      //     title: "asd",
      //     createdAt: "2023-01-01",
      //     thumbnail:
      //       "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
      //   },
      // ],
      discussItems: [
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
        {
          thumbnail:
            "http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
          title: "일자리가 먼저일까요, 주거가 먼저일까요?",
          tags: ["지역", "경제"],
        },
      ],
      allTags: [
        "#주거",
        "#일자리",
        "#환경",
        "#노인",
        "#청년",
        "#복지",
        "#식문화",
        "#교육",
        "#예술",
        "#모임",
        "#인간관계",
        "#세계",
        "#인간",
        "#심리",
        "#창업",
        "#취업",
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    viewed() {
      // const storage = window?.sessionStorage || sessionStorage;
      return null; // storage?.getItem("gongju-archive-viewed");
    },
  },
  mounted() {
    // 방분 한 경우, 다시 intro가 나타나지 않게 함
    // sessionStorage.setItem("gongju-archive-viewed", true);
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
