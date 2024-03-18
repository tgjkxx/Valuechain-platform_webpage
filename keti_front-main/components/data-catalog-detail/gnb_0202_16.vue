<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Heart Failure Prediction</h3>
        <p class="sub-text">심부전으로 인한 사망 예측 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>심혈관 질환(CVD)은 전 세계적으로 사망 원인 1위를 차지하고 있으며, 매년 약 1,790만 명의 목숨을 앗아가고 있으며 이는 전 세계 사망자의 31%를 차지합니다.</li>
                <li>심부전은 CVD로 인해 발생하는 일반적인 사건이며 이 데이터 세트에는 심부전으로 인한 사망률을 예측하는 데 사용할 수 있는 12가지 기능이 포함되어 있습니다.</li>
                <li>대부분의 심혈관 질환은 인구 전반에 걸친 전략을 사용하여 흡연, 건강에 해로운 식습관 및 비만, 신체 활동 부족 및 유해한 음주와 같은 행동 위험 요인을 해결함으로써 예방할 수
                  있습니다.</li>
                <li>심혈관 질환이 있거나 심혈관 위험이 높은 사람(고혈압, 당뇨병, 고지혈증 또는 이미 확립된 질병과 같은 하나 이상의 위험 요인이 존재하기 때문에)은 조기 발견 및 관리가 필요합니다.
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>데이터 : 300명</li>
                <li>데이터셋 컬럼 정보
                  <ul>
                    <li>age : 나이</li>
                    <li>anaemia : 적혈구 감소(0:False/1:True)</li>
                    <li>creatinine_phosphokinase : 혈중 CPK 효소 수치(mcg/L)</li>
                    <li>diabetes : 당뇨병(0:False/1:True)</li>
                    <li>ejection_fraction : 수축 시 심장에서 나가는 혈액의 백분율(%)</li>
                    <li>high_blood_pressure : 고혈압 여부(0:False/1:True)</li>
                    <li>platelets : 혈소판(킬로혈소판/ml)</li>
                    <li>serum_creatinine : 혈청 크레아티닌 수치(mg/dL)</li>
                    <li>serum_sodium : 혈청 나트륨 농도(mEq/L)</li>
                    <li>sex : 성별(0:남/1:여)</li>
                    <li>smoking : 흡연여부(0:False/1:True)</li>
                    <li>time : 사후관리 기간(일)</li>
                    <li>DEATH_EVENT : 추적 기간 동안 환자가 사망한 경우(0:False/1:True)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_16.png">
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

