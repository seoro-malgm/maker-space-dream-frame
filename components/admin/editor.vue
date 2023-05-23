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
  },
  data() {
    return {
      resize,
      pending: false,
      form: null,
    };
  },
  watch: {
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
</style>
