<template>
  <div class="wrapper">
    <b-container fluid>
      <header class="text-center pt-4 mb-5">
        <h1 class="text-24 text-md-48">스레드</h1>
      </header>
    </b-container>
    <b-container>
      <b-row align-v="start">
        <b-col cols="12" md="4">
          <h6 class="mb-2">필터도구</h6>
          <ul>
            <li class="bg-white shadow-sm rounded mb-3 p-3"></li>
            <li class="bg-white shadow-sm rounded mb-3 p-3"></li>
            <li class="bg-white shadow-sm rounded mb-3 p-3"></li>
          </ul>
        </b-col>
        <b-col cols="12" md="8">
          <h6 class="mb-2">새로운 글을 확인하세요</h6>
          <ul class="list-thread">
            <li class="item-thread" v-for="(item, i) in 10" :key="i">
              <thread-item />
            </li>
            <li class="text-center py-3">
              <small class="text-12 text-gray-500">마지막 글입니다.</small>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  margin-bottom: -120px;
  padding-bottom: 120px;
  background-color: $lightest;
}
.list-thread {
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  padding: 0 16px 80px 0;
  .item-thread {
    margin-bottom: 16px;
  }
}
</style>
