<template>
  <div class="main-inner-padding">
    <b-container class="mb-3">
      <header class="page-header">
        <h1 class="page-title">Menu</h1>
        <p class="page-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          aliquam!
        </p>
      </header>
    </b-container>

    <section class="section-gap mt-3">
      <b-container>
        <b-row>
          <b-col
            cols="6"
            md="4"
            v-for="(item, i) in items"
            :key="i"
            class="mb-4"
          >
            <a
              class="link"
              @click="
                $router.push({
                  path: `/menu/${0}`,
                })
              "
            >
              <figure class="image-wrapper ratio-100">
                <img
                  src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                  alt=""
                />
              </figure>
              <figcaption class="py-2">
                <h6>메뉴 이름</h6>
                <span>ㅁㄴㅇ</span>
              </figcaption>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
    };
  },
  async mounted() {
    await this.getItems();
  },
  methods: {
    async getItems() {
      console.log("%c Hello ", "background: #333399; color: #ededed");
    },
  },
};
</script>

<style lang="scss" scoped></style>
