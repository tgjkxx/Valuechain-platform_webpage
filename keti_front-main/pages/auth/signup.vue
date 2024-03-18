<template>
  <div>
    <div class="gnb-wrap-bg"></div>

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>회원가입</h3>
        <div class="step_list_area mB40">
          <div class="step_list">
            <ul>
              <li :class="isActiveProcess('join_01') ? 'on' : 'off'">
                <div>1</div>
                <p>약관 동의</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('join_02') ? 'on' : 'off'">
                <div>2</div>
                <p>본인 인증</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('join_03') ? 'on' : 'off'">
                <div>3</div>
                <p>정보 입력</p>
              </li>
              <li class="line">
                <div></div>
              </li>
              <li :class="isActiveProcess('join_04') ? 'on' : 'off'">
                <div>4</div>
                <p>가입 완료</p>
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
import Join_01 from '@/components/auth/join_01.vue';
import Join_02 from '@/components/auth/join_02.vue';
import Join_03 from '@/components/auth/join_03.vue';
import Join_04 from '@/components/auth/join_04.vue';


export default {
  layout: "default",
  components: {
    Join_01,
    Join_02,
    Join_03,
    Join_04,
  },
  data() {
    return {
      activeProcess: 'join_01',
    };
  },
  mounted() {
    this.loadActiveProcess('join_01');
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


