<template>
  <div id="index">
    <client-only>
      <map-google @marker-clicked="($event) => selectPosition($event)" />
    </client-only>
    <b-sidebar
      id="sidebar"
      :title="selectedItem?.name"
      shadow
      v-model="showSidebar"
      bg-variant="white"
    >
      <div class="p-3">
        <div>
          <img :src="require('@/assets/dummy.png')" alt="" class="w-100" />
        </div>
        <p class="mt-3">
          공주살롱에 대한 내용 Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum natus facere voluptate corrupti accusantium
          voluptates necessitatibus perferendis deleniti iste accusamus, sint
          quo! Officia excepturi animi tempora fugiat, assumenda nesciunt?
          Perspiciatis cupiditate ab iure ducimus culpa rerum explicabo
          aspernatur, ipsum, fuga beatae officiis voluptatem voluptatum porro
          maxime cumque minima possimus esse amet nemo temporibus fugit a odit.
          Magnam consectetur tempora a animi eaque
        </p>
      </div>

      <div class="mt-3 p-3 border-top">
        <h6>관련 매거진</h6>
        <div class="mt-2">
          <div class="magazine-el">
            <router-link to="/magazines/1"> 다다매거진 1호 </router-link>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
// import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
  components: {},

  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
    scrollY: {
      type: [String, Number],
      default: 0,
    },
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pending: {
        getItems: false,
      },
      showSidebar: false,
      selectedItem: null,
    };
  },
  methods: {
    getItems(query) {
      this.pending.getItems = true;
      setTimeout(() => {
        console.log(query);
        this.items = Math.round(Math.random() * 30);
        this.pending.getItems = false;
      }, 1000);
    },
    selectPosition(item) {
      console.log("item:", item);
      this.selectedItem = item;
      this.showSidebar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#index {
  width: 100vw;
  height: 100vh;
}
#sidebar {
  background-color: white;
}

.magazine-el {
  background-color: white;
  border-radius: 1.1rem;
  padding: 1rem;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
  a {
    color: $darkest;
  }
}
</style>
