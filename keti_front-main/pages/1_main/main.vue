<template>
  <div class="wrapper">
    <!-- 메인 배너 영역 시작-->
    <div class="main-wrapper">
      <div class="inner">
        <h1>밸류체인 플랫폼은<br>다양한 종류의 헬스케어<br>데이터 DB를 공유합니다.</h1>
        <p>데이터의 투명한 활용을 목표로 하고 있습니다.</p>
        <div class="process_list_area">
          <div class="process_list">
            <ul>
              <li><img src="/images/icon/icon_01.svg"><p>데이터 이용신청</p></li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 80px;"><img src="/images/icon/icon_02.svg">
                <p>사전검토</p>
              </li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 80px;"><img src="/images/icon/icon_03.svg">
                <p>심의</p>
              </li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 80px;"><img src="/images/icon/icon_04.svg">
                <p>데이터 제공</p>
              </li>
            </ul>
          </div>
          <div class="btn_area">
            <nuxt-link to="/4_data-application/gnb_0302"><button type="button" class="btn-primary-s">데이터 이용신청</button></nuxt-link>
            <nuxt-link to="/4_data-application/gnb_0301"><button type="button" class="btn-white-s">이용신청 절차</button></nuxt-link>
          </div>
        </div>
        <div class="process_list_area-mobile">
          <div class="process_list">
            <ul>
              <li style="width: 70px;"><img src="/images/icon/icon_01.svg">
                <p>데이터<br>이용신청</p>
              </li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 60px;"><img src="/images/icon/icon_02.svg">
                <p>사전검토</p>
              </li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 60px;"><img src="/images/icon/icon_03.svg">
                <p>심의</p>
              </li>
              <li><img src="/images/icon/chevron-right.svg" class="mB20"></li>
              <li style="width: 60px;"><img src="/images/icon/icon_04.svg">
                <p>데이터<br>제공</p>
              </li>
            </ul>
          </div>
          <div class="btn_area">
            <nuxt-link to="/4_data-application/gnb_0302"><button type="button" class="btn-primary-s">데이터 이용신청</button></nuxt-link>
            <nuxt-link to="/4_data-application/gnb_0301"><button type="button" class="btn-white-s">이용신청 절차</button></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 메인 배너 영역 끝-->


    <!-- 퀵 메뉴 영역 시작-->
    <div class="quick-menu-wrapper">
      <div class="inner">
        <div class="title_area">
          <h2>데이터의 안전한<br>활용을 통해 국민건강 향상에<br>기여하고자 합니다.</h2>
          <p>데이터의 투명한 활용을<br>목표로 하고 있습니다.</p>
          <img src="/images/main_img_01.png">
        </div>
        <div class="menu_list_area">
            <!-- <a href="#" class="link-overlay"></a> -->
          <nuxt-link to="/2_platform/gnb_0102" class="menu">
            <div class="icon"><img src="/images/icon/icon_05.svg"></div>
            <div class="text_area">
              <p class="title mB20">밸류체인<br>플랫폼 소개</p>
              <p class="sub">바로가기</p>
            </div>
          </nuxt-link>

          <!-- <a href="#" class="link-overlay"></a> -->
          <nuxt-link to="/3_data/gnb_0203" class="menu">
            <div class="icon"><img src="/images/icon/icon_06.svg"></div>
            <div class="text_area">
              <p class="title mB20">생체신호<br>데이터 특성</p>
              <p class="sub">바로가기</p>
            </div>
          </nuxt-link>


          <!-- <a href="#" class="link-overlay"></a> -->
          <nuxt-link to="/3_data/gnb_0201" class="menu">
            <div class="icon"><img src="/images/icon/icon_07.svg"></div>
            <div class="text_area">
              <p class="title mB20">데이터<br>카탈로그 소개</p>
              <p class="sub">바로가기</p>
            </div>
          </nuxt-link>

          <!-- <a href="#" class="link-overlay"></a> -->
          <nuxt-link to="/3_data/gnb_0202" class="menu">
            <div class="icon"><img src="/images/icon/icon_07.svg"></div>
            <div class="text_area">
              <p class="title mB20">데이터<br>카탈로그 조회</p>
              <p class="sub">바로가기</p>
            </div>
          </nuxt-link>

        </div>
      </div>
    </div>
    <!-- 퀵 메뉴 영역 끝-->


    <!-- 배너 영역 시작-->
    <div class="banner-wrapper">
      <div class="inner">
        <img src="/images/main_bottom.png">
      </div>
    </div>
    <!-- 배너 영역 시작-->



    <!-- 게시판 영역 시작-->
    <div class="main-board-wrapper">
      <div class="inner">
        <!-- 공지사항 영역 시작-->
        <div class="board_list_area">
          <div class="board_title">
            <h5>공지사항</h5>
            <nuxt-link to="/5_announcements/gnb_0401"><img src="/images/icon/plus.svg"></nuxt-link>
          </div>
          <ul class="board_list">
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=notice">공지사항 제목이 들어갑니다.</nuxt-link>
                <!-- <a href="#">공지사항 제목이 들어갑니다.</a> -->
                <span class="date">2024.01.30</span>
              </div>
            </li>
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=notice">공지사항 제목이 들어갑니다.</nuxt-link>
                <span class="date">2024.01.30</span>
              </div>
            </li>
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=notice">공지사항 제목이 들어갑니다.</nuxt-link>
                <span class="date">2024.01.30</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 공지사항 영역 끝-->

        <div class='v-line'></div>

        <!-- 자주하는 질문 영역 시작-->
        <div class="board_list_area">
          <div class="board_title">
            <h5>자료실</h5>
            <nuxt-link to="/5_announcements/gnb_0403"><img src="/images/icon/plus.svg"></nuxt-link>
          </div>
          <ul class="board_list">
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=reference">자료실 제목이 들어갑니다.</nuxt-link>
                <span class="date">2024.01.30</span>
              </div>
            </li>
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=reference">자료실 제목이 들어갑니다.</nuxt-link>
                <span class="date">2024.01.30</span>
              </div>
            </li>
            <li>
              <div class="list_item">
                <nuxt-link to="/5_announcements/boardDetail?boardType=reference">자료실 제목이 들어갑니다.</nuxt-link>
                <span class="date">2024.01.30</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 자주하는 질문 영역 끝-->
      </div>
    </div>
    <!-- 게시판 영역 끝-->
  </div>
</template>


<script>
export default {
  layout: "default",
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Style(Css) -->
<style scoped>

</style>
