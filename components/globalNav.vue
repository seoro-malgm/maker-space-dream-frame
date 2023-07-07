<template>
  <nav id="gnb">
    <div class="d-flex justify-content-between align-items-stretch">
      <b-navbar class="p-2">
        <ul class="nav-links">
          <li v-for="link in links" :key="link.id">
            <template v-if="link.id === 'HOME'">
              <b-navbar-brand class="m-0">
                <router-link to="/" replace class="logo-link rounded-pill">
                  <img :src="require('@/assets/logo.svg')" alt="" />
                </router-link>
              </b-navbar-brand>
            </template>
            <template v-else>
              <router-link
                :to="link.path"
                class="btn btn-outline-primary rounded-circle p-2"
              >
                <i :class="`icon icon-${link.id} text-20 text-md-24 mt-1`" />
              </router-link>
            </template>
          </li>
        </ul>
      </b-navbar>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    onScrolled: {
      type: Boolean,
      default: false,
    },
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      links: [
        {
          id: "book",
          name: "매거진",
          path: "/magazines",
        },
        {
          id: "th-list",
          name: "스레드",
          path: "/thread",
        },

        {
          id: "HOME",
        },
        {
          id: "bookmark",
          name: "북마크",
          path: "/bookmark",
        },

        {
          id: "megaphone",
          name: "공지사항",
          path: "/notice",
        },
      ],
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    mainActive() {
      return this.path === "/" && this.onScrolled;
    },
  },
  watch: {
    path(n) {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  // padding: 0.5rem 0 1rem;
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  max-width: 560px;
  @media (max-width: $breakpoint-md) {
    max-width: 96vw;
  }
  bottom: 0;
  transition: transform 0.3s $default-ease;
  left: 50%;
  z-index: 3000;
  width: 100%;
  background-color: $white;
  backdrop-filter: blur(6px);
  transform: translateX(-50%);
  border-radius: 3rem 3rem 0 0;
  box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.07);
  .navbar {
    padding: 0 3rem;
    width: 100%;
    .nav-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        &.nuxt-link-exact-active,
        &.nuxt-link-active {
          background-color: $primary !important;
          color: $white !important;
        }
      }
    }

    .navbar-brand {
      // position: fixed;
      // z-index: 3001;
      .logo-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 120px;
        }
        @media (max-width: $breakpoint-md) {
          img {
            width: 64px;
          }
        }
      }
    }
  }
  .container {
    // flex-direction: column;
  }
}
</style>
