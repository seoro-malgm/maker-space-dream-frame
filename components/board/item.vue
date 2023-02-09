<template>
  <article class="board">
    <header class="board-title">{{ title }}</header>
    <template v-if="items?.length">
      <ul class="board-item-list">
        <li v-for="(item, i) in items" :key="i" class="board-item">
          <nuxt-link :to="`${boardId}/${item.id}`">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="p-3 text-center text-light border-bottom">
        게시글이 없습니다
      </div>
    </template>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "게시판",
    },
    boardId: {
      type: String,
      default: "board",
    },
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  .board-title {
    padding: 4px;
    background-color: $black;
    font-size: 18px;
    font-weight: 700;
    color: $white;
  }
  .board-item-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    .board-item {
      padding: 4px;
      margin-bottom: 4px;
      border-bottom: 1px solid $light;
    }
  }
}
</style>
