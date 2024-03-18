<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>WIDER FACE: A FaceDetection Benchmark</h3>
        <p class="sub-text">얼굴 검출 벤치마크 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>WIDER FACE 데이터세트는 얼굴 검출 벤치마크 데이터세트로, 공개된 WIDER 데이터세트에서 이미지를 선택했습니다.</li>
                <li>32,203개의 이미지를 선택하고 샘플 이미지에 표시된 대로 크기, 포즈 및 폐색의 가변성이 높은 393,703개의 얼굴에 라벨을 지정했습니다.</li>
                <li>WIDER FACE 데이터 세트는 61개의 이벤트 클래스를 기반으로 구성됩니다.</li>
                <li>각 이벤트 클래스에 대해 훈련, 검증 및 테스트 세트로 40%/10%/50% 데이터를 무작위로 선택합니다.</li>
                <li> PASCAL VOC 데이터 세트에 사용된 것과 동일한 평가 지표를 채택합니다.</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>The format of txt ground truth.</li>
                <li>File name</li>
                <li>Number of bounding box</li>
                <li>x1, y1, w, h, blur, expression, illumination, invalid, occlusion, pose</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_05.png">
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

