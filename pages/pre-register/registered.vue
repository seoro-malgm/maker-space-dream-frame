<template>
  <div>
    <section class="bg-gray-300 py-5 min-vh-100">
      <b-container class="mb-5 py-5">
        <header class="pb-4 text-center">
          <h2 class="text-black-han text-36 text-md-48 text-lg-56 underbar">
            사전등록 완료
          </h2>
        </header>
        <div
          class="my-5 text-center py-3 border-top border-bottom border-black"
        >
          <p class="text-15 text-md-20 fw-700">
            사전등록이 완료되었습니다!
            <br />
            디지털유산전에서 만나요!
          </p>
        </div>
        <div class="mt-1 text-center">
          <small class="text-13 text-md-14">
            사전등록 확인이 필요하신가요?
          </small>
          <b-btn variant="link p-0" to="/pre-register/confirm">
            사전등록 확인하기 <i class="icon icon-right-big" />
          </b-btn>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        name: null,
        isForeigner: false,
        phone: null,
        program: null,
      },
    };
  },
  methods: {
    preRegister() {
      console.log("this.form:", this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
