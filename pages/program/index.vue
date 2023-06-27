<template>
  <div>
    <header-underbar title="프로그램" id="program" variant="sub-2" />
    <b-container fluid>
      <section>필터링</section>
      <b-row class="mx-n2">
        <b-col
          cols="6"
          md="4"
          class="px-2 mb-3"
          v-for="(item, i) in 48"
          :key="i"
        >
          <figure
            class="border border-black bg-img ratio-100"
            :style="{
              backgroundImage: `url(${require('@/assets/dummy.png')})`,
            }"
          ></figure>
          <figcaption
            class="p-2 border-left border-right border-bottom border-black"
          >
            caption
          </figcaption>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
