<template>
  <div
    class="newwaves-contact"
    :style="{
      backgroundImage: `url(${require('@/assets/newwaves-symbol.svg')})`,
    }"
    v-b-visible="visibleHandler"
  >
    <b-container tag="section">
      <div class="mb-4">
        <b-btn @click="$router.back()">
          <i class="icon icon-left-big" />
          뒤로가기
        </b-btn>
      </div>
      <!-- 폼 -->
      <div class="form-wrapper p-3 p-md-5" :class="{ visible: isVisible }">
        <header class="form-header mb-5 pt-1 pb-4 border-bottom">
          <b-row class="mb-3 text-center flex-column" align-v="center">
            <b-col cols="8" md="4">
              <img
                :src="require('@/assets/newwaves-logo-horizon.svg')"
                alt=""
              />
              <h1
                class="text-22 text-md-28 mt-2"
                v-if="!pending?.submit && !pending?.submitted"
              >
                서비스 신청 폼
              </h1>
            </b-col>
            <b-col
              cols="10"
              md="9"
              v-if="!pending?.submit && !pending?.submitted"
            >
              <p class="text-13 text-md-14 mt-3 lh-160">
                안녕하세요! 공주살롱의 송마담입니다. 지역의 예술가를 SAVE하기
                위해 공간대여와 전체적인 홍보, 관리서비스를 뉴 웨이브(NEW
                WAVES)라는 이름으로 제공합니다. 매장에서 본 공연 및 이벤트를
                여는 전 과정을 긴밀하게 소통하고, 브랜딩과 포스터 제작 및
                인쇄하여 온,오프라인으로 적극적인 홍보를 통해 유의미한 기회를
                제공합니다. <br />
                본 과정이 휘발되지 않도록 적절히 아카이빙하여 활용하고 계속해서
                지역의 아티스트에게 기회를 제공할 수 있도록 노력합니다. 매장에서
                커피류 메뉴로 얻는 소득의 1/4를 위 서비스를 운영하는 데에
                활용하고 있습니다.
                <br />
                신청폼을 작성하는 모든 예술가분께 최대한 빨리 연락을 드립니다.
                매장을 관리하는 살롱의 마담이 직접 연락을 드리겠습니다. <br />
                다만 한정된 무대 사용의 횟수 때문에 모든 아티스트를 모실 수 없는
                점을 이해해주시길 바랍니다. 또한 다소 시간이 걸리더라도 부디
                기다려주시길 바랍니다. 감사합니다.
              </p>
            </b-col>
          </b-row>
        </header>
        <template v-if="pending?.submit">
          <Loading />
        </template>
        <!-- 전송 전 -->
        <template v-else>
          <template v-if="pending?.submitted">
            <div class="py-5 text-center">
              <h1 class="text-18 text-22">신청이 완료됐습니다.</h1>
              <p class="text-14 mt-3">신청해주셔서 감사합니다!</p>
              <div class="mt-4">
                <b-btn variant="outline-primary" to="/">메인으로 이동</b-btn>
              </div>
            </div>
          </template>
          <template v-else>
            <b-form @submit.prevent="submit" class="form">
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  아티스트 or 팀 이름을 알려주세요.
                  <strong class="text-alert">*</strong>
                </h5>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.name"
                    :state="allStates?.name"
                    required
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  간단히 팀, 편성 소개 부탁드리겠습니다.
                  <strong class="text-alert">*</strong>
                </h5>
                <p class="text-14 text-gray-700 my-2 lh-160">
                  포스터, 공연 홍보, 영상 등에 활용됩니다. <br />
                  예시: 활동명/보컬&기타, 이름/소속
                </p>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.description"
                    :state="allStates?.description"
                    required
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  어떤 서비스를 위해 NEW WAVES가 필요하신가요?
                  <strong class="text-alert">*</strong>
                </h5>
                <div class="my-2">
                  <b-form-radio-group
                    v-model="form.type"
                    :options="types"
                    name="categories"
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  오프라인 공연 당일, 영상 녹화와 스트리밍에 동의하시나요?
                  <strong class="text-alert">*</strong>
                </h5>
                <p class="text-14 text-gray-700 my-2 lh-160">
                  동의하실 경우, 유튜브 채널 '공주살롱'에 업로드되며, 광고수익이
                  발생할 경우 이는 새로운 뉴 웨이브의 아티스트를 위해
                  사용됩니다.
                </p>
                <div class="my-2">
                  <b-form-radio-group
                    v-model="form.agrees.record"
                    :options="categories.YN"
                    name="archiveYN"
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  공연 영상, 연습 영상, 내용을 알 수 있는 레퍼런스를
                  부탁드립니다.
                  <strong class="text-alert">*</strong>
                </h5>
                <p class="text-14 text-gray-700 my-2 lh-160">
                  공연이라면 공연 혹은 연습 영상 링크를, 그 외엔 내용을 알 수
                  있는 자료 링크를 입력해주세요.
                </p>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.reference"
                    :state="allStates?.reference"
                    required
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  아티스트 선정시 연락받을 연락처를 입력해주세요.
                  <strong class="text-alert">*</strong>
                </h5>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.phone"
                    :state="allStates?.phone"
                    required
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  아티스트 선정시 연락받을 이메일을 입력해주세요.
                  <strong class="text-alert">*</strong>
                </h5>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.email"
                    :state="allStates?.email"
                    required
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  아티스트의 대표 이미지를 첨부해주세요.
                  <strong class="text-alert">*</strong>
                </h5>
                <p class="text-14 text-gray-700 my-2 lh-160">
                  위 사진은 추후 홍보와 아카이빙 등 공개적인 사용에 활용되며,
                  이를 동의한 것으로 간주합니다.
                </p>
                <div class="my-2">
                  <!-- file -->
                  <admin-input-image
                    path="artists"
                    :file="form.image"
                    @change="($event) => (form.image = $event)"
                    :size="1920"
                  />
                </div>
              </article>
              <article class="mb-5">
                <h5 class="text-16 text-md-18">
                  기타 참고사항을 입력해주세요.
                </h5>
                <p class="text-14 text-gray-700 my-2 lh-160">
                  추가적으로 저희가 참고할만한 사항들이 있다면 입력해주세요.
                </p>
                <div class="my-2">
                  <b-form-input
                    placeholder="입력"
                    v-model="form.etc"
                    :state="allStates?.etc"
                    required
                  />
                </div>
              </article>
              <div class="mt-4 pt-4 text-center">
                <b-btn
                  type="submit"
                  variant="newwaves py-2 px-3 text-18 text-md-20"
                  :disabled="validate"
                >
                  신청하기
                </b-btn>
                <template v-if="validate">
                  <div class="text-center mt-2">
                    <small class="text-13 text-alert">
                      필수 입력칸을 입력하지 않았습니다.
                    </small>
                  </div>
                </template>
              </div>
            </b-form>
          </template>
        </template>
        <!-- 전송 전  -->
      </div>
      <!-- 폼 -->
    </b-container>
  </div>
</template>

<script>
import { createHash } from "~/plugins/commons.js";
import categories from "@/data/categories";

export default {
  layout: "empty",
  data() {
    return {
      isVisible: false,
      categories,
      form: {
        name: null,
        description: null,
        type: null,
        reference: null,
        agrees: {
          record: "N",
        },
        phone: null,
        email: null,
        image: null,
        etc: null,
      },
      pending: {
        // 전송 대기
        submit: true,
        // 전송됨
        submitted: false,
      },
    };
  },
  computed: {
    types() {
      return this.categories.newWaves.types;
    },
    allStates() {
      return {
        name: !!(this.form.name && !this.form.name !== ""),
        description: !!(this.form.description && !this.form.description !== ""),
        type: !!(this.form.type && !this.form.type !== ""),
        reference: !!(this.form.reference && !this.form.reference !== ""),
        agreesRecord: !!(
          !this.form.agrees.record !== "N" && this.form.agrees.record === "Y"
        ),
        phone: !!(this.form.phone && !this.form.phone !== ""),
        email: !!(this.form.email && !this.form.email !== ""),
        image: !!this.form.image && !!this.form.image?.url,
        etc: !!(this.form.etc && !this.form.etc !== ""),
      };
    },
    validate() {
      return Object.values(this.allStates).includes(false);
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const submitted = window.localStorage.getItem("new-waves-submitted");
      this.pending.submit = false;
      if (submitted) {
        this.pending.submitted = true;
      }
    },
    createHash,
    async submit() {
      this.pending.submit = true;
      try {
        // 해쉬 생성
        const id = this.createHash();
        const data = await this.$firebase().addBoardItem("new-waves-contact", {
          ...this.form,
          id,
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          this.pending.submitted = true;
          window.toast("신청을 완료했습니다. 감사합니다.");
          window.localStorage.setItem("new-waves-submitted", id);
        }
      } catch (error) {
        window.toast("신청에 실패했습니다. 다음에 시도 부탁드립니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
    visibleHandler(e) {
      if (e) {
        this.isVisible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.newwaves-contact {
  background-color: #eee;
  background-position: 0 0;
  background-repeat: no-repeat;
  padding: 3rem 0 10rem;
  min-height: 100vh;
  overflow: hidden;
}
.form-wrapper {
  transform: translateY(50rem);
  transition: transform 0.6s $ease-in-out;
  background-color: white;
  &.visible {
    box-shadow: 0 1rem 5rem rgba($color: #000000, $alpha: 0.1);
    transform: translateY(0);
  }
  .form-header {
  }
}
</style>
