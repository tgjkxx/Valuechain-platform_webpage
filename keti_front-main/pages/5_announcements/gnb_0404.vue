<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>1:1 문의</h3>

        <div class="board_area">

          <div class="notice-title">
            <p>총 <span>10</span>건의 게시글이 있습니다.</p>
            <!--<button class="btn-primary-s">1:1 문의하기</button>-->
          </div>

          <div class="notice-board">
            <table>
              <colgroup>
                <col style="width:10%;" />
                <col />
                <col style="width:10%;" />
                <col style="width:20%;" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>문의구분</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr class="bg-gray" @click="moveToDetailView('notice', 1)">
                  <td>공지</td>
                  <td class="align-left">1:1 문의 게시판입니다.</td>
                  <td>2024.01.30</td>
                </tr>
                <tr class="bg-gray" @click="moveToDetailView('notice', 1)">
                  <td>공지</td>
                  <td class="align-left">1:1 문의 게시판입니다.</td>
                  <td>2024.01.30</td>
                </tr> -->

                <tr v-for="n in 10" :key="n" @click="moveToDetailView('notice', n)">
                  <td>{{ 11 - n }}</td>
                  <td class="align-left">1:1 문의 게시글 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
              </tbody>
              <!-- <tbody>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>13</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>12</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>11</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>10</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>9</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>8</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>7</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>6</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>5</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
                <tr @click="moveToDetailView('qna', 1)">
                  <td>4</td>
                  <td class="align-left">1:1 문의 제목이 들어갑니다.</td>
                  <td>기타</td>
                  <td>2024.01.30</td>
                </tr>
              </tbody> -->
            </table>

          </div>

          <!--페이지네이션-->
          <div>
            <ul class="page-num">
              <li class="first"><a href="#"><img src="/images/icon/chevrons-left-s.svg"></a></li>
              <li class="prev"><a href="#"><img src="/images/icon/chevron-left-s.svg"></a></li>
              <li><a href="#" class="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li class="next"><a href="#"><img src="/images/icon/chevron-right-s2.svg"></a></li>
              <li class="last"><a href="#"><img src="/images/icon/chevrons-right-s.svg"></a></li>
            </ul>
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
      title: '알림 소식',
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    moveToDetailView(boardType, postId) {
      this.$router.push({
      path: `/5_announcements/boardDetail`,
      query: {
        boardType: 'qna',
        id : postId
      }
    });
    },
  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>
