<template>
  <article class="mb-4">
    <header class="d-flex align-items-center">
      <h4 class="text-14 fw-700" v-if="title">
        {{ title }}
      </h4>
      <span class="ml-2 text-13 text-gray-700" v-if="desc">
        {{ desc }}
      </span>
    </header>
    <section class="mt-2">
      <slot name="default" />
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  padding: 4px 12px;
  border: 1px solid $primary;
  border-radius: 10rem;
}
</style>
