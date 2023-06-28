<template>
  <div>
    <section class="bg-gray-300 py-5 min-vh-100">
      <b-container class="mb-5 py-5">
        <header class="pb-4 text-center">
          <h2 class="text-black-han text-36 text-md-48 text-lg-56 underbar">
            예약확인
          </h2>
        </header>
        <b-row align-h="center">
          <b-col cols="11" md="10">
            <div
              class="my-5 text-center py-3 border-top border-bottom border-black"
            >
              <ul class="text-15 text-md-20">
                <li class="d-flex align-items-start mb-2">
                  <span class="mr-2">이름</span>
                  <strong>OOO</strong>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <span class="mr-2">연락처</span>
                  <strong>OOO-000-0000</strong>
                </li>
                <li
                  class="d-flex flex-column flex-md-row align-items-start mb-2"
                >
                  <span class="mr-2">신청 프로그램 </span>
                  <strong class="text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta, deleniti.
                  </strong>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
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
