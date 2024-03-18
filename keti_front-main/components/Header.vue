<template>
  <header style="rgba(255, 255, 255, 0)">
    <!-- 상단 메뉴 영역 시작-->
    <div class="gnb-wrap">
      <div @click.prevent="navigateTo('/')" class="logo">KETI 밸류체인 플랫폼</div>
      <ul class="gnb">
        <li @click.prevent="navigateTo('/2_platform/gnb_0101')"><nuxt-link to="" class="gnb-text" >플랫폼 개요</nuxt-link></li>
        <li @click.prevent="navigateTo('/3_data/gnb_0201')"><nuxt-link to="" class="gnb-text" >데이터 조회</nuxt-link></li>
        <li @click.prevent="navigateTo('/4_data-application/gnb_0301')"><nuxt-link to="" class="gnb-text" >데이터 신청</nuxt-link></li>
        <li @click.prevent="navigateTo('/5_announcements/gnb_0401')"><nuxt-link to="" class="gnb-text" >알림 소식</nuxt-link></li>
        <li class="login_mobile" @click.prevent="navigateTo('/auth/login')"><nuxt-link to="" class="gnb-text" >로그인</nuxt-link></li>
      </ul>
      <button class="gnb_toggleBtn" @click="toggleMenu">menu</button>
      <div class="util">
        <nuxt-link v-if="!isLoggedIn" to="/auth/login"><button type="button" class="btn-primary-s">로그인</button></nuxt-link>
        <span v-else :style="{ color: '#fff' }">{{ this.$store.state.login.id }}</span>
      </div>
    </div>
    <!-- 상단 메뉴 영역 끝-->
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  watch: {

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    // toggleBtn 이벤트를 vue.js로 변경
    toggleMenu() {
      const menu = document.querySelector('.gnb');
      menu.classList.toggle('menuActive');
    },
    removeMenuActive() {
      const menu = document.querySelector('.gnb');
      menu.classList.remove('menuActive');
    },
    navigateTo(route) {
      this.removeMenuActive();
      this.$router.push(route);
    },
    handleScroll() {
      const scroll = window.scrollY;
      const header = document.querySelector('header');
      const gnbText = document.querySelectorAll('.gnb-text');
      const logo = document.querySelector('.logo');
      const gnbToggleBtn = document.querySelector('.gnb_toggleBtn');

      if (scroll > 1) {
        header.style.background = 'rgba(255, 255, 255)';
        gnbText.forEach((item) => {
          item.style.color = '#242424';
        });
        logo.style.background = "url('/images/logo_02.svg')no-repeat";
        gnbToggleBtn.style.background = "url('/images/icon/menu-burger_02.svg')no-repeat";
        gnbToggleBtn.style.backgroundSize = '30px';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0)';
        gnbText.forEach((item) => {
          item.style.color = '#ECEDF0';
        });
        logo.style.background = "url('/images/logo.svg')no-repeat";
        gnbToggleBtn.style.background = "url('/images/icon/menu-burger.svg')no-repeat";
        gnbToggleBtn.style.backgroundSize = '30px';
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.login.id !== '';
    },
  },


};
</script>

<style scoped>
/* 스타일 작성 */
</style>

