<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Heart Attack Analysis & Prediction Dataset</h3>
        <p class="sub-text">심장마비 분류 데이터 세트</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>심장마비의 종류에 따른 특성을 모아둔 데이터 세트</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>데이터 : 303건</li>
                <li>데이터 셋 컬럼 정보
                  <ul>
                    <li>age : 나이</li>
                    <li>sex : 성별(0:여자/1:남자)</li>
                    <li>caa : 주요혈관 수(0~3)</li>
                    <li>cp : 가슴 통증 타입(전형적인 협심증 / 2 : 비정형 협심증 / 3 : 협심증이 아닌 통증 / 4 : 무증상)</li>
                    <li>trtbps : 안정시 혈압(mm Hg)</li>
                    <li>chol : 혈청 콜레스테롤(mg/dl)</li>
                    <li>fbs : 공복 혈당 > 120mg/dl (1=참, 0=거짓)</li>
                    <li>rest_ecg : 휴식기 심전도 결과(0:정상/1:ST-T파 이상/2:좌심실 비대 가능성)</li>
                    <li>thalach : 최대 심박수</li>
                    <li>exng : 운동 유발 협심증(1:예 / 0:아니오)</li>
                    <li>oldpeak : 운동에 의해 유발되는 ST </li>
                    <li>slp : ST 세그먼트 기울기</li>
                    <li>thall : 탈륨 스트레스 테스트 결과</li>
                    <li>output : (0 : 심장마비 적은 확률 / 1 : 심장마비 높은 확률)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_18.png">
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 데이터 카탈로그 상세페이지 끝 -->
  </div>
</template>


<script>
export default {

  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

