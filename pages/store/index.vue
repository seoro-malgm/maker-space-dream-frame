<template>
  <div class="main-inner-padding">
    <b-container class="mb-3">
      <header class="page-header">
        <h1 class="page-title">Store</h1>
        <p class="page-description">
          각 지역을 대표하는 공주살롱의 지점들입니다.
        </p>
      </header>
    </b-container>

    <section class="section-gap mt-3">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            md="6"
            v-for="(item, i) in items"
            :key="i"
            class="mb-4"
          >
            <a
              class="link"
              @click="
                $router.push({
                  path: `/store/${item.id}`,
                })
              "
            >
              <figure class="image-wrapper ratio-67">
                <header class="image-header" v-if="item?.isCenter">
                  <div class="badge bg-primary">본점</div>
                </header>
                <img
                  :src="`${require(`@/assets/images/store/store-${item.id}.jpg`)}`"
                  alt=""
                />
              </figure>
              <figcaption class="py-2">
                <h6>{{ item.name }}</h6>
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
      items: [
        {
          id: "gongju",
          name: "공주 신관점",
          isCenter: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  .image-header {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 2;
    display: inline-flex;
    max-width: calc(100% - 1rem);
    flex-wrap: wrap;
    .badge {
      border-radius: 10rem;
      padding: 0.25rem 0.75rem;
      color: white;
      margin-right: 8px;
    }
  }
}
</style>
