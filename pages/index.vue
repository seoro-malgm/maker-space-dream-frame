<template>
  <div>
    <section class="intro my-5 my-lg-0">
      <b-container fluid class="my-5 my-lg-0 py-5">
        <header class="text-center py-5">
          <h1
            class="text-88 text-md-120 text-lg-160 text-xl-260 fw-900 lh-88 text-black-han"
            :style="{ letterSpacing: '-8px' }"
          >
            DIVE into
            <br />
            DIGITAL
            <br />
            HERITAGE
          </h1>
        </header>
        <!-- bars -->
        <client-only>
          <div
            class="bar bg-black"
            v-for="(item, i) in bars"
            :key="i"
            :style="{
              top: `${item.top}%`,
              left: `${item.left}%`,
              width: `${item.width}%`,
              height: `${item.height}%`,
            }"
          />
          <!-- backgroundColor: `rgba(${item.r}, ${item.g}, ${item.b}, 1)`, -->
        </client-only>
      </b-container>
      <!-- scroll down -->
      <div class="scroll-down">
        <span class="text-18 text-md-20">Scroll Down</span>
        <div class="line" />
      </div>
    </section>
    <section class="bg-black text-white py-5">
      <b-container>
        <b-row align-v="stretch">
          <b-col cols="12" lg="7" order="1" order-md="0" class="pt-4 pb-5">
            <h2 class="text-40 text-md-56 mt-2 text-black-han">
              2023 디지털유산전
            </h2>
            <article class="mt-2">
              <p class="text-18 text-md-24">
                디지털문화유산전은 문화유산의 계승과 보존을 위해 디지털
                문화유산의 가치창출 및 생태계 조성하여 새로운 시대의 흐름을
                선도하는데 앞장서고 있습니다.
              </p>
            </article>
            <div class="d-flex align-items-center">
              <span
                class="bg-white text-black px-4 py-2 rounded-pill fw-700 mr-3"
              >
                기간
              </span>
              <h3 class="text-24 text-md-24 text-lg-36 mt-2 mb-3">
                2023.10.06(금) - 08(일)
              </h3>
            </div>
            <div class="d-flex align-items-center">
              <span
                class="bg-white text-black px-4 py-2 rounded-pill fw-700 mr-3"
              >
                장소
              </span>
              <strong class="text-20 text-md-28">아트센터 고마</strong>
            </div>
            <div class="mt-3">
              <b-btn variant="primary " to="/info">
                <span class="mx-1 fw-700 text-15 text-md-16"
                  >자세한 일정 보기</span
                >
                <i class="icon icon-right-big" />
              </b-btn>
            </div>
          </b-col>
          <b-col cols="12" md="5" class="">
            <img
              class="w-100 shadow-lg"
              :src="require('@/assets/dummy.png')"
              alt="더미이미지"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- 지도 및 오시는 길 -->
    <section>
      <b-row>
        <b-col cols="12" md="7">
          <div class="bg-img ratio-67 bg-gray-200">
            <span>지도</span>
          </div>
        </b-col>
        <b-col cols="12" md="5">
          <article class="py-5">
            <h2 class="text-black-han text-24 text-lg-56">오시는 길</h2>
            <ul class="list-unstyled">
              <li class="d-flex align-items-center mb-3">
                <span
                  class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                >
                  주소
                </span>
                <div class="text-15 text-md-20">충남 공주시 고마나루길 90</div>
              </li>
              <li class="d-flex align-items-start mb-3">
                <span
                  class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                >
                  대중교통
                </span>

                <ul class="list-unstyled text-15 text-md-20">
                  <li class="mb-0">
                    <span>
                      버스 이용시 공주종합버스터미널에서 오시는 법(약 50분 소요)
                    </span>
                  </li>
                  <li class="mb-2">
                    <strong> &#x2460; 125번 종합버스터미널(옥룡동방면) </strong>
                    <br />
                    → 문예회관, 경찰서 하차 후 도보 19분
                  </li>
                  <li class="mb-2">
                    <strong> &#x2461; 550번 종합버스터미널(옥룡동방면) </strong>
                    → 중동 사거리 하차 후 도보 10분
                    <br />
                    → 공주세무서, 북중학교 승차
                    <br />
                    → 국립공주박물관 하차 후 맞은편
                  </li>
                </ul>
              </li>
              <li class="mb-3">
                <span
                  class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                >
                  무료 셔틀버스
                </span>
                <div class="text-15 text-md-20 mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  qui?
                </div>
              </li>
            </ul>
          </article>
        </b-col>
      </b-row>
    </section>
    <!-- 참여기관 -->
    <section class="py-5 border-top border-bottom border-black">
      <header class="text-center mb-4 py-3">
        <h2 class="text-black-han text-24 text-lg-56">참여 기관</h2>
      </header>
      <b-container class="mb-5 p-5 pb-0 bg-gray-100">
        <b-row>
          <b-col cols="4" md="3" class="mb-4" v-for="(item, i) in 24" :key="i">
            <div class="bg-img ratio-35 bg-black">
              <span class="text-white">로고 이미지</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-sub-3 py-5">
      <b-container class="mb-5 py-5">
        <header class="py-3">
          <h2 class="text-black-han text-24 text-lg-56">사전등록하세요!</h2>
          <p class="text-15 text-md-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            sapiente, nobis debitis consequatur hic. Quae tempora vel eaque
            nihil sed architecto assumenda quas doloribus, esse quia reiciendis
            iusto dolores, necessitatibus animi aliquam dolor? Dolore,
            necessitatibus, aspernatur aliquam dolor alias ex laboriosam
            reprehenderit assumenda ipsa id quos dolorum consectetur itaque.
          </p>
        </header>
        <div class="mt-4">
          <b-form @submit.prevent="preRegister">
            <b-input-group class="input-group align-items-start mb-4">
              <template #prepend>이름</template>
              <div class="d-flex flex-column">
                <b-form-input
                  placeholder="이름을 입력하세요"
                  class="mt-1"
                  v-model="form.name"
                />
                <b-form-radio-group
                  class="input-group p-0 align-items-center"
                  id="isForeigner"
                  v-model="form.isForeigner"
                >
                  <b-form-radio :value="false">내국인</b-form-radio>
                  <b-form-radio :value="true">외국인</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-input-group>

            <b-input-group class="input-group mb-4">
              <template #prepend>연락처</template>
              <b-form-input
                placeholder="연락처를 입력하세요('-' 제외)"
                v-model="form.name"
              />
            </b-input-group>
            <b-input-group class="input-group mb-4">
              <template #prepend>신청 프로그램</template>
              <b-form-select v-model="form.program">
                <b-form-select-option :value="null">
                  선택하세요
                </b-form-select-option>
              </b-form-select>
            </b-input-group>
            <b-row class="mt-4" align-h="center">
              <b-col cols="10" md="8" lg="6">
                <b-btn variant="sub-2 text-white fw-700 px-3 py-3 w-100"
                  >사전등록</b-btn
                >
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-container>
    </section>
    <!-- 플로팅버튼 -->
    <btn-floating
      :position="{
        bottom: onScrolled ? '2.5rem' : '-4rem',
        right: '1.5rem',
      }"
      variant="sub-2 text-white"
      @click="scrollToBottom"
    >
      <template #content>
        <span class="mx-1 fw-700 text-15 text-md-16">사전등록 하러가기</span>
        <i class="icon icon-right-big" />
      </template>
    </btn-floating>
  </div>
</template>

<script>
import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
  components: {},

  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bars: [
        {
          top: 48,
          left: 50,
          width: 60,
          height: 25,
          // r: 0,
          // g: 0,
          // b: 0,
        },
        {
          top: 50,
          left: 50,
          width: 0,
          height: 0,
          // r: 0,
          // g: 0,
          // b: 0,
        },
        {
          top: 50,
          left: 50,
          width: 0,
          height: 0,
          // r: 0,
          // g: 0,
          // b: 0,
        },
        {
          top: 50,
          left: 50,
          width: 0,
          height: 0,
          // r: 0,
          // g: 0,
          // b: 0,
        },
        {
          top: 50,
          left: 50,
          width: 0,
          height: 0,
          // r: 0,
          // g: 0,
          // b: 0,
        },
      ],
      barsInterval: null,
      form: {
        name: null,
        isForeigner: false,
        phone: null,
        program: null,
      },
      // items: [{}, {}, {}, {}],
      // allCategories,
      // pending: {
      //   items: false,
      // },
      // intro: null,
    };
  },
  computed: {
    itemPinned() {
      if (!this.items?.length) return [];
      const pinned = this.items.filter((i) => i.pinned);
      return pinned;
    },
    query() {
      return this.$route.query;
    },
  },
  watch: {
    query(n) {
      // this.getItems(n);
    },
  },
  mounted() {
    // await this.init();

    this.barInit();
  },
  beforeDestroy() {
    clearInterval(this.barsInterval);
  },
  methods: {
    async barInit() {
      this.barsInterval = setInterval(() => {
        for (let i = 0; i < this.bars.length; i++) {
          const newBar = {
            top: Math.random() * 100,
            left: Math.random() * 100,
            width: Math.random() * 30,
            height: Math.random() * 30,
            // r: Math.random() * 255,
            // g: Math.random() * 255,
            // b: Math.random() * 255,
          };
          this.$set(this.bars, i, newBar);
        }
        // console.log(this.bars);
      }, 3000);
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    preRegister() {
      console.log("this.form:", this.form);
    },
    // async init() {
    //   try {
    //     const [intro] = await Promise.all([this.getIntro()]);
    //     this.intro = intro;
    //   } catch (error) {
    //     console.error("error:", error);
    //   }
    // },
    // async getIntro() {
    //   try {
    //     const data = await this.$firebase().getBoardItem("intro-image", "1");
    //     if (data) {
    //       return data;
    //     }
    //   } catch (error) {
    //     console.error("error:", error);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
section.intro {
  height: 100vh;
  max-height: calc(100vh - 75px);
  position: relative;
  // > video {
  //   position: absolute;
  //   width: 100%;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   // z-index: 10;
  //   @media (max-width: $breakpoint-xl) {
  //     width: auto;
  //     min-height: 100vh;
  //   }
  // }
  overflow: hidden;
  header {
    h1 {
      mix-blend-mode: difference;
      position: relative;
      z-index: 10;
      color: white;
    }
  }
  .bar {
    min-width: 30vw;
    min-height: 100px;
    position: absolute;
    z-index: 2;
    transition: all 0.6s $default-ease;
    transform: translate(-50%, -50%);
  }
}

@keyframes updown {
  0% {
    height: 0;
  }
  100% {
    height: 80px;
  }
}
.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(-50%);
  mix-blend-mode: difference;
  color: white;
  z-index: 10;
  .line {
    position: relative;
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      bottom: 0;
      left: 50%;
      width: 2px;
      height: 0;
      transform: translateX(-50%);
      animation-name: updown;
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      // background-color: $primary;
      background-color: white;
    }
    width: 4px;
    height: 100px;
    margin-bottom: 0;
  }
  &.active {
    display: flex;
    opacity: 1;
  }
}
</style>
