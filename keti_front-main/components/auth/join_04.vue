<template>
  <div>
    <div class="join_area">
      <div class="completebox">
        <img src="/images/icon/complete.svg">
        <h3 class="mT10">회원가입 완료</h3>
        <p>헬스케어 데이터 공유 플랫폼 회원가입이 완료되었습니다.</p>
        <div class="btn_area mt10 mB10">
          <button class="btn-Line-primary-l" @click="home">홈으로</button>
          <button class="btn-primary-l" @click="login">로그인</button>
        </div>
      </div>
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
    home() {
      this.$router.push('/');
    },
    login() {
      this.$router.push('/auth/login');
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

