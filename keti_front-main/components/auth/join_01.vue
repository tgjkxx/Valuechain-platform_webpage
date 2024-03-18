<template>
  <div>
    <div class="join_area">
      <div class="join_list join_check">

        <div>
          <div class="check-area mB20">
            <input type="checkbox" id="check_all" v-model="allChecked" @click="selectAll">
            <label for="check_all" class="text">
              <div class="check-control"></div>
              전체 동의
            </label>
          </div>
          <hr style="background-color: #E1E3E7; height:1px; border:0;" />
        </div>

        <div class="join_textarea">
          <div class="check-area mB10">
            <input type="checkbox" id="keepagree01" v-model="agreeChk[0]">
            <label for="keepagree01" class="text">
              <div class="check-control"></div>
              헬스케어 데이터 공유 플랫폼 이용약관 동의(필수)
            </label>
          </div>
          <textarea readonly="readonly" style="resize:none">회원은 서비스를 이용하면서 다음과 같은 행위를 하여서는 안 됩니다.

1. 다른 이용자의 개인정보를 도용하거나 자신의 개인정보를 제3자에게 이용하게 하는 행위
2. 서비스를 이용하여 얻은 정보를 이용자의 학술연구적인 이용 외에 복사, 가공, 번역, 2차적 저작 등을 통하여 복제, 공연, 방송, 전시, 배포, 출판 등에 사용하거나 제3자에게 제공하는 행위
3. 타인의 명예를 손상시키거나 불이익을 주는 행위
4. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 동영상, 음성 등을 타인에게 유포 하는 행위
5. 범죄와 결부된다고 객관적으로 인정되는 행위
6. 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염자료를 등록 또는 유포하는 행위
7. 서비스의 안정적 운영을 방해할 수 있는 정보를 전송하거나 수신자의 의사에 반하여 광고성 정보를 전송하는 행위
8. 정보통신윤리위원회, 소비자보호단체 등 공신력 있는 기관으로부터 시정요구를 받는 행위
9. 선거관리위원회의 중지, 경고 또는 시정명령을 받는 선거법 위반 행위를
                                </textarea>
        </div>

        <div class="join_textarea mT20 mB10">
          <div class="check-area mB10">
            <input type="checkbox" id="keepagree02" v-model="agreeChk[1]">
            <label for="keepagree02" class="text">
              <div class="check-control"></div>
              개인정보 수집 및 이용 동의(필수)
            </label>
          </div>
          <textarea readonly="readonly" style="resize:none">보건의료 빅데이터 통합 플랫폼은 정보주체의 동의하에 회원관리 및 양질의 서비스 제공을 위하여 다음과 같이 최소한의 개인정보를 수집하고 있습니다.
수집한 개인정보는 본 수집 이용 목적외의 다른 목적으로 사용되지 않습니다.

1. 수집하는 개인정보의 항목
- [필수] 아이디, 비밀번호, 성명, 생년월일, 휴대폰번호, 이메일주소, 소속기관유형, 소속기관명, 직위, 내국인여부
- * 휴대폰번호는 본인인증기관(나이스평가정보)에서 인증 받은 휴대전화 번호를 사용합니다.
2. 개인정보의 수집 및·이용 목적
- 헬스케어 데이터 공유 플랫폼 회원제 서비스 이용(회원용 데이터 카탈로그 조회, 데이터 이용신청, 분석센터 이용/연장 신청, 자주하는 질문 등)
3. 개인정보의 보유 및 이용 기간
- 헬스케어 데이터 공유 플랫폼 회원 탈퇴시까지
* 최종 로그인 시점부터 2년 이상 장기 미접속자는 탈퇴처리됩니다.
4. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용
                                </textarea>
        </div>

      </div>

    </div>

    <div class="btn_area mT30">
      <button class="btn-primary-l" @click="nextPage">다음</button>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      allChecked: false,
      agreeChk: [false, false]
    };
  },
  mounted() {

  },
  methods: {
    selectAll() {
      this.allChecked = !this.allChecked;
      this.agreeChk = this.agreeChk.map(() => this.allChecked);
    },
    nextPage() {
      this.validate() ? this.$parent.loadActiveProcess('join_02') : alert('필수 항목에 동의해주세요');
    },

    validate() {
      if (this.agreeChk[0] && this.agreeChk[1]) {
        return true;
      } else {
        return false;
      }
    },

  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

