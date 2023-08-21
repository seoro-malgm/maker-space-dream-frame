<template>
  <div class="wrapper">
    <div id="map">
      <GmapMap
        :center="center"
        :zoom="zoom"
        class="w-100"
        ref="map"
        :map-style="mapStyle"
        mapId="2043cf6666f4df95"
      >
        <GmapMarker
          v-for="(item, i) in items"
          :key="i"
          :position="{ lat: item.lat, lng: item.lng }"
          :clickable="true"
          :draggable="true"
          @click="$emit('marker-clicked', item)"
        />
        <!-- Add any additional map components, markers, etc. here -->
      </GmapMap>
    </div>
  </div>
</template>

<script>
import allMakers from "@/data/allMarkers";
export default {
  data() {
    return {
      center: { lat: 36.47982, lng: 127.07522 }, // Initial map center coordinates
      zoom: 12, // Initial map zoom level
      items: allMakers,
      mapStyle: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 20 }],
        },
        // Add more style rules as needed
      ],
    };
  },
  computed: {
    mapOptions() {
      return {
        // Additional map options
      };
    },
  },
  mounted() {
    this.resizeMap();
    window.addEventListener("resize", this.resizeMap);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeMap);
  },
  methods: {
    resizeMap() {
      const { clientHeight } = document.documentElement;
      const mapElement = this.$refs.map.$refs["vue-map"];
      if (mapElement) {
        mapElement.style.height = `${clientHeight}px`;
      }
    },
  },

  // const handleResize = () => {
  //     wrapWidth.value = wrap?.value?.offsetWidth;
  //   };

  //   onMounted(() => {
  //     window.addEventListener("resize", handleResize);
  //   });

  //   onBeforeUnmount(() => {
  //     window.removeEventListener("resize", handleResize);
  //   });
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  #map {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
