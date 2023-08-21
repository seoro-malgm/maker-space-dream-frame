<template>
  <div id="index">
    <!-- gnb -->
    <global-nav-supporters :onScrolled="onScrolled" :auth="auth" />

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
    <!-- intro -->
    <div class="intro">
      <b-container fluid>
        <div class="px-2 px-md-4 px-lg-5">
          <img
            :src="require('@/assets/images/bg-supporters.png')"
            alt=""
            class="w-100"
          />
        </div>
      </b-container>
    </div>

    <!-- 내용 -->
    <div id="content">
      <div class="section pb-5">
        <b-container>
          <b-row>
            <b-col cols="12" md="7">
              <h2 class="text-suite fw-800 text-16 text-md-20">
                메이커스 꿈:틀 공주시 문화발굴단 서포터즈
              </h2>
              <p class="text-15 text-md-18">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                magnam sapiente nemo culpa architecto sed delectus aut doloribus
                nam? Itaque aliquid nihil consectetur enim eveniet quia minima
                ut sequi a?
              </p>
            </b-col>
            <b-col cols="12" md="5">
              <h2 class="text-suite fw-800 mt-3 mt-md-0 text-16 text-md-20">
                모집 기간
              </h2>
              <p class="text-28 text-md-48 fw-800 lh-100 text-suite">
                2023.09.01(금) ~
              </p>
              <span class="text-15 text-md-18">
                선발 완료시까지 상시 모집
              </span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <section class="section">
        <b-container>
          <section-title id="infos" titleClass="bg-supporters-orange border-0">
            모집 정보
          </section-title>
          <ul>
            <li
              v-for="(item, i) in infos"
              :key="i"
              class="mb-4 py-2 border-bottom"
            >
              <b-row>
                <b-col cols="4" md="3">
                  <strong class="text-supporters-orange text-15 text-md-20">{{
                    item.name
                  }}</strong>
                </b-col>
                <b-col cols="8" md="9">
                  <span class="text-15 text-md-18">
                    <template v-if="item?.contentType === 'html'">
                      <span v-html="item.content" />
                    </template>
                    <template v-else>{{ item.content }}</template>
                  </span>
                </b-col>
              </b-row>
            </li>
          </ul>
        </b-container>
      </section>
      <section class="section">
        <b-container>
          <section-title id="how" titleClass="bg-supporters-orange border-0">
            활동 정보
          </section-title>
          <div class="mb-4 pb-3 border-bottom">
            <header>
              <h2
                class="text-supporters-black fw-800 mt-3 mt-md-0 text-16 text-md-20"
              >
                활동 혜택
              </h2>
              <p class="text-28 text-md-48 fw-800 lh-110">
                🫢 콘텐츠 발굴비 지원 1팀당 50만원 <br />
                💪 총 5팀 모집
              </p>
              <small class="text-15 text-md-18">
                (* 세액 공제 후 최종 금액은 변동될 수 있습니다)
              </small>
            </header>
          </div>
          <div class="pb-4 mb-4 border-bottom">
            <h2
              class="text-supporters-black fw-800 mt-3 mt-md-0 text-16 text-md-20"
            >
              활동 방법
            </h2>
            <b-row class="my-4">
              <b-col cols="12" md="6">
                <div class="bg-supporters-orange rounded-lg p-4">
                  <h6 class="text-20 text-md-32">[공주 문화 가이드 만들기]</h6>
                  <p class="text-15 text-md-18">
                    나만 알고 싶은 공주시의 문화, 장소, 사람을 조사하여 제공되는
                    ‘가이드 라인’에 맞게 정리한 후 제출한다.
                  </p>
                </div>
              </b-col>
              <b-col cols="12" md="6">
                <div class="bg-supporters-orange rounded-lg p-4">
                  <h6 class="text-20 text-md-32">[나만의 공주 레포트]</h6>
                  <p class="text-15 text-md-18">
                    사진 혹은 글, 영상 등 다양한 방법을 활용한 레포트를 만들기
                  </p>
                </div>
              </b-col>
            </b-row>
            <p class="text-15 text-md-18">
              위 내용 택 1. 아래 가이드라인에 맞는 ‘원고 작성’ 후
              <a
                href="https://dada-lab.web.app/"
                target="_blank"
                class="btn mx-2 px-3 py-1 btn-supporters-orange text-supporters-black fw-700 rounded-pill"
                ><i class="icon icon-paper-plane"></i> 다재다능매거진</a
              >에 투고 다재다능매거진 사이트 주소:
              <a
                href="https://dada-lab.web.app/"
                target="_blank"
                class="text-white"
                >https://dada-lab.web.app/</a
              >
            </p>
          </div>
          <div class="mt-3">
            <h2
              class="text-supporters-black fw-800 mt-3 mt-md-0 text-16 text-md-20"
            >
              활동 가이드라인
            </h2>
            <p class="text-15 text-md-18">
              - 원고 2000자 내외
              <br />
              - 사진과 그림 및 데이터를 활용한 창의적인 구성

              <strong class="text-underline">카테고리 인터뷰(인물소개)</strong>,
              <strong class="text-underline">취재(문화탐방)</strong>,
              <strong class="text-underline">리뷰(핫플레이스)</strong>,
              <strong class="text-underline"> 정보(로컬자원) </strong>
              중, <br />
              한 원고당 2종 이상의 카테고리를 구성해야 함
            </p>
          </div>
        </b-container>
      </section>

      <section class="section pb-2">
        <b-container>
          <div class="d-flex align-items-end justify-content-between">
            <section-title
              id="contact"
              titleClass="bg-supporters-orange border-0"
            >
              참여하기
            </section-title>
            <div class="mb-4">
              <a
                href="https://forms.gle/ct6VivaXqHtCqeqs8"
                target="_blank"
                class="btn btn-supporters-black rounded-pill"
              >
                <span>새 창으로 열기</span>
                <i class="icon icon-edit" />
              </a>
            </div>
          </div>
          <google-form
            src="https://docs.google.com/forms/d/e/1FAIpQLSehCT_2OxoCQjA1WbYG9ZaL9uM4T05i83scBNtoMWJDWwVSvQ/viewform"
          />
        </b-container>
      </section>

      <section class="section">
        <b-container>
          <section-title id="faq" titleClass="bg-supporters-orange border-0">
            유의 및 참고사항
            <template #desc>
              <small class="text-white">
                유의사항 및 자주 묻는 질문들입니다
              </small>
            </template>
          </section-title>
          <div>
            <ul class="border-top border-white">
              <li
                v-for="(item, i) in faqs"
                :key="i"
                class="border-bottom border-white"
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
                  <div
                    class="p-3 border-top border-white bg-supporters-orange text-black"
                  >
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
          <section-title titleClass="bg-supporters-orange border-0">
            주최
          </section-title>
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
    </div>
  </div>
</template>

<script>
// import allCategories from "~/assets/json/allCategories";

export default {
  layout: "default",
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
          name: "모집 정보",
          path: "infos",
        },
        {
          name: "활동 정보",
          path: "how",
        },
        {},
        {
          name: "참여하기",
          path: "contact",
        },
        {
          name: "참고 및 유의사항",
          path: "faq",
        },
      ],

      infos: [
        {
          name: "활동 기간",
          content: "지원 선발 완료부터 활동 수행 완료시까지",
        },
        {
          name: "활동 목표",
          content:
            "공주시에 가치 있는 것들을 발굴, 탐구하여 소개하고 활성화를 돕는다",
        },
        {
          name: "참여 방법",
          content:
            "<div>하단의 <a href='#contact' class='btn mx-2 px-3 py-1 btn-supporters-orange text-supporters-black fw-700 rounded-pill'><i class='icon icon-paper-plane'></i> 참여하기</a>탭 참고</div>",
          contentType: "html",
        },
        {
          name: "참여 유의 사항",
          content: "해외여행 결격사유가 있는 자는 신청 불가",
        },

        {
          name: "우대사항",
          content: "공주 거주 시민, 공주 역사 문화에 관심이 많은 자",
        },
      ],

      faqs: [
        {
          type: "faq",
          title: "어떻게 참여해야 하나요?",
          content: "구글 폼 링크 혹은 위 사이트의 '참여하기'탭을 참고해주세요.",
        },
        {
          type: "faq",
          title: "언제까지 모집하나요?",
          content:
            "9월 1일부터 모집을 시작하며 모집 인원인 5팀 모집 전까지 상시 모집합니다!",
        },
        {
          type: "faq",
          title: "어떤 절차로 모집되나요?",
          content: "신청 폼에 작성해주신 연락처로 개별연락하게 됩니다.",
        },
        {
          type: "faq",
          title: "활동은 어떻게 해야하나요?",
          content:
            "선정된 서포터즈는 가이드라인 형식에 '다재다능매거진'사이트에 원고를 투고하여 활동을 진행합니다.",
        },
        {
          type: "유의사항",
          title: "신청 불가 조건이 있을까요?",
          content: "해외여행 결격사유가 있는 자는 신청이 불가합니다.",
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
    };
  },
};
</script>

<style lang="scss" scoped>
#index {
  // min-height: 4000px;
  background-color: $supporters-green;
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
    background-color: $supporters-green;
    backdrop-filter: blur(6px);
    .nav-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .link-item {
        font-weight: 700;
        .nav-link {
          border: 1px solid $supporters-orange;
          background-color: transparent;
          transition: all 0.2s $default-ease;
          border-radius: 40rem;
          color: $supporters-black;
          &.active {
            background-color: $supporters-orange;
            color: white !important;
          }
        }
      }
    }
  }
}
.intro {
  position: relative;
  z-index: 1000;
  padding-top: 100px;
  @media (min-width: $breakpoint-md) {
    padding-bottom: 120px;
  }
}
#content {
  position: relative;
  z-index: 2;
  max-width: 100vw;
  overflow: hidden;
  color: white;
  .bg-white {
    color: $darkest;
  }
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
  border: 2px solid $white;
  font-weight: 800;
  color: $white;
  border-radius: 50%;
  margin-right: 0.75rem;
}
</style>
