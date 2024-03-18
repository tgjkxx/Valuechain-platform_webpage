<template>
  <div>

    <div class="title_area">
      <h5 class="mB20">기본 정보 입력 확인</h5>
    </div>

    <div class="signup_area">
      <div class="input_list">

        <div class="input_area">
          <div class="label_area">
            <label>기관명</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.organizationName">
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>사업자 등록번호</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.registrationNumber" >
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>이름</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.userName" >
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>전화번호</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.tellNumber" >
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>이메일</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.email" >
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>주소</label>
          </div>
          <div class="group">
            <input type="text" id="" name="" autocomplete="off" style="width:83%;" disabled
              :value="this.$store.state.singupFormmat.address" >
            <button class="btn-primary-m btn-disabled" disabled>주소 검색</button>
            <input type="text" id="" name="" autocomplete="off" disabled
              :value="this.$store.state.singupFormmat.detailedAddress" >
          </div>
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>신청 데이터</label>
          </div>
          <input type="text" id="" name="" autocomplete="off" disabled
            :value="this.$store.state.singupFormmat.applicationData" >
        </div>

        <div class="input_area">
          <div class="label_area">
            <label>데이터 활용 목적</label>
          </div>
          <textarea id="" name="" disabled
            :value="this.$store.state.singupFormmat.dataUsagePurpose"></textarea>
        </div>

      </div>
    </div>

    <div class="title_area">
      <h5 class="mT40 mB20">서류 제출 확인</h5>
    </div>

    <div class="signup_area">
      <div class="input_list">

        <div class="input_area">
          <div class="filebox_area">
            <label>1. 플랫폼 데이터 활용 신청서</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:100%;" disabled
            :value="this.$store.state.singupFormmat.files[0]?.name ?? '' " >
            <input type="file" id="ex_filename_1" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>2. 연구 요약서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:100%;" disabled
              :value="this.$store.state.singupFormmat.files[1]?.name ?? '' " >
            <input type="file" id="ex_filename_2" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>3. 연구 계획서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:100%;" disabled
              :value="this.$store.state.singupFormmat.files[2]?.name ?? '' " >
            <input type="file" id="ex_filename_3" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>4. IRB 승인 문서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:100%;" disabled
              :value="this.$store.state.singupFormmat.files[3]?.name ?? '' " >
            <input type="file" id="ex_filename_4" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>5. 추가 제출 서류(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:100%;" disabled
              :value="this.$store.state.singupFormmat.files[4]?.name ?? '' " >
            <input type="file" id="ex_filename_5" class="upload-hidden">
          </div>
        </div>


      </div>
    </div>

    <div class="btn_area mT30">
      <button class="btn-primary-l" @click="nextPage" style="width: 180px;">제출</button>
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
    console.log(this.$store.state.singupFormmat);
  },
  methods: {
    nextPage() {
      this.$parent.loadActiveProcess('gnb_0302_05');
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

