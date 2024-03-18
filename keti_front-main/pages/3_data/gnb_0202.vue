<template>
  <div>
    <TitleSection :title="title" />

    <!-- 데이터 카탈로그 선택 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>데이터 카탈로그 조회</h3>
        <div class="data_catalogue_list_area">

          <div class="data_catalogue_list_01">
            <div class="title">영상 데이터</div>
            <div class="box">
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_01') }" @click="loadActiveCatalogue('gnb_0202_01')">
                <a>Chest X-Ray Images(Pneumonia)</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_02') }" @click="loadActiveCatalogue('gnb_0202_02')">
                <a>Brain MRI<br>segmentation</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_03') }" @click="loadActiveCatalogue('gnb_0202_03')">
                <a>Brain Tumor Classification(MRI)</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_04') }" @click="loadActiveCatalogue('gnb_0202_04')">
                <a>CelebFaces Attributes(CelebA) Dataset</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_05') }" @click="loadActiveCatalogue('gnb_0202_05')">
                <a>WIDER FACE: A FaceDetection Benchmark</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_06') }" @click="loadActiveCatalogue('gnb_0202_06')">
                <a>COVID-19 Radiography Database</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_07') }" @click="loadActiveCatalogue('gnb_0202_07')">
                <a>COVID-19<br>CT scans</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_08') }" @click="loadActiveCatalogue('gnb_0202_08')">
                <a>Skin Cancer MNIST:HAM10000</a>
              </div>
            </div>
          </div>

          <div class="data_catalogue_list_02">
            <div class="title">신호 데이터</div>
            <div class="box">
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_09') }" @click="loadActiveCatalogue('gnb_0202_09')">
                <a>ECG Heartbeat Categorization Dataset</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_10') }" @click="loadActiveCatalogue('gnb_0202_10')">
                <a>EEG-Alcohol</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_11') }" @click="loadActiveCatalogue('gnb_0202_11')">
                <a>Confused student EEG brainwave data</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_12') }" @click="loadActiveCatalogue('gnb_0202_12')">
                <a>Non-invasive Blood Pressure Estimation</a>
              </div>
              <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_13') }" @click="loadActiveCatalogue('gnb_0202_13')">
                <a>MIT-BIH Arrhvthmia</a>
              </div>
            </div>
          </div>

          <div class="data_catalogue_list_group">
            <div class="data_catalogue_list_03">
              <div class="title">음성 데이터</div>
              <div class="box">
                <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_14') }" @click="loadActiveCatalogue('gnb_0202_14')">
                  <a>호흡기 질환자 호흡음</a>
                </div>
                <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_15') }" @click="loadActiveCatalogue('gnb_0202_15')">
                  <a>호흡기 질환자 폐음</a>
                </div>
              </div>
            </div>

            <div class="data_catalogue_list_03">
              <div class="title">정형 데이터</div>
              <div class="box">
                <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_16') }" @click="loadActiveCatalogue('gnb_0202_16')">
                  <a>Heart Failure Prediction</a>
                </div>
                <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_17') }" @click="loadActiveCatalogue('gnb_0202_17')">
                  <a>Parkinson Disease Data</a>
                </div>
                <div class="catalogue" v-bind:class="{ active: isActiveCatalogue('gnb_0202_18') }" style="width: 438px;" @click="loadActiveCatalogue('gnb_0202_18')">
                  <a>Heart Attack Analysis & Prediction Dataset</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 데이터 카탈로그 선택 영역 끝 -->

    <component v-bind:is="activeCatalogue" />
  </div>
</template>


<script>
import Gnb_0202_01 from '@/components/data-catalog-detail/gnb_0202_01.vue';
import Gnb_0202_02 from '@/components/data-catalog-detail/gnb_0202_02.vue';
import Gnb_0202_03 from '@/components/data-catalog-detail/gnb_0202_03.vue';
import Gnb_0202_04 from '@/components/data-catalog-detail/gnb_0202_04.vue';
import Gnb_0202_05 from '@/components/data-catalog-detail/gnb_0202_05.vue';
import Gnb_0202_06 from '@/components/data-catalog-detail/gnb_0202_06.vue';
import Gnb_0202_07 from '@/components/data-catalog-detail/gnb_0202_07.vue';
import Gnb_0202_08 from '@/components/data-catalog-detail/gnb_0202_08.vue';
import Gnb_0202_09 from '@/components/data-catalog-detail/gnb_0202_09.vue';
import Gnb_0202_10 from '@/components/data-catalog-detail/gnb_0202_10.vue';
import Gnb_0202_11 from '@/components/data-catalog-detail/gnb_0202_11.vue';
import Gnb_0202_12 from '@/components/data-catalog-detail/gnb_0202_12.vue';
import Gnb_0202_13 from '@/components/data-catalog-detail/gnb_0202_13.vue';
import Gnb_0202_14 from '@/components/data-catalog-detail/gnb_0202_14.vue';
import Gnb_0202_15 from '@/components/data-catalog-detail/gnb_0202_15.vue';
import Gnb_0202_16 from '@/components/data-catalog-detail/gnb_0202_16.vue';
import Gnb_0202_17 from '@/components/data-catalog-detail/gnb_0202_17.vue';
import Gnb_0202_18 from '@/components/data-catalog-detail/gnb_0202_18.vue';

export default {
  layout: "default",
  components: {
    Gnb_0202_01,
    Gnb_0202_02,
    Gnb_0202_03,
    Gnb_0202_04,
    Gnb_0202_05,
    Gnb_0202_06,
    Gnb_0202_07,
    Gnb_0202_08,
    Gnb_0202_09,
    Gnb_0202_10,
    Gnb_0202_11,
    Gnb_0202_12,
    Gnb_0202_13,
    Gnb_0202_14,
    Gnb_0202_15,
    Gnb_0202_16,
    Gnb_0202_17,
    Gnb_0202_18,
  },
  data() {
    return {
      title: '데이터 조회',
      activeCatalogue: 'gnb_0202_01',
    };
  },
  mounted() {
    this.loadActiveCatalogue('gnb_0202_01');
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

