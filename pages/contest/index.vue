<template>
  <div id="index">
    <!-- gnb -->
    <global-nav-contest :onScrolled="onScrolled" :auth="auth" />

    <!-- 링크 -->
    <header class="header-nav pt-3 pb-4">
      <b-container fluid>
        <b-nav class="nav-links" v-b-scrollspy>
          <template v-for="link in links">
            <b-nav-item
              v-if="link?.name"
              :key="link.id"
              class="link-item p-0"
              :href="`#${link.path}`"
            >
              <span class="text-13 text-md-18"> {{ link.name }}</span>
            </b-nav-item>
            <template v-else> <div></div> </template>
          </template>
        </b-nav>
      </b-container>
    </header>

    <!-- 내용 -->
    <div id="content">
      <div class="section pb-5">
        <b-container>
          <b-row>
            <b-col cols="12" md="5">
              <h2 class="text-suite fw-800 text-16 text-md-20">
                메이커스 꿈:틀 인스타그램 릴스 공모전
              </h2>
              <p class="text-15 text-md-18">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis reprehenderit fugiat qui doloremque, blanditiis at
                nisi expedita enim quisquam necessitatibus esse velit voluptatum
                vero hic sunt in nostrum iure voluptate.
              </p>
            </b-col>
            <b-col cols="12" md="7">
              <h2 class="text-suite fw-800 mt-3 mt-md-0 text-16 text-md-20">
                공모기간
              </h2>
              <p class="text-28 text-md-48 fw-800 lh-100 text-suite">
                2023.8.10.(목) ~ 10.31.(화)
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <section class="section">
        <b-container>
          <section-title id="infos"> 공모전 개요 </section-title>
          <article>
            <div class="mb-3" v-for="(item, i) in infos" :key="i">
              <b-row>
                <b-col cols="12" md="2">
                  <h4 class="text-18 text-md-22">{{ item.name }}</h4>
                </b-col>
                <b-col cols="12" md="10">
                  <p class="text-15 text-md-18">
                    {{ item.content }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </article>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title id="infos">
            시상
            <template #desc>
              <span class="text-20 text-md-28 mt-1 mb-0 fw-800"
                >총 700만원 상당</span
              >
            </template>
          </section-title>
          <article>
            <div class="mb-3" v-for="(item, i) in prices" :key="i">
              <div class="d-flex align-items-center">
                <h4
                  class="text-20 text-md-30 border rounded-pill d-inline-block border-contest-pink px-3 text-contest-pink"
                >
                  {{ item.name }}
                </h4>
                <p class="text-20 text-md-30 ml-3">
                  {{ item.amount }}만원({{ item.unit }}명)
                </p>
              </div>
            </div>
          </article>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title id="how"> 참여방법 </section-title>
          <article>
            <ul>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">1</span> 인스타그램 릴스
                양식의(1080*1920px) 크기로 긴 1분 이하로 영상을 제작한다
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">2</span> 해시태그
                <strong>#프린세스메이커공모전 #공주시 #촬영혹은주제장소</strong>
                (신관동, 신풍면, 공산성, 둔치공원, 황새바위, 공주대학교 등)를
                추가한다
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">3</span> 공모 전용 인스타그램계정
                <strong>@계정명</strong> 언급
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">4</span>해시태그와 계정을 모두 추가
                및 언급했다면, 업로드하여 참여 완료!
              </li>
            </ul>
          </article>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title id="faq">
            FAQ
            <template #desc>
              <small class="text-gray-600"> 자주묻는 질문들입니다. </small>
            </template>
          </section-title>
          <div>
            <ul class="border-top border-contest-pink">
              <li
                v-for="(item, i) in faqs"
                :key="i"
                class="border-bottom border-contest-pink"
              >
                <header class="py-3">
                  <b-btn
                    block
                    variant="text p-0 d-flex align-items-start"
                    v-b-toggle="`faq-${i}`"
                  >
                    <span class="fw-700 text-15 text-md-20">
                      Q. {{ item.title }}
                    </span>
                  </b-btn>
                </header>

                <b-collapse :id="`faq-${i}`" accordion="faqs" role="tabpanel">
                  <div class="p-3 border-top border-contest-pink">
                    <p class="text-15 text-md-20 pl-2">A. {{ item.content }}</p>
                  </div>
                </b-collapse>
              </li>
            </ul>
          </div>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title> 수상작 </section-title>
          <article>
            <div class="text-13 text-md-15">준비중입니다</div>
          </article>
        </b-container>
      </section>
      <section class="section pb-5">
        <b-container>
          <section-title id="sns"> SNS </section-title>
          <article>
            <b-row>
              <b-col cols="12" md="6" class="mb-3 mb-md-0">
                <b-btn
                  variant="contest-blue w-100"
                  pill
                  href="https://www.instagram.com/explore/tags/프린세스메이커공모전/"
                  target="_blank"
                >
                  <span class="text-18 text-md-30"
                    >릴스 참가작 보러가기
                    <i class="icon icon-right-hand"></i>
                  </span>
                </b-btn>
              </b-col>
              <b-col cols="12" md="6">
                <b-btn
                  variant="contest-blue w-100"
                  pill
                  href="https://www.instagram.com/gong__star2021/"
                  target="_blank"
                >
                  <span class="text-18 text-md-30"
                    >공모전 인스타 계정 보기
                    <i class="icon icon-right-hand"></i>
                  </span>
                </b-btn>
              </b-col>
            </b-row>
          </article>
        </b-container>
      </section>
      <section class="section pb-5">
        <b-container>
          <section-title> 주최 </section-title>
          <article>
            <b-row align-v="center">
              <b-col
                cols="4"
                md="2"
                class="text-center"
                v-for="(item, i) in companies"
                :key="i"
              >
                <template v-if="item?.image">
                  <img
                    :src="require(`@/assets/svg/${item.image}`)"
                    :alt="item?.name"
                    class="w-100"
                  />
                </template>
                <template v-else>
                  <strong class="fw-800 text-suite">
                    {{ item.name }}
                  </strong>
                </template>
              </b-col>
            </b-row>
          </article>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title> 문의처 </section-title>
          <article>
            <div class="text-13 text-md-15">준비중입니다</div>
          </article>
        </b-container>
      </section>
      <!-- 배경 -->
      <div id="symbols">
        <img
          :src="require('@/assets/images/symbol-contest.png')"
          alt="배경 심볼"
          v-for="(item, i) in symbols"
          :key="i"
          :style="{
            top: item.top,
            left: item.left,
            width: item.width,
            transform: `
          translate(${item.translate ? item.translate : '0, 0'})
          `,
            transformOrigin: 'center center',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
  components: {},

  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
    scrollY: {
      type: [String, Number],
      default: 0,
    },
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pending: {
        getItems: false,
      },
      showSidebar: false,
      selectedItem: null,

      links: [
        {
          name: "공모전 개요",
          path: "infos",
        },
        {
          name: "참여방법",
          path: "how",
        },
        {},
        {
          name: "FAQ",
          path: "faq",
        },

        {
          name: "SNS",
          path: "sns",
        },
      ],
      infos: [
        {
          name: "공모주제",
          content:
            "공주시 문화&관광 자원들을 활용하여 창의적이고 재밌는 릴스 영상 제작",
        },
        {
          name: "예시",
          content:
            " 공주를 배경으로 한 춤 영상, 공주 VLOG, 공주 여행 꿀팁, 공주 정보 요약, 공주 음식먹방 등",
        },
        {
          name: "참여 대상 조건",
          content: "나이불문, 지역불문, 개인 혹은 2인 이상의 팀 구성 참여",
        },
        {
          name: "시상 및 발표",
          content:
            "11월 말일, 신청자들 한에서 업로드한 인스타그램 계정으로 개별 DM 연락하여 발표 예정",
        },
        {
          name: "저작권 귀속",
          content: "공주시 공주대학교 산학협력단",
        },
      ],

      prices: [
        {
          name: "1등",
          amount: "200",
          unit: "1",
        },
        {
          name: "2등",
          amount: "100",
          unit: "1",
        },
        {
          name: "3등",
          amount: "50",
          unit: "3",
        },
        {
          name: "4등",
          amount: "30",
          unit: "5",
        },
      ],

      faqs: [
        {
          type: "faq",
          title: "사전등록은 언제 시작되나요?",
          content: "7월중 예정입니다",
        },
        {
          type: "faq",
          title: "사전등록은 언제 시작되나요?",
          content: "7월중 예정입니다",
        },
        {
          type: "faq",
          title: "사전등록은 언제 시작되나요?",
          content: "7월중 예정입니다",
        },
        {
          type: "faq",
          title: "사전등록은 언제 시작되나요?",
          content: "7월중 예정입니다",
        },
      ],

      companies: [
        {
          name: "공주시",
          image: "ci-gongju.svg",
        },
        {
          name: "공주시대학교",
          image: "ci-gongjuuniv.svg",
        },
        {
          name: "공주대학교 산학협력관",
        },
      ],

      symbols: [
        {
          top: "40vh",
          left: "50%",
          width: "90vw",
          translate: "-50%, 0",
        },
        // {
        //   top: "1400px",
        //   left: "-60%",
        //   width: "70vw",
        // },
        // {
        //   top: "1600px",
        //   left: "95%",
        //   width: "70vw",
        // },
        // {
        //   top: "2600px",
        //   left: "55%",
        //   width: "45vw",
        // },
        // {
        //   top: "2400px",
        //   left: "15%",
        //   width: "230px",
        // },
        // {
        //   top: "3000px",
        //   left: "-20%",
        //   width: "80vw",
        // },
        // {
        //   top: "4200px",
        //   left: "70%",
        //   width: "600px",
        //   translate: "-50%, 0",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#index {
  // min-height: 4000px;
  background-color: $contest-yellow;
  // position: relative;
  // overflow: hidden;
  overflow-x: hidden;

  max-width: 100vw;

  .header-nav {
    position: fixed;
    z-index: 2999;
    top: 0;
    left: 0;
    // @media (max-width: $breakpoint-lg) {
    //   top: unset;
    //   bottom: 0;
    // }
    width: 100%;
    background-color: $contest-yellow;
    backdrop-filter: blur(6px);
    .nav-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .link-item {
        font-weight: 700;
        .nav-link {
          border: 1px solid $contest-pink;
          background-color: transparent;
          transition: all 0.2s $default-ease;
          border-radius: 40rem;
          color: $contest-pink;
          &.active {
            background-color: $contest-pink;
            color: white !important;
          }
        }
      }
    }
  }
}
#content {
  position: relative;
  z-index: 2;
  padding-top: 60vh;
  max-width: 100vw;
  overflow: hidden;
  .section {
    padding-bottom: 150px;
    @media (min-width: $breakpoint-md) {
      padding-bottom: 200px;
    }
    position: relative;
    z-index: 3;
  }
}

#symbols {
  pointer-events: none;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  img {
    pointer-events: none;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    @media (max-width: $breakpoint-md) {
      max-width: 700px;
    }
    height: auto;
    display: block;
  }
}

.circle-number {
  width: 24px;
  height: 24px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $contest-pink;
  font-weight: 800;
  color: $contest-pink;
  border-radius: 50%;
  margin-right: 0.75rem;
}
</style>
