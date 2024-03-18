<template>
  <div>

    <div class="title_area">
          <h5 class="mB20">기본 정보 입력</h5>
          <!--<button class="btn-gray-s">제출서류 양식 다운로드 ></button>-->
        </div>

        <div class="signup_area">
          <div class="input_list">

            <div class="input_area">
              <div class="label_area">
                <label>기관명</label>
              </div>
              <input type="text" v-model="formData.organizationName" autocomplete="off" placeholder="기관명을 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>사업자 등록번호</label>
              </div>
              <input type="text" v-model="formData.registrationNumber" autocomplete="off" placeholder="사업자 등록번호를 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>이름</label>
              </div>
              <input type="text" v-model="formData.userName" autocomplete="off" placeholder="이름을 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>전화번호</label>
              </div>
              <input type="text" v-model="formData.tellNumber" autocomplete="off" placeholder="전화번호를 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>이메일</label>
              </div>
              <input type="text" v-model="formData.email" autocomplete="off" placeholder="이메일을 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>주소</label>
              </div>
              <div class="group">
                <input type="text" v-model="formData.address" autocomplete="off" style="width:83%;" placeholder="주소를 검색하세요" readonly>
                <button class="btn-primary-m" @click="openVueDaumPostcode">주소 검색</button>
                <input type="text" v-model="formData.detailedAddress" autocomplete="off" placeholder="상세주소를 입력하세요">
              </div>
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>신청 데이터</label>
              </div>
              <input type="text" v-model="formData.applicationData" autocomplete="off" placeholder="신청 데이터를 입력하세요">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>데이터 활용 목적</label>
              </div>
              <textarea v-model="formData.dataUsagePurpose" placeholder="선행연구, 연구타당성 검토, 시제품개발, 서비스개발 등"></textarea>
            </div>

          </div>
        </div>

        <div class="btn_area mT30">
          <button class="btn-Line-primary-l" @click.prevent="$checkLink('noPage')">임시 저장</button>
          <button class="btn-primary-l" @click="nextPage">임시 저장 후 다음 단계 이동</button>
        </div>

  </div>
</template>


<script>
export default {

  data() {
    return {
      formData: {
        organizationName: '',
        registrationNumber: '',
        userName: '',
        tellNumber: '',
        email: '',
        address: '',
        detailedAddress: '',
        applicationData: '',
        dataUsagePurpose: '',
      },
    };
  },
  mounted() {

  },
  methods: {
    nextPage() {
      this.$store.commit('singupFormmat/update', this.formData);
      this.$parent.loadActiveProcess('gnb_0302_03');
    },
    openVueDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {  // Use an arrow function
          this.formData.address = data.roadAddress;
        }
      }).open();
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

