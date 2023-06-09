<template>
  <div>
    <header class="bg-gray-100 p-3 rounded-lg mb-4">
      <b-btn variant="primary text-white" to="/admin/new-waves/write">
        + 새 아티스트</b-btn
      >
    </header>
    <section>
      <template v-if="!items?.length">
        <div class="p-4 text-center">
          <Loading />
          <small class="text-gray-500 text-14"
            >현재 등록된 아티스트가 없습니다
          </small>
        </div>
      </template>
      <b-row v-else>
        <b-col cols="2" v-for="(item, i) in items" :key="i" class="mb-4">
          <figure
            class="image-wrapper ratio-100 cursor-pointer"
            :class="{ 'image-dummy': !item?.image?.url }"
            @click="
              $router.push({
                path: '/admin/new-waves/write',
                query: {
                  id: item.id,
                },
              })
            "
          >
            <img
              v-if="item?.image?.url"
              :src="item.image.url"
              :alt="`아티스트 ${item.name} 이미지`"
            />
          </figure>
          <figcaption class="py-2">
            <h6 v-if="item?.name" class="mb-1 text-truncate">
              {{ item.name }}
            </h6>
            <span
              v-if="item?.summary"
              class="text-13 text-gray-600 text-truncate"
            >
              {{ item.summary }}
            </span>
          </figcaption>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-new-waves-list",
  async asyncData({ app, query, store }) {
    const { getBoardItem, getAllBoardItems } = app.$firebase();
    const [items] = await Promise.all([getAllBoardItems("new-waves-artist")]);
    // console.log("items:", items);
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped></style>
