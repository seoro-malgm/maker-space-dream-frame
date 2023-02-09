<template>
  <footer id="gnf">
    <b-container fluid>
      <nav class="nav">
        <h1 class="logo">공주특별시</h1>
        <span class="copyright"> &copy; copyright gongstar reserved. </span>
      </nav>
    </b-container>
  </footer>
</template>

<script>
import { copyText } from "~/plugins/commons.js";
export default {
  methods: {
    copyText,
  },
};
</script>

<style lang="scss" scoped>
#gnf {
  border-top: 1px solid $light;
  background-color: transparent;
  nav.nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    h1.logo {
      font-size: 16px;
      color: $gray;
    }
    .copyright {
      font-size: 13px;
      color: $gray;
    }
  }
}
</style>
