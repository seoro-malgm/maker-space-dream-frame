<template>
  <b-container class="my-5">
    <div class="mb-1">
      <router-link to="/notice">
        <i class="icon icon-left-dir" />
        공지사항 목록으로 돌아가기
      </router-link>
    </div>
    <header class="py-3 mb-5 border-top border-bottom text-center">
      <h1 class="text-20 text-md-32">공지사항 제목</h1>
      <span> 카테고리, 날짜 </span>
    </header>
    <article class="pb-4 border-bottom">
      <div class="text-center">
        <img :src="require('@/assets/dummy.png')" alt="" />
      </div>
      <p class="mt-3">
        공지사항 내용 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Fuga ex repellendus est odio cumque. Quaerat possimus necessitatibus,
        cum assumenda eveniet magnam placeat delectus sint vel sapiente
        praesentium aliquid et provident.
      </p>
    </article>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
