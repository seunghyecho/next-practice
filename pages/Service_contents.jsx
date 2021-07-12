import Image from 'next/image';

import styled from "styled-components";

import Colors from "../utils/Colors";

import Banner_sub from "../components/Templates/Banner/Sub";

import b2c_01 from "../assets/images/service/b2c_01.png";
import b2c_02 from "../assets/images/service/b2c_02.png";
import b2c_03 from "../assets/images/service/b2c_03.png";
import b2c_ios from "../assets/images/service/b2c_ios.png";
import b2c_aos from "../assets/images/service/b2c_aos.png";

import b2b_01 from "../assets/images/service/b2b_01.png";
import b2b_02 from "../assets/images/service/b2b_02.png";
import b2b_03 from "../assets/images/service/b2b_03.png";
import b2b_04 from "../assets/images/service/b2b_04.png";
import b2b_05 from "../assets/images/service/b2b_05.png";
import b2b_06 from "../assets/images/service/b2b_06.png";
import b2b_07 from "../assets/images/service/b2b_07.png";
import b2b_08 from "../assets/images/service/b2b_08.png";
import b2b_09 from "../assets/images/service/b2b_09.png";

// button purple
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 26px;
  font-size: 18px;
  width: auto;
  color: #fff;
  background-color: ${Colors.purple};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

function Service2() {
  return (
    <div className="Service contents">
      <Banner_sub title="Contents" sub="For Personalize" />
      <section className="section">
        <div className="pageTit">
          <h1 className="ff-r">B2C</h1>
          <p>
            FLES에서 운영하는 운세 및 타로 서비스입니다. <br className="mobile"/>500개 이상의 컨텐츠를
            운영하였고, 50만명의 회원과 함께합니다.
          </p>
        </div>
        <div className="appArea">
          <div className="item ">
            <div className="border">
              <Image src={b2c_01} alt="b2c_01" className="appIcon" />
            </div>
            <div className="osArea">
              <button className="ios"></button>
              <button className="aos"></button>
            </div>
          </div>
          <div className="item ">
            <div className="border">
              <Image src={b2c_02} alt="b2c_02" className="appIcon" />
            </div>
            <div className="osArea">
              <button className="ios"></button>
              <button className="aos"></button>
            </div>
          </div>
          <div className="item ">
            <div className="border">
              <Image src={b2c_03} alt="b2c_03" className="appIcon" />
            </div>
            <div className="osArea">
              <button className="ios" style={{"opacity": "0.5"}}></button>
              <button className="aos"></button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="pageTit">
          <h1 className="ff-r">B2B</h1>
        </div>
        <div className="b2bArea">
          <div className="inner clear">
            <div className="b2bIcon">
              <span className="b2b_01"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_02"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_03"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_04"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_05"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_06"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_07"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_08"></span>
            </div>
            <div className="b2bIcon">
              <span className="b2b_09"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="section banner-btm">
        <div className="inner">
          <h1 className="title">콘텐츠 마케팅의 시작</h1>
          <h3 className="sub">
            사용자를 위한 맞춤형 콘텐츠를 통해
            <br />
            새로운 방식으로 사용자의 리텐션을 높여보세요.
          </h3>
          <Button type="button" className="btnPurple">
            제휴 문의하기
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Service2;
