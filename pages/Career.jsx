import ReactDOM from "react-dom";

import styled from "styled-components";

import Colors from "../utils/Colors";

import Banner_sub from "../components/Templates/Banner/Sub";
import Tab_career from "../components/Templates/Tab/Tab_career";
import Table_career from "../components/Templates/Table/Table_career";

import "../css/Career.css";
import "../css/Animate.css";
import "antd/dist/antd.css";

const Button = styled.button`
  margin: 0 auto;
  padding: 10px 40px;
  font-size: 18px;
  width: 100%;
  color: ${Colors.gray};
  border: 1px solid ${Colors.gray};
  border-radius: 3px;
  cursor: pointer;
  margin-top: 30px;
  background-color: #fff;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

function Career() {
  return (
    <div className="Career">
      <Banner_sub title="FLES : SELF" sub="내 안의 잠재 가능성을 깨우자" />
      <section>
        <div className="pageTit">
          <h1 className="animated fadeInUp">인재상</h1>
        </div>
        <div className="inner">
          <div className="dp-f">
            <h2 className="animated fadeInUp">
              우리와 함께하는 파트너가 <br />
              IT 비즈니스에서 성공할 수 있기를 바랍니다.
            </h2>
            <ul>
              <li className="animated fadeInUp">
                파트너에게 IT가 쉬워지는 만큼 우리는 보다<br className="mobile"/> 전문적인 지식이
                필요합니다.
                <br /> 남들이 가지않은 길을 개척해야할 수도 있고, <br />
                아주 사소하지만 매일 확인해야하는 일에<br className="mobile"/> 직면할 수도 있습니다.
              </li>
              <li className="animated fadeInUp">
                1등을 해야만 행복한 사람보다는, <br className="mobile"/>목표를 이뤄가는 과정에서
                <br /> 함께 행복을 느낄 수 있는 분과 함께하고 싶습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="pageTit">
          <h1 className="animated fadeInUp">
            행복한 환경에서 <br />
            일합니다.
          </h1>
        </div>
        <div className="inner dp-f">
          <h2 className="img"></h2>
          <ul>
            <li className="animated fadeInUp">잊을만하면 찾아오는 간식!</li>
            <li className="animated fadeInUp">필요할 땐 언제든, 도서 및 교육비 지원!</li>
            <li className="animated fadeInUp">하루 6시간이면 충분, 화-목요일 자유시간 1시간</li>
            <li className="animated fadeInUp">오래오래 건강하게, 매년 건강검진 지원</li>
            <li className="animated fadeInUp">눈치 볼 필요없이, 연차/반차/반반차 자유롭게 사용</li>
          </ul>
        </div>
      </section>
      <section className="section3 bnr"></section>
      <section className="section4">
        <div className="inner">
          <div className="pageTit">
            <h1 className="animated fadeInUp">FLES 입사 과정</h1>
          </div>
          <Tab_career />

          <h2>CHECKLIST ㅣ지원 전 체크해 주세요.</h2>
          <ul>
            <li className="animated fadeInUp">
              입사 지원시 본인의 성명, 연락처, 이메일 주소 등을 정확하게
              기입하세요. 이력서에 기재된 학력 및 경력 사항이 거짓일 경우 합격이
              취소될 수 있습니다.
            </li>
            <li className="animated fadeInUp">
              면접 프로세스는 1차 면접 - 2차 면접을 기본으로 하며, 포지션 특성에
              따라 사전 과제, 면접, 레퍼런스 체크 등이 추가될 수 있습니다.
            </li>
            <li className="animated fadeInUp">
              종합적인 결과를 바탕으로 최종 심사를 거쳐 결과를 합격자에게 개별
              안내합니다.
            </li>
            <li className="animated fadeInUp">지원 관련 문의는 이메일(fles@fles.co.kr)로 보내 주세요.</li>
          </ul>
        </div>
      </section>
      <section className="section5 bnr">
        <span className="title">채용중인 포지션</span>
      </section>
      <section className="section6">
        <div className="inner">
          <Table_career />
          <Button className="mobile">더보기</Button>
        </div>
      </section>
    </div>
  );
}

export default Career;
