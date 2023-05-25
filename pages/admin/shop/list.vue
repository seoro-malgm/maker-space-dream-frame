<template>
  <div>
    <header class="bg-gray-100 p-3 rounded-lg mb-4">
      <b-btn variant="primary text-white" to="/admin/menu/write">
        + 새 메뉴</b-btn
      >
    </header>
    <section>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th width="10%">사진</th>
              <th class="text-left">이름</th>
              <th width="20%">가격</th>
              <th width="20%">관리</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="items?.length">
              <tr v-for="(item, i) in items" :key="i">
                <td>
                  <img :src="item?.thumbnail?.url" alt="" class="thumbnail" />
                </td>
                <td>
                  {{ item?.name }}
                </td>
                <td class="text-center">
                  {{ item?.price }}
                </td>
                <td class="text-center">
                  <b-btn
                    variant="info"
                    :to="{
                      path: '/admin/menu/write',
                      query: {
                        id: item.id,
                      },
                    }"
                  >
                    수정
                  </b-btn>
                  <b-btn variant="alert" @click="removeItem(item, i)"
                    >삭제</b-btn
                  >
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="3" class="text-center text-14 text-gray-600">
                  <template v-if="pending">
                    <Loading />
                  </template>
                  <template v-else>
                    <div class="py-3">
                      <span>메뉴가 없습니다.</span>
                    </div>
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <!-- <tfoot></tfoot> -->
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-shop-list",
  data() {
    return {
      pending: false,
      items: [],
    };
  },
  async mounted() {
    await this.getItems();
  },
  methods: {
    async getItems() {
      this.pending = true;
      try {
        const data = await this.$firebase().getAllBoardItems("menu");
        if (data) {
          this.items = data;
        }
      } catch (error) {
        console.error("error:", error);
      }
      this.pending = false;
    },
    async removeItem(item, index) {
      const bool = await window.confirm(
        `메뉴를 "${item.name}"를 삭제하시겠습니까?`
      );
      if (bool) {
        try {
          const data = await this.$firebase().removeBoardItem("menu", item.id);
          if (data) {
            window.toast("삭제에 성공했습니다.");
            this.items.splice(index, 1);
          }
        } catch (error) {
          window.toast("삭제에 실패했습니다.");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 200px;
  height: auto;
}
</style>
