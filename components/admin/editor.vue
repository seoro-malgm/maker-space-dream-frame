<template>
  <admin-item :title="title" :desc="desc">
    <client-only>
      <vue-editor
        useCustomImageHandler
        @image-removed="onImageRemoved"
        @image-added="onImageAdded"
        v-model="form"
        placeholder="내용을 입력하세요"
      />
    </client-only>
  </admin-item>
</template>

<script>
import { resize } from "~/plugins/commons.js";
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      default: null,
    },
    storagePath: {
      path: String,
      default: "images",
    },
    file: {
      path: Object,
      default: null,
    },
    size: {
      path: Number,
      default: 1920,
    },
    description: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      resize,
      pending: false,
      form: null,
    };
  },
  watch: {
    description(n) {
      this.form = n;
    },
    form(n) {
      this.$emit("change", n);
    },
  },

  methods: {
    // 에디터에 이미지 추가
    // Vue editor 에서 제공하는 이미지핸들러
    async onImageAdded(file, Editor, cursorLocation, resetUploader) {
      const { getImageURL } = this.$firebase();
      // split으로 .을 기준으로 두번째 배열인 것을 가져옴, 파일이름은 제외하고 뒤의 확장자만 가져온다
      const type = file.name.split(".").at(-1);
      // 학장자를 가져오고 그 앞에 초단위의 날짜를 입력하여 이름이 중복되지 않게 한다
      const fileName = `${this.storagePath}_${new Date().valueOf()}.${type}`;
      // gif 이미지 업로드
      if (type === "gif") {
        try {
          const uploadedFile = await getImageURL(file, "gif/");
          if (uploadedFile?.url) {
            //업로드한 이미지를 에디터 안(커서로케이션)에 나타나게 한다
            Editor.insertEmbed(cursorLocation, "image", uploadedFile.url);
            resetUploader();
          }
        } catch (error) {
          window.toast("파일업로드 실패");
        }
      } else {
        this.resize.photo("w", file, this.size, "object", async (result) => {
          const uploadedFile = await getImageURL(
            result.blob,
            result.blob.type,
            this.storagePath,
            fileName
          );
          if (uploadedFile?.url) {
            //업로드한 이미지를 에디터 안(커서로케이션)에 나타나게 한다
            Editor.insertEmbed(cursorLocation, "image", uploadedFile.url);
            // 이미지 목록에도 추가
            resetUploader();
          }
        });
      }
    },
    // 에디터에 이미지 삭제
    onImageRemoved(url) {
      this.$firebase().deleteImage(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-wrap {
  position: relative;
  min-height: 400px;
  .util {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
}

$default-line-height: 1.6;
#editor {
  position: relative;
  .ql-editor {
    min-height: 85vh;
    overflow-y: scroll;
    padding-top: 88px;
    line-height: $default-line-height !important;
  }
  .ql-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: white;
  }
  .ql-container {
    font-family: "Roboto", "Noto Sans KR", "Pretendard-Regular", sans-serif !important;
  }

  // desc
  span,
  span *,
  p,
  p * {
    font-size: 14px;
    @media (min-width: $breakpoint-md) {
      font-size: 16px;
    }
  }
  h1,
  h1 * {
    font-size: 36px;
    @media (min-width: $breakpoint-md) {
      font-size: 40px;
    }
  }
  h2,
  h2 * {
    font-size: 32px;
    @media (min-width: $breakpoint-md) {
      font-size: 36px;
    }
  }
  h3,
  h3 * {
    font-size: 28px;
    @media (min-width: $breakpoint-md) {
      font-size: 32px;
    }
  }
  h4,
  h4 * {
    font-size: 24px;
    @media (min-width: $breakpoint-md) {
      font-size: 28px;
    }
  }
  h5,
  h5 * {
    font-size: 18px;
    @media (min-width: $breakpoint-md) {
      font-size: 24px;
    }
  }
  h6,
  h6 * {
    font-size: 16px;
    @media (min-width: $breakpoint-md) {
      font-size: 18px;
    }
  }
  .ql-size-small,
  .ql-size-small * {
    font-size: 12px;
    @media (min-width: $breakpoint-md) {
      font-size: 13px;
    }
  }
  .ql-size-large,
  .ql-size-large * {
    font-size: 22px;
    @media (min-width: $breakpoint-md) {
      font-size: 24px;
    }
  }
  .ql-size-huge,
  .ql-size-huge * {
    font-size: 30px;
    @media (min-width: $breakpoint-md) {
      font-size: 32px;
    }
  }
  $indents: (1, 2, 3, 4, 5, 6, 8);
  @each $var in $indents {
    .ql-indent-#{$var},
    .ql-indent-#{$var} * {
      padding-left: calc($var * 1rem);
    }
  }
  .ql-font-serif,
  .ql-font-serif * {
    font-family: "Noto Serif KR", serif;
  }
  .ql-font-monospace,
  .ql-font-monospace * {
    font-family: "Roboto Mono", monospace;
  }
  ol {
    list-style-type: decimal;
    font-size: 16px;
  }
  ul {
    list-style-type: disc;
    font-size: 16px;
  }
  strong,
  strong * {
    font-weight: 900 !important;
  }
  $text-aligns: (left, right, center, justify);
  @each $var in $text-aligns {
    .ql-align-#{$var},
    .ql-align-#{$var} * {
      text-align: #{$var};
    }
  }
  .ql-align-right,
  .ql-align-right * {
    text-align: right;
    &.ql-direction-rtl {
      text-align: right;
    }
  }
  div.ql-video,
  iframe.ql-video {
    width: 100%;
    min-height: 240px;
    @media (min-width: $breakpoint-lg) {
      min-height: 480px;
    }
  }
}

h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  line-height: $default-line-height !important;
}
</style>
