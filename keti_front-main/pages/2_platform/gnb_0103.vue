<template>
  <div>
    <TitleSection :title="title" />


    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>데이터 제공 절차도</h3>
        <div class="data_process_area">
          <img src="/images/data_process.png">
        </div>
        <div class="data_process_mobile_area">
          <img src="/images/data_process_mobile.png">
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

