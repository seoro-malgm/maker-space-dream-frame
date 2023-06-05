<template>
  <div>
    <b-form @submit.prevent="id ? updateItem() : submitItem()">
      <b-row>
        <b-col cols="4">
          <admin-input-image
            title="메뉴 썸네일 이미지"
            desc="썸네일로 사용되는 메뉴 이미지를 변경합니다"
            path="menuThumbnail"
            :file="form.thumbnail"
            @change="($event) => (form.thumbnail = $event)"
            :size="720"
          />
          <admin-input-image
            title="메뉴 누끼 이미지"
            desc="메뉴 누끼 이미지를 변경합니다"
            path="menuBackgroundRemoved"
            :file="form.backgroundRemoved"
            @change="($event) => (form.backgroundRemoved = $event)"
            :size="720"
          />
        </b-col>
        <b-col cols="8">
          <b-row>
            <b-col cols="8">
              <admin-item title="메뉴 이름">
                <b-form-input v-model="form.name" />
              </admin-item>
            </b-col>
            <b-col cols="4">
              <admin-item title="카테고리">
                <b-form-select v-model="form.category">
                  <b-form-select-option
                    v-for="(value, key) in menuCategories"
                    :value="key"
                    :key="key"
                  >
                    {{ value }}
                  </b-form-select-option>
                </b-form-select>
              </admin-item>
            </b-col>
          </b-row>

          <admin-item title="메뉴 가격(원)">
            <b-form-input v-model="form.price" />
          </admin-item>

          <admin-item title="옵션" desc="공개여부, 뱃지 표시 옵션설정입니다">
            <b-form-checkbox v-model="form.hidden" switch>
              <span class="text-13"> 메뉴 비공개 </span>
            </b-form-checkbox>
            <b-form-checkbox v-model="form.isNew" switch>
              <span class="text-13"> 신메뉴 표시 </span>
            </b-form-checkbox>
            <b-form-checkbox v-model="form.isBest" switch>
              <span class="text-13"> 베스트 표시 </span>
            </b-form-checkbox>
          </admin-item>
        </b-col>
      </b-row>
      <div class="mt-4">
        <admin-editor
          title="내용"
          desc="메뉴 상세에서 표시할 상세 내용을 작성합니다"
          storagePath="menuImage"
          @change="($event) => (form.desc = $event)"
        />
      </div>
      <div
        class="mt-3 border-top pt-2 d-flex align-items-center justify-content-end"
      >
        <btn-submit :pending="pending.submit">
          메뉴
          {{ id ? "수정" : "추가" }}
        </btn-submit>
      </div>
    </b-form>
  </div>
</template>

<script>
import { createHash } from "~/plugins/commons.js";
import categories from "@/data/categories.json";

export default {
  layout: "dashboard",
  name: "admin-menu-detail",
  data() {
    return {
      categories,
      pending: {
        submit: false,
      },
      form: {
        // 썸네일
        thumbnail: null,
        // 누끼
        backgroundRemoved: null,
        // 이름
        name: null,
        // 가격
        price: null,
        // 카테고리
        category: "coffee",
        // 내용
        desc: null,

        // 옵션
        isNew: false,
        isBest: false,
        hidden: false,
        createdAt: null,
      },
    };
  },
  computed: {
    id() {
      return this.$route?.query?.id;
    },
    menuCategories() {
      return categories?.menu;
    },
  },
  async mounted() {
    await this.getMenuItem();
  },
  methods: {
    // 해쉬 제작
    createHash,
    // 불러오기
    async getMenuItem() {
      if (!this.id) return;
      try {
        const data = await this.$firebase().getBoardItem("menu", this.id);
        if (data) {
          this.form = {
            ...data,
            createdAt: new Date().toLocaleString(),
            updateDate: new Date().toLocaleString(),
          };
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 업로드
    async submitItem() {
      this.pending.submit = true;
      try {
        // 해쉬 생성
        const id = this.createHash();
        const data = await this.$firebase().addBoardItem("menu", {
          ...this.form,
          id,
          viewer: 0,
          updateDate: new Date().toLocaleString(),
          // 레시피정보
          recipe: {
            data: [],
            updateDate: null,
          },
        });
        if (data) {
          window.toast("업로드에 성공했습니다.");
          this.$router.push(`/admin/menu/list`);
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
    // 업데이트
    async updateItem() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().updateBoardItem("menu", this.id, {
          ...this.form,
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          window.toast("업로드에 수정했습니다.");
          this.$router.push(`/admin/menu/list`);
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
