<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    class="border-bottom border-black"
  >
    <b-navbar-brand href="/" class="d-block d-lg-none">
      <span class="text-koreail fw-700"> 공주특별시 </span>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="d-flex align-items-center w-100">
        <div class="utils">
          <ul
            class="list-unstyled d-flex flex-column flex-lg-row align-items-center"
          >
            <li
              v-for="(item, i) in links"
              :key="i"
              class="mb-2 mb-lg-0 mr-lg-2"
            >
              <nuxt-link :to="item.url">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <b-navbar-brand href="/" class="mx-auto d-none d-lg-block">
          <span class="text-koreail fw-700"> 공주특별시 </span>
        </b-navbar-brand>

        <template v-if="auth">
          <b-btn variant="link " to="/auth/mypage">
            <b-avatar size="2rem"></b-avatar>
          </b-btn>
          <b-btn variant="link " to="/auth/logout">로그아웃</b-btn>
        </template>
        <template v-else>
          <b-btn variant="link " to="/auth/login">로그인</b-btn>
          <b-btn variant="link " to="/auth/signup">회원가입</b-btn>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "홈",
          url: "/",
        },
        {
          name: "소식",
          url: "/news",
        },
        {
          name: "자유게시판",
          url: "/board",
        },
      ],
    };
  },
  computed: {
    auth() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style lang="scss" scoped></style>
