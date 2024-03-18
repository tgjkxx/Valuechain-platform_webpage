<template>
  <div>
    <!-- 타이틀 영역 시작 -->
    <div class="title-wrapper" :class="setTitleClass()">
      <div class="inner">
        <h1>{{ title }}</h1>
        <div class="location">
          <ul>
            <li><img src="/images/icon/home.svg"></li>
            <!-- <li v-for="(item, index) in locationItems" :key="index">{{ item.text }}</li> -->
            <li>{{ title }}</li>
            <li>{{ location }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 타이틀 영역 끝-->

    <!-- 탭 메뉴 영역 시작 -->
    <div class="lnb-wrap">
      <div class="lnb">
        <ul>
          <li v-for="(tab, index) in tabs" :key="index" :class="{ active: tab.active }">
            <a class="lnb-text" href="#" @click.prevent="selectTab(tab)">{{ tab.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 탭 메뉴 영역 끝 -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    loc: {
      type: String,
    }
  },
  data() {
    return {
      location: '',
      tabs: [],
    };
  },
  watch: {
    title(newTitle) {
      this.updateTabs(newTitle);
    },
    loc(newLoc) {
      this.location = newLoc;
    },
  },
  mounted() {
  // 초기 탭 설정
  this.updateTabs(this.title);
  const activeTab = this.tabs.filter(tab => tab.active)[0] ?? this.tabs[0];

  // 초기 location 설정
  this.location = activeTab ? activeTab.text : '';
},
  methods: {
    setTitleClass() {
      switch (this.title) {
        case '플랫폼 개요':
          return 'gnb_01';
        case '데이터 조회':
          return 'gnb_02';
        case '데이터 신청':
          return 'gnb_03';
        case '알림 소식':
          return 'gnb_04';
        default:
          return '';
      }
    },
    updateTabs(newTitle) {
      switch (newTitle) {
        case '플랫폼 개요':
          // '과제 소개' '플랫폼 소개' '데이터 제공 절차'
          this.tabs = [
            { text: '과제 소개', href: '/2_platform/gnb_0101', active: location.pathname.includes('gnb_0101') },
            { text: '플랫폼 소개', href: '/2_platform/gnb_0102', active: location.pathname.includes('gnb_0102') },
            { text: '데이터 제공 절차', href: '/2_platform/gnb_0103', active: location.pathname.includes('gnb_0103') }
          ];
          break;

        case '데이터 조회':
          this.tabs = [
            // '데이터 카탈로그 소개' '데이터 카탈로그 조회' '생체신호 데이터'
            { text: '데이터 카탈로그 소개', href: '/3_data/gnb_0201', active: location.pathname.includes('gnb_0201') },
            { text: '데이터 카탈로그 조회', href: '/3_data/gnb_0202', active: location.pathname.includes('gnb_0202') },
            { text: '생체신호 데이터', href: '/3_data/gnb_0203', active: location.pathname.includes('gnb_0203') }
          ]; break;
        case '데이터 신청':
          this.tabs = [
            // '데이터 이용신청 절차 안내' '데이터 이용신청'
            { text: '데이터 이용신청 절차 안내', href: '/4_data-application/gnb_0301', active: location.pathname.includes('gnb_0301') },
            { text: '데이터 이용신청', href: '/4_data-application/gnb_0302', active: location.pathname.includes('gnb_0302') }
          ]; break;
        case '알림 소식':
          this.tabs = [
            { text: '공지사항', href: '/5_announcements/gnb_0401', active: location.pathname.includes('gnb_0401') || location.search.includes('boardType=notice') },
            { text: '자주하는 질문', href: '/5_announcements/gnb_0402', active: location.pathname.includes('gnb_0402') || location.search.includes('boardType=faq') },
            { text: '자료실', href: '/5_announcements/gnb_0403', active: location.pathname.includes('gnb_0403') || location.search.includes('boardType=reference') },
            { text: '1:1문의', href: '/5_announcements/gnb_0404', active: location.pathname.includes('gnb_0404') || location.search.includes('boardType=qna') },
            { text: '연구성과 현황', href: '/5_announcements/gnb_0405', active: location.pathname.includes('gnb_0405') || location.search.includes('boardType=research-results') }
          ]; break;
        default:
          this.tabs = [];
      }
    },
    selectTab(selectedTab) {
        this.location = selectedTab.text;
        this.tabs = this.tabs.map(tab => ({
          ...tab,
          active: tab.text === selectedTab.text
        }));

        this.$router.push(selectedTab.href);
    },
  }
}
</script>

<!-- Style(sCss) -->
<style lang="scss" scoped>
.location {
  ul li:not(:last-child):after {
    content: '';
    background: url('../static/images/icon/chevron-right-s.svg') no-repeat;
    display: inline-block;
    width: .375rem;
    height: .625rem;
    margin-left: 10px;
  }
}

</style>
