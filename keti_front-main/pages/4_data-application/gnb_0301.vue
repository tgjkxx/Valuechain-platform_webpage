<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>데이터 이용신청 절차도</h3>
        <div class="data_process_area">
          <img src="/images/process.png">
        </div>
        <div class="data_process_mobile_area">
          <img src="/images/process_mobile.png">
        </div>

        <div class="mT50">
          <div class="board_title mB20">
            <p>데이터 이용 필수 서류</p>
            <button class="btn-gray-s" @click.prevent="$checkLink('noPage')">제출서류 양식 다운로드 ></button>
          </div>
          <div class="data-board">
            <table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>첨부서류</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bg-gray">이용신청</td>
                  <td>데이터 활용 신청서, 데이터 활용 내용</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="bg-gray">이용종료</td>
                  <td>데이터 활용 종료 보고서(결과물, 성능 평가 등)</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
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
      title: '데이터 신청',
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

