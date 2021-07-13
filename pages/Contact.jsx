import { useState } from "react";

import styled from "styled-components";

import Banner_sub from "../components/Templates/Banner/Sub";
import Privacy from "../components/Templates/Modal/Privacy";

// button purple
const Button = styled.button`
  margin: 30px auto 0;
  padding: 10px 40px;
  font-size: 18px;
  width: auto;
  color: #fff;
  background-color:  ${(props) => props.theme.skyblue};
  border-radius: 3px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

function Contact() {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="Contact">
      <Banner_sub title="FLES : SELF" sub="내 안의 잠재 가능성을 깨우자" />
      <section>
        <h1 className="animated fadeInUp">어떤 서비스가 필요하세요?</h1>
        <ul>
          <li>
            <input id="chk01" type="checkbox" className="service_chk" />
            <label for="chk01">
              <span>AudienceM</span>
            </label>
          </li>
          <li>
            <input id="chk02" type="checkbox" className="service_chk" />
            <label for="chk02">
              <span>콘텐츠 제휴</span>
            </label>
          </li>
          <li>
            <input id="chk03" type="checkbox" className="service_chk" />
            <label for="chk03">
              <span>Development</span>
            </label>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="animated fadeInUp">기본 정보를 입력해주세요.</h1>
        <form className="form">
          <div className="inputArea">
            <input type="text" placeholder="회사" />
            <input type="text" placeholder="담당자 성함 (필수)" />
            <input type="text" placeholder="이메일 (필수)" />
            <input type="text" placeholder="참고사이트" />
          </div>
          <div className="agreeArea">
            <input id="agree" type="checkbox" />
            <label for="agree">
              <span>(필수) 개인정보처리방침에 대해 동의합니다.</span>
            </label>
            <button type="button" onClick={() => setModalStatus(() => true)}>자세히보기</button>
            {modalStatus && <Privacy close={setModalStatus} />}
          </div>
          <Button type="submit">문의 보내기</Button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
