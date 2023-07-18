<template>
  <footer id="gnf">
    <b-container class="py-3 pb-5"> </b-container>
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
  background-color: $contest-black;
  color: white;
  position: relative;
  z-index: 2;
  @media (max-width: $breakpoint-md) {
    padding-bottom: 60px;
  }
  .footer-nav {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .btn {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0;
      margin-right: 8px;
    }
  }
  h4.logo {
    > img {
      width: 80px;
    }
  }
  li {
    margin-bottom: 2px;
    font-size: 13px;
    color: $white;
    .btn {
      font-size: 0.85rem;
    }
  }
}
</style>
