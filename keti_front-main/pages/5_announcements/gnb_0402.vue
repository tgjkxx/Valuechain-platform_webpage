<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>자주하는 질문</h3>

        <div class="Accordion_area">
          <div v-for="(question, index) in questions" :key="index" class='accordion-list'>
            <div class="que" @click="toggleAnswer(index)" v-bind:class="{ on: activeIndex === index }">
              <span>{{ question.title }}</span>
              <div class="arrow-wrap">
                <span class="arrow-top"><img src="/images/icon/chevron-top.svg" /></span>
                <span class="arrow-bottom"><img src="/images/icon/chevron-bottom.svg" /></span>
              </div>
            </div>


            <VueSlideToggle :open="activeIndex === index" tag="section" :duration="300">
              <div class="anw" v-show="activeIndex === index">
                <span>{{ question.answer }}</span>
              </div>
            </VueSlideToggle>
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
      activeIndex: null,
      questions: [
        {
          title: '데이터 신청 자격은?',
          answer: '플랫폼은 개인정보를 철저히 보호하고자 데이터 신청자를 대한민국 국적의 국내거주자로 제한하고 있습니다.',
        },
        {
          title: '데이터를 신청하고 활용하는데 제한은 있나요?',
          answer: '데이터 신청은 대한민국 국적의 국내거주자이면 누구에게나 연구를 수행하기 위하여 데이터를 신청할 수 있습니다. 다만, 고의적으로 데이터 유출이나 악의적 목적으로 데이터를 신청할 경우에는 민형사상의 법적인 책임을 지게 됩니다',
        },
        {
          title: '데이터 카탈로그에서 제공되는 목록 이외의 데이터는 신청할 수 없나요?',
          answer: '플랫폼에서 제공되는 데이터는 데이터 카탈로그를 기준으로 하고 있으며, 데이터 카탈로그정보는 지속적으로 업데이트할 예정입니다.',
        },
        {
          title: '플랫폼을 활용한 연구결과를 외부에 발표할때에는 출처를 명기해야하나요?',
          answer: '플랫폼 데이터를 활용한 연구결과를 외부에 발표할때에는 데이터 출처를 본 밸류체인 헬스케어 데이터 공유 플랫폼이라고 명기해야합니다.',
        }

      ],
    };
  },
  mounted() {

  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = (this.activeIndex === index) ? null : index;
    },
  }
}
</script>

<style scoped>
.que:first-child{
  border-top: none;
}
.accordion-list:first-child{
  border-top: 1px solid var(--gray-300);
}
.anw:not([style*="display: none"]) {
  border-bottom: 1px solid var(--gray-300);
}
</style>
