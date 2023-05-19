<template>
  <div class="min-vh-100">
    <b-container
      fluid
      class="py-5 my-5 w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <b-row align-h="center" class="w-100">
        <b-col cols="12" md="7" xl="5">
          <b-card class="w-100">
            <b-card-header
              header-bg-variant="white"
              header-border-variant="white"
              header-tag="header"
            >
              <b-card-title
                title-tag="h1"
                class="text-center text-16 text-md-20"
              >
                로그인
              </b-card-title>
            </b-card-header>
            <b-card-body>
              <b-form @submit.prevent="login">
                <div class="mb-4">
                  <label for="email" class="text-16 text-md-18 fw-700 mb-1"
                    >이메일</label
                  >
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                  >
                    asd
                  </b-form-input>
                </div>
                <div class="mb-4">
                  <label for="pwd" class="text-16 text-md-18 fw-700 mb-1"
                    >비밀번호</label
                  >
                  <b-form-input
                    id="pwd"
                    v-model="form.pwd"
                    placeholder="비밀번호를 입력하세요"
                    type="password"
                  >
                    asd
                  </b-form-input>
                </div>
                <div class="mt-3">
                  <b-btn class="w-100" type="submit"> 로그인 </b-btn>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from "~/plugins/firebase";

export default {
  layout: "default",
  name: "auth-login",
  head() {
    return {
      title: `공주살롱 | 로그인`,
    };
  },
  props: {
    auth: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      disabled: false,
      form: {
        email: process.env.NODE_ENV === "development" ? "test@test.com" : null,
        pwd: process.env.NODE_ENV === "development" ? "!2xptmxm" : null,
      },
    };
  },
  computed: {
    validate() {
      return false;
    },
    redirect() {
      return this.$route.query.redirect;
    },
  },
  mounted() {
    if (this.auth) {
      this.$router.push("/");
    }
  },
  methods: {
    async login(e) {
      try {
        const token = await this.$firebase().login(this.form);
        if (token) {
          window.toast("로그인되었습니다.", {
            toaster: "b-toaster-bottom-left",
          });
          // 세션스토리지에 저장
          sessionStorage.setItem(process.env.TOKEN_NAME, token);
          // store에 저장
          this.$store.dispatch("user", token);
          this.$router.push("/admin");
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-naver {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: 22px;
  }
}
</style>
