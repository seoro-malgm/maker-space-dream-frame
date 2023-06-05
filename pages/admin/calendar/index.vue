<template>
  <div>
    <div class="bg-gray-100 rounded p-3 mb-4">
      <ul>
        <li class="mb-2">💡 공주살롱의 일정은 구글 캘린더로 관리합니다.</li>
      </ul>
    </div>
    <section class="mt-3">
      <calendar-default />
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    // ...
  },
};
</script>

<style lang="scss" scoped></style>
