<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Brain Tumor Classification(MRI)</h3>
        <p class="sub-text">뇌 MRI 분할 이미지</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>머신러닝과 인공지능을 이용하기 위해 구성된 뇌종양 환자의 뇌 MRI 이미지</li>
                <li>양성종양, 악성종양, 뇌하수체종양, 정상으로 구성</li>
                <li>전체 3,260개로 구성</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>glioma_tumor : 신경교종_종양(826)</li>
                <li>meningioma_tumor : 수막종_종양(822)</li>
                <li>no_tumor : 정상(395)</li>
                <li>pituitary_tumor : 뇌하수체_종양(827)</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_03.png">
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

