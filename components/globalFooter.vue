<template>
  <footer id="gnf">
    <b-container>
      <div class="d-flex justify-content-between py-3">
        <b-btn variant="light mr-2" pill>랜덤글</b-btn>
        <b-btn variant="dark" pill>다크모드</b-btn>
      </div>
      <nav class="nav">
        <!-- <div class="utils pt-4 mb-2">
          <ul class="btns">
            <b-btn
              variant="light rounded-circle"
              v-for="(item, i) in contacts"
              :key="i"
            >
              <i class="icon" :class="`icon-${item.icon}`" />
            </b-btn>
          </ul>
        </div> -->
        <div class="text-center py-3">
          <h4 class="logo mb-2">
            <img :src="require('@/assets/symbol-dark.svg')" />
          </h4>
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
      > img {
        width: 80px;
      }
    }
    .copyright {
      font-size: 13px;
      color: $gray;
    }
  }
}
</style>
