<template>
  <b-container>
    <h1>작가신청</h1>
    <p>
      작가신청, 어떤 글을 쓸건지 기획 내용 제출, 검토 후 에디터 계정으로 선정
    </p>
  </b-container>
</template>

<script>
// import firebase from '~/plugins/firebase'

export default {
  layout: "default",
  head() {
    return {
      title: `공주특별시 | 작가신청`,
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
