<template>
  <div id="gnb">
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="/">
        <span
          class="text-koreail fw-700 text-20 text-md-24 text-lg-30 text-primary"
        >
          공주특별시
        </span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="d-flex align-items-center w-100">
          <div class="utils mx-auto">
            <ul
              class="list-unstyled d-flex flex-column flex-lg-row align-items-center"
            >
              <li
                v-for="(item, i) in links"
                :key="i"
                class="mb-2 mb-lg-0 mx-lg-3 text-20 text-md-24 text-lg-30"
              >
                <nuxt-link :to="item.url" class="nuxt-link px-3 py-1">
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <template v-if="auth">
            <b-btn variant="link " to="/auth/mypage">
              <b-avatar size="2rem"></b-avatar>
            </b-btn>
            <b-btn variant="link " to="/board/write">글쓰기</b-btn>
            <b-btn variant="link " to="/auth/logout">로그아웃</b-btn>
          </template>
          <template v-else>
            <b-btn variant="link " to="/auth/login">로그인</b-btn>
            <b-btn variant="link " to="/auth/signup">에디터 신청</b-btn>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        // {
        //   name: "Home",
        //   url: "/",
        // },
        {
          name: "Food",
          url: "/board?category=foods",
        },
        {
          name: "Human",
          url: "/board?category=human",
        },
        {
          name: "Art",
          url: "/board?category=art",
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

<style lang="scss" scoped>
#gnb {
  padding: 1rem 1rem 0;
  margin-bottom: 48px;
  // border: 1px solid $primary;
  .navbar {
    padding-left: 3rem;
    padding-right: 3rem;
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.15);
    border-radius: 24px;
    .utils {
      .nuxt-link {
        text-decoration: none;
        border-radius: 20rem;
        &.nuxt-link-exact-active {
          background-color: $primary;
          color: white;
        }
      }
    }
  }
}
</style>
