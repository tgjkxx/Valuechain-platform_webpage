<template>
  <div>
    <TitleSection :title="title" />

    <!-- 컨텐츠 영역 시작 -->
    <div class="content-wrapper mB100">
      <div class="inner">
        <h3>데이터 카탈로그 소개</h3>
        <p class="sub-text">헬스케어 데이터 공유 플랫폼에서 보유 중인 헬스케어 데이터 셋 정보입니다.<br>
          데이터 카탈로그에서 데이터의 형식, 종류, 도메인 등의 정보를 확인할 수 있습니다.
        </p>

        <div class="data-board">
          <table>
            <colgroup>
              <col style="width:100px;" />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>데이터 종류</th>
                <th>도메인</th>
                <th>개수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="bg-gray">1</td>
                <td class="bg-gray">ECG Heartbeat Categorization Dataset</td>
                <td>신호데이터</td>
                <td>123,998</td>
              </tr>
              <tr>
                <td class="bg-gray">2</td>
                <td class="bg-gray">EEG-Alcohol</td>
                <td>신호데이터</td>
                <td>948</td>
              </tr>
              <tr>
                <td class="bg-gray">3</td>
                <td class="bg-gray">Confused student EEG brainwave data</td>
                <td>신호데이터</td>
                <td>12,811</td>
              </tr>
              <tr>
                <td class="bg-gray">4</td>
                <td class="bg-gray">Non-invasive Blood Pressure Estimation</td>
                <td>신호데이터</td>
                <td>26</td>
              </tr>
              <tr>
                <td class="bg-gray">5</td>
                <td class="bg-gray">호흡기 질환자 호흡음</td>
                <td>음성데이터</td>
                <td>129</td>
              </tr>
              <tr>
                <td class="bg-gray">6</td>
                <td class="bg-gray">호흡기 질환자 폐음</td>
                <td>음성데이터</td>
                <td>100</td>
              </tr>
              <tr>
                <td class="bg-gray">7</td>
                <td class="bg-gray">Heart Failure Prediction</td>
                <td>정형데이터</td>
                <td>300</td>
              </tr>
              <tr>
                <td class="bg-gray">8</td>
                <td class="bg-gray">Heart Attack Analysis & Prediction Dataset</td>
                <td>정형데이터</td>
                <td>303</td>
              </tr>
              <tr>
                <td class="bg-gray">9</td>
                <td class="bg-gray">Chest X-Ray Images (Pneumonia)</td>
                <td>영상데이터</td>
                <td>5,863</td>
              </tr>
              <tr>
                <td class="bg-gray">10</td>
                <td class="bg-gray">Brain MRI segmentation</td>
                <td>영상데이터</td>
                <td>7,858</td>
              </tr>
              <tr>
                <td class="bg-gray">11</td>
                <td class="bg-gray">Brain Tumor Classification(MRI)</td>
                <td>영상데이터</td>
                <td>3,260</td>
              </tr>
              <tr>
                <td class="bg-gray">12</td>
                <td class="bg-gray">CelebFaces Attributes (CelebA) Dataset</td>
                <td>영상데이터</td>
                <td>202,599</td>
              </tr>
              <tr>
                <td class="bg-gray">13</td>
                <td class="bg-gray">WIDER FACE: A Face Detection Benchmark</td>
                <td>영상데이터</td>
                <td>32,203</td>
              </tr>
              <tr>
                <td class="bg-gray">14</td>
                <td class="bg-gray">COVID-19 Radiography Database</td>
                <td>영상데이터</td>
                <td>21,166</td>
              </tr>
              <tr>
                <td class="bg-gray">15</td>
                <td class="bg-gray">COVID-19 CT scans</td>
                <td>영상데이터</td>
                <td>10</td>
              </tr>
              <tr>
                <td class="bg-gray">16</td>
                <td class="bg-gray">MIT-BIH Arrhvthmia</td>
                <td>신호데이터</td>
                <td>48</td>
              </tr>
              <tr>
                <td class="bg-gray">17</td>
                <td class="bg-gray">Skin Cancer MNIST:HAM10000</td>
                <td>영상데이터</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td class="bg-gray">18</td>
                <td class="bg-gray">Parkinson Disease Data</td>
                <td>정형데이터</td>
                <td>31</td>
              </tr>
            </tbody>
          </table>
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
      title: '데이터 조회',
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

