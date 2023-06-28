<template>
  <div>
    <section class="bg-gray-300 py-5 min-vh-100">
      <b-container class="mb-5 py-5">
        <header class="pb-4 text-center">
          <h2 class="text-black-han text-36 text-md-48 text-lg-56 underbar">
            사전등록 예약 확인하기
          </h2>
        </header>
        <div class="mt-4">
          <b-form @submit.prevent="findRegister">
            <b-input-group class="input-group align-items-start mb-4">
              <template #prepend>예약자 이름</template>
              <div class="d-flex flex-column">
                <b-form-input
                  placeholder="예약자 이름을 입력하세요"
                  class="mt-1 w-100"
                  v-model="form.name"
                />
                <b-form-radio-group
                  class="input-group p-0 align-items-center"
                  id="isForeigner"
                  v-model="form.isForeigner"
                >
                  <b-form-radio :value="false">내국인</b-form-radio>
                  <b-form-radio :value="true">외국인</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-input-group>

            <b-input-group class="input-group mb-4">
              <template #prepend>예약자 연락처</template>
              <b-form-input
                placeholder="연락처를 입력하세요('-' 제외)"
                v-model="form.phone"
              />
            </b-input-group>

            <b-row class="mt-4" align-h="center">
              <b-col cols="10" md="8" lg="6">
                <b-btn
                  variant="sub-2 text-white fw-700 px-3 py-3 w-100"
                  type="submit"
                >
                  사전등록 확인하기
                </b-btn>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-container>
    </section>
    <!-- 플로팅버튼 -->
    <btn-floating
      :position="{
        bottom: onScrolled ? '2.5rem' : '-4rem',
        right: '1.5rem',
      }"
      variant="sub-2 text-white"
      @click="$router.push('/pre-register')"
    >
      <template #content>
        <span class="mx-1 fw-700 text-15 text-md-16">사전등록 하러가기 </span>
        <i class="icon icon-right-big" />
      </template>
    </btn-floating>
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
      },
    };
  },
  methods: {
    findRegister() {
      console.log("this.form:", this.form);
      this.$router.push("/pre-register/found");
    },
  },
};
</script>

<style lang="scss" scoped></style>
