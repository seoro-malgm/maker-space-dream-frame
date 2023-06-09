<template>
  <div>
    <b-form @submit.prevent="id ? updateItem() : submitItem()">
      <b-row>
        <b-col cols="4">
          <admin-input-image
            title="아티스트 대표 이미지"
            desc="썸네일에 사용되는 대표 이미지 입니다"
            path="artists"
            :file="form.image"
            @change="($event) => (form.image = $event)"
            :size="1440"
          />
        </b-col>
        <b-col cols="8">
          <admin-item title="아티스트 이름">
            <b-form-input v-model="form.name" />
          </admin-item>

          <admin-item
            title="아티스트 짧은 설명"
            desc="이름과 함게 사용되는 활동명이나, 소속 등의 짧은 설명 표시입니다"
          >
            <b-form-input v-model="form.summary" />
          </admin-item>

          <admin-item title="옵션" desc="공개여부, 뱃지 표시 옵션설정입니다">
            <b-form-checkbox v-model="form.hidden" switch>
              <span class="text-13"> 아티스트 비공개 </span>
            </b-form-checkbox>
            <b-form-checkbox v-model="form.isNew" switch>
              <span class="text-13"> new 표시 </span>
            </b-form-checkbox>
            <b-form-checkbox v-model="form.isComingSoon" switch>
              <span class="text-13"> 커밍순으로 표시 </span>
            </b-form-checkbox>
            <!-- <b-form-checkbox v-model="form.isBest" switch>
              <span class="text-13"> Best 표시 </span>
            </b-form-checkbox> -->
          </admin-item>
        </b-col>
      </b-row>
      <div class="mt-4">
        <admin-editor
          title="내용"
          desc="아티스트 상세에서 표시할 상세 내용을 작성합니다"
          storagePath="menuImage"
          @change="($event) => (form.description = $event)"
          :description="form.description"
        />
      </div>
      <div
        class="mt-3 border-top pt-2 d-flex align-items-center justify-content-end"
      >
        <btn-submit :pending="pending.submit">
          아티스트
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
  name: "admin-new-waves-write",
  data() {
    return {
      categories,
      pending: {
        submit: false,
      },
      form: {
        // 썸네일, 대표이미지
        image: null,
        // 이름
        name: null,
        // 설명
        summary: null,
        // 내용
        description: null,
        // 옵션
        isNew: false,
        // isBest: false,
        // 비공개
        hidden: false,
        // 커밍순
        isComingSoon: false,
        createdAt: null,
      },
    };
  },
  computed: {
    id() {
      return this.$route?.query?.id;
    },
    menuCategories() {
      return categories?.new - waves - artist;
    },
  },
  async mounted() {
    await this.getArtistItem();
  },
  methods: {
    // 해쉬 제작
    createHash,
    // 불러오기
    async getArtistItem() {
      if (!this.id) return;
      try {
        const data = await this.$firebase().getBoardItem(
          "new-waves-artist",
          this.id
        );
        if (data) {
          console.log(data);
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
        const data = await this.$firebase().addBoardItem("new-waves-artist", {
          ...this.form,
          id,
          viewer: 0,
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          window.toast("업로드에 성공했습니다.");
          this.$router.push(`/admin/new-waves/list`);
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
        const data = await this.$firebase().updateBoardItem(
          "new-waves-artist",
          this.id,
          {
            ...this.form,
            updateDate: new Date().toLocaleString(),
          }
        );
        if (data) {
          window.toast("업로드에 수정했습니다.");
          this.$router.push(`/admin/new-waves/list`);
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
