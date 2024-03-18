<template>
  <div>
    <div class="join_area">
      <div class="join_list join_check">
        <p class="align-center">헬스케어 데이터 공유 플랫폼 회원 가입은 안전한 개인정보 보호를 위하여 본인 확인이 필요합니다.<br>
          인증방법을 선택하여 본인인증을 진행해주세요
        </p>

        <div class="certified_area mB20">
          <div class="certified">
            <a href="#" class="link-overlay"  @click.prevent="$checkLink('noPage')"></a>
            <p>휴대폰 인증</p>
            <img src="/images/join_icon_01.png" />
          </div>

          <div class="certified">
            <a href="#" class="link-overlay"  @click.prevent="$checkLink('noPage')"></a>
            <p>아이핀 인증</p>
            <img src="/images/join_icon_02.png" />
          </div>

          <div class="certified_2">
            <a href="#" class="link-overlay"  @click.prevent="$checkLink('noPage')"></a>
            <p>간편 인증</p>
            <img src="/images/join_icon_03.png" />
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

    };
  },
  mounted() {

  },
  methods: {
    nextPage() {
      this.$parent.loadActiveProcess('join_03');
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

