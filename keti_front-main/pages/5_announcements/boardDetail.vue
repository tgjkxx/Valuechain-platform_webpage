<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>{{ setLocTitle }}</h3>

        <div class="view_area">

          <div class="notice-view">
            <table>
              <colgroup>
                <col />
                <col style="width:15%;" />
              </colgroup>
              <thead>
                <!--게시글 제목-->
                <tr>
                  <th class="align-left">{{ setContent.title }}</th>
                  <th>{{ setContent.date }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan='2'>
                    <div class="view">
                      <p>{{ setContent.text }}</p>
                    </div>
                  </td>
                </tr>

                <!--첨부파일-->
                <tr>
                  <td colspan='2'>
                    <div class="selectedFile">
                      <input type="text" class="form-selectedFile" :value="setContent.file ? setContent.file : '첨부파일이 없습니다.'" style="width: 90%;" readonly="">
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <div>
            <!-- <nuxt-link to="moveToPrevPage"><button class="btn-primary-l mT20" >목록으로</button></nuxt-link> -->
						<!-- 목록으로 버튼을 클릭하면 이전페이지로 이동 -->
						<button class="btn-primary-l mT20" @click="moveToPrevPage">목록으로</button>

          </div>
        </div>
      </div>
    </div>
    <!-- 컨텐츠 영역 끝 -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: '알림 소식',
    };
  },
  mounted() {

  },
  computed: {
    boardType() {
      return this.$route.query.boardType;
    },
    id() {
      return this.$route.query.id;
    },
    setLocTitle() {
      const locTitle = {
        notice: '공지사항',
        faq: '자주하는 질문',
        reference: '자료실',
        qna: '1:1문의',
        'research-results': '연구성과 현황'
      }
      return locTitle[this.boardType];
    },
    // content를 임시로 만들어서 적용
    setContent() {
      // notice , faq , reference , qna , research-results
      const boardTypeTextSet = (boardType) => {
        switch (boardType) {
          case 'notice':
            return '공지사항';
          case 'faq':
            return '자주하는 질문';
          case 'reference':
            return '자료실';
          case 'qna':
            return '1:1문의';
          case 'research-results':
            return '연구성과 현황';
        }
      }

      return {
        title: boardTypeTextSet(this.boardType) + ' 제목이 들어갑니다.',
        text: boardTypeTextSet(this.boardType) + ' 내용이 들어갑니다.',
        date: '2024.01.30',
        file: '',
      }
    },
  },
  methods: {
    moveToPrevPage() {
      // 공지사항, 자주하는 질문, 자료실, 1:1문의, 연구성과 현황
      // boardType에 따라 이전페이지로 이동 (boardType: notice -> gnb_0401, faq -> gnb_0402, reference -> gnb_0403, qna -> gnb_0404, research-results -> gnb_0405)
      switch (this.boardType) {
        case 'notice':
          this.$router.push('/5_announcements/gnb_0401');
          break;
        case 'faq':
          this.$router.push('/5_announcements/gnb_0402');
          break;
        case 'reference':
          this.$router.push('/5_announcements/gnb_0403');
          break;
        case 'qna':
          this.$router.push('/5_announcements/gnb_0404');
          break;
        case 'research-results':
          this.$router.push('/5_announcements/gnb_0405');
          break;
      }
		}
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>

