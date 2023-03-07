<template>
  <footer id="gnf">
    <b-container>
      <div
        class="d-flex flex-column flex-lg-row algin-items-start justify-content-between py-3"
      >
        <ul class="list-unstyled">
          <li>
            <h4 class="logo mb-2">
              <img :src="require('@/assets/symbol-dark.svg')" />
            </h4>
            <span class="copyright"> &copy; copyright gongstar reserved. </span>
          </li>
          <li>고객지원 : seoromalgm@gmail.com</li>
          <!-- <li class="mt-4">
            <b-btn variant="dark" pill>다크모드</b-btn>
          </li> -->
        </ul>
      </div>
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

  h4.logo {
    > img {
      width: 80px;
    }
  }
  li {
    margin-bottom: 2px;
    font-size: 13px;
    color: $gray;
    .btn {
      font-size: 0.85rem;
    }
  }
}
</style>
