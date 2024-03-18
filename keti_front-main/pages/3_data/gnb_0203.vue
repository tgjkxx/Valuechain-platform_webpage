<template>
  <div>
    <TitleSection :title="title" />

    <!-- 생체신호 데이터 탭 메뉴 영역 시작 -->
    <div class="tab-wrap mT50">
      <div class="tab">
        <ul>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_01') }" @click="loadActiveCatalogue('gnb_0203_01')">
            <a>EEG 신호</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_02') }" @click="loadActiveCatalogue('gnb_0203_02')">
            <a>ECG 신호</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_03') }" @click="loadActiveCatalogue('gnb_0203_03')">
            <a>PPG 신호</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_04') }" @click="loadActiveCatalogue('gnb_0203_04')">
            <a>MRI 영상</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_05') }" @click="loadActiveCatalogue('gnb_0203_05')">
            <a>CT scan</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_06') }" @click="loadActiveCatalogue('gnb_0203_06')">
            <a>X-ray</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_07') }" @click="loadActiveCatalogue('gnb_0203_07')">
            <a>얼굴 데이터</a></li>
          <li v-bind:class="{ active: isActiveCatalogue('gnb_0203_08') }" @click="loadActiveCatalogue('gnb_0203_08')">
            <a>음성 데이터</a></li>
        </ul>
      </div>
    </div>
    <!-- 생체신호 데이터 탭 메뉴 영역 끝 -->

    <component v-bind:is="activeCatalogue" />
  </div>
</template>


<script>
import Gnb_0203_01 from '@/components/data-biometric-detail/gnb_0203_01.vue';
import Gnb_0203_02 from '@/components/data-biometric-detail/gnb_0203_02.vue';
import Gnb_0203_03 from '@/components/data-biometric-detail/gnb_0203_03.vue';
import Gnb_0203_04 from '@/components/data-biometric-detail/gnb_0203_04.vue';
import Gnb_0203_05 from '@/components/data-biometric-detail/gnb_0203_05.vue';
import Gnb_0203_06 from '@/components/data-biometric-detail/gnb_0203_06.vue';
import Gnb_0203_07 from '@/components/data-biometric-detail/gnb_0203_07.vue';
import Gnb_0203_08 from '@/components/data-biometric-detail/gnb_0203_08.vue';

export default {
  layout: "default",
  components: {
    Gnb_0203_01,
    Gnb_0203_02,
    Gnb_0203_03,
    Gnb_0203_04,
    Gnb_0203_05,
    Gnb_0203_06,
    Gnb_0203_07,
    Gnb_0203_08,
  },
  data() {
    return {
      title: '데이터 조회',
      activeCatalogue: 'gnb_0203_01',
    };
  },
  mounted() {
    this.loadActiveCatalogue('gnb_0203_01');
  },
  methods: {
    isActiveCatalogue(catalogue) {
      return this.activeCatalogue === catalogue;
    },
    loadActiveCatalogue(catalogue) {
      // load되면 첫번째 카탈로그로 설정
      this.activeCatalogue = catalogue;
    },
  },
};
</script>

<!-- Style(Css) -->
<style scoped></style>

