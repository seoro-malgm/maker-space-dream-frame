<template>
  <div class="min-vh-100">
    <b-container
      fluid
      class="min-vh-100 w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <b-row align-h="center" class="w-100">
        <b-col cols="12" md="7" xl="5">
          <b-card class="bg-white w-100">
            <b-card-header
              header-bg-variant="white"
              header-border-variant="white"
              header-tag="header"
            >
              <b-card-title title-tag="h1" class="text-center">
                회원가입
              </b-card-title>
            </b-card-header>
            <b-card-body>
              <b-form @submit.prevent="setAuth(form.email, form.password)">
                <b-form-group
                  label="이메일:"
                  label-for="email"
                  label-cols-sm="3"
                  label-align-sm="left"
                >
                  <b-form-input
                    id="email"
                    type="email"
                    v-model="form.email"
                    placeholder="이메일을 입력하세요"
                  />
                </b-form-group>
                <b-form-group
                  label="비밀번호:"
                  label-for="password"
                  label-cols-sm="3"
                  label-align-sm="left"
                >
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    autocomplete="on"
                  />
                </b-form-group>
                <b-form-group
                  label="비밀번호 확인:"
                  label-for="passworConfirm"
                  label-cols-sm="3"
                  label-align-sm="left"
                >
                  <b-form-input
                    id="passworConfirm"
                    v-model="form.passwordConfirm"
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    autocomplete="on"
                  />
                </b-form-group>
                <b-row class="mt-5">
                  <b-col cols="12">
                    <b-btn
                      variant="primary w-100"
                      :disabled="
                        !form.email ||
                        form.email === '' ||
                        !form.password ||
                        form.password === ''
                      "
                      type="submit"
                      >회원가입
                    </b-btn>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'

export default {
  layout: "default",
  head() {
    return {
      title: `공주특별시 | 회원가입`,
    };
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
        passwordConfirm: null,
      },
    };
  },
  methods: {
    async setAuth(email, password) {
      console.log("%c Hello ", "background: #333399; color: #ededed");
      // try {
      //   const token = await this.$firebase().signup(email, password);
      //   if (token) {
      //     // 세션스토리지에 저장
      //     sessionStorage.setItem(this.$config.TOKEN_NAME, token);
      //     // store에 저장
      //     this.$store.dispatch("setState", ["user", token]);
      //     this.$router.push("/");
      //   }
      // } catch (error) {
      //   console.error("error:", error);
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
