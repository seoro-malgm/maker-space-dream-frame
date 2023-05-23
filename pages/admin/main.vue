<template>
  <div>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">
          인트로 이미지 변경
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        accordion="my-accordion"
        role="tabpanel"
        @show="getIntro()"
      >
        <b-card-body>
          <template v-if="pending.intro">
            <b-spinner small />
          </template>
          <template v-if="!pending.intro">
            <b-form @submit.prevent="updateIntro">
              <b-row>
                <b-col cols="6">
                  <admin-input-image
                    title="인트로 이미지 변경"
                    desc="메인페이지 가장 상단의 인트로 배경 이미지를 변경합니다."
                    path="introImage"
                    :file="intro.image"
                    @change="($event) => (intro.image = $event)"
                  />
                </b-col>
                <b-col cols="6">
                  <admin-item
                    title="인트로 텍스트"
                    desc="인트로 이미지에 들어갈 텍스트를 작성합니다"
                  >
                    <b-form-input
                      v-model="intro.text"
                      placeholder="인트로 텍스트"
                    />
                  </admin-item>
                  <admin-item
                    title="인트로 버튼 텍스트"
                    desc="인트로 이미지에 들어갈 버튼의 텍스트를 넣습니다"
                  >
                    <b-form-input
                      v-model="intro.btnText"
                      placeholder="인트로 버튼 텍스트"
                    />
                  </admin-item>
                  <admin-item
                    title="인트로 버튼 링크"
                    desc="인트로 이미지에 들어갈 버튼을 누르면 이동할 링크입니다"
                  >
                    <b-form-input
                      v-model="intro.btnLink"
                      placeholder="인트로 버튼 링크"
                    />
                  </admin-item>
                </b-col>
              </b-row>

              <btn-submit :pending="pending.submitIntro">
                인트로 저장
              </btn-submit>
            </b-form>
          </template>
        </b-card-body>
      </b-collapse>
    </b-card>
    <!-- <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info"> ... </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-2"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          ...
          <template v-if="pending.intro">
            <b-spinner small />
          </template>
          <template v-if="!pending.intro">
            <b-form @submit.prevent="updateIntro">
            ...
              <btn-submit :pending="pending.submitIntro">
                인트로 저장
              </btn-submit>
            </b-form>
          </template>
        </b-card-body>
      </b-collapse>
    </b-card> -->
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-main",
  data() {
    return {
      pending: {
        intro: false,
        submitIntro: false,
      },
      intro: {
        no: 1,
        image: null,
        text: null,
        btnText: null,
        btnLink: null,
      },
    };
  },
  methods: {
    async getIntro() {
      this.pending.intro = true;
      try {
        const data = await this.$firebase().getBoardItem("intro-image", "1");
        if (data) {
          this.intro = data;
        }
      } catch (error) {
        console.error("error:", error);
      }
      this.pending.intro = false;
    },
    async updateIntro() {
      // pending
      this.pending.submitIntro = true;
      // start
      try {
        const data = await this.$firebase().updateBoardItem(
          "intro-image",
          "1",
          this.intro
        );
        if (data) {
          window.toast("인트로 이미지가 저장되었습니다.", {
            toaster: "b-toaster-top-right",
          });
        }
      } catch (error) {
        window.toast(error, {
          toaster: "b-toaster-top-right",
        });
      }
      // end
      this.pending.submitIntro = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
