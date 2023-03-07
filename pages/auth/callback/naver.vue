<template>
  <div class="text-center py-5">
    <b-spinner variant="primary" large />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" },
      ],
    };
  },
  mounted() {
    // this.createUser();
    this.getAuth();
  },
  methods: {
    async signIn(info) {
      const { signup } = this.$firebase();
      try {
        const { data, token } = await signup(info);
        // console.log("user, token:", data, token);
        if (data) {
          // store에 저장
          this.$store.dispatch("setUser", data);
          // 세션스토리지에 저장
          sessionStorage.setItem(process.env.TOKEN_NAME, token.accessToken);
          this.$router.push("/");
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    getAuth() {
      let _ = this;
      // init
      const naverLogin = new naver.LoginWithNaverId({
        clientId: process.env.NAVER_CLIENT_ID,
      });
      naverLogin.init();
      // 로그인 진행
      naverLogin.getLoginStatus(async (status) => {
        if (status) {
          _.signIn(naverLogin.user);
        } else {
          window.toast("오류로 인해 로그인하지 못했습니다.");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
