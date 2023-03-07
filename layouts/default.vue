<template>
  <div id="app">
    <global-nav :auth="auth" />
    <!-- 내용 -->
    <main id="main">
      <nuxt-child :auth="auth" />
    </main>
    <btn-floating
      v-if="auth && routeName !== 'board-write'"
      :position="{
        bottom: '2.5rem',
        right: '1.5rem',
      }"
      variant="primary text-darkest"
      @click="
        $router.push({
          name: 'board-write',
        })
      "
    >
      <template #content>
        <i class="icon icon-pencil" />
        <span class="mx-1 fw-700">글쓰기</span>
      </template>
    </btn-floating>
    <!-- footer -->

    <global-footer />
  </div>
</template>

<script>
export default {
  name: "default",
  mounted() {
    window.toast = this.toast;
  },
  computed: {
    auth() {
      return this.$store.getters.getUser;
    },
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    async toast(
      msg,
      opt = {
        id: "toast",
        variant: "darkest",
        textVariant: "white",
      }
    ) {
      const h = this.$createElement;

      const bodyNode = h("div", {
        class: "px-2",
        domProps: {
          innerHTML: `
          <div class="text-${opt.textVariant} text-center">
            <span class="text-1 fw-500">${msg}</span>
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
        toaster: "b-toaster-bottom-center",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$gnb-height: 82px;
#main {
  min-height: 100vh;
  // @media (max-width: $breakpoint-md) {
  //   padding-top: 72px;
  // }
  // padding-top: 82px;
  padding-top: calc($gnb-height + 12px);
  // @media (min-width: $breakpoint-md) {
  //   padding-top: calc($gnb-height + 12px);
  // }
  padding-bottom: 2.5rem;
}
</style>
