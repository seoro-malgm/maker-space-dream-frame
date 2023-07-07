<template>
  <div>
    <b-container fluid>
      <header class="text-center mt-4 mb-5">
        <h1 class="text-24 text-md-48">매거진</h1>
      </header>
    </b-container>
    <b-container>
      <b-row class="mx-n2">
        <b-col
          cols="6"
          md="4"
          class="px-2 mb-3"
          v-for="(item, i) in items"
          :key="i"
        >
          <router-link
            tag="figure"
            to="/magazines/1"
            class="border border-black bg-img ratio-100 position-relative cursor-pointer"
            :style="{
              backgroundImage: `url(${require('@/assets/dummy.png')})`,
            }"
          >
            <header
              class="position-absolute"
              :style="{ top: '1rem', left: '1rem' }"
            >
              <ul class="list-unstyled d-flex align-items-center">
                <li class="border border-black bg-sub-1 px-2 py-1 mr-2 fw-700">
                  매거진
                </li>
              </ul>
            </header>
          </router-link>
          <figcaption
            class="p-2 border-left border-right border-bottom border-black"
          >
            <h6 class="text-15 text-md-20">매거진 제목</h6>
          </figcaption>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: 48,
    };
  },
};
</script>

<style lang="scss" scoped></style>
