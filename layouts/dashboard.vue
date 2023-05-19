<template>
  <div>
    <b-row class="min-vh-100 mx-0" align-v="stretch">
      <b-col cols="1" class="sidebar px-0">
        <header class="sidebar-header">
          <img :src="require('@/assets/logo-ko.svg')" alt="" />
          <h1 class="text-14 text-md-16 fw-700 mt-3">관리자페이지</h1>
        </header>
        <section class="sidebar-body">
          <ul class="links">
            <!-- todo: 재귀? -->
            <li v-for="(item, i) in links" :key="i" class="link-item">
              <template v-if="item?.children?.length">
                <b-btn
                  variant="text "
                  class="link"
                  v-b-toggle="`collapse-${item.id}`"
                >
                  <div class="d-flex align-items-center">
                    <span>{{ item.name }}</span>
                    <i class="icon icon-down-open ml-auto"></i>
                  </div>
                </b-btn>
                <b-collapse
                  accordion="link-accordion"
                  :id="`collapse-${item.id}`"
                >
                  <ul class="links-lnb">
                    <li
                      v-for="(item2, l) in item.children"
                      :key="l"
                      class="link-item"
                    >
                      <nuxt-link
                        :to="`/admin/${item.id}/${item2.path}`"
                        class="link"
                      >
                        {{ item2.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </b-collapse>
              </template>
              <template v-else>
                <b-btn variant="text link" :to="`/admin/${item.path}`">
                  {{ item.name }}
                </b-btn>
              </template>
            </li>
          </ul>
          <div class="mt-auto mb-2">
            <b-btn variant="text text-darkest text-13" to="/auth/logout">
              로그아웃
            </b-btn>
          </div>
        </section>
      </b-col>
      <b-col cols="11" class="content px-0">
        <div class="content-body">
          <template v-if="!auth">
            <Loading />
          </template>
          <template v-else>
            <router-view :auth="auth" />
          </template>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "메인 관리",
          path: "main",
        },
        {
          name: "메뉴",
          id: "menu",
          children: [
            {
              name: "목록 관리",
              path: "list",
            },
            {
              name: "원재료 관리",
              path: "material",
            },
            {
              name: "레시피 관리",
              path: "recipe",
            },
          ],
        },
        {
          name: "샵 관리",
          path: "shop",
        },
        {
          name: "공지사항",
          path: "notice",
        },
        {
          name: "뉴웨이브",
          id: "new-waves",
          children: [
            {
              name: "예술가관리",
              path: "list",
            },
            {
              name: "신청목록",
              path: "contact",
            },
          ],
        },
      ],
      user: null,
    };
  },
  computed: {
    token() {
      return this.$store.getters["auth/getUser"];
    },
    auth() {
      return this.user || this.token;
    },
  },
  mounted() {
    if (!this.user) {
      this.user = sessionStorage.getItem(process.env.TOKEN_NAME);
    }
    if (!this.auth) {
      this.$router.push("/auth/login");
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .sidebar-header {
    padding: 1rem;
    text-align: center;
    img {
      max-width: 180px;
    }
  }
  .sidebar-body {
    background-color: #ededed;
    height: 100%;
    flex-grow: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .links,
    .links-lnb {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .link-item {
        width: 100%;
        text-align: left;
        .link {
          text-align: left;
          margin: auto;
          width: 100%;
          border-radius: 0;
          padding: 0.5rem;
          width: 100%;
          display: block;
          i.icon {
            transition: transform 0.2s;
          }
          &.nuxt-link-active {
            background-color: #111;
            color: white;
          }
          &.not-collapsed {
            background-color: #333;
            color: white;
            i.icon {
              transform: rotate(180deg) translateY(-2px);
            }
          }
        }
        .links-lnb {
          background-color: white;
          border-bottom: 1px solid #111;
        }
      }
    }
  }
}
.content {
  .content-body {
    padding: 1rem;
  }
}
</style>
