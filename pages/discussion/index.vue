<template>
  <div>
    <b-container fluid>
      <header>
        <h1 class="text-center">AI는 도구가 될까요?</h1>
      </header>
      <section class="flow-wrapper">
        <section class="flow-container">
          <div
            class="flow-item img-contain"
            :class="{ reverse: i % 2 }"
            v-for="(item, i) in discussion"
            :key="i"
            :style="{
              width: `${item.value}%`,
            }"
          >
            <div
              class="bg-img bg-img ratio-50 w-100 img-contain"
              :style="{
                backgroundPosition: `${i % 2 ? 'right' : 'left'} bottom`,
                backgroundImage:
                  i % 2
                    ? `url(${require(`@/assets/flow-right.svg`)})`
                    : `url(${require(`@/assets/flow-left.svg`)})`,
              }"
            />
            <!-- <div
              v-for="(index, l) in 3"
              :class="`flow-image flow-depth-${l}`"
              :style="{
                right: i % 2 ? `${33.333 * l}%` : 'unset',
                left: i % 2 ? 'unset' : `${33.333 * l}%`,
                backgroundImage:
                  i % 2
                    ? `url(${require(`@/assets/flow-reverse-depth-${l}.svg`)})`
                    : `url(${require(`@/assets/flow-depth-${l}.svg`)})`,
              }"
            /> -->

            <!-- {{ item.value }} -->
          </div>
        </section>
        <section class="flow-bar">
          <div
            class="bar"
            :class="[i % 2 ? 'bar-right' : 'bar-left']"
            v-for="(item, i) in discussion"
            :key="i"
            :style="{
              width: `${item.value}%`,
            }"
          />
        </section>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discussion: [
        {
          title: "도구로서 쓰일 수 있으므로 적극 도입해야 한다",
          value: 72.3,
        },
        {
          title: "직업만 뺏으므로 아직은 막아야한다",
          value: 27.7,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flow-wrapper {
  .flow-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .flow-item {
      position: relative;

      // .flow-image {
      //   width: 100%;
      //   padding-bottom: 100%;
      //   background-repeat: no-repeat;
      //   background-size: contain;
      //   position: absolute;
      // }
    }
  }
  .flow-bar {
    width: 100%;
    position: relative;
    height: 80px;
    .bar {
      position: absolute;
      height: 80px;
      background-color: $primary;
      &.bar-left {
        left: 0;
      }
      &.bar-right {
        right: 0;
      }
    }
  }
}
</style>
