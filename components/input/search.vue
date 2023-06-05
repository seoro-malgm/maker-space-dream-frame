<template>
  <div class="border">
    <b-dd
      text="선택하세요"
      variant="white "
      class="w-100 border-0 rounded-0 dd-search"
      menu-class="dd-search-menu w-100 p-1 "
      :disabled="disabled"
    >
      <b-dd-form class="p-0">
        <b-input-group class="p-0">
          <template #prepend>
            <i class="icon icon-search text-12 mr-2" />
          </template>
          <b-form-input v-model="str" class="p-0" :disabled="disabled" />
          <!-- <template #append v-if="str && str !== ''">
            <b-btn variant="text p-1" @click.prevent="str = null">
              <i class="icon icon-cancel text-13" />
            </b-btn>
          </template> -->
        </b-input-group>
        <!-- placeholder="" -->
      </b-dd-form>
      <b-dd-item
        v-for="(item, i) in arrayFiltered"
        :key="i"
        @click="$emit('select', item)"
        link-class="px-1 py-2 border-bottom "
      >
        <span class="text-16" v-html="signStrong(item[valueKey], str)" />
      </b-dd-item>
      <b-dd-item v-if="!arrayFiltered?.length">
        <p class="text-14 text-gray-700 text-center p-2">결과가 없습니다.</p>
      </b-dd-item>
    </b-dd>
  </div>
</template>

<script>
import { fuzzyMatcher } from "@/plugins/commons";
export default {
  props: {
    array: {
      type: Array,
      default: [],
    },
    valueKey: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      str: null,
    };
  },
  computed: {
    letters() {
      if (this.str && this.str !== "") return;
      return fuzzyMatcher(this.str);
    },
    arrayFiltered() {
      // const koRegex = new RegExp(/^[ㄱ-힣]+$/);
      if (this.str && this.str !== "") {
        const letters = fuzzyMatcher(this.str);
        return this.array.filter((item) => {
          return item?.name.match(letters);
        });
      } else return this.array;
    },
  },
  methods: {
    signStrong(value) {
      // str는 검색어
      // 검색어가 없을 경우 리턴
      if (!this.str || this.str === "") return `<p>${value}</p>`;
      // this.str를 포함하며 위치도 잡히는 경우 this.str 클래스가 있는 span 태그로 리턴
      // const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
      if (value.includes(this.str)) {
        return value.replace(
          value.toUpperCase(),
          `<strong>${value.toUpperCase()}</strong>`
        );
      } else return `<p>${value}</p>`;
    },
  },
};
</script>

<style lang="scss" scoped>
.dd-search-menu {
  .b-dropdown-form {
    padding: 0.25rem 0.5rem !important;
  }
}
</style>
