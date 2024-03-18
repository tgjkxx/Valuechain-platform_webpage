<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>ECG Heartbeat Categorization Dataset</h3>
        <p class="sub-text">부정맥 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>이 데이터세트는 심장박동 분류의 두 가지 유명한 데이터세트인 MIT-BIH 부정맥 데이터세트와 PTB 진단 ECG 데이터베이스에서 파생된 두 개의 심장박동 신호 컬렉션으로 구성됩니다.
                </li>
                <li>이 데이터 세트는 심층 신경망 아키텍처를 사용하여 심장 박동 분류를 탐색하고 이에 대한 전이 학습 기능 중 일부를 관찰하는 데 사용되었습니다.</li>
                <li>신호는 일반적인 경우와 다양한 부정맥 및 심근경색의 영향을 받는 경우에 대한 심장 박동의 심전도(ECG) 모양에 해당합니다. 이러한 신호는 전처리 및 분할되며 각 세그먼트는 심장
                  박동에 해당합니다.</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>Sampling Frequency : 125Hz</li>
                <li>전체 데이터 수 : 123,998개</li>
                <li>카테고리 수 : 5개(0:정상 / 1, 2, 3, 4:비정상)</li>
                <li>0(정상) : 94,635개</li>
                <li>1~4(비정상) : 29,363개</li>
                <li>1(심실상 조기 박동) : 13,285개</li>
                <li>2(조기 심실 수축) : 7,236개</li>
                <li>3(심실 박동과 정상 박동 혼합) : 803개</li>
                <li>4(분류 불가): 8,039개</li>
                <li>0~186열 : 데이터</li>
                <li>187열 : 카테고리(0~4)</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_09.png">
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

