<template>
  <b-modal
    id="modal-recipe"
    bodyClass="px-3 pt-3 pb-2"
    contentClass="confirm border-0 overflow-hidden"
    headerClass="rounded-0 bg-primary bg-opacity-15 text-left w-100"
    titleClass="w-100"
    footerClass="border-0 d-flex justify-content-end "
    okTitle="닫기"
    okVariant="outline-darkest"
    @ok="$emit('ok')"
    centered
    size="xl"
    ok-only
    noCloseOnBackdrop
    autoFocusButton="ok"
    hideHeaderClose
    headerCloseContent="`<i class='icon icon-times text-1'></i>``"
  >
    <template #modal-title>
      <div class="d-flex align-items-center justify-content-between w-100">
        <h1 class="text-left text-16 text-white">
          {{ `<${item?.name}>` }} 상세보기
        </h1>
        <div class="ml-auto" v-if="item">
          <b-btn
            variant="gray-200 text-13"
            :to="{
              path: '/admin/menu/recipe',
              query: {
                id: item.id,
              },
            }"
          >
            레시피 관리
          </b-btn>
        </div>
      </div>
    </template>
    <template v-if="!item">
      <Loading />
    </template>
    <template v-else>
      <b-row class="mx-0" align-h="center">
        <b-col cols="2" class="px-0">
          <div class="border">
            <h1 class="border-bottom p-2 text-20">현재 메뉴가격</h1>
            <div class="p-3 text-20">{{ getLocale(item?.price) }}원</div>
          </div>
        </b-col>
        <b-col cols="2" class="px-0">
          <div class="border">
            <h1 class="border-bottom p-2 text-20">원가총가격</h1>
            <div class="p-3 text-20">
              <template v-if="item?.unitPrice && item?.recipe.outputUnit">
                {{ getLocale(+item?.unitPrice) }}원
              </template>
              <template v-else>-</template>
            </div>
          </div>
        </b-col>
        <b-col cols="2" class="px-0">
          <div class="border">
            <h1 class="border-bottom p-2 text-20">1회 생산량</h1>
            <div class="p-3 text-20">
              <template v-if="item?.recipe.outputUnit">
                {{ +item?.recipe.outputUnit }}개
              </template>
              <template v-else>-</template>
            </div>
          </div>
        </b-col>
        <b-col cols="2" class="px-0">
          <div class="border">
            <h1 class="border-bottom p-2 text-20">현재 마진율(%)</h1>
            <div class="p-3 text-20">
              <template v-if="item?.unitPrice && item?.recipe.outputUnit">
                {{
                  100 -
                  getPercent(
                    +item?.price,
                    +item?.unitPrice,
                    +item?.recipe.outputUnit
                  )
                }}%
              </template>
              <template v-else>-</template>
            </div>
          </div>
        </b-col>
        <b-col cols="2" class="px-0">
          <div class="border">
            <h1 class="border-bottom p-2 text-20">현재 원가율(%)</h1>
            <div class="p-3 text-20">
              <template v-if="item?.unitPrice && item?.recipe.outputUnit">
                {{
                  getPercent(
                    +item?.price,
                    +item?.unitPrice,
                    +item?.recipe.outputUnit
                  )
                }}%
              </template>
              <template v-else>-</template>
            </div>
          </div>
        </b-col>
      </b-row>
      <article class="mt-3">
        <header class="pb-2 mb-2 border-bottom">
          <h1 class="text-22">레시피</h1>
        </header>
        <section>
          <ol v-if="item?.recipe?.data?.length" class="list-ordered px-3">
            <li
              v-for="(recipe, i) in item.recipe.data"
              :key="i"
              class="mb-3 text-17"
            >
              <template v-if="recipe?.useMaterial">
                <span>
                  {{ recipe?.material }} {{ recipe?.size }} {{ recipe?.unit }}
                </span>
              </template>
              <span>
                {{ recipe?.text }}
              </span>
            </li>
          </ol>
          <template v-else> </template>
        </section>
      </article>
    </template>
  </b-modal>
</template>

<script>
import {
  getLocale,
  getCostRatio,
  getPercent,
  getPriceByPercent,
} from "~/plugins/commons.js";
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      input: null,
    };
  },
  methods: {
    getLocale,
    getCostRatio,
    getPercent,
    getPriceByPercent,
  },
};
</script>

<style lang="scss" scoped></style>
