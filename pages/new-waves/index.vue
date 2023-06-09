<template>
  <div class="bg-black text-white pb-5">
    <!-- intro -->
    <section class="intro" :class="{ loading: !intro }">
      <video
        :poster="require('@/assets/video/newwaves-intro-poster.png')"
        autoplay
        loop
        muted
        playsinline
        controlsList="nodownload"
      >
        <source
          :src="require('@/assets/video/newwaves-intro.mp4')"
          type="video/mp4"
        />
      </video>
      <header class="intro-header">
        <b-row align-h="center" align-v="center" class="flex-md-column">
          <b-col cols="11" md="3">
            <img
              :src="require('@/assets/newwaves-logo-horizon.svg')"
              class="w-100"
              alt="뉴 웨이브 로고"
            />
          </b-col>
          <b-col cols="10" md="9" class="mt-3">
            <p class="text-16 text-md-20 text-center">
              지역 예술가를 공헌하는 서비스, 뉴 웨이브
            </p>
          </b-col>
        </b-row>
      </header>
    </section>
    <!-- about -->
    <b-container tag="section" class="about mt-0 mb-5">
      <b-row class="flex-column flex-md-row">
        <b-col cols="9" md="6">
          <img
            :src="require('@/assets/newwaves-symbol.svg')"
            alt="뉴웨이브 심볼"
            class="w-100"
            :style="{
              transform: `translate(${mousePosition.x / 20}px, ${
                mousePosition.y / 20 - 120
              }px)`,
              transition: 'transform 0.2s ease-out',
            }"
          />
        </b-col>
        <b-col>
          <div class="p-3">
            <p class="text-14 text-md-16 lh-180">
              NEW WAVES는 공주살롱에서 지역예술가들을 SAVE 하기위한
              서비스입니다. <br />
              공주살롱에서 커피로 발생한 수입의 1/4는 지역 예술가들의 공연에
              사용됩니다. <br />
              "뉴 웨이브" 서비스는 장소를 대여해주는 것 뿐만 아니라, 브랜딩 및
              홍보 마케팅, 4K 화질의 영상으로 아카이빙까지. 지역 예술가들의
              새로운 파도를 일으킵니다!
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- !about -->
    <b-container tag="section">
      <header
        class="d-flex flex-column flex-md-row justify-content-md-between mb-4"
      >
        <h2 class="text-24 text-md-32 mb-2">
          <span class="text-newwaves">New Waves</span> Artists
        </h2>
        <p class="d-flex align-items-center">
          <span class="mr-2">
            유튜브채널에서 공연을 다시 보실 수 있습니다
          </span>
          <a
            :href="$store.state.urls.youtube"
            class="btn btn-outline-gray-200 rounded-pill px-3 py-2"
            target="_blank"
          >
            <i class="icon icon-youtube-play mr-1" />
            공주살롱
          </a>
        </p>
      </header>
      <b-row class="mx-1">
        <b-col
          cols="6"
          md="4"
          v-for="(item, i) in items"
          :key="i"
          class="mb-2 px-1"
        >
          <figure class="image-wrapper ratio-100">
            <img :src="item?.image.url" :alt="`${item?.name} 대표 이미지`" />
          </figure>
          <figcaption class="py-2" v-if="item?.name || item?.summary">
            <h6 v-if="item?.name" class="mb-1 text-truncate">
              {{ item.name }}
            </h6>
            <span
              v-if="item?.summary"
              class="text-13 text-gray-600 text-truncate"
            >
              {{ item.summary }}
            </span>
          </figcaption>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="py-5">
      <b-row class="pb-5" align-h="center">
        <b-col cols="10" md="8" lg="5">
          <h4
            class="text-48 text-md-56 mb-4 lh-135 text-center d-flex flex-column"
          >
            <div class="mb-1">혹시</div>
            <text-changer
              :items="[
                '공연할 곳이',
                '예술가 홍보가',
                '예술가 후원이',
                '영상 아카이빙이',
                '공연 기회가',
                '실력 뽐내기가',
              ]"
              textVariant="#00ffe6"
              borderVariant="#ffffff"
            />
            <div class="mt-2">필요하신가요?</div>
          </h4>
          <div class="border border-white rounded-lg p-3">
            <div class="my-3">
              <h6
                class="text-18 text-md-28 text-center pb-3 mb-4 border-bottom border-white"
              >
                <span class="text-newwaves">NEW WAVES</span> 서비스
              </h6>
              <div class="px-3">
                <ul class="list-styled text-16 text-18">
                  <li class="my-4 my-md-3">
                    <div class="d-inline-flex flex-wrap">
                      <span>공연 및 이벤트 당일 장소 대관료</span>
                      <div class="position-relative">
                        <span class="custom-tooltip">
                          공주살롱 2시간 전체 대관료
                        </span>
                        <span class="text-strike text-gray-600 mx-2">
                          400,000원
                        </span>
                      </div>
                      <strong class="text-newwaves"> 0원 </strong>
                    </div>
                  </li>
                  <li class="my-4 my-md-3">
                    아티스트 본인, 팀 전원
                    <strong class="text-newwaves"
                      >전 메뉴 언제나 10% 할인</strong
                    >
                  </li>
                  <li class="my-4 my-md-3">굿즈 판매(선택)</li>
                  <li class="my-4 my-md-3">공연 당일 LIVE 송출</li>
                  <li class="my-4 my-md-3">4K 라이브 영상 아카이빙</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <b-btn
              variant="newwaves w-100 text-primary text-18 text-md-24"
              pill
              to="/new-waves/contact"
            >
              신청하기
            </b-btn>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ app, query, store }) {
    const { getBoardItem, getAllBoardItems } = app.$firebase();
    const [items] = await Promise.all([getAllBoardItems("new-waves-artist")]);
    // console.log("items:", items);
    return {
      items,
    };
  },
  data() {
    return {
      intro: "",
      mousePosition: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    // 마우스 핸들러
    window.addEventListener("mousemove", this.onMouseMove);
  },
  beforeDestroy() {
    // 마우스 핸들러 해제
    window.removeEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(e) {
      // console.log('e:', e)
      this.mousePosition = {
        x: e.x,
        y: e.y,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
section.intro {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 210px);
  object-fit: cover;
  video {
    width: 100%;
    height: auto;
    @media (max-width: $breakpoint-lg) {
      height: 100%;
      width: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
  .intro-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 3;
  }
}

.custom-tooltip {
  top: -1.7rem;
  text-decoration: none;
  position: absolute;
  white-space: nowrap;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: $newwaves;
  color: rgba($color: #000000, $alpha: 0.7);
  padding: 0.25rem 0.5rem;
  font-size: 13px;
  border-radius: 0.2rem;
  opacity: 0.8;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: $newwaves;
    border-bottom: 0;
    margin-left: -10px;
    margin-bottom: -10px;
  }
  @media (max-width: $breakpoint-md) {
    top: unset;
    bottom: -1.4rem;
    &:after {
      top: 0;
      left: 50%;
      border: 8px solid transparent;
      border-bottom-color: $newwaves;
      border-top: 0;
      margin-left: -8px;
      margin-top: -8px;
    }
  }
}
</style>
