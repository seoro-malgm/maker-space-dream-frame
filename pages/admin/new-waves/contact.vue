<template>
  <div>
    <template v-if="!items?.length">
      <div class="p-4 text-center">
        <Loading />
        <small class="text-gray-500 text-14">신청이 없습니다</small>
      </div>
    </template>
    <b-row v-else>
      <b-col cols="4" v-for="(item, i) in items" :key="i" class="mb-4">
        <figure
          class="image-wrapper ratio-100"
          :class="{ 'image-dummy': !item?.image?.url }"
        >
          <img
            v-if="item?.image?.url"
            :src="item.image.url"
            :alt="`아티스트 ${item.name} 이미지`"
          />
        </figure>
        <figcaption class="py-2">
          <h6 v-if="item?.name">{{ item.name }}</h6>
          <span v-if="item?.description">{{ item.description }}</span>
        </figcaption>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-new-waves-contact",
  async asyncData({ app, query, store }) {
    const { getBoardItem, getAllBoardItems } = app.$firebase();
    const [items] = await Promise.all([getAllBoardItems("new-waves-contact")]);
    // console.log("items:", items);
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped></style>
