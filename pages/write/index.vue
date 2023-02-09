<template>
  <div>
    <section class="mb-4">
      <h6 class="py-2">제목</h6>
      <b-form-input v-model="form.title" placeholder="제목을 입력하세요" />
    </section>
    <section class="mb-4">
      <client-only>
        <h6 class="mt-3 mb-2">내용</h6>
        <vue-editor v-model="form.desc" placeholder="텍스트를 입력하세요" />
      </client-only>
    </section>
    <b-row align-h="center" class="mt-3">
      <b-col cols="12" md="5">
        <template v-if="id">
          <b-btn variant="outline-primary w-100" @click="update">수정</b-btn>
        </template>
        <template v-else>
          <b-btn variant="outline-primary w-100" @click="submit">업로드</b-btn>
        </template>
      </b-col>
    </b-row>
    <pre>user ::{{ user }}</pre>
  </div>
</template>

<script>
import { resize } from "~/plugins/commons.js";
// import firebase from '~/plugins/firebase'
// import { getImageURL, this.$firebase().deleteImage, addBoardItem } from '~/plugins/firebase.js'

export default {
  layout: "Dashboard",
  name: "create",
  data() {
    return {
      pending: {
        thumbnail: false,
      },
      form: {
        title: null,
        desc: null,
        createdAt: null,
      },
      resize,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    id() {
      return this.$route.query?.id;
    },
  },
  async mounted() {
    if (this.id) {
      await this.init(this.id);
    }
  },
  methods: {
    async init(id) {
      this.pending.init = true;
      if (!id) {
        window.toast("잘못된 접근입니다");
        this.$router.push("/admin");
        return;
      } else {
        try {
          const loadBoardItem = await this.$firebase().getBoardItem(id);
          if (loadBoardItem) {
            // ref를 찾은 뒤에 form에 적용함
            this.form = {
              ...loadBoardItem,
            };
            // 완료
            this.pending.init = false;
          }
        } catch (error) {
          window.toast("잘못된 접근입니다");
          console.error("error:", error);
          this.$router.push("/admin");
        }
      }
    },
    // form 리셋
    reset() {
      const defaultForm = {
        title: null,
        desc: null,
        createdAt: null,
      };
      this.form = defaultForm;
    },

    async onImageAdded(file, Editor, cursorLocation, resetUploader) {
      // Vue editor 에서 제공하는 이미지핸들러
      const type = file.name.split(".").at(-1); // split으로 .을 기준으로 두번째 배열인 것을 가져옴, 파일이름은 제외하고 뒤의 확장자만 가져온다
      const fileName = `image_${new Date().valueOf()}.${type}`; // 학장자를 가져오고 그 앞에 초단위의 날짜를 입력하여 이름이 중복되지 않게 한다
      // gif 이미지 업로드
      if (type === "gif") {
        try {
          const uploadedFile = await this.$firebase().getImageURL(file, "gif/");
          if (uploadedFile?.url) {
            Editor.insertEmbed(cursorLocation, "image", uploadedFile.url); //업로드한 이미지를 에디터 안(커서로케이션)에 나타나게 한다
            resetUploader();
          }
        } catch (error) {
          window.toast("파일업로드 실패");
        }
      } else {
        this.resize.photo("w", file, 1200, "object", async (result) => {
          const uploadedFile = await this.$firebase().getImageURL(
            result.blob,
            result.blob.type,
            "images",
            fileName
          );
          if (uploadedFile?.url) {
            Editor.insertEmbed(cursorLocation, "image", uploadedFile.url); //업로드한 이미지를 에디터 안(커서로케이션)에 나타나게 한다
            resetUploader();
          }
        });
      }
    },
    // 이미지가 제거되었을 때 file의 url을 불러옴
    onImageRemoved(url) {
      this.$firebase().deleteImage(url);
    },
    // 업로드
    async submit() {
      this.form.createdAt = new Date();
      try {
        const id = await this.$firebase().addBoardItem(this.form);
        if (id) {
          window.toast("업로드에 성공했습니다.");
          // this.reset()
          this.$router.push("/board");
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
    },
    // 업데이트
    async update() {
      this.form.createdAt = new Date();
      try {
        const updated = await this.$firebase().updateBoardItem(
          this.id,
          this.form
        );
        // console.log('updated:', updated)
        if (updated) {
          window.toast("수정에 성공했습니다.");
          // this.reset()
          this.$router.push("/board");
        }
      } catch (error) {
        window.toast("수정에 실패했습니다.");
        console.error("error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input-thumbnail {
  width: 100%;
  padding: 3rem 3rem 49%;
  border-radius: 14px;
  border: 1px solid #eee;
  background-color: #ededed;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .label-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.code-preview {
  width: 100%;
  max-height: 300px;
  padding: 16px;
  overflow-y: auto;
  background-color: #ededed;
}
</style>
