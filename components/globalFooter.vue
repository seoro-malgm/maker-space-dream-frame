<template>
  <footer id="gnf">
    <b-container fluid>
      <nav class="nav">
        <div class="utils pt-4 mb-2">
          <ul class="btns">
            <b-btn
              variant="light rounded-circle"
              v-for="(item, i) in contacts"
              :key="i"
            >
              <i class="icon" :class="`icon-${item.icon}`" />
            </b-btn>
          </ul>
        </div>
        <div class="text-center pb-3">
          <h4 class="logo">공주특별시</h4>
          <span class="copyright"> &copy; copyright gongstar reserved. </span>
        </div>
      </nav>
    </b-container>
  </footer>
</template>

<script>
import { copyText } from "~/plugins/commons.js";
export default {
  data() {
    return {
      contacts: [
        {
          icon: "mail-1",
          url: "/",
        },
        {
          icon: "instagram",
          url: "/",
        },
        {
          icon: "comment-empty",
          url: "/",
        },
      ],
    };
  },
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
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    .utils {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .btns {
        display: flex;
        align-items: center;
        .btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 8px;
          padding: 0;
        }
      }
    }
    h4.logo {
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
