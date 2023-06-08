<template>
  <div>
    <Loading />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  mounted() {
    if (!this.auth) {
      this.$router.push({ name: "auth-login" });
    } else {
      this.$router.push({ name: "admin-main" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
