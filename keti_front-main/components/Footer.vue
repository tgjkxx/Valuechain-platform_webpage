<template>
  <footer class="footer">
    <div class="inner_pc">
      <p>경기도 성남시 분당구 새나리로 25 (야탑동) KETI 한국전자기술연구원 <span>｜</span> TEL : 031-421-3414 <span>｜</span> FAX : 031-421-3422</p>
      <p class="mB20">대표 : 000 <span>｜</span> 개인정보관리책임자 : OOO <span>｜</span> 팩스 : 031-123-4567<span>｜</span> 이메일 :
        abc@keti.re.kr</p>
      <div class="link_area">
        <p>Copyright(C) 2016 KOREA ELECTRONICS TECHNOLOGY INSTITUTE., All Rights Reserved.</p>
        <div>
          <a href="#" @click.prevent="$checkLink('noPage')">개인정보취급방침</a>
          <a href="#" @click.prevent="$checkLink('noPage')" class="mL15">이용약관</a>
        </div>
      </div>
    </div>
    <div class="inner_mobile">
      <p>경기도 성남시 분당구 새나리로 25 (야탑동) KETI 한국전자기술연구원 <br> TEL : 031-421-3414 <span>｜</span> FAX : 031-421-3422</p>
      <p class="mB20">대표 : 000 <span>｜</span> 개인정보관리책임자 : OOO <br> 팩스 : 031-123-4567<span>｜</span> 이메일 : abc@keti.re.kr
      </p>
      <div class="link_area">
        <p>Copyright(C) 2016 KOREA ELECTRONICS TECHNOLOGY INSTITUTE., All Rights Reserved.</p>
        <div>
          <a href="#" @click.prevent="$checkLink('noPage')">개인정보취급방침</a>
          <a href="#" @click.prevent="$checkLink('noPage')" class="mL10">이용약관</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {

  },
  computed: {

  },


};
</script>

<style scoped>
/* 스타일 작성 */
</style>

