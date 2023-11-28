<template>
  <b-modal
    id="modal-write-schedule"
    titleClass="text-left text-16 text-white"
    :title="`일정 ${id ? '수정' : '추가'}`"
    bodyClass="px-3 pt-3 pb-2"
    contentClass="confirm border-0 overflow-hidden"
    headerClass="rounded-0 bg-primary bg-opacity-15 text-left "
    footerClass="border-0 d-flex justify-content-end "
    :okTitle="id ? '수정' : '추가'"
    okVariant="info"
    @ok="id ? edit(id) : add()"
    cancelTitle="취소"
    cancelVariant="alert"
    centered
    size="lg"
    noCloseOnBackdrop
    autoFocusButton="ok"
    hideHeaderClose
    headerCloseContent="`<i class='icon icon-times text-1'></i>``"
    @shown="init"
  >
    <template v-if="pending">
      <Loading />
    </template>
    <template v-else>
      <ul>
        <li class="mb-3">
          <h6 class="text-14 mb-1">날짜</h6>
          <b-row align-v="start">
            <b-col cols="12" lg="4">
              <b-form-select v-model="form.year">
                <b-form-select-option :value="null" disabled
                  >년</b-form-select-option
                >
                <b-form-select-option :value="2023">2023</b-form-select-option>
                <b-form-select-option :value="2024">2024</b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col cols="12" lg="4">
              <b-form-select v-model="form.month">
                <b-form-select-option :value="null" disabled
                  >월</b-form-select-option
                >
                <b-form-select-option v-for="i in 12" :key="i" :value="i">
                  {{ i }}
                </b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col cols="12" lg="4">
              <b-form-select v-model="form.date">
                <b-form-select-option :value="null" disabled
                  >일</b-form-select-option
                >
                <b-form-select-option v-for="i in 31" :key="i" :value="i">
                  {{ i }}
                </b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>
        </li>
        <li class="mb-3">
          <h6 class="text-14 mb-1">내용</h6>
          <b-form-input v-model="form.text" type="text" />
        </li>

        <li class="mb-3">
          <h6 class="text-14 mb-1">연결 링크</h6>
          <b-form-input v-model="form.link" type="text" />
        </li>
      </ul>
    </template>
  </b-modal>
</template>

<script>
import { createHash } from "~/plugins/commons.js";
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pending: false,
      form: {
        text: null,
        year: null,
        month: null,
        date: null,
        link: null,
      },
    };
  },
  computed: {
    id() {
      return this.item?.id || null;
    },
  },
  methods: {
    init() {
      if (this.id) {
        this.form = {
          ...this.item,
        };
      } else {
        this.form = {
          text: null,
          year: null,
          month: null,
          date: null,
          link: null,
        };
      }
    },
    createHash,
    async add() {
      this.pending = true;
      try {
        // 해쉬 생성
        const id = this.createHash();
        const data = await this.$firebase().addBoardItem("schedule", {
          ...this.form,
          id,
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          window.toast("업로드에 성공했습니다.");
          this.$emit("ok");
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending = false;
    },
    async edit(id) {
      this.pending = true;
      try {
        const data = await this.$firebase().updateBoardItem("schedule", id, {
          ...this.form,
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          window.toast("스케쥴을 수정했습니다.");
          this.$emit("edit");
        }
      } catch (error) {
        window.toast("스케쥴을 실패했습니다.");
        console.error("error:", error);
      }
      this.pending = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
