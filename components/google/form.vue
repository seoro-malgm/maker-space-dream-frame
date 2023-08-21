<template>
  <div class="form" ref="form">
    <iframe :src="src" frameborder="0" marginheight="0" marginwidth="0">
      로드 중...
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  min-height: 100vh;
  max-height: unset;
  overflow: visible;
  iframe {
    width: 100%;
    min-height: 1000px;
    max-height: unset;
    overflow: visible;
  }
}
</style>
