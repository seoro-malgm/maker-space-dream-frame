<template>
  <div id="gnb">
    <b-navbar type="light" variant="white">
      <b-container>
        <b-navbar-brand class="mr-5 mr-md-0">
          <nuxt-link to="/">
            <img
              :src="require('@/assets/logo-horizontal.svg')"
              alt="신물결 로고 이미지, 메인으로 이동"
            />
          </nuxt-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="d-flex align-items-center w-100">
            <div class="utils mx-auto">
              <!-- <ul
                class="list-unstyled d-flex flex-column flex-lg-row align-items-center"
              >
                <li
                  v-for="(item, i) in links"
                  :key="i"
                  class="mb-3 mb-lg-0 mx-lg-3 text-2"
                >
                  <nuxt-link :to="item.url" class="nuxt-link px-4 py-1">
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul> -->
            </div>
            <div class="ml-auto uitls-auth">
              <b-btn
                variant="text d-flex d-md-none rounded p-1 rounded-circle mr-1"
              >
                <i class="icon icon-search"></i>
              </b-btn>
              <template v-if="auth">
                <b-btn variant="outline-light" pill to="/auth/mypage">
                  <b-avatar size="2rem"></b-avatar>
                </b-btn>
                <b-btn variant="outline-light mx pill-1" to="/archive/write"
                  >글쓰기</b-btn
                >
                <b-btn variant="outline-light" pill to="/auth/logout"
                  >로그아웃</b-btn
                >
              </template>
              <template v-else>
                <b-btn variant="primary mr-1" pill to="/auth/login"
                  >로그인</b-btn
                >
                <b-btn variant="outline-light" pill to="/auth/signup"
                  >회원가입</b-btn
                >
              </template>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        // {
        //   name: "About",
        //   url: "/about",
        // },
        // {
        //   name: "아카이브",
        //   url: "/archive",
        // },
        // {
        //   name: "토론",
        //   url: "/discussion",
        // },
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
  border-bottom: 1px solid $primary;
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  background-color: white;
  backdrop-filter: blur(2px);
  z-index: 1055;
  margin-top: 0;
  left: 0;
  right: 0;
  .navbar {
    border-radius: 24px;
    .navbar-brand {
      width: 140px;
      > svg {
        width: 100%;
      }
    }
    .utils {
      @media (min-width: $breakpoint-lg) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .nuxt-link {
        text-decoration: none;
        border-radius: 20rem;
        color: $darkest;
        font-weight: 700;
        border: 1px solid $darkest;
        transition: all 0.3s $ease-in-out;
        &:hover,
        &.nuxt-link-exact-active {
          background-color: $primary;
          border-color: $primary;
          color: white;
        }
      }
    }
    .uitls-auth {
      display: flex;
      align-items: center;
      a,
      button {
        white-space: nowrap;
      }
    }
  }
}
</style>
