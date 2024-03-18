<template>
  <!-- 현재 페이지가 /auth 하위 페이지면 백그라운드 속성을 부여 -->
  <div class="wrapper" :style="{ 'background': ($route.path.startsWith('/auth') || $route.path === '/') ? '#EBF0F7' : '' }">
    <Header />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header, Footer
  }
};
</script>

<style>
/* 레이아웃 스타일 작성 */
</style>
