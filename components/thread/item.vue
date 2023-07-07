<template>
  <article class="thread">
    <header class="thread-header">
      <h6 class="thread-title">
        글 제목 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Repudiandae, voluptas.
      </h6>
    </header>
    <section class="thread-body">
      <div class="thread-content">
        <p class="text-13 text-md-14 text-truncate line-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa ut
          voluptatibus earum temporibus exercitationem itaque! Error
          dignissimos, aliquid natus nihil cupiditate laborum, suscipit
          exercitationem, quod aperiam quo odio labore. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nemo culpa ut voluptatibus earum
          temporibus exercitationem itaque! Error dignissimos, aliquid natus
          nihil cupiditate laborum, suscipit exercitationem, quod aperiam quo
          odio labore.
        </p>
      </div>
    </section>
    <div class="thread-footer">
      <caption class="thread-caption">
        <span class="thread-date"> 2023.07.07 </span>
        <span class="thread-author"> 홍길동 </span>
      </caption>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article.thread {
  background-color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.07);
  .thread-header {
    margin-bottom: 0.75rem;
    padding: 0.5rem 0.75rem;
    h6 {
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    border-bottom: 1px solid $gray-500;
  }
  .thread-body {
    padding: 0.5rem 0.75rem;
  }
  .thread-footer {
    padding: 0.5rem 0.75rem;
    .thread-caption {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: $gray-500;
    }
  }
}
</style>
