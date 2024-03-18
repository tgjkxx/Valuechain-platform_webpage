<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>Confused student EEG brainwave data</h3>
        <p class="sub-text">MOOC 동영상을 시청하는 10명의 EEG 데이터</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>대학생 10명이 MOOC 영상 시청 중 EEG 신호 수집</li>
                <li>익숙한 영상/익숙하지 않은 영상, 각 카테고리별 10개씩 20개 영상</li>
                <li>전두엽의 뇌파 측정</li>
                <li>동영상의 길이는 약 2분, 처음과 끝 30초를 제외한 1분간의 데이터만 수집</li>
                <li>수집된 사람의 정보 제공 및 동영상 제공</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>데이터셋 정보
                  <ul>
                    <li>SubjectID : 피시험자 ID(1~10)</li>
                    <li>익숙한 영상/익숙하지 않은 영상, 각 카테고리별 10개씩 20개 영상</li>
                    <li>전두엽의 뇌파 측정</li>
                    <li>동영상의 길이는 약 2분, 처음과 끝 30초를 제외한 1분간의 데이터만 수집</li>
                    <li>수집된 사람의 정보 제공 및 동영상 제공</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_11.png">
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

