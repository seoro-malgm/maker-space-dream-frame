<template>
  <div id="gnb">
    <b-navbar type="light" variant="white">
      <b-container>
        <!-- 로고 -->
        <b-navbar-brand class="mx-auto">
          <router-link to="/" replace class="logo-link">
            <div
              class="symbol"
              :style="{
                backgroundImage: `url(${require('@/assets/symbol-empty.svg')})`,
              }"
            >
              <div
                class="icon"
                :style="{
                  backgroundImage: `url(${require(`@/assets/icons/play.svg`)})`,
                }"
              />
            </div>
            <img
              :src="require('@/assets/lettertype-en.svg')"
              alt="신물결 로고 이미지, 메인으로 이동"
              class="lettertype"
            />
          </router-link>
        </b-navbar-brand>
        <!-- 링크 -->
        <section class="utils">
          <ul class="list-links">
            <li v-for="(link, i) in links" :key="i">
              <router-link :to="link.path" class="btn btn-text">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </section>
      </b-container>
    </b-navbar>
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
      links: [
        {
          name: "Menu",
          path: "/menu",
          icon: "beverage",
        },
        {
          name: "About",
          path: "/about",
          icon: "signature",
        },
        {
          name: "Shop",
          path: "/shop",
          icon: "beverage",
        },
        {
          name: "Store",
          path: "/store",
          icon: "dessart",
        },
        {
          name: "Notice",
          path: "/notice",
          icon: "notice",
        },
        {
          name: "New Waves",
          path: "/new-waves",
          icon: "services",
        },
      ],
    };
  },
  computed: {
    path() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  padding: 0.5rem 0 0;
  border-bottom: 1px solid #111;
  .navbar {
    padding: 0;
  }
  .container {
    flex-direction: column;
  }
  .logo-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    .symbol {
      width: 100px;
      height: 100px;
      background-size: cover;
      background-position: center center;
      position: relative;
      .icon {
        width: 64px;
        height: 64px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -45%);
        background-size: cover;
        background-position: center center;
        transition: background-image 0.3s;
      }
    }
    .lettertype {
      margin-top: 4px;
      width: 240px;
    }
  }

  .list-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: stretch;
    margin-top: 1rem;
    li {
      width: 100%;
      margin: 0;
      white-space: nowrap;
      text-align: center;
      a {
        padding: 0.75rem 2rem;
        transition: all 0.2s;
        border-radius: 0;
        width: 100%;
        &.router-link-active,
        &:hover {
          font-weight: 700;
          background-color: #111;
          color: white;
        }
      }
    }
  }
}
</style>
