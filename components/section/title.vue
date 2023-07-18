<template>
  <div class="mb-4 wrap">
    <h3 class="section-title text-24 text-md-32 px-4 pt-1 pb-2 mr-2">
      <slot></slot>
    </h3>
    <slot name="desc"> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  padding-top: 130px;
}
h3.section-title {
  font-family: "SUITE-ExtraBold", "Noto Sans KR", sans-serif;
  font-weight: 800;
  // color: $contest-pink;
  border-radius: 40rem;
  border: 1px solid $contest-black;
  display: inline-block;
}
</style>
