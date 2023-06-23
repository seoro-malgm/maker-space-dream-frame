<template>
  <div>
    <div class="d-none d-lg-block">
      <b-row class="min-vh-100 mx-0" align-v="stretch">
        <b-col cols="1" class="sidebar px-0">
          <header class="sidebar-header">
            <!-- <img :src="require('@/assets/logo-ko.svg')" alt="" /> -->
            <h1 class="text-14 text-md-16 fw-700 mt-3">관리자페이지</h1>
          </header>
          <section class="sidebar-body">
            <template v-if="!auth"> </template>
            <template v-else>
              <ul class="links">
                <!-- todo: 재귀? -->
                <li v-for="(item, i) in links" :key="i" class="link-item">
                  <template v-if="item?.children?.length">
                    <b-btn
                      variant="text "
                      class="link"
                      v-b-toggle="`collapse-${item.path}`"
                    >
                      <div class="d-flex align-items-center">
                        <span>{{ item.name }}</span>
                        <i class="icon icon-down-open ml-auto text-13" />
                      </div>
                    </b-btn>
                    <b-collapse
                      accordion="link-accordion"
                      :id="`collapse-${item.path}`"
                    >
                      <ul class="links-lnb">
                        <li
                          v-for="(item2, l) in item.children"
                          :key="l"
                          class="link-item"
                          v-if="!item2?.hidden"
                        >
                          <b-btn
                            variant="text"
                            :to="`/admin/${item.path}/${item2.path}`"
                            class="link"
                          >
                            {{ item2.name }}
                          </b-btn>
                        </li>
                      </ul>
                    </b-collapse>
                  </template>
                  <template v-else>
                    <b-btn
                      variant="text link"
                      :to="`/admin/${item.path}`"
                      v-if="!item?.hidden"
                    >
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
            </template>
          </section>
        </b-col>
        <b-col cols="11" offset="1" class="content px-0">
          <div class="content-body">
            <header class="pt-2 pb-3">
              <h1 class="text-18 text-md-20">{{ pathTitle }}</h1>
            </header>
            <section>
              <nuxt-child :auth="auth" />
            </section>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- 모바일 -->
    <div class="d-block d-lg-none">
      <div class="p-5 text-center">
        관리자페이지는 PC화면으로 확인해주시길 바랍니다.
        <div class="mt-3">
          <b-btn to="/" variant="black text-white">메인으로 이동</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "~/plugins/router";

export default {
  data() {
    return {
      pathName: ["main"],
      links: [
        {
          name: "메인 관리",
          path: "main",
        },
        // {
        //   name: "공지사항",
        //   path: "notice",
        // },
        // {
        //   name: "물품",
        //   path: "products",
        //   children: [
        //     {
        //       name: "발주 관리",
        //       path: "list",
        //     },
        //     {
        //       name: "물품 상세 관리",
        //       path: "write",
        //       hidden: true,
        //     },
        //   ],
        // },
        {
          name: "메뉴",
          path: "menu",
          children: [
            {
              name: "원재료 관리",
              path: "material",
            },
            {
              name: "메뉴 구성 관리",
              path: "list",
            },

            {
              name: "메뉴 상세 관리",
              path: "write",
              hidden: true,
            },
            {
              name: "레시피 관리",
              path: "recipe",
              hidden: true,
            },
            // {
            //   name: "메뉴판 관리",
            //   path: "board",
            // },
          ],
        },

        // {
        //   name: "샵 관리",
        //   path: "shop",
        //   children: [
        //     {
        //       name: "상품 관리",
        //       path: "list",
        //     },
        //     {
        //       name: "상품 상세 관리",
        //       path: "write",
        //       hidden: true,
        //     },
        //   ],
        // },
        {
          name: "일정 관리",
          path: "calendar",
        },

        {
          name: "뉴웨이브",
          path: "new-waves",
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
      return this.$store.getters?.getUser;
    },
    auth() {
      return this.user || this.token;
    },
    pathTitle() {
      const route = this.$route?.path;
      if (!route?.length) return "";
      const arr = route?.split("/");
      const paths = arr.splice(2, arr.length + 1);
      // return paths || "";
      if (paths?.length > 1) {
        return this.links
          .find((l) => l.path === paths[0])
          ?.children.find((c) => c.path === paths[1])?.name;
      }
      return this.links.find((l) => l.path === paths[0])?.name;
    },
  },
  async mounted() {
    await this.modal();
    window.toast = this.toast;
    // auth
    if (!this.user) {
      this.user = sessionStorage.getItem(process.env.TOKEN_NAME);
      if (!this.auth) {
        this.$router.push({ name: "auth-login" });
      }
    }
  },
  methods: {
    // linkTo(path) {
    //   this.pathName = path;
    // },
    // init
    modal() {
      window.alert = async (
        msg,
        obj = {
          title: "알림",
        }
      ) => {
        const opt = {
          titleClass: "text-left text-133",
          dangerMsg: "",
          bodyClass: "px-3 pt-3 pb-2",
          contentClass: "confirm border-0 overflow-hidden ",
          headerClass:
            "rounded-0 bg-primary bg-opacity-15 text-left text-white",
          footerClass: "border-0 d-flex justify-content-end ",
          okTitle: "예",
          okVariant: "primary text-133 py-1 px-3",
          centered: true,
          size: "sm",
          noCloseOnBackdrop: true,
          autoFocusButton: "ok",
          returnFocus: this.$refs.app,
          hideHeaderClose: false,
          headerCloseContent: `<i class="icon icon-times text-133"></i>`,
          ...obj,
        };
        const msgVNode =
          typeof msg === "string"
            ? this.$createElement("div", {
                domProps: {
                  innerHTML: `
        <span class="text-13 lh-200 opacity-8">${msg}</span>
      `,
                },
              })
            : msg;
        return await this.$bvModal.msgBoxOk([msgVNode], opt);
      };
      window.confirm = async (
        msg,
        obj = {
          title: "알림",
        }
      ) => {
        const options = {
          titleClass: "text-left text-13",
          dangerMsg: "",
          bodyClass: "px-3 pt-3 pb-2",
          contentClass: "confirm border-0 overflow-hidden",
          headerClass:
            "rounded-0 bg-primary bg-opacity-15 text-left text-white",
          footerClass: "border-0 d-flex justify-content-end",
          okTitle: "예",
          cancelTitle: "아니오",
          okVariant: "outline-alert text-13 py-1 px-3",
          cancelVariant: "outline-primary text-13 py-1 px-3",
          centered: true,
          size: "sm",
          noCloseOnBackdrop: true,
          autoFocusButton: "ok",
          hideHeaderClose: false,
          headerCloseContent: `<i class="icon icon-times text-13"></i>`,
          ...obj,
        };
        const msgVNode =
          typeof msg === "string"
            ? this.$createElement("div", {
                domProps: {
                  innerHTML: `
        <span class="mb-4 text-13 lh-200 opacity-8">${msg}</span>
        <span class="text-danger text-13 lh-200">${options.dangerMsg}</span>
      `,
                },
              })
            : msg;
        return await this.$bvModal.msgBoxConfirm([msgVNode], options);
      };
    },
    async toast(
      msg,
      opt = {
        id: "toast",
        variant: "info",
        textVariant: "darkest",
      }
    ) {
      const h = this.$createElement;
      const bodyNode = h("div", {
        class: "px-2",
        domProps: {
          innerHTML: `
          <div class="text-${opt.textVariant} text-center">
           <span class="text-15 fw-500">${msg}</span>
          </div>
          `,
        },
      });
      this.$bvToast.toast(bodyNode, {
        solid: true,
        noCloseButton: true,
        headerClass: `bg-${opt.variant} p-0 border-0 text-white fw-600`,
        bodyClass: `bg-${opt.variant} py-3 border-0 rounded text-white fw-600`,
        toastClass: "border-0  pt-0",
        toaster: "b-toaster-top-right",
      });
    },
  },
  components: { router },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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
