<template>
  <div>
    <div class="bg-gray-100 rounded p-3 mb-4">
      <ul>
        <li class="mb-2">💡 원재료에 추가해야 레시피에 추가할 수 있습니다</li>
        <li class="mb-2">
          레시피에서 추가할 때, 여기서 작성한 '이름'이 검색이 가능해집니다
        </li>
      </ul>
    </div>
    <!-- <b-form @submit.prevent="submit"> -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th width="5%">#</th>
            <th>재료 이름</th>
            <th>구매비용(원)</th>
            <th>용량/단위</th>
            <th>1개, 1g당 가격(원)</th>
            <th>구매처</th>
            <th width="10%">관리</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="pending.init">
            <tr>
              <td colspan="7">
                <Loading />
              </td>
            </tr>
          </template>
          <template v-else>
            <template v-if="!items?.length">
              <tr>
                <td colspan="7" class="text-center">
                  <small class="text-13 text-gray-600"
                    >업로드한 원재료가 없습니다</small
                  >
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="(item, i) in items" :key="i">
                <td class="text-center">{{ i + 1 }}</td>
                <td>
                  <template v-if="editIndex === i">
                    <b-form-input v-model="item.name" />
                  </template>
                  <template v-else>
                    <div class="text-center">
                      {{ item.name }}
                    </div>
                  </template>
                </td>
                <td>
                  <template v-if="editIndex === i">
                    <b-form-input v-model="item.price.buy" class="text-right" />
                  </template>
                  <template v-else>
                    <div class="text-center">
                      {{ getLocale(item.price.buy) }} 원
                    </div>
                  </template>
                </td>
                <td>
                  <template v-if="editIndex === i">
                    <b-row class="d-flex align-items-center">
                      <b-input-group>
                        <b-form-input v-model="item.size" class="text-right" />

                        <template #append>
                          <b-form-select
                            v-model="item.unit"
                            class="text-right border-top-0 border-right-0 rounded-0 border-bottom"
                          >
                            <b-form-select-option
                              v-for="(value, key) in units"
                              :key="key"
                              :value="value"
                            >
                              {{ value }}
                            </b-form-select-option>
                          </b-form-select>
                        </template>
                      </b-input-group>
                    </b-row>
                  </template>
                  <template v-else>
                    <div class="text-center">
                      {{ getLocale(item.size) }}{{ item.unit }}
                    </div>
                  </template>
                </td>
                <td class="text-center">
                  {{ getCostPrice(item.price.buy, item.size) }} 원
                </td>
                <td>
                  <template v-if="editIndex === i">
                    <b-form-input v-model="item.link" />
                  </template>
                  <template v-else>
                    <div class="text-center">
                      <a
                        class="btn btn-link p-0"
                        :href="item.link"
                        target="blank"
                        v-if="item?.link"
                      >
                        <i class="icon icon-attach"></i>
                        이동
                      </a>
                      <span v-else class="text-13 text-gray-700">
                        링크 없음
                      </span>
                    </div>
                  </template>
                </td>
                <td class="text-center">
                  <template v-if="editIndex === i">
                    <b-btn variant="outline-alert" @click="removeItem(item, i)">
                      삭제
                    </b-btn>
                    <b-btn
                      variant="outline-info"
                      @click="item?.id ? updateItem(item) : submitItem(item)"
                    >
                      저장
                    </b-btn>
                  </template>
                  <template v-else>
                    <b-btn variant="outline-darkest" @click="editIndex = i">
                      수정하기
                    </b-btn>
                  </template>
                </td>
              </tr>
            </template>
          </template>

          <tr>
            <td colspan="6" class="px-4 py-3">
              <div>
                <b-btn
                  variant="gray-100 w-100 shadow-sm"
                  @click.prevent="addRow"
                  >원재료 추가</b-btn
                >
              </div>
            </td>
            <td colspan="1">
              <!-- <btn-submit :pending="pending.submit" class="w-100">
                  전체 저장
                </btn-submit> -->
            </td>
          </tr>
        </tbody>
        <!-- <tfoot></tfoot> -->
      </table>
    </div>
    <!-- </b-form> -->
  </div>
</template>

<script>
import { getCostPrice, createHash, getLocale } from "@/plugins/commons";
import categories from "@/data/categories";
export default {
  layout: "dashboard",
  name: "admin-menu-material",
  async asyncData({ app, query, store }) {
    const { getAllBoardItems } = app.$firebase();
    const [items] = await Promise.all([getAllBoardItems("material")]);
    store.dispatch("setState", ["materials", [...items]]);
    return {
      items,
    };
  },
  data() {
    return {
      categories,
      pending: {
        init: false,
        submit: false,
      },
      // 목록
      // items: [],
      // 추가할 row
      defaultRow: {
        name: null,
        price: {
          buy: 0,
          cost: 0,
        },
        size: 0,
        unit: "g",
        link: null,
        updateDate: null,
        createdAt: null,
      },
      // 현재 수정중인 edit index
      editIndex: null,
    };
  },
  computed: {
    units() {
      return this.categories.units;
    },
  },
  methods: {
    getCostPrice,
    getLocale,
    createHash,
    addRow() {
      this.defaultRow.price = {
        buy: 0,
        cost: 0,
      };
      this.items.push({
        ...this.defaultRow,
      });
      if (this.editIndex) {
      } else {
        this.editIndex = this.items.length - 1;
      }
    },

    // 업로드
    async submitItem(item) {
      this.pending.submit = true;

      try {
        // 해쉬 생성
        const id = this.createHash();
        // 폼 생성
        const form = {
          ...item,
          id,
          updateDate: new Date().toLocaleString(),
          createdAt: new Date().toLocaleString(),
        };
        form.price.cost = getCostPrice(item.price.buy, item.size);
        const data = await this.$firebase().addBoardItem("material", {
          ...form,
        });
        if (data) {
          window.toast(`${item.name}을 저장했습니다.`);
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
      this.editIndex = null;
      this.pending.submit = false;
    },
    // 업데이트
    async updateItem(item) {
      this.pending.submit = true;
      try {
        const form = {
          ...item,
        };
        form.price.cost = getCostPrice(item.price.buy, item.size);
        const data = await this.$firebase().updateBoardItem(
          "material",
          item.id,
          {
            ...form,
            updateDate: new Date().toLocaleString(),
          }
        );
        if (data) {
          window.toast(`${item.name}을 수정했습니다`);
        }
      } catch (error) {
        window.toast("수정에 실패했습니다.");
        console.error("error:", error);
      }
      this.editIndex = null;
      this.pending.submit = false;
    },
  },
  async removeItem(item, index) {
    const bool = await window.confirm(`"${item.name}"를 삭제하시겠습니까?`);
    if (bool) {
      try {
        const data = await this.$firebase().removeBoardItem(
          "material",
          item.id
        );
        if (data) {
          window.toast("삭제에 성공했습니다.");
          this.items.splice(index, 1);
        }
      } catch (error) {
        window.toast("삭제에 실패했습니다.");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
tr {
  td {
    border-bottom: 1px solid $gray-700;
  }
}
</style>
