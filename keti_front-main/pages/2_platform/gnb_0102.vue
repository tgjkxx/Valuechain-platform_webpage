<template>
  <div>
    <TitleSection :title="title" />


    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>밸류체인 플랫폼은</h3>
        <p class="sub-text">데이터 중심의 디지털 헬스케어 산업 생태계 활성화을 비전으로, 모바일 기반 비대면 정신건강 케어를 위한<br>
          디지털 치료제 조기 사업화 기술 개발 및 데이터 중심의 헬스케어 디지털 전환을 위한 데이터 공유 플랫폼 구축을 목표로 합니다.
        </p>
        <div class="platform_about_area">
          <img src="/images/platform_about.png">
        </div>
      </div>
    </div>
    <!-- 컨텐츠 영역 끝 -->
  </div>
</template>


<script>
export default {
  layout: "default",
  data() {
    return {
      title: '플랫폼 개요'
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

