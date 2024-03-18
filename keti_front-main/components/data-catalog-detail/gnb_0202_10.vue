<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>EEG-Alcohol</h3>
        <p class="sub-text">알코올 중독환자의 EEG 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>이 데이터는 EEG가 알코올 중독에 대한 유전적 소인의 상관관계를 조사하기 위한 대규모 연구에서 나온 것입니다.</li>
                <li>여기에는 1초 동안 256Hz(3.9msec epoch)로 샘플링된 피험자의 두피에 배치된 64개 전극의 측정값이 포함되어 있습니다.</li>
                <li>두 그룹의 피험자, 즉 알코올 중독자와 대조군이 있었습니다.</li>
                <li>각 피험자는 1980년 Snodgrass 및 Vanderwart 사진 세트에서 선택한 물체 사진인 단일 자극(S1) 또는 두 자극(S1 및 S2)에 노출되었습니다.</li>
                <li>두 개의 자극이 표시되면 S1이 S2와 동일한 일치 조건 또는 S1이 S2와 다른 비일치 조건으로 제시되었습니다.</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>데이터 : 948건</li>
                <li>trial number
                  <ul>
                    <li>시험번호(같은 사용자에 대해 시도 횟수, 사용자 마다 다르며 중간에 없는 경우도 있음)</li>
                  </ul>
                </li>
                <li>sensor position : 두피의 센서 위치(International 10-20 시스템 기준), 각 포지션 별로 sample num, time이 변화</li>
                <li>sample num : 샘플 번호(0~255), 시간 값에 대한 인덱스</li>
                <li>sensor value : 센서값(mV), 두피에 부착한 센서에서 받는 뇌파 데이터</li>
                <li>subject identifier : 식별자(a:알코올 중독 / c:제어 상태)</li>
                <li>matching condition
                  <ul>
                    <li>S1 obj : 단일 개체 보여줌</li>
                    <li>S2 match : S1과 같은 조건으로 된 S2를 보여줌</li>
                    <li>S2 nomatch : S1과 다른 조건으로 된 S2를 보여줌</li>
                  </ul>
                </li>
                <li>channel : 채널번호(0~63), sensor position의 index</li>
                <li>name : 참여한 사람의 번호, 한명이 여러번 참여한 경우 같은 이름 사용</li>
                <li>time : 측정 시간(단위:초)</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_10.png">
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

