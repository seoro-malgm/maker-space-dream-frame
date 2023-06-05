<template>
  <div>
    <b-form @submit.prevent="update()">
      <template v-if="!item?.name">
        <Loading />
      </template>
      <template v-else>
        <b-row>
          <b-col cols="2">
            <small class="text-12 text-gray-800">
              {{ item?.category }}
            </small>
            <h1 class="text-20 text-md-24 fw-700 mt-1 mb-3">
              {{ item?.name }}
            </h1>
            <img
              :src="item?.thumbnail?.url"
              :alt="`${item.name} 썸네일 이미지`"
              class="w-100"
            />
            <ul class="mt-2 pt-2">
              <li class="mb-2 p-2 border rounded">
                <strong class="d-block mb-1">현재 메뉴가격:</strong>
                <div>{{ getLocale(item?.price) }}원</div>
              </li>
              <li class="mb-2 p-2 border rounded">
                <strong class="d-block mb-1">1회 생산량:</strong>
                <div>
                  <b-input-group class="align-items-center">
                    <template #prepend> 1회당 </template>
                    <b-form-input
                      v-model="form.outputUnit"
                      class="p-1 mx-2 text-right"
                      type="number"
                      :min="1"
                    />
                    <template #append> 개 </template>
                  </b-input-group>
                </div>
              </li>
              <li class="mb-2 p-2 border rounded">
                <strong class="d-block mb-1">원가총가격:</strong>
                <div class="mt-1">
                  <template v-if="usedMaterials?.length && form.outputUnit">
                    {{ getCostRatio(usedMaterials) }}원
                  </template>
                  <template v-else>
                    <span class="text-13 text-gray-800"> - </span>
                  </template>
                </div>
              </li>
              <li class="mb-2 p-2 border rounded">
                <div class="d-flex align-items-center justify-content-between">
                  <strong class="d-block mb-1">마진율</strong>
                  <strong class="d-block mb-1">원가율</strong>
                </div>
                <div class="mt-1">
                  <template v-if="usedMaterials?.length && form.outputUnit">
                    <b-progress
                      :max="100"
                      :value="
                        100 -
                        getPercent(
                          item?.price,
                          getCostRatio(usedMaterials),
                          form.outputUnit
                        )
                      "
                      class="mb-1"
                      animated
                    />
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span>
                        {{
                          100 -
                          getPercent(
                            item?.price,
                            getCostRatio(usedMaterials),
                            form.outputUnit
                          )
                        }}%
                      </span>
                      <span>
                        {{
                          getPercent(
                            item?.price,
                            getCostRatio(usedMaterials),
                            form.outputUnit
                          )
                        }}%
                      </span>
                    </div>
                  </template>
                  <template v-else>
                    <span class="text-13 text-gray-800"> - </span>
                  </template>
                </div>
              </li>

              <li class="mb-2 p-2 border rounded">
                <div class="d-flex align-items-center">
                  <strong class="d-block mb-1">마진율이 </strong>
                  <b-form-input
                    class="p-0 text-13 text-right"
                    v-model="marginRate"
                  />
                  <strong class="text-nowrap">% 라면? :</strong>
                </div>
                <div class="mt-1">
                  <template v-if="usedMaterials?.length && marginRate">
                    {{
                      getPriceByPercent(getCostRatio(usedMaterials), marginRate)
                    }}
                    원
                    <div>
                      <small class="text-11 text-gray-600">
                        (반올림 하였음)
                      </small>
                    </div>
                  </template>
                  <template v-else>
                    <span class="text-13 text-gray-800"> - </span>
                  </template>
                </div>
              </li>
            </ul>
          </b-col>
          <b-col cols="10">
            <article class="my-1 py-3">
              <header
                class="mb-3 pb-2 border-bottom d-flex justify-content-between align-items-center"
              >
                <h1 class="text-20 text-md-24 fw-700">레시피</h1>
                <span> 마지막 업데이트: {{ form?.updatedDate || "" }} </span>
              </header>
              <ol>
                <li v-for="(item, i) in form.data" :key="i" class="mb-3">
                  <div class="d-flex align-items-center">
                    <div class="mr-3 text-nowrap">
                      <strong class="d-block mb-1"> {{ i + 1 }} : </strong>
                    </div>
                    <div>
                      <b-form-checkbox
                        v-b-tooltip.hover
                        title="원재료 사용하기"
                        v-model="item.useMaterial"
                        switch
                        large
                        @change="($event) => onToggleUseMaterial($event, i)"
                      />
                    </div>
                    <div class="w-100 d-flex align-items-center">
                      <section
                        class="d-flex align-items-center"
                        v-if="item.useMaterial"
                      >
                        <template v-if="item?.material">
                          <div class="">
                            <div class="d-flex align-items-center text-nowrap">
                              <strong class="position-relative">
                                {{ item.material }}
                                <b-btn
                                  variant="gray-300 rounded-circle px-1 py-0 position-absolute text-8"
                                  :style="{
                                    top: '-0.75rem',
                                    right: '-0.75rem',
                                  }"
                                  v-b-tooltip.hover
                                  title="다시 작성하기"
                                  @click="resetItem(i)"
                                  >X</b-btn
                                >
                              </strong>
                              <span class="mx-2"> / </span>
                              <div>
                                <div class="d-flex align-items-center">
                                  <b-form-input
                                    v-model="item.size"
                                    class="p-0 text-14 text-right"
                                    placeholder="용량을 입력하세요"
                                    :style="{ maxWidth: '80px' }"
                                  />
                                  <span class="ml-1">{{ item.unit }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template v-else>
                          <div>
                            <input-search
                              :array="materials"
                              valueKey="name"
                              @select="($event) => selectItem($event, i)"
                              class="w-100"
                            />
                          </div>
                        </template>
                      </section>
                      <div class="ml-2 w-100">
                        <b-form-input
                          v-model="item.text"
                          placeholder="내용을 입력하세요(원재료를 썼다면 원재료 내용 제외)"
                        />
                      </div>
                    </div>
                    <div class="ml-2">
                      <b-btn
                        variant="outline-gray-700 px-2 py-1 text-13 rounded-circle"
                        v-b-tooltip.hover
                        title="단계 삭제하기"
                        @click="form.data.splice(i, 1)"
                        >X
                      </b-btn>
                    </div>
                  </div>
                </li>
                <li class="mt-2">
                  <b-btn variant="outline-darkest w-100" @click="addRow">
                    단계 추가
                  </b-btn>
                </li>
              </ol>
            </article>
          </b-col>
        </b-row>
        <div
          class="mt-3 border-top pt-2 d-flex align-items-center justify-content-end"
        >
          <btn-submit :pending="pending.submit"> 저장 </btn-submit>
        </div>
      </template>
    </b-form>
  </div>
</template>

<script>
import {
  getLocale,
  getCostRatio,
  getPercent,
  getPriceByPercent,
} from "~/plugins/commons.js";
import categories from "@/data/categories.json";

export default {
  layout: "dashboard",
  name: "admin-menu-recipe",
  async asyncData({ app, query, store }) {
    const menuId = query?.id;
    const { getBoardItem, getAllBoardItems } = app.$firebase();
    const [item, materials] = await Promise.all([
      getBoardItem("menu", menuId),
      getAllBoardItems("material", { createdAt: "asc" }),
    ]);
    if (materials) {
      store.dispatch("setState", ["materials", [...materials]]);
    }
    return {
      item,
      materials,
      form: item?.recipe
        ? {
            ...item.recipe,
          }
        : {
            data: [],
            updatedDate: null,
          },
    };
  },
  data() {
    return {
      categories,
      pending: {
        addRecipe: false,
        submit: false,
      },
      // 폼
      form: {
        data: [],
        updatedDate: null,
        outputUnit: 1,
      },
      // 적정마진율 계산을 위해 설정한 마진율
      marginRate: null,
    };
  },
  computed: {
    id() {
      return this.$route?.query?.id;
    },
    menuCategories() {
      return categories?.menu;
    },
    // 현재 레시피에 사용된 원재료들
    usedMaterials() {
      // let arr = []
      const list = this.form?.data?.filter((d) => {
        return d?.useMaterial && d?.material && d?.size;
      });

      return list?.map((item) => {
        const currentItem = this.materials?.find(
          (m) => m?.name === item.material
        );
        return {
          name: item?.material,
          size: +item?.size,
          cost: +currentItem?.price?.cost,
        };
      });
    },
  },
  methods: {
    // 숫자표기
    getLocale,
    // 원가계산기
    getCostRatio,
    getPercent,
    getPriceByPercent,
    // 레시피에 단계 추가
    addRow() {
      const row = {
        // 원재료 사용 여부
        useMaterial: false,
        // 원재료
        material: null,
        // 원재료 양
        size: null,
        // 내용
        text: null,
      };
      this.form.data.push({
        ...row,
      });
    },
    // 원재료 사용 여부 토글
    onToggleUseMaterial(e, index) {
      // 토글 삭제시 리셋함
      if (e === false) {
        this.resetItem(index);
      }
    },
    // 원재료 선택
    selectItem(item, index) {
      const { name, unit } = item;
      this.form.data[index].material = name;
      this.form.data[index].unit = unit;
    },
    // 원재료 삭제
    resetItem(index) {
      this.form.data[index].useMaterial = false;
      this.form.data[index].material = null;
      this.form.data[index].size = null;
      this.form.data[index].text = null;
    },
    async update() {
      this.pending.submit = true;
      const [priceUpdated, updatedRecipe] = await [
        this.updatePrice(),
        this.updateRecipe(),
      ];
      if (priceUpdated && updatedRecipe) {
        this.pending.submit = false;
        window.toast("레시피를 수정했습니다.");
        this.$router.push(`/admin/menu/list`);
      } else {
        window.toast("레시피 수정에 실패했습니다.");
      }
    },
    // 가격 업데이트
    async updatePrice() {
      const str = this.getCostRatio(this.usedMaterials);
      const unitPrice = str.replace(",", "");
      try {
        const data = await this.$firebase().updateItemValue(
          "menu",
          this.id,
          "unitPrice",
          unitPrice
        );
        if (data) return data;
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 레시피 업데이트하기
    async updateRecipe() {
      try {
        const data = await this.$firebase().updateItemValue(
          "menu",
          this.id,
          "recipe",
          {
            ...this.form,
            updatedDate: new Date().toLocaleString(),
          }
        );
        if (data) return data;
      } catch (error) {
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
