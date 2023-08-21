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
                공주시를 더 공주시답게 만들기 위해서 특별한 릴스 영상 공모전을
                개최합니다. 공주시 문화&관광 자원들을 활용하여, 다양하고
                창의적인 주제로 <strong>공주의 모습을 만들어보세요~!</strong>
              </p>
            </b-col>
            <b-col cols="12" md="7">
              <h2 class="text-suite fw-800 mt-3 mt-md-0 text-16 text-md-20">
                공모기간
              </h2>
              <p class="text-28 text-md-48 fw-800 lh-100 text-suite">
                2023.8.14.(월) ~ 11.03.(금)
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <section class="section">
        <b-container>
          <section-title id="infos"> 공모전 개요 </section-title>
          <article>
            <div class="mb-4" v-for="(item, i) in infos" :key="i">
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
              <span class="text-20 text-md-28 mt-1 mb-0 fw-800">
                총 600만원 상당
              </span>
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
                양식의(1080*1920px) 크기. 1분 이하의 영상을 제작한다.
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">2</span>
                해시태그 빠밤!
                <strong>#프린세스메이커공모전 #공주시 #장소 #행사</strong>를
                추가한다.
                <div>
                  EX)
                  #프린세스메이커공모전#공주시#공주시맛집#공주시핫플#대백제전#신관동#제민천청년기업탐방
                </div>
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">3</span>
                공모 전용 인스타그램계정
                <strong>{{ profile.sns }}</strong> 언급
              </li>
              <li class="text-16 text-md-20 mb-3">
                <span class="circle-number">4</span> 해시태그와 계정을 모두 추가
                및 언급 했다면, 업로드하는 것으로 참여 완료!
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

                <b-collapse :id="`faq-${i}`" role="tabpanel">
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
          <article class="position-relative">
            <b-row class="mx-n2">
              <b-col cols="4" v-for="(item, i) in 3" :key="i" class="px-2">
                <div class="bg-img ratio-100 bg-contest-pink mb-2" />
              </b-col>
            </b-row>
            <div
              class="text-16 text-md-18 position-absolute fw-700 text-center"
              :style="{ top: '50%', left: '50%', transform: 'translate(-50%)' }"
            >
              준비중입니다 <br />
              (11월 말일 공개 예정)
            </div>
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
                  href="https://www.instagram.com/princessmaker2023/"
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
            <b-row align-v="center" class="mx-md-n5">
              <b-col
                cols="4"
                md="3"
                class="text-center px-md-5"
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
            <div class="text-13 text-md-15">
              인스타그램 공식계정
              <strong>{{ profile?.sns }}</strong>
              으로 DM문의 혹은
              <strong>{{ profile?.email }}</strong>
              으로 메일 문의
            </div>
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
      profile: {
        email: "princessmaker2023@gmail.com",
        sns: "@princessmaker2023",
      },
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
          name: "공모 분야",
          content:
            "공주를 배경으로 한 코레오그래피, 공주 V-LOG, 공주 여행 꿀팁, 공주 생생 정보, 공주 음식 먹방 등의 영상",
        },
        {
          name: "참여 대상 조건",
          content: "나이 불문, 지역 불문, 개인 혹은 2인 이상의 팀 구성 참여",
        },
        {
          name: "평가 기준",
          content:
            "공주와 관련성, 영상 좋아요 수, 창의성, 퀄리티 각각 25% 비율로 평가",
        },
        {
          name: "수상자 선정",
          content: "신청자에 한하여, 업로드한 인스타그램 계정으로 DM 개별 통보",
        },
        {
          name: "시상식",
          content: "11월 30일",
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
          title: "어떻게 참여해야 하나요?",
          content:
            "참여 안내에 따라, 개인 인스타그램 계정으로 릴스 영상을 업로드하시면 됩니다!",
        },
        {
          type: "faq",
          title: "참여자 조건이 따로 있나요?",
          content:
            "나이 불문, 지역 불문,개인 혹은 2인 이상의 팀 구성하여 참여가 가능합니다. 참! 인스타그램 계정이 없다면 참여 할 수 없겠네요.",
        },
        {
          type: "faq",
          title: "어떻게 수상 여부를 알 수 있나요?",
          content:
            "11월 말, 선별 과정을 거쳐 수상자에게 개별 연락을 통해 발표됩니다.",
        },
        {
          type: "faq",
          title: "공모전 시상작은 어디에 사용되나요?",
          content:
            "공주 시청과 공주대학교 산학협력단에 저작권이 귀속되며, 공주 시청 홍보팀에서 활용할 수 있습니다.",
        },
        {
          type: "faq",
          title: "시상식은 어떻게 이루어지나요?",
          content:
            "11월 말, 수상 발표를 개별적으로 전달함과 동시에 시상식 내용을 안내해 드리도록 하겠습니다. *시상식에 참여해야만 수여가 가능합니다.",
        },
        {
          type: "faq",
          title: "평가 기준이 어떻게 되나요?",
          content:
            "공주와의 관련성, 영상 좋아요 수, 창의성, 퀄리티 각각 25% 비율로 평가합니다.",
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
          image: "ci-kiucf.svg",
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
