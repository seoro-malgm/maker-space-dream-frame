<template>
  <div>
    <marquee-text text="DIVE into DIGITAL HERITAGE" class="mt-1" />
    <!-- 관람 안내 -->
    <section class="section-gap my-0 pb-2 border-bottom border-black">
      <!-- <header-underbar title="관람 안내" id="관람_안내" variant="sub-2" /> -->

      <div class="info-carousel">
        <client-only>
          <carousel
            :perPage="1"
            :paginationEnabled="true"
            :paginationPadding="5"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="false"
            :autoplayTimeout="3000"
            :paginationActiveColor="intros[introIndex]?.variant"
            v-model="introIndex"
          >
            <slide
              v-for="(item, i) in intros"
              :key="i"
              class="bg-img ratio-sm-160 ratio-45"
              :style="{ minHeight: '80vh', backgroundColor: `${item.variant}` }"
            >
              <article class="intro-article">
                <b-row align-h="end">
                  <b-col cols="10" md="8" lg="5" class="bg-white">
                    <div class="p-3">
                      <header class="pb-2 mb-2 border-bottom">
                        <h3 class="text-18 text-md-24">
                          {{ item.title }}
                        </h3>
                      </header>
                      <p class="text-15 text-md-20">
                        {{ item.desc }}
                      </p>
                    </div>
                  </b-col>
                </b-row>
              </article>
            </slide>
          </carousel>
        </client-only>
      </div>
    </section>
    <marquee-text text="DIVE into DIGITAL HERITAGE" class="mt-1" />

    <!-- !관람 안내 -->
    <!-- 일정 안내 -->
    <section class="section-gap">
      <header-underbar title="일정 안내" id="일정_안내" variant="sub-2" />
      <b-row class="mx-0">
        <b-col cols="4" md="4" class="px-0">
          <header
            class="py-2 border-top border-bottom border-black text-center"
          >
            <h4 class="text-black-han text-24 text-md-40">10월 6일(금)</h4>
          </header>
        </b-col>
        <b-col
          cols="4"
          md="4"
          class="px-0 border-left border-right border-black"
        >
          <header
            class="py-2 border-top border-bottom border-black text-center"
          >
            <h4 class="text-black-han text-24 text-md-40">10월 6일(토)</h4>
          </header>
          <!-- <section class="p-3 border-bottom calendar-wrap">
           <ul class="list-calendar">
              <li
                class="calendar-item"
                v-for="(item, i) in calendar.third"
                :key="i"
              ></li>
            </ul>
          </section> -->
        </b-col>
        <b-col cols="4" md="4" class="px-0">
          <header
            class="py-2 border-top border-bottom border-black text-center"
          >
            <h4 class="text-black-han text-24 text-md-40">10월 6일(일)</h4>
          </header>
        </b-col>
        <b-col
          cols="12"
          class="px-0 position-relative d-flex justify-content-center"
        >
          <section
            class="col-4 border-left border-right border-black"
            :style="{ height: `${calendarHeight}px`, zIndex: 10 }"
          />
          <client-only>
            <section class="p-3 border-bottom calendar-wrap" ref="calendar">
              <ul class="list-calendar">
                <li
                  class="calendar-item"
                  v-for="(item, i) in calendar"
                  :key="i"
                  :style="{
                    width: `${item.length * 33.3}%`,
                    marginLeft: `${item.startDate * 33.3}%`,
                  }"
                  :class="`bg-${item?.variant || 'primary'}`"
                >
                  <span class="text-15 text-md-18 text-nowrap">
                    {{ item.title }}
                  </span>
                </li>
              </ul>
            </section>
          </client-only>
        </b-col>
      </b-row>
      <caption class="text-13 text-md-14 text-gray-500 text-nowrap p-1">
        * 행사일정은 변경될 수 있습니다
      </caption>
    </section>
    <!-- !일정 안내 -->
    <!-- 전시 구성 -->
    <section class="section-gap mb-0">
      <header-underbar title="전시 구성" id="전시_구성" variant="sub-2" />
      <div class="d-flex justify-content-center">
        <b-form-group>
          <b-form-radio-group
            v-model="viewMap"
            :options="[
              { text: '맵으로 보기', value: true },
              { text: '목록으로 보기', value: false },
            ]"
            size="lg"
            buttons
            button-variant="outline-black"
          />
        </b-form-group>
      </div>
      <b-row align-v="stretch" class="mx-0 border border-black">
        <b-col
          cols="2"
          lg="1"
          class="p-0 border-right border-black border-collapse"
        >
          <div
            class="p-3 d-flex align-items-center justify-content-center h-100"
          >
            <b-form-group>
              <b-form-radio-group
                v-model="selectedFloor"
                :options="floors"
                size="lg"
                buttons
                stacked
                button-variant="outline-black text-15 text-md-18"
              />
            </b-form-group>
          </div>
        </b-col>
        <b-col cols="10" lg="11" class="p-0 border-black border-collapse">
          <div class="p-3 p-md-5 position-relative">
            <transition name="floor-change" mode="out-in">
              <div
                v-for="(item, i) in maps"
                :key="i"
                v-if="i + 1 === selectedFloor"
              >
                <div
                  class="bg-img ratio-40 img-contain bg-gray-100"
                  :style="{
                    backgroundImage: `url(${item.map})`,
                  }"
                  v-if="viewMap"
                />
                <template v-else>
                  <div class="border-top border-left border-right border-black">
                    <div
                      v-for="(item2, l) in item.lists"
                      :key="l"
                      class="py-2 border-bottom border-black"
                    >
                      <b-row align-v="center">
                        <b-col cols="1">
                          <div
                            class="mx-3 d-inline-flex align-items-center justify-content-center bg-black text-white fw-700 rounded-circle p-3"
                          >
                            {{ item2.position }}
                          </div>
                        </b-col>
                        <b-col cols="6">
                          <h6 class="text-15 text-md-20">
                            {{ item2.name }}
                          </h6>
                        </b-col>
                        <b-col cols="3">
                          <div class="mx-3">
                            {{ item2.type }}
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </template>
              </div>
            </transition>
          </div>
        </b-col>
      </b-row>
    </section>
    <!-- !전시 구성 -->

    <!-- 참여 업체 -->
    <!-- <section class="section-gap">
      <header-underbar title="참여 업체" id="참여_업체" variant="sub-2" />
    </section> -->
    <!-- !참여 업체 -->
    <!-- 플로팅버튼 -->
    <btn-floating
      :position="{
        bottom: onScrolled ? '2.5rem' : '-4rem',
        right: '1.5rem',
      }"
      variant="sub-2 text-white"
      @click="$router.push('/pre-register')"
    >
      <template #content>
        <span class="mx-1 fw-700 text-15 text-md-16">사전등록 하러가기</span>
        <i class="icon icon-right-big" />
      </template>
    </btn-floating>
  </div>
</template>

<script>
export default {
  props: {
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      introIndex: 0,
      intros: [
        {
          variant: "#11997c",
          title: "산업",
          desc: "제4차 산업혁명과 팬데믹 상황은 문화유산의 보존과 활용에 있어 디지털 기술의 개입이 매우 중요함을 보여줬습니다. 물리적으로 만나는 문화유산을 넘어 이제는 다양한 첨단 기술을 통해 디지털 환경에서 만나는 문화유산도 우리에게 소중한 보존과 활용 가치를 전해주고 있습니다. 3차원 스캐너 및 프린터 등의 디바이스, 빅데이터와 AI 기술을 이용한 솔루션, 가상·증강현실과 메타버스 등의 콘텐츠를 통해 문화유산의 새로운 가치를 느껴보시기 바랍니다.",
        },
        {
          variant: "#9b7455",
          title: "연구개발",
          desc: "제4차 산업혁명 시대를 살아가는 지금, 문화유산 보존과 활용의 뉴패러다임은 디지털 연구개발에 있습니다. 다수의 기관과 대학들은 문화유산의 기록, 분석, 진단, 모니터링, 복원, 복제, 플랫폼, 빅데이터, AI 솔루션, 콘텐츠 기획·제작 등 다양한 연구를 진행하고 있습니다. 매년 관련 연구자들이 증가하고 있고, 다수의 기관에서 디지털 문화유산 관련 다양한 연구개발을 기획하고 진행하고 있는 만큼 미래가치를 위한 핵심기술 개발에 앞장서고자 합니다.",
        },
        {
          variant: "#cc2055",
          title: "미래교육",
          desc: "미래의 디지털 문화유산은 일상생활 속에서 다양한 기술력으로 과거와 현재를 잇는 가치 창출과 문화유산 인프라 구축을 위한 신산업으로 확장될 것입니다. 이러한 문화유산의 지속성을 위해서는 MZ 세대들에게 우리의 역사와 최신 디지털 기술을 융합할 수 있는 하이브리드형 교육에 앞장서야 합니다. VR, AR, 게임 메이킹, 드론·로봇 코딩, 메타버스 등을 문화유산과 연결하면 우리의 문화유산은 다음 세대에 자연스럽게 전승될 수 있습니다.",
        },
        {
          variant: "#f5b442",
          title: "부대행사",
          desc: "문화유산 상품마켓·체험, 푸드트럭, 무형문화재 공연, 버스킹공연, 야간 미디어파사드 등",
        },
      ],
      calendarHeight: null,
      calendar: [
        {
          title: "행사3",
          startDate: 0,
          length: 3,
          variant: "gray-200",
        },
        {
          title: "문화유산상품마켓•체험",
          startDate: 1,
          length: 1.2,
          variant: "gray-200",
        },
        {
          title: "행사2",
          startDate: 0,
          length: 2,
          variant: "gray-200",
        },
        {
          title: "행사3",
          startDate: 0,
          length: 3,
          variant: "gray-200",
        },
        {
          title: "행사4",
          startDate: 2,
          length: 1,
          variant: "gray-200",
        },
      ],
      viewMap: true,
      selectedFloor: 1,
      floors: [
        {
          text: "야외",
          value: 4,
        },
        {
          text: "3F",
          value: 3,
        },
        {
          text: "2F",
          value: 2,
        },
        {
          text: "1F",
          value: 1,
        },
      ],
      maps: [
        {
          map: require("@/assets/dummy.png"),
          lists: [
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
          ],
        },
        {
          map: require("@/assets/dummy.png"),
          lists: [
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
          ],
        },
        {
          map: require("@/assets/dummy.png"),
          lists: [
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
          ],
        },
        {
          map: require("@/assets/dummy.png"),
          lists: [
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
            {
              position: "A-1",
              name: "업체명",
              type: "업종",
            },
          ],
        },
      ],
    };
  },
  async mounted() {
    await this.$nextTick();
    this.calendarHeight = this.$refs?.calendar?.offsetHeight;
  },
};
</script>

<style lang="scss" scoped>
.info-carousel {
  // height: 100vh;
  // max-height: calc(100vh - 75px);
  position: relative;
  .intro-article {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.calendar-wrap {
  position: absolute;
  width: 100%;
  z-index: 2;
  .calendar-item {
    padding: 0.75rem 1rem;
    border-radius: 4px;
    margin-bottom: 8px;
    min-width: 88px;
    > span {
      background-color: white;
      padding: 0.5rem 0.85rem;
      font-weight: 700;
      border-radius: 15rem;
      display: inline-block;
    }
  }
}

.floor-change-enter-active,
.floor-change-leave-active {
  transition: all 0.3s;
}
.floor-change-enter, .floor-change-leave-to /* .floor-change-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
