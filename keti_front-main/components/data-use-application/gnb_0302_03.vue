<template>
  <div>

    <div class="title_area">
      <h5 class="mB20">서류 제출</h5>
      <button class="btn-gray-s" @click.prevent="$checkLink('noPage')">제출서류 양식 다운로드 ></button>
    </div>

    <div class="signup_area">
      <div class="input_list">

        <div class="input_area" v-for="n in 5" :key="n">
          <div class="filebox_area">
            <label>{{ n-1 }}. {{ titleList[n-1] }}</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              v-model="fileList[n-1].name" readonly>
            <label :for="'ex_filename_' + n" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" :id="'ex_filename_' + n" class="upload-hidden" @change="onFileChange($event, n-1)">
          </div>
        </div>

        <!-- <div class="input_area">
          <div class="filebox_area">
            <label>1. 플랫폼 데이터 활용 신청서</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              readonly>
            <label for="ex_filename_1" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" id="ex_filename_1" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>2. 연구 요약서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              readonly>
            <label for="ex_filename_2" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" id="ex_filename_2" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>3. 연구 계획서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              readonly>
            <label for="ex_filename_3" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" id="ex_filename_3" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>4. IRB 승인 문서(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              readonly>
            <label for="ex_filename_4" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" id="ex_filename_4" class="upload-hidden">
          </div>
        </div>

        <div class="input_area">
          <div class="filebox_area">
            <label>5. 추가 제출 서류(선택)</label>
          </div>
          <div class="filebox">
            <input type="text" class="upload-name" autocomplete="off" style="width:80%;" placeholder="파일을 업로드 해주세요"
              readonly>
            <label for="ex_filename_5" class="btn-primary-m ex_filename">파일선택</label>
            <input type="file" id="ex_filename_5" class="upload-hidden">
          </div>
        </div> -->


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
      titleList : ['플랫폼 데이터 활용 신청서', '연구 요약서(선택)', '연구 계획서(선택)', 'IRB 승인 문서(선택)', '추가 제출 서류(선택)'],
      fileList: Array.from({ length: 5 }, (index) => ({
        title: '',
        name: '',
        file: null
      })),
    };
  },
  mounted() {

  },
  methods: {
    onFileChange(event, index) {
      const file = event.target.files[0];
      if (file) {
        this.$set(this.fileList, index, { title: this.titleList[index], name: file.name, file: file });
      }
    },
    nextPage() {
      this.$store.commit('singupFormmat/updateFiles', this.fileList);
      this.$parent.loadActiveProcess('gnb_0302_04');
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

