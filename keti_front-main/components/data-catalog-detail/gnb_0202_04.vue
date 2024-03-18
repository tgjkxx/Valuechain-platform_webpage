<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>CelebFaces Attributes(CelebA) Dataset</h3>
        <p class="sub-text">200,000개 이상의 유명인 얼굴 이미지</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>데이터 수 : 202,599</li>
                <li>4가지 사용 목록</li>
                <li>5개의 랜드마크</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>imgalignceleba.zip: 모든 얼굴 이미지 데이터</li>
                <li>listevalpartition.csv: 훈련, 검증, 테스트 세트 분할 목록. 1-162770/훈련 162771-182637/검증, 182638-202599/테스트</li>
                <li>listbboxceleba.csv: 이미지에 대한 바운딩 박스 정보. "x1" 및 "y1"은 경계 상자의 왼쪽 상단 점 좌표. "width" 및 "height"는 경계 상자의 너비와
                  높이</li>
                <li>listlandmarksalign_celeba.csv: 이미지 랜드마크 및 해당 좌표. 5개의 랜드마크: 왼쪽 눈, 오른쪽 눈, 코, 왼쪽 입, 오른쪽 입</li>
                <li>listattrceleba.csv: 40개의 속성 정보. 1/-1(T/F)</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_04.png">
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

