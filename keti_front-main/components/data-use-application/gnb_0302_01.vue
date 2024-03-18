<template>
  <div>
    <div class="signup_area">
      <div class="guide_list">
        <ul>
          <li>
            데이터 신청의 연구 책임자 조건
            <ul>
              <li>국내 거주 중인 내국인이어야만 데이터 신청가능합니다.</li>
            </ul>
          </li>
          <li>
            진행 결과 통보 방법
            <ul>
              <li>
                데이터 신청 이후의 진행 결과는 SMS를 통해 연구 책임자에게
                안내됩니다.
              </li>
            </ul>
          </li>
          <li>
            신청 및 이용 절차 안내
            <ul>
              <li>
                "데이터 신청 > 이용신청 절차 안내"에서 자세한 신청 및 이용
                절차에 대한 정보를 확인할 수 있습니다.<br />
                데이터 신청 전에 해당 내용을 충분히 검토한 후에 신청해야
                합니다.
              </li>
            </ul>
          </li>
          <li>
            회원 가입 요구
            <ul>
              <li>연구자들은 미리 회원으로 가입되어 있어야 합니다.</li>
            </ul>
          </li>
          <li>
            데이터 신청의 조건 및 처리 절차
            <ul>
              <li>
                데이터 신청은 연구자들의 개인정보 수집, 이용 및 제3자 제공
                동의와 보안각서 작성이 완료된 경우에만 가능합니다.<br />
                동의 여부는 데이터 이용 신청 등록 후 각 연구자들이
                "마이페이지"에서 처리할 수 있으며, 모든 연구자들의<br />
                동의가 완료된 후 한국전자기술연구원으로 접수가 가능합니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="btn_area mT30">
      <button class="btn-primary-l" @click="nextPage">다음 단계 이동</button>
    </div>

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
    nextPage() {
      this.$parent.loadActiveProcess('gnb_0302_02');
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

