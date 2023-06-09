<template>
  <div>
    <template v-if="admin">
      <b-container>
        <b-row align-v="center" align-h="center">
          <b-col cols="6">
            <b-input-group>
              <b-form-select v-model="year" class="mr-2" size="lg">
                <b-form-select-option v-for="y in years" :key="y" :value="y">
                  {{ y }}
                </b-form-select-option>
              </b-form-select>
              <b-form-text>년</b-form-text>
            </b-input-group>
          </b-col>
          <b-col cols="6">
            <b-input-group>
              <b-form-select v-model="month" class="mr-2" size="lg">
                <b-form-select-option
                  v-for="(m, i) in months"
                  :key="i"
                  :value="i"
                >
                  {{ i + 1 }}
                </b-form-select-option>
              </b-form-select>
              <b-form-text>월 달력</b-form-text>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
      <section class="mt-5">
        <b-container>
          <b-row class="mb-3">
            <b-col cols="12" md="9">
              <h1>일정</h1>
            </b-col>
            <b-col cols="12" md="2">
              <b-btn variant="primary w-100" v-b-modal.modal-write-schedule>
                새 일정
              </b-btn>
            </b-col>
          </b-row>
          <div class="my-3">
            <template v-if="!schedules?.length">
              <div class="text-center p-3">
                <small class="text-12 text-gray-600">
                  등록된 일정이 없습니다.
                </small>
              </div>
            </template>
            <ul v-else class="border-bottom pb-2">
              <li v-for="(item, i) in schedules" :key="i" class="mb-2 py-1">
                <b-row>
                  <b-col cols="2">
                    {{ item?.year }} / {{ item?.month }} / {{ item.date }}
                  </b-col>
                  <b-col cols="8">
                    {{ item.text }}
                  </b-col>
                  <b-col cols="2">
                    <div class="d-flex">
                      <b-btn
                        variant="text p-0 text-12 text-gray-600 mr-2"
                        @click="deleteSchedule(item)"
                      >
                        삭제
                      </b-btn>
                      <b-btn
                        variant="outline-primary px-2 py-1 text-13"
                        @click="editSchedule(item)"
                      >
                        수정
                      </b-btn>
                    </div>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </div>
        </b-container>
      </section>
    </template>
    <section class="mt-5">
      <b-container class="result-wrap">
        <header class="mb-3" v-if="admin">
          <h1>달력</h1>
        </header>
        <div class="d-flex justify-content-center">
          <div
            ref="calendar"
            class="overflow-auto"
            :style="{ maxWidth: '92vw' }"
          >
            <!--  ============================== 여기서부터 달력 ================ -->
            <div
              id="calendar"
              style="width: 100%; max-width: fluid? 836px; width: 836px"
              :class="`calendar`"
            >
              <div
                id="header"
                style="
                  display: flex;
                  align-items: center;
                  padding: 4% 0;
                  color: #555;
                "
              >
                <div
                  class="date"
                  style="margin: 0 auto 0 0; color: #121212; font-size: 2rem"
                >
                  {{ currentMonth }} {{ year }}
                </div>
                <!-- <div
            class="color-info"
            style="background: #f2f2f2; padding: 0.75rem 0.75rem"
          >
            <i
              class="dot"
              style="
                width: 8px;
                height: 8px;
                margin: 0 0.25rem 0 0.75rem;
                display: inline-block;
                border-radius: 50%;
                background-color: #f54336;
              "
            ></i>
            <span class="txt">대기업</span>
            <i
              class="dot"
              style="
                width: 8px;
                height: 8px;
                margin: 0 0.25rem 0 0.75rem;
                display: inline-block;
                border-radius: 50%;
                background-color: #8ac44a;
              "
            ></i>
            <span class="txt">중,소기업</span>
            <i
              class="dot"
              style="
                width: 8px;
                height: 8px;
                margin: 0 0.25rem 0 0.75rem;
                display: inline-block;
                border-radius: 50%;
                background-color: #ffc108;
              "
            ></i>
            <span class="txt">외국계</span>
            <i
              class="dot"
              style="
                width: 8px;
                height: 8px;
                margin: 0 0.25rem 0 0.75rem;
                display: inline-block;
                border-radius: 50%;
                background-color: #2296f3;
              "
            ></i>
            <span class="txt" style="margin: 0 0.25rem 0 0"> 스타트업</span>
          </div> -->
              </div>

              <div style="width: 100%">
                <div
                  class="calendar-table"
                  style="width: 100%; border-collapse: collapse"
                >
                  <div class="day" style="width: 100%; color: #555">
                    <div
                      style="
                        width: 14.25%;
                        font-size: 0.875rem;
                        text-align: center;
                        display: inline-block;
                        border-collapse: collapse;
                      "
                      v-for="(day, key) in days"
                      :key="key"
                    >
                      {{ day }}
                    </div>
                  </div>
                  <div class="contents" style="margin-top: 0.5rem; width: 100%">
                    <div
                      style="
                        width: 14.25%;
                        height: 100%;
                        min-width: 14.25%;
                        min-height: 8rem;
                        padding: 0.5rem;
                        border: 1px solid #f2f2f2;
                        font-size: 0.8rem;
                        vertical-align: top;
                        display: inline-block;
                        border-collapse: collapse;
                        box-sizing: border-box;
                        overflow: visible;
                      "
                      v-for="(el, i) in dates"
                      :key="i"
                    >
                      <span :style="`color: #${el.disabled ? '999' : '555'}`">
                        {{ el.date }}
                      </span>
                      <ul
                        style="
                          list-style-type: none;
                          margin: 0;
                          padding: 0;
                          text-indent: 0;
                        "
                        v-if="el?.items?.length"
                      >
                        <li
                          v-for="(item, l) in el.items"
                          :key="l"
                          style="margin-bottom: 1px"
                        >
                          <a
                            style="text-decoration: none; color: #555"
                            :href="item.link"
                            target="_blank"
                          >
                            <i
                              class="dot"
                              :style="{
                                width: `8px`,
                                height: `8px`,
                                margin: `0`,
                                display: `inline-block`,
                                borderRadius: `50%`,
                                verticalAlign: 'middle',
                                backgroundColor: `#121212`,
                              }"
                            ></i>
                            <span
                              :style="{
                                marginLeft: '3px',
                                display: 'inline-block',
                                maxWidth: '85%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                verticalAlign: 'middle',
                              }"
                            >
                              {{ item.text }}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  ============================== 여기까지 달력 끝 ================ -->
          </div>
        </div>

        <b-row align-h="end" class="my-5 pt-3 border-top" v-if="admin">
          <b-col cols="12" md="3">
            <b-btn variant="outline-primary w-100" @click="copyCode">
              달력 HTML 코드 복사
            </b-btn>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- modals -->
    <modal-write-schedule
      @ok="updateSchedules(year, month + 1)"
      @edit="updateSchedules(year, month + 1)"
      @close="selectedItem = null"
      :item="selectedItem"
    />
  </div>
</template>

<script>
import ModalWriteSchedule from "@/components/modal/writeSchedule.vue";

export default {
  props: {
    admin: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ModalWriteSchedule,
  },

  data() {
    return {
      // 월 목록
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      // 요일 목록
      days: {
        sun: "일",
        mon: "월",
        tue: "화",
        wed: "수",
        thu: "목",
        fri: "금",
        sat: "토",
      },
      // 현재 선택된 년/월
      year: 2023,
      month: new Date().getMonth(),
      // 날짜 목록
      dates: null,
      // 스케쥴 목록
      schedules: [],

      // 수정시 선택한 일정
      selectedItem: null,
      // html 코드
      code: null,
    };
  },
  computed: {
    currentMonth() {
      return this.months[this.month];
    },
    years() {
      const thisYear = new Date().getFullYear();
      const result = [];
      for (let i = 0; i < 5; i++) {
        result.push(thisYear + i);
      }
      return result;
    },
  },
  watch: {
    year(n) {
      this.updateSchedules(n, this.month + 1);
    },
    month(n) {
      this.updateSchedules(this.year, n + 1);
    },
  },
  async mounted() {
    await this.updateSchedules(this.year, this.month + 1);
  },
  methods: {
    // 달력에 날짜 구하기
    getDates() {
      const date = new Date();

      date.setFullYear(this.year);
      date.setMonth(this.month);
      const viewYear = date.getFullYear();
      const viewMonth = date.getMonth();

      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);

      const PLDate = prevLast.getDate();
      const PLDay = prevLast.getDay();

      const TLDate = thisLast.getDate();
      const TLDay = thisLast.getDay();

      const prevDates = [];
      const thisDates = [...Array(TLDate + 1).keys()].slice(1);
      // const nextDates = [];

      if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift({
            date: PLDate - i,
            disabled: true,
          });
        }
      }

      this.dates = [
        ...prevDates,
        ...thisDates.map((date) => {
          return { date, disabled: false, items: [] };
        }),
      ];
    },

    // 코드 복사
    copyCode() {
      const calendar = this.$refs.calendar;
      const code = calendar?.innerHTML;
      this.copyText(code);
    },
    // 텍스트 복사
    copyText(text, obj) {
      const board = navigator.clipboard;
      board
        .writeText(text)
        .then(() => {
          window.toast("코드가 클립보드에 복사되었습니다.");
        })
        .catch(() => {
          window.toast("코드 복사에 실패했습니다.");
        });
    },
    async getSchedules(year, month) {
      try {
        const data = await this.$firebase().getAllBoardItems("schedule", {
          year,
          month,
        });
        if (data) {
          this.schedules = data.sort((a, b) => {
            return a?.date - b?.date;
          });
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            for (let l = 0; l < this.dates.length; l++) {
              const date = this.dates[l]?.date;
              if (date === item?.date) {
                this.dates[l].items.push(item);
              }
            }
          }
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 일정 삭제
    async deleteSchedule(item) {
      try {
        const bool = await window.confirm("일정을 삭제하시겠습니까?");
        if (bool) {
          console.log(item);
          try {
            const data = await this.$firebase().removeBoardItem(
              "schedule",
              item?.id
            );
            if (data) {
              window.toast("일정이 삭제되었습니다");
              this.updateSchedules(this.year, this.month + 1);
            }
          } catch (error) {
            window.toast("일정 삭제에 실패했습니다");
          }
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 수정할 일정 선택
    editSchedule(item) {
      this.selectedItem = item;
      this.$bvModal.show("modal-write-schedule");
    },
    // 업데이트 되었을 때, 달력 다시 생성
    updateSchedules(year, month) {
      this.getDates();
      this.getSchedules(year, month);
    },
  },
};
</script>

<style lang="scss" scoped>
.result-wrap {
  width: 100%;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
