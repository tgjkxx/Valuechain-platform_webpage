<template>
  <div>
    <div class="gnb-wrap-bg"></div>

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <div class="login-wrap">
          <h2>로그인</h2>

          <div class="login-form">

            <div class="input_area">
              <div class="label_area">
                <label>아이디</label>
              </div>
              <input type="text" id="" name="" v-model="id" autocomplete="" placeholder="아이디를 입력하세요.">
            </div>

            <div class="input_area">
              <div class="label_area">
                <label>비밀번호</label>
              </div>
              <input type="password" id="" name="" v-model="password" autocomplete="" placeholder="비밀번호를 입력하세요.">
            </div>

            <button type="button" class="btn-primary-l mT10" @click="login">로그인</button>

            <div class="checkbox_area">
              <div>
                <label class="label-checkbox"><input type="checkbox" name="" value="">아이디 저장</label>
              </div>
              <a href="#"><nuxt-link to="/auth/signup">회원가입</nuxt-link></a>
            </div>

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
      id: '',
      password: '',
    };
  },
  mounted() {

  },
  methods: {
    // 로그인 버튼 클릭
    login() {
      // checkValidation() 함수를 통과하면 로그인 처리
      if (!this.checkValidation()) {
        return;
      }

      this.$store.dispatch('login/login', { id: '사용자', password: 'password' });

      this.$router.push({
        path: `/`,
      });
    },

    // id, password 입력 확인 validation
    checkValidation() {
      if (this.id === '') {
        alert('아이디를 입력해주세요.');
        return false;
      }
      if (this.password === '') {
        alert('비밀번호를 입력해주세요.');
        return false;
      }
      return true;
    },

  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

