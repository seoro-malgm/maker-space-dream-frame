<template>
  <nav
    id="gnb"
    :style="{
      transform: `translateY(${
        path === '/' ? (onScrolled ? '0' : '-400px') : '0'
      })`,
    }"
  >
    <div
      class="d-flex justify-content-between align-items-stretch border-bottom border-black"
    >
      <b-navbar-brand class="px-3">
        <router-link
          to="/"
          replace
          class="logo-link btn btn-text px-0 py-1 py-xl-2 border-0"
        >
          <div
            class="letter text-24 text-md-32 text-xl-40 mb-n1 text-black-han text-left lh-100"
          >
            디지털 유산전 2023
            <br class="d-block d-xl-none" />
            <span class="text-16 text-md-32 text-xl-40">
              : DIVE into DIGITAL HERITAGE
            </span>
          </div>
        </router-link>
      </b-navbar-brand>
      <section
        class="px-2 text-right border-left border-black d-flex align-items-center justify-content-center flex-column"
      >
        <b-btn variant="text btn-hbg" v-b-toggle.collapse-links>
          <div class="hbg">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </b-btn>
      </section>
    </div>
    <!-- 로고
        <b-navbar-brand class="ml-0">
          <router-link to="/" replace class="logo-link">
            <img :src="require('@/assets/logo.png')" alt="" />
          </router-link>
          <router-link
            to="/"
            replace
            class="logo-link btn btn-text p-0 border-0"
          >
            <div class="letter text-24 text-md-36 text-black-han mb-n2">
              디지털 유산전 2023 : DIVE into DIGITAL HERITAGE
            </div>
          </router-link>
        </b-navbar-brand>
        햄버거
        <section class="utils">
          <b-btn variant="text btn-hbg" v-b-toggle.collapse-links>
            <div class="hbg">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </b-btn>
        </section> -->
    <div class="collapse-warp">
      <b-collapse id="collapse-links" class="px-0" v-model="visible">
        <ul class="list-links flex-column">
          <li v-for="(link, i) in links" :key="i">
            <router-link
              :to="link.path"
              class="btn btn-text text-32 text-lg-40 text-left"
            >
              <div class="text-black-han">
                {{ link.name }}
              </div>
            </router-link>
          </li>
        </ul>
      </b-collapse>
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
        // {
        //   name: "HOME",
        //   path: "/",
        // },
        {
          name: "관람안내",
          path: "/info",
        },
        {
          name: "프로그램",
          path: "/program",
        },
        {
          name: "FAQ",
          path: "/notice",
        },
        {
          name: "사전등록",
          path: "/pre-register",
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
  padding: 0;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  // top: 0;
  transition: transform 0.3s $default-ease;
  left: 0;
  z-index: 3000;
  width: 100%;
  max-width: 100vw;
  background-color: rgba($color: #fff, $alpha: 0.3);
  backdrop-filter: blur(6px);
  .navbar {
    padding: 0 1rem;
  }
  .container {
    // flex-direction: column;
  }
  .logo-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    .letter {
      // mix-blend-mode: difference;
    }
    &:hover {
      color: $primary;
    }
    img {
      width: 200px;
    }
  }
  .collapse-warp {
    position: relative;
  }
  #collapse-links {
    background-color: white;
    position: absolute;
    top: 0;
    // top: 1rem;
    left: 0;
    width: 100%;
    // background-color: white;
    z-index: 2000;
    .list-links {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: space-around;
      align-items: stretch;
      margin: 0;
      padding: 0;
      // border-top: 1px solid $black;
      border-bottom: 1px solid $black;
      @media (max-width: $breakpoint-md) {
        flex-direction: column;
      }
      li {
        width: 100%;
        margin: 0;
        white-space: nowrap;
        // text-align: center;
        a {
          padding: 0.5rem 1rem;
          transition: all 0.2s;
          border-radius: 0;
          width: 100%;
          // text-align: left;
          font-weight: 700;
          &.router-link-active,
          &:hover {
            font-weight: 700;
            background-color: $black;
            color: white;
          }
        }
      }
    }
  }
}

.btn-hbg {
  width: 32px;
  height: 32px;
  transition: all 0.3s $default-ease;
  position: relative;
  z-index: 1060;
  padding: 1rem;
  background-color: rgba($color: #fff, $alpha: 0);
  .line {
    transition: all 0.3s $default-ease;
    transition-delay: 0.1s;
    left: 4px;
    height: 4px;
    background-color: $black;
    display: block;
    position: absolute;
    width: 24px;
    &:first-child {
      top: 10px;
    }
    &:nth-child(2) {
      top: 18px;
    }
    &:last-child {
      top: 26px;
    }
  }
  &.not-collapsed {
    // background-color: white;
    .line {
      width: 28px;
      top: 50%;
      left: -10px;
      &:first-child {
        transform: translate(50%, -50%) rotate(45deg);
      }
      &:nth-child(2) {
        transform: translateX(4rem);
        opacity: 0;
      }
      &:last-child {
        transform: translate(50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
