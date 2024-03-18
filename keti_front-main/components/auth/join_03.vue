<template>
  <div>
    <div class="join_area">
      <div class="join_list">
        <div class="input_list">

          <div class="input_area">
            <div class="label_area">
              <label>아이디</label>
            </div>
            <div class="group">
              <input type="text" v-model="userId" id="" name="" autocomplete="off" style="width:83%;" placeholder="아이디를 입력하세요">
              <button class="btn-primary-m" @click="checkDuplicateId">중복 확인</button>
            </div>
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>비밀번호</label>
            </div>
            <input type="password" id="" name="" autocomplete="off" placeholder="비밀번호를 입력하세요">
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>비밀번호 확인</label>
            </div>
            <input type="password" id="" name="" autocomplete="off" placeholder="비밀번호를 한번 더 입력하세요">
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>이름</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" value="홍길동" disabled>
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>생년월일</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" value="1999-02-02" disabled>
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>휴대폰 번호</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" value="010-1234-5678" disabled>
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>이메일 주소</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" placeholder="이메일 주소를 입력하세요">
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>주소</label>
            </div>
            <div class="group">
              <input type="text" v-model="roadAddress" id="" name="" autocomplete="off" style="width:83%;" placeholder="주소를 검색하세요" readonly>
              <button class="btn-primary-m" @click="openVueDaumPostcode">주소 검색</button>
              <input type="text" id="" name="" autocomplete="off" placeholder="상세주소를 입력하세요">
            </div>
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>소속기관 유형</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" placeholder="소속기관 유형을 입력하세요">
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>소속기관 명</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" placeholder="소속기관 명을 입력하세요">
          </div>

          <div class="input_area">
            <div class="label_area">
              <label>직위</label>
            </div>
            <input type="text" id="" name="" autocomplete="off" placeholder="직위를 입력하세요">
          </div>

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
      userId: '',
      roadAddress: '',
    };
  },
  methods: {
    nextPage() {
      this.$parent.loadActiveProcess('join_04');
    },
    openVueDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {  // Use an arrow function
          this.roadAddress = data.roadAddress;
        }
      }).open();
    },
    checkDuplicateId() {
      if (this.userId.length >= 1) {
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('아이디를 입력해주세요.');
      }
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

