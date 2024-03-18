<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Parkinson Disease Data</h3>
        <p class="sub-text">195개의 음성 녹음의 특징 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>파킨슨병 환자 23명을 포함한 31명의 음성의 특징 데이터</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>24개 컬럼
                  <ul>
                    <li>name - ASCII 대상 이름 및 녹음 번호</li>
                    <li>MDVP:Fo(Hz) - 평균 보컬 기본 주파수</li>
                    <li>MDVP:Fhi(Hz) - 최대 보컬 기본 주파수</li>
                    <li>MDVP:Flo(Hz) - 최소 보컬 기본 주파수</li>
                    <li>MDVP: Jitter(%), MDVP:Jitter(Abs), MDVP:RAP, MDVP:PPQ, Jitter:DDP, MDVP:Shimmer,
                      MDVP:Shimmer(dB),Shimmer:APQ3,Shimmer:APQ5<br>
                      - 기본 주파수 변화에 대한 여러 측정값</li>
                    <li>MDVP:APQ,Shimmer:DDA - 진폭 변화에 대한 여러 측정값</li>
                    <li>NHR, HNR - 음성 상태의 음조 구성 요소에 대한 소음 비율에 대한 두 가지 측정값</li>
                    <li>status - 대상의 건강 상태(1) – 파킨슨병(PD), (0) - 건강함</li>
                    <li>RPDE, D2 - 두 가지 비선형 동적 복잡성 측정</li>
                    <li>DFA - 신호 프랙탈 스케일링 지수</li>
                    <li>Spread1,spread2,PPE - 기본 주파수 변화에 대한 세 가지 비선형 측정</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_17.png">
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

