<template>
  <div>
    <div class="position-relative min-vh-100 min-vw-100" v-if="!viewed">
      <section class="intro bg-light">
        <div class="text-white">인트로 이미지, 영상</div>
        <h1 class="text-white text-30 text-md-48 text-lg-96">공주특별시</h1>
      </section>
    </div>

    <!-- gnb -->
    <global-nav class="mt-3" />

    <b-container>
      <b-row class="py-5">
        <b-col cols="12" md="6" lg="4" v-for="(item, i) in items" :key="i">
          <article-item :item="item" :class="{ 'mt-lg-5': i % 2 }">
          </article-item>
        </b-col>
      </b-row>
    </b-container>
    <!-- 뉴스레터 -->
    <newsletter-invite />
    <!-- footer -->
    <global-footer />
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'

export default {
  layout: "empty",
  async asyncData({ app, $firebase }) {
    const items = await $firebase().getAllBoardItems(null, 9);
    return {
      items,
    };
  },
  data() {
    return {
      items: [
        {
          id: 0,
          category: "category",
          title: "asd",
          date: "2023년 3월 1일",
          src: null,
        },
      ],
    };
  },
  computed: {
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
.intro {
  position: absolute;
  width: 100vw;
  height: 100vh;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
