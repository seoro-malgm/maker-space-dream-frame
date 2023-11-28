<template>
  <div id="error">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="mb-3 text-center">
        <Loading />
        <h1 class="mb-1 text-primary">ERROR {{ error?.statusCode }}</h1>
        <span class="text-gray">{{ error?.message }}</span>
      </div>
      <b-btn variant="primary text-white" pill to="/">메인으로 이동</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
