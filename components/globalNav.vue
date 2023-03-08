<template>
  <div id="gnb">
    <b-navbar type="light" variant="white">
      <b-container>
        <b-navbar-brand class="mr-5 mr-md-0">
          <nuxt-link to="/" replace>
            <img
              :src="require('@/assets/logo-horizontal.svg')"
              alt="신물결 로고 이미지, 메인으로 이동"
            />
          </nuxt-link>
          <span class="status-beta" v-if="isBeta"> BETA</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="d-flex align-items-center w-100">
            <!-- <div class="utils mx-auto"> -->
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
            <!-- <div class="mx-5 px-5 d-none d-lg-block flex-grow-1">
              <b-input-group class="w-100">
                <b-form-input class="" :placeholder="searchPlaceholder" />
                <template #append>
                  <b-btn>
                    <i class="icon icon-search"></i>
                  </b-btn>
                </template>
              </b-input-group>
            </div> -->
            <!-- </div> -->
            <client-only>
              <div class="ml-auto uitls-auth">
                <template v-if="auth">
                  <b-btn variant="text p-0" pill :to="{ name: 'auth-mypage' }">
                    <b-avatar
                      size="3rem"
                      :src="auth?.profile_image_url"
                    ></b-avatar>
                  </b-btn>
                  <b-btn
                    variant="outline-light mx-2 d-none d-lg-block px-3"
                    pill
                    :to="{ name: 'board-write' }"
                    >글쓰기</b-btn
                  >
                  <!-- <b-btn
                    variant="outline-light"
                    pill
                    :to="{ name: 'auth-logout' }"
                    >로그아웃</b-btn
                  > -->
                </template>
                <template v-else>
                  <b-btn
                    variant="primary mr-1"
                    pill
                    :to="{ name: 'auth-login' }"
                    >로그인</b-btn
                  >
                  <b-btn
                    variant="outline-light"
                    pill
                    :to="{ name: 'auth-signup' }"
                    >회원가입</b-btn
                  >
                </template>
              </div>
            </client-only>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- <client-only>
      <div v-if="!auth">
        <div
          class="bg-primary d-flex align-items-center justify-content-center py-2"
        >
          <span class="text-1">아직 가입 안하셨나요? 지금 가입하세요 </span>
          <b-btn
            variant="white text-1 ml-2"
            pill
            :to="{
              name: 'auth-signup',
            }"
          >
            회원가입하기
          </b-btn>
        </div>
      </div>
    </client-only> -->
  </div>
</template>

<script>
export default {
  props: {
    auth: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isBeta: true,
      links: [
        // {
        //   name: "About",
        //   url: "/about",
        // },
        // {
        //   name: "아카이브",
        //   url: "/board",
        // },
        // {
        //   name: "토론",
        //   url: "/discussion",
        // },
      ],
    };
  },
  computed: {
    searchPlaceholder() {
      return "공주시 신관동에서 무슨 일이 일어났나요?";
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  border-bottom: 1px solid $primary;
  position: fixed;
  width: 100%;
  padding: 0.5rem 0 0;
  background-color: white;
  backdrop-filter: blur(2px);
  z-index: 1055;
  margin-top: 0;
  left: 0;
  right: 0;
  .navbar {
    border-radius: 24px;
    .navbar-brand {
      position: relative;
      width: 140px;
      > svg {
        width: 100%;
      }
      .status-beta {
        position: absolute;
        top: 0;
        right: -40px;
        background-color: $primary;
        color: $darkest;
        font-size: 12px;
        font-weight: 700;
        border-radius: 20rem;
        padding: 2px 4px;
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
