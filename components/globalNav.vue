<template>
  <div id="gnb">
    <b-navbar type="light" variant="transparent">
      <b-container fluid>
        <!-- 로고 -->
        <b-navbar-brand class="ml-0">
          <router-link to="/" replace class="logo-link">
            <img :src="require('@/assets/logo.png')" alt="" />
          </router-link>
        </b-navbar-brand>
        <!-- 햄버거 -->
        <section class="utils">
          <b-btn variant="text btn-hbg" v-b-toggle.collapse-links>
            <div class="hbg">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </b-btn>
        </section>
      </b-container>
    </b-navbar>
    <div class="position-relative">
      <b-collapse id="collapse-links" class="px-0" v-model="visible">
        <ul class="list-links flex-column">
          <li v-for="(link, i) in links" :key="i">
            <router-link
              :to="link.path"
              class="btn btn-text text-20 text-lg-32 text-left"
            >
              <div class="text-black-han">
                {{ link.name }}
              </div>
            </router-link>
          </li>
        </ul>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  padding: 0.5rem 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
  max-width: 100vw;
  background-color: white;
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
    img {
      width: 200px;
    }
  }

  #collapse-links {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 2000;
    .list-links {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: space-around;
      align-items: stretch;
      margin: 0;
      border-top: 1px solid $black;
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
          padding: 0.75rem 2rem;
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
    background-color: white;
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
