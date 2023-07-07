<template>
  <div>
    <b-container fluid>
      <header class="text-center mt-4 mb-5">
        <h1 class="text-24 text-md-48">북마크</h1>
      </header>
    </b-container>
    <b-container>
      <section class="mb-3">
        <b-row class="mx-n2">
          <b-col cols="12" md="3" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-select
                :disabled="pending.getItems"
                :options="categories"
                v-model="form.category"
              />
            </b-input-group>
          </b-col>
          <!-- <b-col cols="12" md="3" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-select
                :disabled="pending.getItems"
                :options="dates"
                v-model="form.date"
              />
            </b-input-group>
          </b-col> -->
          <b-col cols="9" md="7" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-input
                :disabled="pending.getItems"
                v-model="form.text"
                placeholder="검색어를 입력하세요"
              />
            </b-input-group>
          </b-col>
          <b-col cols="3" md="2" class="mb-2 px-2">
            <b-btn
              variant="outline-black rounded-0 w-100 h-100"
              @click="getItems(form)"
            >
              <i class="icon icon-search" /> <span class="ml-2">검색</span>
            </b-btn>
          </b-col>
        </b-row>
      </section>
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
                  북마크1
                </li>
              </ul>
            </header>
            <header
              class="position-absolute"
              :style="{ top: '1rem', right: '1rem' }"
            >
              <b-btn
                variant="outline-heart rounded-circle p-1"
                @click.prevent="cancelBookmark"
                :style="{ width: '40px', height: '40px' }"
              >
                <i class="icon icon-heart" />
              </b-btn>
            </header>
          </router-link>
          <figcaption
            class="p-2 border-left border-right border-bottom border-black"
          >
            <h6 class="text-15 text-md-20">북마크한 글, 장소 제목</h6>
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
      form: {
        category: null,
        text: null,
      },
      items: 48,
      categories: [
        { value: null, text: "전체" },
        { value: "a", text: "매거진" },
        { value: "g", text: "장소" },
        { value: "h", text: "선택1" },
        { value: "i", text: "선택2" },
        { value: "j", text: "선택3" },
      ],

      pending: {
        getItems: false,
      },
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
    cancelBookmark() {
      window.toast("북마크가 해제됐습니다.");
    },
  },
};
</script>

<style lang="scss" scoped></style>
