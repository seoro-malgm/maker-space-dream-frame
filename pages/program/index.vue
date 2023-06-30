<template>
  <div class="my-md-5">
    <header-underbar title="프로그램" id="program" variant="sub-2" />
    <b-container fluid class="mt-3">
      <section class="mb-3">
        <b-row class="mx-n2">
          <b-col cols="12" md="2" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-select
                :disabled="pending.getItems"
                :options="categories"
                v-model="form.category"
              />
            </b-input-group>
          </b-col>
          <b-col cols="12" md="3" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-select
                :disabled="pending.getItems"
                :options="dates"
                v-model="form.date"
              />
            </b-input-group>
          </b-col>
          <b-col cols="10" md="6" class="mb-2 px-2">
            <b-input-group class="border border-black">
              <b-form-input
                :disabled="pending.getItems"
                v-model="form.text"
                placeholder="검색어를 입력하세요"
              />
            </b-input-group>
          </b-col>
          <b-col cols="2" md="1" class="mb-2 px-2">
            <b-btn
              variant="outline-black rounded-0 w-100 h-100"
              @click="getItems(form)"
            >
              <i class="icon icon-search" /> <span class="ml-2">검색</span>
            </b-btn>
          </b-col>
        </b-row>
      </section>
      <template v-if="pending.getItems">
        <div class="p-3 text-center">
          <b-spinner large />
        </div>
      </template>
      <b-row class="mx-n2" v-else>
        <b-col
          cols="6"
          md="4"
          class="px-2 mb-3"
          v-for="(item, i) in items"
          :key="i"
        >
          <figure
            class="border border-black bg-img ratio-100 position-relative"
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
                  컨퍼런스
                </li>
              </ul>
            </header>
          </figure>
          <figcaption
            class="p-2 border-left border-right border-bottom border-black"
          >
            <h6 class="text-15 text-md-20">OOO 컨퍼런스 예시</h6>
            <span class="text-14 text-md-18">
              2023.10.07 오후1시 ~ 오후 7시
            </span>
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
        date: null,
        text: null,
      },
      items: 48,
      categories: [
        { value: null, text: "전체" },
        { value: "a", text: "특별전" },
        { value: "b", text: "초청전" },
        { value: "c", text: "특별전" },
        { value: "d", text: "심포지엄" },
        { value: "e", text: "초청특강" },
        { value: "f", text: "튜토리얼" },
        { value: "g", text: "발표회" },
        { value: "h", text: "클래스" },
      ],
      dates: [
        { value: null, text: "날짜 전체" },
        { value: "a", text: "2023.10.06(금)" },
        { value: "b", text: "2023.10.07(토)" },
        { value: "c", text: "2023.10.08(일)" },
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
  },
};
</script>

<style lang="scss" scoped></style>
