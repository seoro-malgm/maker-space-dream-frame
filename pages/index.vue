<template>
  <div>
    <!-- gnb -->

    <div v-if="!user">
      <div
        class="bg-primary d-flex align-items-center justify-content-center py-2"
      >
        <span class="text-1">아직 가입 안하셨나요? 지금 가입하세요 </span>
        <b-btn variant="white text-1 ml-2" pill to="/auth/signup">
          회원가입하기
        </b-btn>
      </div>
    </div>

    <b-container class="mt-3 mb-5 pb-5">
      <!-- <section class="section-intro"> -->
      <!-- <client-only>
        <carousel
          :perPage="1"
          :navigationEnabled="false"
          :paginationEnabled="false"
          :autoplay="true"
          :loop="true"
        >
          <slide v-for="slide in slides" :key="slide">
            
          </slide>
        </carousel>
      </client-only> -->
      <!-- <div class="bg-img w-100 ratio-40 ratio-sm-70">
          <img :src="require('@/assets/intro.png')" alt="" />
        </div> -->
      <!-- </section> -->
      <b-row>
        <b-col cols="12" md="5" lg="4" class="mb-4">
          <section class="d-none d-md-block mb-4">
            <b-input-group>
              <b-form-input class="border" :placeholder="searchPlaceholder" />
              <template #append>
                <b-btn>
                  <i class="icon icon-search"></i>
                </b-btn>
              </template>
            </b-input-group>
          </section>
          <section class="mt-3 mb-4 mb-md-5">
            <header class="mb-2 text-center text-md-left">
              <h5 class="bg-flow pr-1 text-2">
                Hot Topics
                <svg-line-path />
              </h5>
              <strong class="fw-700 d-block">인기 글</strong>
            </header>
            <ul class="list-unstyled">
              <li class="mb-2 py-2 border-bottom">글1</li>
              <li class="mb-2 py-2 border-bottom">글1</li>
              <li class="mb-2 py-2 border-bottom">글1</li>
              <li class="mb-2 py-2 border-bottom">글1</li>
              <li class="mb-2 py-2 border-bottom">글1</li>
            </ul>
          </section>
          <section class="mt-3 mb-4 mb-md-5">
            <header class="mb-2 text-center text-md-left">
              <h5 class="bg-flow pr-1 text-2">
                Hot Tags
                <svg-line-path />
              </h5>
              <strong class="fw-700 d-block">인기 태그</strong>
            </header>
            <ul class="list-unstyled d-inline-flex flex-wrap">
              <li class="mr-2 mb-2 border rounded-pill px-3 py-2 text-nowrap">
                #태그
              </li>
              <li class="mr-2 mb-2 border rounded-pill px-3 py-2 text-nowrap">
                #태그
              </li>
              <li class="mr-2 mb-2 border rounded-pill px-3 py-2 text-nowrap">
                #태그
              </li>
              <li class="mr-2 mb-2 border rounded-pill px-3 py-2 text-nowrap">
                #태그
              </li>
              <li class="mr-2 mb-2 border rounded-pill px-3 py-2 text-nowrap">
                #태그
              </li>
            </ul>
          </section>
        </b-col>
        <b-col cols="12" md="7" lg="8">
          <section class="mb-4 mb-md-5">
            <header class="mb-2 text-center text-md-left">
              <h1 class="bg-flow text-2 text-lg-4 pr-1">
                New Waves
                <svg-line-path />
              </h1>
              <strong class="text-1 text-lg-2 d-block">최신 글</strong>
            </header>
            <ul class="list-unstyled">
              <li v-for="(item, i) in items" :key="i">
                <article-item :item="item" />
              </li>
            </ul>
          </section>
          <div class="text-center mt-5">
            <b-btn
              variant="outline-light"
              class="btn-arr-right px-4"
              pill
              @click="getItems"
            >
              <span class="text-1 fw-700">More Waves</span>
              <i class="icon icon-right-big text-1" />
            </b-btn>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- <hr class="hr" /> -->

    <!-- <b-container class="pb-5">
      <section>
        <header class="section-header">
          <div>
            <h1 class="bg-flow text-4 pr-2">
              Discussions
              <svg-line-path />
            </h1>
            <div>더 나은 세상을 위해 토론하기</div>
          </div>
        
        </header>
        <b-row class="pt-3" align-v="center">
          <b-col cols="12" md="6">
            <div class="bg-img bg-lightest rounded-circle">토론 이미지</div>
          </b-col>
          <b-col cols="12" md="6">
            <article>
              <header class="py-3 mb-2">
                <h2 class="text-2 text-md-4">AI는 도구가 될 수 있을까요?</h2>
              </header>
              <p class="text-1 lh-180 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                ad veritatis laboriosam? Provident dolore quo magnam tempore
                nam. Unde distinctio rem iusto sed vero harum sint eius illo.
                Eos, earum!
              </p>
              <group-tags :tags="['지역', '경제']" />
            </article>
          </b-col>
        </b-row>
      </section>

      <section class="mt-5">
        <section class="mb-5">
          <discuss-item :items="discussItems"></discuss-item>
        </section>
        <div class="text-center">
          <b-btn
            variant="outline-light"
            class="btn-arr-right px-4"
            pill
            to="/discussion"
          >
            <span class="text-2 fw-700">More Discussions</span>
            <i class="icon icon-right-big text-2" />
          </b-btn>
        </div>
      </section>
    </b-container>
    <section class="my-5">
      <marquee-bar :items="allTags" variant="primary" />
      <b-container class="my-5 py-5">
        <b-row align-v="center" align-h="center" class="my-lg-5">
          <b-col cols="12" md="8" order="1" order-md="0">
            <div class="py-3 px-lg-4">
              <h3 class="mb-2 text-2 text-lg-3 bg-flow pr-0 pt-2 pt-md-0">
                토론하고 싶은 주제가 있나요?
                <svg-line-path />
              </h3>
              <p class="text-1 text-md-1 my-4">
                토론에 참여하세요 주제신청이 가능합니다 Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iure quod facilis nobis
                voluptatibus necessitatibus, eaque eius quaerat velit illo,
                placeat obcaecati numquam iusto consectetur labore! dolor unde
                reiciendis!
              </p>
              <b-row>
                <b-col cols="12" lg="8">
                  <discuss-apply-form />
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="10" md="4" order="0" order-md="1">
            <div class="bg-img bg-lightest rounded-circle">토론 이미지</div>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
  </div>
</template>

<script>
export default {
  layout: "default",
  components: {},
  // async asyncData({ app, $firebase }) {
  //   const items = await $firebase().getAllArchiveItems(null, 9);
  //   return {
  //     items,
  //   };
  // },
  data() {
    return {
      items: [
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail: null,
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title:
            "공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title:
            "공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail: null,
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail: null,
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
        {
          id: "YLvrDAPuhIw0K9b9EnHJ",
          like: 0,
          createdAt: {
            seconds: 1677682043,
            nanoseconds: 763000000,
          },
          title: "공주시에도 개발자가 있습니다.",
          desc: '<p>&nbsp;여러분들은 첫 근로소득이 무엇인가요? 저는 고향인 공주시에 있을 때, 공주대학교 홈페이지의 \'곰나루광장\'이라는 게시판에 \'사진을 보정해 드립니다\'라고 올려 장당 2만 원씩 받아 프로필사진과 이력서 사진을 수정해 준 것이 저의 첫 소득이었습니다. 이게 가능했던 건 두 가지 조건이 있었기 때문입니다. 첫째로, 제가 고깃집, 술집과 같이 손님을 위한 서비스 업무 수행에 적합한 인간이 아니라는 것을 금방 체득했기 때문입니다.&nbsp;둘째로,&nbsp;<strong>공주대학교에 시각디자인과가 없었다는 것입니다. 포토샵을 할 줄 아는 사람이 적었다는 것이죠.</strong>&nbsp;게다가&nbsp;졸업을 앞둔 학생들이&nbsp;동네사진관을 선호하지 않았습니다. \'공주시에도 사진 보정을 잘하는 사람이 있다면 좋을 텐데!\'라는 수요가 많았단 것이죠.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;이게 벌써 10년 전의 이야기입니다. 그리고 저는 이번 2월 1일에 공주에 이주하여 지내고 있습니다. 서울에서 마저하던 일도 하고 있고, 공주에서 한 사회적 기업에 합류하여 일을 함께하고 있습니다. 제가 합류한 사회적 기업과 하고 있는 프로젝트들은 추후 더 자세히 다루려고 합니다. 이번 글에서 다루려고 하는 것은 출사표가 아니라&nbsp;<strong>아쉬움</strong>입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;앞서 대학교 졸업생들이 사진 보정을 할 줄 아는 전문가가 있길 바랐던 것처럼, 공주시에서는 (다른 지방들과 비슷하겠지만) 개발자가 부족합니다. 시 안의 IT관련 기업도 손에 꼽으며 웹, 앱, 프런트엔드, 백엔드를 따지기도 전에 전분야의 개발자가 없다시피 합니다. 그런데 문제는&nbsp;<strong>개발자에 대한 수요는 있다는 것에서 발생합니다.</strong>&nbsp;공주에서 지낸 지 한 달 채 되지 않았지만 그 수요를 느낄 수 있었습니다.&nbsp;자사몰을 구축하고 싶다거나, 뉴스레터 혹은 웹진을 만들고 싶다거나, 포트폴리오 사이트를 만들고 싶다거나, 회사 소개 홈페이지를 만들고 싶어 하는 곳들을 보았습니다. 심지어 공주시 내의 지역축제, 공공기관의 웹사이트 제작 공모도 종종 시청 공지사항에 올라옵니다. 이 수요의 점을 찍어 모으면 지평선이 만들어질 것입니다.</p><p><br></p><p><br></p><p>&nbsp;&nbsp;그렇게 그분들은 타 지역의 업체에 외주를 주게 됩니다.&nbsp;듣기로는 갈길을 잃은 그 모든 프로젝트들이&nbsp;서울, 대전, 세종 등의 업체에 의뢰합니다. 그리고 오프라인 미팅을 선호하시기 때문에, 미팅을 하려고&nbsp;서울까지 올라가십니다.&nbsp;<strong>공주시 내의 돈이 마을 밖에서 소비되는 것입니다.</strong></p><p><br></p><p><br></p><h3><strong>&nbsp;&nbsp;"공주시에 대해 잘 아는 것 같지도 않고...</strong></h3><h3><strong>어떻게 와서 미팅을 한 건데, 잘 만들어지는 것 맞아?"</strong></h3><p>&nbsp;&nbsp;정보에 대한 격차가 심하다는 점에서도 안타까움이 깊어집니다. 무슨 말인지 모르는 IT 지식들을 어떻게든 검색하여 DNS, 호스팅, 도메인, 반응형 웹, 쇼핑몰, 스마트 등을 습득한 뒤 아웃소싱 사이트를 찾아 겨우 외주를 맡긴 것인데 제대로 계약한 게 맞는지, 유지보수는 제대로 해주는 건지, 어떻게 만들어준다는 것인지 이해하기 어렵습니다.</p><p><br></p><h3><strong>&nbsp;&nbsp;"여긴 기획서도 없고 왜 자꾸 말이 달라지지?"</strong></h3><p>&nbsp;&nbsp;그리고 정보의 심한 격차를 느끼는 건 프로젝트를 수주받은 회사도 마찬가지입니다. 모든 SI 업체가 그러진 않겠으나 잘 정리된 기획서를 전달받질 못하고&nbsp;회의 때마다 아이디어가 달라지는 데다가, 개발 도중에 기능이 추가 및 수정되는 일이 잦다고 느껴버리고 맙니다.</p><p>&nbsp;&nbsp;개발 업체 입장에서는 여러 프로젝트를 동시에 진행하는 일이 많은데 지방도시의 프로젝트 하나에 깊은 애정을 갖고 작업에 임하기 어렵습니다(개발 단가까지 낮다고 생각하기에).</p><p><br></p><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&amp;token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d"></p><p><br></p><p>&nbsp;&nbsp;그래서 저는 개발자가 있다고 떠들며 지낼 생각입니다.</p><p><strong>공주시에도 개발자가 있습니다. 그게 바로 접니다!</strong></p><p><br></p><p>&nbsp;&nbsp;공주시 안의 일을 모두 독점하겠다, 값싸게 하겠다 이런 목표가 아닙니다. 저의 목표는&nbsp;<strong>\'정보의 격차를 줄이기\', \'공주시의 개발자의 수 늘리기\'</strong>입니다. 송희식교수님께서 인터넷에&nbsp;<a href="https://www.donga.com/news/Economy/article/all/20081008/8641087/1" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 195, 189);">\'대공황기의 49가지 전략\'</a>이라는 글을 올리신 적이 있습니다. 경제위기에 개인이 할 수 있는 일이란 아끼고 버티는 것이 주된 생존전략이지만&nbsp;개인끼리 해야 할 생존전략이 눈에 띕니다. 31번째 생존전략입니다.</p><p><br></p><p><strong>&nbsp;&nbsp;"같은 어려움을 가진 사람들끼리 조직을 만들어라"</strong></p><p><br></p><p>&nbsp;&nbsp;공주시에 개발자가 더 있는지 알아보고, 동아리도 만들고, 스터디를 하고, 사이드프로젝트를 진행하고, 글을 쓰고, 만화도 그려보겠습니다. 웹, 앱 개발에 관해서 업체를 찾기 전에 상담이 필요하시면 커피 한 잔 하는 것도 좋습니다. 공주시로 내려온 개발자의 이야기를 하며 프로젝트 진행이 어떠하고, 어떤 일을 하고 있는지, 개발자로서도 매력적인지 쭉 이야기해 보겠습니다.</p>',
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/gongju-archive.appspot.com/o/images%2Fimage_1677682039153.png?alt=media&token=e3ae25d3-d6bf-4d96-9c3b-eae9e56be48d",
          category: "human",
          viewer: 1,
        },
      ],
    };
  },
  computed: {
    searchPlaceholder() {
      return "공주시 신관동에서 무슨 일이 일어났나요?";
    },
    user() {
      return this.$store.getters.getUser;
    },
    viewed() {
      // const storage = window?.sessionStorage || sessionStorage;
      return null; // storage?.getItem("gongju-archive-viewed");
    },
  },
  mounted() {
    // 방분 한 경우, 다시 intro가 나타나지 않게 함
    // sessionStorage.setItem("gongju-archive-viewed", true);
  },
  methods: {
    getItems() {
      window.toast("todo: 불러오기 실행");
    },
  },
};
</script>

<style lang="scss" scoped>
// .intro {
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   h1 {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
h1.logo {
  img {
    width: 140px;
  }
}

.section-intro {
  .col-carousel {
  }
  .col-info {
    border: 1px solid $lightest;
    border-top-width: 0;
    @media (min-width: $breakpoint-md) {
      border-left-width: 0;
      border-top-width: 1px;
    }
  }
}
</style>
