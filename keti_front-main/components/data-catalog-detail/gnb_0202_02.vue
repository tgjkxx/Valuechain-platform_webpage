<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Brain MRI segmentation</h3>
        <p class="sub-text">뇌 MRI 분할 이미지</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>분할 마스크와 함께 뇌 MR 이미지로 구성</li>
                <li>The Cancer Genome Atlas(TCGA) 저등급 신경교종 110명의 환자로 구성</li>
                <li>data.csv 파일에 환자 정보 제공</li>
                <li>모든 이미지는 3채널의 '.tif' 형식으로 제공되며 사전 조영, FLAIR, 사후 조영(채널 순서) 등 3가지 시퀀스 사용 가능</li>
                <li>마스크는 바이너리, 1채널 이미지</li>
                <li>파일명 : TCGA_<기관 코드>_<환자 ID>_<슬라이스 번호>.tif</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_02_01.png">
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_02_02.png">
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

