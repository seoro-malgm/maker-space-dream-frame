<template>
  <div class="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<script>
let key = process.env.GOOGLE_API_KEY;

export default {
  data() {
    return {
      // key: value
    };
  },
  async mounted() {
    await this.init();
  },
  methods: {
    init() {
      console.log(`%c Hello ${key}`, "background: #333399; color: #ededed");
    },
  },
};
</script>

<style lang="scss" scoped></style>
