<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>데이터 이용신청</h3>
        <div class="step_list_area mB40">
          <div class="step_list">
            <ul>
              <li :class="isActiveProcess('gnb_0302_01') ? 'on' : 'off'">
                <div>1</div>
                <p>이용 안내</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('gnb_0302_02') ? 'on' : 'off'">
                <div>2</div>
                <p>기본 정보 입력</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('gnb_0302_03') ? 'on' : 'off'">
                <div>3</div>
                <p>서류 제출</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('gnb_0302_04') ? 'on' : 'off'">
                <div>4</div>
                <p>제출 확인</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('gnb_0302_05') ? 'on' : 'off'">
                <div>5</div>
                <p>신청 완료</p>
              </li>
            </ul>
          </div>
        </div>

        <component v-bind:is="activeProcess" />
      </div>
    </div>
    <!-- 컨텐츠 영역 끝 -->
  </div>
</template>

<script>
import Gnb_0302_01 from '@/components/data-use-application/gnb_0302_01.vue';
import Gnb_0302_02 from '@/components/data-use-application/gnb_0302_02.vue';
import Gnb_0302_03 from '@/components/data-use-application/gnb_0302_03.vue';
import Gnb_0302_04 from '@/components/data-use-application/gnb_0302_04.vue';
import Gnb_0302_05 from '@/components/data-use-application/gnb_0302_05.vue';


export default {
  layout: "default",
  components: {
    Gnb_0302_01,
    Gnb_0302_02,
    Gnb_0302_03,
    Gnb_0302_04,
    Gnb_0302_05,
  },
  data() {
    return {
      title: "데이터 신청",
      activeProcess: 'gnb_0302_01',
    };
  },
  mounted() {
    this.loadActiveProcess('gnb_0302_01');
  },
  methods: {
    isActiveProcess(process) {
      return this.activeProcess === process;
    },
    loadActiveProcess(process) {
      // load되면 첫번째 카탈로그로 설정
      this.activeProcess = process;
    },
  },
};
</script>

<!-- Style(Css) -->
<style scoped></style>

