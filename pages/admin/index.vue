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
      console.log("%c Hello 2", "background: #333399; color: #ededed");
      this.$router.push({ name: "auth-login" });
    } else {
      this.$router.push({ name: "admin-main" });
      console.log("%c Hello 3", "background: #333399; color: #ededed");
    }
  },
};
</script>

<style lang="scss" scoped></style>
