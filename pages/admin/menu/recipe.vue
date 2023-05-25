<template>
  <div>
    <b-form @submit.prevent="id ? updateItem() : submitItem()">
      <template v-if="!form?.name">
        <Loading />
      </template>
      <template v-else>
        <b-row>
          <b-col cols="2">
            <h1 class="text-20 text-md-24 fw-700 mb-3">
              {{ form.name }}
            </h1>
            <img
              :src="form?.thumbnail?.url"
              :alt="`${form.name} 썸네일 이미지`"
              class="w-100"
            />
            <ul class="mt-2 pt-2 border-top">
              <li class="mb-2">
                <strong>원가총가격:</strong>
                <div>...</div>
              </li>
              <li class="mb-2">
                <strong>1회 생산량:</strong>
                <div>...</div>
              </li>
              <li class="mb-2">
                <strong>현재 메뉴 가격(원):</strong>
                <div>...</div>
              </li>
              <li class="mb-2">
                <strong>현재 마진율(%):</strong>
                <div>...</div>
              </li>
              <li class="mb-2">
                <strong>현재 원가율(%):</strong>
                <div>...</div>
              </li>
              <li class="mb-2">
                <div class="d-flex align-items-center">
                  <strong>적정마진율을 </strong>
                  <b-form-input
                    class="p-0 text-13 text-right"
                    v-model.number="marginRate"
                    :number="true"
                    type="number"
                    :min="0"
                    :max="100"
                  />
                  <strong class="text-nowrap">% 라면? :</strong>
                </div>
                <div>...</div>
              </li>
            </ul>
          </b-col>
          <b-col cols="10">
            <article>
              <header>
                <h1 class="text-20 text-md-24 fw-700 mb-3">레시피</h1>
              </header>
            </article>
            <template v-if="form.recipeId">
              <template v-if="form?.recipe">
                <ol>
                  <li v-for="(item, i) in form.recipe.data" :key="i">
                    <b-row>
                      <b-col></b-col>
                      <template v-if="item.useMaterial">
                        <b-col cols="7">
                          <!-- 원재료를 사용할 경우 -->
                          <b-form-select
                            v-model="item.material"
                            class="text-right border-top-0 border-right-0 rounded-0 border-bottom"
                          >
                            <template v-if="materials?.length">
                              <b-form-select-option
                                disabled
                                selected
                                :value="null"
                              >
                                선택할 수 있는 원재료가 없습니다.
                              </b-form-select-option>
                            </template>
                            <template v-else>
                              <b-form-select-option
                                v-for="(material, l) in materials"
                                :key="l"
                                :value="material.id"
                              >
                                {{ material.name }}
                              </b-form-select-option>
                            </template>
                          </b-form-select>
                        </b-col>
                        <b-col cols="5"></b-col>
                      </template>
                      <b-col cols="12">
                        <b-form-input
                          v-model="item.text"
                          placeholder="내용을 입력하세요"
                        />
                      </b-col>
                    </b-row>
                  </li>
                  <li>
                    <b-btn
                      variant="gray-100 w-100 shadow-sm"
                      @click.prevent="addRow"
                      >단계 추가
                    </b-btn>
                  </li>
                </ol>
              </template>
            </template>
            <template v-else>
              <div class="mb-2">등록된 레시피가 없습니다</div>
              <b-btn
                variant="outline-darkest"
                @click="addRecipe"
                :disabled="pending.addRecipe"
              >
                <b-spinner small v-if="pending.addRecipe" />
                <template v-else> 레시피 추가 </template>
              </b-btn>
            </template>
          </b-col>
        </b-row>
        <div
          class="mt-3 border-top pt-2 d-flex align-items-center justify-content-end"
        >
          <btn-submit :pending="pending.submit"> 저장 </btn-submit>
        </div>
      </template>
    </b-form>
    <pre
      style="
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 3000;
        background-color: #ededed;
        padding: 0.5rem;
        width: 300px;
        height: 500px;
        overflow-y: scroll;
        font-size: 14px;
        line-height: 17px;
        color: #000;
        text-align: left;
      "
    >
    form: {{ form }} 
    </pre>
  </div>
</template>

<script>
import { createHash } from "~/plugins/commons.js";
import categories from "@/data/categories.json";

export default {
  layout: "dashboard",
  name: "admin-menu-recipe",
  data() {
    return {
      categories,
      pending: {
        addRecipe: false,
        submit: false,
      },
      // 폼
      form: {
        // 썸네일
        thumbnail: null,
        // 메뉴 이름
        name: null,
        // 카테고리
        category: "coffee",
        recipeId: null,
        // 레시피
        recipe: [],
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
    // 원재료 목록
    materials() {
      return this.$store.getters["getMaterials"] || [];
    },
  },
  async mounted() {
    await this.getMenuItem();
    await this.getMaterial();
  },
  methods: {
    // 해쉬 제작
    createHash,
    // 메뉴 불러오기
    async getMenuItem() {
      if (!this.id) return;
      try {
        const data = await this.$firebase().getBoardItem("menu", this.id);
        if (data) {
          const { name, id, thumbnail, category, recipeId } = data;
          this.form = {
            name,
            id,
            thumbnail,
            category,
            recipeId,
          };
          // 레시피 id가 있으면 불러오기
          if (recipeId) {
            this.getRecipe(recipeId);
          }
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 레시피 불러오기
    async getRecipe(id) {
      try {
        const data = await this.$firebase().getBoardItem("recipe", id);
        if (data) {
          this.form.recipe = data;
        } else {
          this.form.recipe = [];
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 재료 불러오기
    async getMaterial() {
      try {
        const data = await this.$firebase().getAllBoardItems("material", {
          createdAt: "asc",
        });
        if (data) {
          this.$store.dispatch("setState", ["materials", [...data]]);
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 레시피 없는 경우, 처음 추가하기
    async addRecipe() {
      this.pending.addRecipe = true;
      try {
        // 해쉬 생성
        const id = this.createHash();
        // 폼 생성
        const form = {
          menuId: this.id,
          id,
          updateDate: new Date(),
          createdAt: new Date(),
          data: [],
        };
        const data = await this.$firebase().addBoardItem("recipe", {
          ...form,
        });
        if (data) {
          const updated = await this.$firebase().updateItemValue(
            "menu",
            this.id,
            "recipeId",
            id
          );
          if (updated) {
            this.form.recipeId = id;

            window.toast(
              "레시피가 추가되었습니다. 레시피 내용을 입력해주세요."
            );
          }
        }
      } catch (error) {
        console.error("error:", error);
      }
      this.pending.addRecipe = false;
    },
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
      console.log("this.form:", this.form);
      this.form.recipe.data.push({
        ...row,
      });
    },
    // 레시피 업데이트하기
    async updateRecipe() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().updateBoardItem("recipe", this.id, {
          ...this.form,
        });
        if (data) {
          window.toast("레시피를 수정했습니다.");
          this.$router.push(`/admin/menu/list`);
        }
      } catch (error) {
        window.toast("레시피 수정에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
