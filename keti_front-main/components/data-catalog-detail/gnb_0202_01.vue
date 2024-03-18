<template>
  <div>

    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Chest X-Ray Images(Pneumonia)</h3>
        <p class="sub-text">폐렴 X-Ray 흉부 이미지</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>데이터 세트는 3개의 폴더(train, test, val)로 구성되어 있으며 각 이미지 카테고리(Pneumonia/Normal)에 대한 하위 폴더를 포함합니다. 5,863개의
                  X-Ray 이미지(JPEG)와 2개의 카테고리(폐렴/정상)가 있습니다.
                </li>
                <li>흉부 X선 영상(전방-후방)은 광저우 여성아동병원의 1~5세 소아 환자의 후향적 코호트에서 선택되었습니다. 모든 흉부 X선 촬영은 환자의 일상적인 임상 진료의 일부로 수행되었습니다.
                </li>
                <li>흉부 X선 영상 분석을 위해 품질 관리를 위해 모든 흉부 방사선 사진에서 품질이 낮거나 읽을 수 없는 스캔을 모두 제거하여 초기에 검사했습니다. 이미지에 대한 진단은 두 명의 전문
                  의사가 등급을 매긴 후 AI 시스템 교육을 위해 승인되었습니다. 채점 오류를 설명하기 위해 세 번째 전문가가 평가 세트도 확인했습니다.
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>label : Pneumonia/Normal(폐렴/정상)</li>
                <li>데이터 수 : 5,863개</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_01.png">
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

