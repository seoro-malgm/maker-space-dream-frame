<template>
  <div class="d-flex align-items-stretch">
    <b-row class="mx-0 w-100 min-vh-100" align-v="stretch">
      <b-col
        cols="12"
        md="6"
        class="px-0 d-flex flex-column align-items-center justify-content-center bg-contest-yellow"
      >
        <div class="w-100 mb-4 px-5">
          <svg-contest-logo />
        </div>
        <b-btn
          to="/contest"
          variant="contest-pink px-3 py-2 px-md-4 py-md-3 text-15 text-md-22 text-white fw-800"
          pill
        >
          <i class="icon icon-left-hand" />
          릴스공모전 보러가기
        </b-btn>
      </b-col>
      <b-col
        cols="12"
        md="6"
        class="px-0 d-flex flex-column align-items-center justify-content-center bg-supporters-green"
      >
        <div class="w-100 mb-4 px-5 text-center">
          <img
            :src="require('@/assets/images/bg-supporters.png')"
            alt=""
            class="supporters-image"
          />
        </div>
        <b-btn
          to="/supporters"
          variant="supporters-orange px-3 py-2 px-md-4 py-md-3 text-15 text-md-22 text-white fw-800 "
          pill
        >
          서포터즈 보러가기
          <i class="icon icon-right-hand" />
        </b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
.supporters-image {
  width: 100%;
  height: auto;
  margin: auto;
  max-width: 45vw;
  @media (min-width: $breakpoint-lg) {
    max-width: 450px;
  }
}
</style>
