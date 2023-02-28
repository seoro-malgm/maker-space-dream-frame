<template>
  <b-container>
    <article>
      <header class="mb-4">
        <h1>내 정보</h1>
      </header>
      <template v-if="pending.submit">
        <loading />
      </template>
      <template v-else>
        <section>
          <ul class="list-unstyled">
            <li class="mb-4">이메일 : {{ user?.email }}</li>
            <li class="mb-4">
              <h6 class="mb-2">프로필 이미지</h6>
              <label for="profileImage" class="input-profileImage">
                <template v-if="pending.profileImage">
                  <div class="label-text">
                    <b-spinner />
                  </div>
                </template>
                <template v-else-if="!pending.profileImage">
                  <template v-if="input.profileImageURL">
                    <b-avatar
                      size="6rem"
                      :src="input.profileImageURL"
                      alt="새 썸네일"
                    />
                  </template>
                  <template v-else>
                    <b-avatar size="6rem"></b-avatar>
                  </template>
                </template>
              </label>
              <input
                type="file"
                id="profileImage"
                @change="uploadProfileImage"
                accept=".png, .jpg, .jpeg, .gif"
                class="d-none"
              />
            </li>
            <li class="mb-4">
              <h6 class="mb-2">별명</h6>
              <b-form-input
                v-model="input.displayName"
                placeholder="8자 이하의 한글, 영문, 숫자로 조합 가능합니다"
              />
            </li>
            <li class="mb-4">
              <h6 class="mb-2">새 비밀번호</h6>
              <b-form-input
                v-model="input.newPassword"
                placeholder="새 비밀번호를 입력하세요"
              />
            </li>
            <li class="mb-4">
              <h6 class="mb-2">새 비밀번호</h6>
              <b-form-input
                v-model="input.newPasswordConfirm"
                placeholder="새 비밀번호를 다시 입력하세요"
              />
            </li>
          </ul>
        </section>
        <b-row align-h="start">
          <b-col cols="6" md="3" lg="2">
            <b-btn variant="outline-black w-100" @click="submit">
              <span class="text-14"> 저장하기</span>
            </b-btn>
          </b-col>
        </b-row>
        <div class="text-right">
          <b-btn variant="link p-0 text-light text-12">회원 탈퇴하기</b-btn>
        </div>
      </template>
      <!-- <pre>
      user: {{ user }}
      <br>
      input: {{ input }}
    </pre> -->
    </article>
  </b-container>
</template>

<script>
import { resize } from "~/plugins/commons.js";
export default {
  head() {
    return {
      title: `신물결 | 마이페이지`,
    };
  },
  data() {
    return {
      pending: {
        profileImage: false,
        submit: false,
        newPassword: null,
        newPasswordConfirm: null,
      },
      input: {
        profileImage: null,
        profileImageURL: null,
        displayName: null,
      },
      resize,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async uploadProfileImage(e) {
      const file = e.target.files[0];
      if (!file) return;
      // 초기화
      this.input.profileImageURL = null;
      // pending 시작
      this.pending.profile = true;
      // 이미 올린 썸네일이 있으면 그건 삭제함
      if (this.input.profileImage) {
        this.$firebase().deleteImage(`profile/${this.input.profileImageURL}`);
      }
      const type = file?.type.split("/").at(-1);
      const fileName = `profile_${new Date().valueOf()}.${type}`;
      // 가로 200으로 리사이징하여 url 적용함
      this.resize.photo("w", file, 200, "object", async (result) => {
        const uploadedFile = await this.$firebase().getImageURL(
          result.blob,
          result.blob.type,
          "profile",
          fileName
        );
        if (uploadedFile?.url) {
          this.input.profileImage = uploadedFile.name;
          this.input.profileImageURL = uploadedFile.url;
          this.pending.profile = false;
        }
      });
    },
    submit() {
      this.pending.submit = true;
      console.log("%c Hello ", "background: #333399; color: #ededed");
    },
  },
};
</script>

<style lang="scss" scoped></style>
