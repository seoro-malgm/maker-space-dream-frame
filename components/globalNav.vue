<template>
  <div id="gnb">
    <b-navbar type="light" variant="white">
      <b-container>
        <!-- 로고 -->
        <b-navbar-brand class="mx-auto">
          <router-link to="/" replace class="logo-link"> logo </router-link>
        </b-navbar-brand>
        <!-- 링크 -->
        <section class="utils">
          <ul class="list-links">
            <li v-for="(link, i) in links" :key="i">
              <router-link :to="link.path" class="btn btn-text">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </section>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      links: [
        {
          name: "Menu",
          path: "/menu",
        },
      ],
    };
  },
  computed: {
    path() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  padding: 0.5rem 0 0;
  border-bottom: 1px solid #111;
  .navbar {
    padding: 0;
  }
  .container {
    flex-direction: column;
  }
  .logo-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    // ...
  }

  .list-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: stretch;
    margin-top: 1rem;
    li {
      width: 100%;
      margin: 0;
      white-space: nowrap;
      text-align: center;
      a {
        padding: 0.75rem 2rem;
        transition: all 0.2s;
        border-radius: 0;
        width: 100%;
        &.router-link-active,
        &:hover {
          font-weight: 700;
          background-color: #111;
          color: white;
        }
      }
    }
  }
}
</style>
