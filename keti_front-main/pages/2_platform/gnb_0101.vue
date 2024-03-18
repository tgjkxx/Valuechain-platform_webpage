<template>
  <div>
    <TitleSection :title="title" />


    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>밸류체인 디지털 선도 R&D 사업은</h3>
        <p class="sub-text">헬스케어 기업들이 서비스 개발에 활용할 수 있도록<br>
          다양한 종류의 헬스케어 데이터 DB를 공유하는 사업입니다.</p>

        <div class="about_list_area">
          <div class="about_list">
            <div>
              <div class="about_list-title"><img src="/images/icon/about_01.svg">
                <p>데이터 제공 기관</p>
              </div>
              <p class="about_list-text">한국전자기술연구원, (주)디맨드, (주)다인,<br>
                한국생산기술연구원, 고려대학교 산학협력단,<br>
                한국노인종합복지관협회</p>
            </div>
            <div>
              <div class="about_list-title"><img src="/images/icon/about_02.svg">
                <p>연구데이터 활용</p>
              </div>
              <p class="about_list-text">정부 · 공공기관 · 연구기관 · 의료기관 등을 통해 안전한 데이터를<br>
                수집하고 이를 여러 기관 및 기업의 연구 활용을 위해 제공하여<br>
                데이터의 연구 활성화, 연구 범위 확대를 위한 방향으로 활용</p>
            </div>
            <div>
              <div class="about_list-title"><img src="/images/icon/about_03.svg">
                <p>이용 가능 데이터</p>
              </div>
              <p class="about_list-text">데이터 카탈로그 참조</p>
              <nuxt-link to="/3_data/gnb_0201"><button class="btn-gray-s mT10">데이터 카탈로그 소개 바로가기 ></button></nuxt-link>
            </div>
          </div>
        </div>
        <div class="about_list_area_mobile">
          <div class="about_list">
            <div>
              <div class="about_list-title"><img src="/images/icon/about_01.svg">
                <p>데이터 제공 기관</p>
              </div>
              <p class="about_list-text">한국전자기술연구원, (주)디맨드, (주)다인,<br>
                한국생산기술연구원, 고려대학교 산학협력단,<br>
                한국노인종합복지관협회</p>
            </div>
            <div>
              <div class="about_list-title"><img src="/images/icon/about_02.svg">
                <p>연구데이터 활용</p>
              </div>
              <p class="about_list-text">정부 · 공공기관 · 연구기관 · 의료기관 등을 통해 안전한 데이터를
                수집하고 이를 여러 기관 및 기업의 연구 활용을 위해 제공하여
                데이터의 연구 활성화, 연구 범위 확대를 위한 방향으로 활용</p>
            </div>
            <div>
              <div class="about_list-title"><img src="/images/icon/about_03.svg">
                <p>이용 가능 데이터</p>
              </div>
              <p class="about_list-text">데이터 카탈로그 참조</p>
              <button class="btn-gray-s mT10">데이터 카탈로그 소개 바로가기 > </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="img-wrapper mB50">
      <div class="inner">
        <img src="/images/about_diagram.png">
      </div>
    </div>

    <div class="content-wrapper mB50">
      <div class="inner">
        <h3>활용 계획 및 기대효과</h3>
        <div class="plan_list_area">
          <div class="plan_list">
            <div class="plan_list_box">
              <div class="plan_list_num">1</div>
              <div class="plan_list_text">
                <p>
                  실증 대상자의 헬스케어 정보를 수집/가공/분석/공유하여 신기술 및 신규서비스<br>
                  개발을 위한 데이터를 제공할 수 있는 데이터 공유 생태계 구축
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">2</div>
              <div class="plan_list_text">
                <p>
                  표준 데이터 생성-분석-제품/서비스화-사업화의 밸류체인 프로세스 구조화 촉진
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">3</div>
              <div class="plan_list_text">
                <p>
                  데이터 공유 플랫폼 구축으로 데이터 중심의 디지털 헬스케어 산업 생태계 활성화
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">4</div>
              <div class="plan_list_text">
                <p>
                  다양한 종류의 생체신호 데이터를 수집하고 DB 구축하여 향후 디지털<br>
                  헬스케어 신사업 발굴을 위한 테스트 베드 확보
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">5</div>
              <div class="plan_list_text">
                <p>
                  디지털 헬스케어 기업들이 자유로이 데이터를 고유하고 분석하는 도구를<br>
                  제공하므로써 아이디어의 조기 사업화 지원 가능
                </p>
              </div>
            </div>
          </div>

          <div class="plan_list">
            <div class="plan_list_box">
              <div class="plan_list_num">6</div>
              <div class="plan_list_text">
                <p>
                  정신건강/스트레스 분야 데이터의 공유를 통한 조기 사업화를 추진하여 디지털<br>
                  헬스케어 성공 모델 구축 및 타 서비스/제품으로 확산
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">7</div>
              <div class="plan_list_text">
                <p>
                  기업협의체 구축을 통한 헬스케어 기업들간 네트워킹 활성화를 통한 기술 및 시장정보 공유
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">8</div>
              <div class="plan_list_text">
                <p>
                  정신건강/스트레스 분야 디지털 치료제 조기 사업화를 통한 세계시장 선점 기대
                </p>
              </div>
            </div>
            <div class="plan_list_box">
              <div class="plan_list_num">9</div>
              <div class="plan_list_text">
                <p>
                  대규모 실증을 통한 서비스 시스템의 사용성 및 유효성 검증을 통해<br>
                  검증 프로세스 표준 가이드 제공 가능
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="content-wrapper mB50">
      <div class="inner">
        <h3>추진 경과</h3>
        <div class="year_list_area">
          <div class="year_list"><img src="/images/year_list_01.png"></div>
          <div class="year_list"><img src="/images/year_list_02.png"></div>
          <div class="year_list"><img src="/images/year_list_03.png"></div>
        </div>
      </div>
    </div>


    <div class="content-wrapper mB150">
      <div class="inner">
        <h3>함께하는 기관들</h3>
        <div class="company_list_area">
          <div class="year_list"><img src="/images/company_list_01.png"></div>
          <div class="year_list"><img src="/images/company_list_02.png"></div>
          <div class="year_list"><img src="/images/company_list_03.png"></div>
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
      title: '플랫폼 개요'
    };
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Style(Css) -->
<style scoped></style>
