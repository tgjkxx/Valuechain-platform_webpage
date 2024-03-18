<template>
  <div>






    <!-- 데이터 카탈로그 상세페이지 시작 -->
    <div class="data-wrapper">
      <div class="inner">
        <h3>COVID-19 CT scans</h3>
        <p class="sub-text">20개의 CT 스캔 및 COVID-19환자 세분화</p>

        <div class="data_set">
          <!-- 데이터 개요 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 개요</div>
            <div class="data_set_content">
              <ul>
                <li>CT 스캔은 코로나19 진단에 도움이 되는 역할을 하며 환자가 처한 중증도를 판단하는 핵심 절차입니다.</li>
                <li>코로나19의 증거를 찾거나 그 결과를 특성화 할 수 있는 모델은 특히 전문 방사선 전문의가 부족한 지역에서 진단 및 치료를 최적화하는 데 중요한 역할을 할 수 있습니다.</li>
                <li>이 데이터세트에는 코로나19로 진단받은 환자의 CT 스캔 20개와 전문가가 만든 폐 및 감염 세분화가 포함되어 있습니다.</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 구조 및 형식 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 구조<br>및 형식</div>
            <div class="data_set_content">
              <ul>
                <li>lung_mask : 폐 영역</li>
                <li>Infection_mask : 감염 세분화(COVID일 수 있는 소견 영역)</li>
                <li>lung_and_infection_mask : 폐 + 감염(간단하게 보기 위한 영역)</li>
              </ul>
            </div>
          </div>

          <!-- 데이터 샘플 -->
          <div class="data_set_box">
            <div class="data_set_title">데이터 샘플</div>
            <div class="data_set_content">
              <img src="/images/data_ catalogue/catalogue_07.png">
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

