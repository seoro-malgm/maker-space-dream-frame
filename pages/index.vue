<template>
  <div class="d-flex align-items-stretch">
    <b-row class="mx-0 w-100 min-vh-100" align-v="stretch">
      <b-col
        cols="6"
        class="px-0 d-flex align-items-center justify-content-center bg-contest-yellow"
      >
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
        cols="6"
        class="px-0 d-flex align-items-center justify-content-center bg-supporters-green"
      >
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

<style lang="scss" scoped></style>
