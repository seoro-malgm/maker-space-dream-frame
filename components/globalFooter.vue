<template>
  <footer id="gnf">
    <b-container fluid class="py-3">
      주관:국립공주대학교 공주학연구원 | 알엠소프트 <br />
      주최:공주시 <br />
      문의: 공주학연구원 (041-850-0448)
      <!-- <ul class="list-unstyled"></ul> -->
      <!-- <nav class="footer-nav">
        <b-btn variant="link" :to="{ name: 'terms-privacy' }"
          >개인정보처리방침</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-qna' }"
          >고객지원</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-faq' }"
          >자주 묻는 질문</b-btn
        >
      </nav> -->
    </b-container>
  </footer>
</template>

<script>
import { copyText } from "~/plugins/commons.js";
export default {
  data() {
    return {
      contacts: [
        {
          icon: "mail-1",
          url: "/",
        },
        {
          icon: "instagram",
          url: "/",
        },
        {
          icon: "comment-empty",
          url: "/",
        },
      ],
    };
  },
  methods: {
    copyText,
  },
};
</script>

<style lang="scss" scoped>
#gnf {
  background-color: black;
  color: white;

  .footer-nav {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .btn {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0;
      margin-right: 8px;
    }
  }
  h4.logo {
    > img {
      width: 80px;
    }
  }
  li {
    margin-bottom: 2px;
    font-size: 13px;
    color: $white;
    .btn {
      font-size: 0.85rem;
    }
  }
}
</style>
