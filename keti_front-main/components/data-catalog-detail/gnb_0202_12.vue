<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Non-invasive Blood Pressure Estimation</h3>
        <p class="sub-text">비침습적 혈압 추정</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>이 데이터 세트는 커프가 없는 비침습적 방식으로 혈압을 추정하려는 연구 방법에 사용</li>
                <li>이 데이터 세트의 각 대상에 대해 심음도(PCG), 심전도(ECG) 및 광용적맥파(PPG) 신호 수집</li>
                <li>피험자별 신호 획득과 함께 다수의 참조 BP 측정</li>
                <li>FSR의 신호도 데이터세트에 포함</li>
                <li>나이, 몸무게, 키 기록</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>JSON 형식 ( Key : value 형태 )</li>
                <li>피시험자 수 : 26명</li>
                <li>데이터 수 : 26건</li>
                <li>데이터셋 정보(Key : value)
                  <ul>
                    <li>UID : 피시험자 ID</li>
                    <li>age : 나이</li>
                    <li>weight : 체중</li>
                    <li>height : 키</li>
                    <li>data_PCG(청진음) : 가슴에서 획득한 PCG신호(Fs = 1KHz)</li>
                    <li>data_ECG(심박음) : ECG 신호(Fs = 1KHz)</li>
                    <li>data_PPG(맥박) : 손가락 PPG 신호(Fs = 1KHz)</li>
                    <li>data_FSR(압력센서/위치 모름) : FSR 신호(Fs = 1KHz)</li>
                    <li>data_BP : 수축기 혈압(SBP)/이완기 혈압(DBP)</li>
                  </ul>
                </li>
                <li>데이터 저장 형식
                  <ul>
                    <li>{<br>
                      "UID" : "subject1",<br>
                      "age" : 25,<br>
                      "weight" : 65,<br>
                      "height" : 175,<br>
                      "data_PPG" : [2131, 2131, ... , 2131],<br>
                      "data_EEG" : [ ... ], <br>
                      "data_PCG" : [ ... ],<br>
                      "data_FSR" : [ ... ],<br>
                      "data_BP" : [{"SBP" : 141, "DBP" : 82}, {"SBP" : 134, "DBP" : 73}, <br>
                      {"SBP" : 125, "DBP" : 70}, {"SBP" : 118, "DBP" : 57}]<br>
                      }
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_12.png">
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

