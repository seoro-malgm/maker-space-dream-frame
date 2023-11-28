<template>
  <b-btn
    :variant="variant"
    type="submit"
    :disabled="pending"
    :readonly="pending"
    :class="{ disabled: pending }"
  >
    <template v-if="pending">
      <b-spinner small />
    </template>
    <template v-else>
      <slot />
    </template>
  </b-btn>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    pending: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
