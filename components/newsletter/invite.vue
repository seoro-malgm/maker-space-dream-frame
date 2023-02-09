<template>
  <section class="p-5 bg-white">
    <b-row align-v="end" class="pb-3">
      <b-col cols="12" lg="7">
        <h3 class="mb-3">뉴스레터를 구독하세요</h3>
        <p class="text-14 text-md-16 lh-180">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consequatur minima rerum animi omnis atque illo dolores doloribus
          placeat, quisquam architecto corrupti, culpa ad amet veniam inventore
          provident in doloremque facilis temporibus error libero nisi. Ducimus
          deserunt mollitia provident exercitationem temporibus doloremque
          aspernatur inventore odio rem esse. Voluptatum eligendi incidunt
          beatae aut nisi! Tempore molestias odit dolore repellat iste vel
          architecto voluptas ad, quasi maiores? Omnis, illum qui.
        </p>
      </b-col>
      <b-col cols="12" lg="4" offset-lg="1">
        <template v-if="pending.submit">
          <div class="p-4 text-center">
            <b-spinner />
          </div>
        </template>
        <template v-else>
          <b-input-group class="mt-3">
            <b-form-input
              v-model="input.email"
              placeholder="구독받을 이메일을 입력해주세요"
            />
            <template #append>
              <div class="ml-2">
                <b-btn
                  variant="outline-black rounded-0"
                  :disabled="validate"
                  @click="submit"
                  >구독하기</b-btn
                >
              </div>
            </template>
          </b-input-group>
          <div class="d-flex align-items-center">
            <input
              class="form-check"
              type="checkbox"
              v-model="input.agree"
              readonly
              @click="$bvModal.show('confirm-newletter')"
            />
            <b-btn
              variant="text text-13 p-0 pl-1"
              @click="$bvModal.show('confirm-newletter')"
            >
              개인정보 수집에 동의합니다.
            </b-btn>
          </div>
        </template>
      </b-col>
    </b-row>
    <b-modal
      id="confirm-newletter"
      title="개인정보 수집 동의"
      @cancel="input.agree = false"
      @ok="input.agree = true"
    >
      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
        reprehenderit harum natus hic fugit nihil, consectetur sequi velit
        deserunt, molestias illum laudantium sapiente quaerat voluptate
        exercitationem soluta earum quod at?
      </template>
      <template #modal-cancel>취소</template>
      <template #modal-ok>동의 </template>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: {
        email: null,
        agree: false,
      },
      pending: {
        submit: false,
      },
      // 가장 최근 전송된 이메일
      lastSubmitted: null,
    };
  },
  computed: {
    validate() {
      const regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
      const email = this.input.email && this.input.email !== "";
      const agree = this.input.agree;
      return !(
        // 이메일 있음
        (
          email &&
          // 이메일에 해당함
          regex.test(this.input.email) &&
          // 개인정보 동의함
          agree &&
          // 직전에 신청한 것 신청 불가
          this.input.email !== this.lastSubmitted
        )
      );
    },
  },
  methods: {
    async submit() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().addSubscribers({
          email: this.input.email,
          state: {
            on: true,
            updateDate: new Date(),
          },
        });
        if (data) {
          window.toast("구독 신청 완료! 메일을 확인해주세요.", {
            variant: "primary",
          });
          this.lastSubmitted = this.input.email;
        }
      } catch (error) {
        console.log("error:", error);
        window.toast("구독에 실패했습니다.", { variant: "alert" });
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-check {
  user-select: none;
}
</style>
