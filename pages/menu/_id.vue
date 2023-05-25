<template>
  <div>
    <b-container>
      <template v-if="pending">
        <Loading />
      </template>
      <template v-else>
        <template v-if="!item">
          <small>메뉴가 존재하지 않습니다.</small>
        </template>
        <template v-else>
          <b-row class="item">
            <b-col cols="12" md="9">
              <div class="mb-4 py-3 border-top border-bottom">
                <article-content :content="item.desc" />
              </div>
            </b-col>
            <b-col cols="12" md="3">
              <header class="py-3 border-bottom">
                <div class="">
                  <small class="text-uppercase">{{ item.category }}</small>
                  <h1 class="mt-2 text-20 text-md-30 fw-700">
                    {{ item.name }}
                  </h1>
                  <h4 class="mt-2 text-18 text-md-20">
                    {{ Number(item.price).toLocaleString() }}₩
                  </h4>
                </div>
              </header>
              <section class="py-3">
                <div class="mb-2">구매하기</div>
                <b-btn variant="outline-naver w-100 px-4 py-2 rounded-0">
                  <img
                    :src="require('@/assets/images/Npay.svg')"
                    :style="{ maxWidth: '80px' }"
                  />
                </b-btn>
              </section>
            </b-col>
          </b-row>
        </template>
      </template>
    </b-container>
  </div>
</template>

<script>
import categories from "@/data/categories.json";
export default {
  name: "menuDetail",
  data() {
    return {
      categories,
      pending: true,
      item: null,
    };
  },
  computed: {
    id() {
      return this.$route?.params?.id;
    },
  },
  async mounted() {
    await this.getMenuItem();
  },
  methods: {
    // 불러오기
    async getMenuItem() {
      if (!this.id) {
        await window.alert("잘못된 접근입니다");
        this.$router.push("/menu");
      }
      try {
        const data = await this.$firebase().getBoardItem("menu", this.id);
        if (data) {
          this.item = {
            ...data,
          };
        } else {
          await window.alert("잘못된 접근입니다");
          this.$router.push("/menu");
        }
      } catch (error) {
        console.error("error:", error);
        await window.alert("잘못된 접근입니다");
        this.$router.push("/menu");
      }
      this.pending = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
