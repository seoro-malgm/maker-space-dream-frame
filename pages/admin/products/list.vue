<template>
  <div>
    <div class="bg-gray-100 rounded p-3 mb-4">
      <ul>
        <li class="mb-2">💡 남은 물품의 발주를 위한 페이지입니다.</li>
        <li class="mb-2">
          메뉴에 필요한 원가를 계산하려면
          <router-link to="/admin/menu/material" class="text-info"
            >메뉴의 원재료 관리</router-link
          >
          로 이동하세요.
        </li>
      </ul>
    </div>
    <b-form @submit.prevent="submit"> </b-form>
  </div>
</template>

<script>
import categories from "@/data/categories";
export default {
  layout: "dashboard",
  name: "admin-menu-products",
  data() {
    return {
      categories,
      pending: {
        submit: false,
      },
      items: null,
    };
  },
  methods: {
    submit() {
      console.log("%c Hello ", "background: #333399; color: #ededed");
    },
  },
};
</script>

<style lang="scss" scoped></style>
