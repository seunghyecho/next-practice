import Image from 'next/image';

import styled from "styled-components";

import Colors from "./utils/theme";

import Banner_sub from "../components/Templates/Banner/Sub";
import Tab_develop from "../components/Templates/Tab/Tab_service_develop";
import Slide3_develop from "../components/Templates/Slide/Slide3_develop";

import dev_img05_m from "/public/images/service/dev_img05_m.png";
import dev_img06_m from "/public/images/service/dev_img06_m.png";
import dev_img07_m from "/public/images/service/dev_img07_m.png";
import dev_img05 from "/public/images/service/dev_img05.png";
import dev_img06 from "/public/images/service/dev_img06.png";
import dev_img07 from "/public/images/service/dev_img07.png";
import portfolio01 from "/public/images/service/portfolio01.png";
import portfolio02 from "/public/images/service/portfolio02.png";
import portfolio03 from "/public/images/service/portfolio03.png";
import portfolio04 from "/public/images/service/portfolio04.png";
import portfolio05 from "/public/images/service/portfolio05.png";
import portfolio06 from "/public/images/service/portfolio06.png";

// button purple
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 40px;
  font-size: 18px;
  width: auto;
  color: #fff;
  background-color:  ${(props) => props.theme.purple};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

function Service3() {
  return (
    <div className="Service develop">
      <Banner_sub title="Development" sub="Ma-Tech & ecommerce" />
      <div>
        <div className="pageTit">
          <h1 className="animated fadeInUp ff-r">IT Solution</h1>
          <p className="animated fadeInUp">
            비즈니스 여정에 따라
            <br className="mobile" /> 필요한 Tech의 수준도 변화합니다.
            <br />
            단계별 맞춤 IT 솔루션을 제공합니다.
          </p>
        </div>
        <Tab_develop />
      </div>
      <section>
        <div className="pageTit">
          <h1 className="animated fadeInUp ff-r">Ma-Tech</h1>
          <p className="animated fadeInUp">
            브랜드사를 위한 통합 마케팅 관리 솔루션
            <br />
            채널별 목표매출 관리부터 ROAS 관리까지 한번에
          </p>
        </div>
        <Slide3_develop />
      </section>
      <section>
        <div className="inner dp-f">
          <div className="pageTit">
            <h1 className="animated fadeInUp ff-r">브랜드별 KPI 관리</h1>
            <p className="animated fadeInUp">
              브랜드사를 위한 통합 마케팅 관리 솔루션 <br />
              채널별 목표매출 관리부터 ROAS 관리까지 한번에
            </p>
          </div>
          <div className="graph pc">
            <Image src={dev_img05} alt="dev_img05" />
          </div>
          <div className="graph mobile">
            <Image src={dev_img05_m} alt="dev_img05" />
          </div>
        </div>
      </section>
      <section>
        <div className="inner dp-f">
          <div className="pageTit">
            <h1 className="animated fadeInUp ff-r">판매채널별 실적관리</h1>
            <p className="animated fadeInUp">판매채널별 판매실적 별도 수집</p>
          </div>
          <div className="graph pc">
            <Image src={dev_img06} alt="dev_img06"/>
          </div>
          <div className="graph mobile">
            <Image src={dev_img06_m} alt="dev_img06" />
          </div>
        </div>
      </section>
      <section>
        <div className="inner dp-f">
          <div className="pageTit">
            <h1 className="animated fadeInUp ff-r">브랜드별 실적관리</h1>
            <p className="animated fadeInUp">다수 브랜드 운영 시, 각 브랜드별 데이터 관리 가능</p>
          </div>
          <div className="graph pc">
            <Image src={dev_img07} alt="dev_img07"/>
          </div>
          <div className="graph mobile">
            <Image src={dev_img07} alt="dev_img07"/>
          </div>
        </div>
      </section>
      <section>
        <div className="inner">
          <div className="pageTit">
            <h1 className="animated fadeInUp ff-r">Portfolio</h1>
          </div>
          <div className="portfolioItems clear">
            <div className="item item01">
              <div className="logo">
                <p>ecommerce_JDX</p>
                {/* <img src={portfolio01} alt="portfolio01" /> */}
              </div>
            </div>
            <div className="item item02">
              <div className="logo">
                <p>ecommerce_casterbajac</p>
                {/* <img src={portfolio02} alt="portfolio02" /> */}
              </div>
            </div>
            <div className="item item03">
              <div className="logo">
                <p>Service _ 음악형제들</p>
                {/* <img src={portfolio03} alt="portfolio03" /> */}
              </div>
            </div>
            <div className="item item04">
              <div className="logo">
                <p>Ma-Tech _ 라이프스타일프로젝트</p>
                {/* <img src={portfolio04} alt="portfolio04" /> */}
              </div>
            </div>
            <div className="item item05">
              <div className="logo">
                <p>Big-Data _ 서울시</p>
                {/* <img src={portfolio05} alt="portfolio05" /> */}
              </div>
            </div>
            <div className="item item06">
              <div className="logo">
                <p>Big-Data _ 한국무역보험공사</p>
                {/* <img src={portfolio06} alt="portfolio06" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section banner-btm">
        <div className="inner">
          <h1 className="title">
            IT 비즈니스는 좋은 파트너를
            <br className="mobile" /> 만나는 것부터 시작입니다
          </h1>
          <h3 className="sub">
            그동안 쌓은 경험과 노하우를 바탕으로 고객사에 <br />
            필요한 최고의 솔루션을 제공합니다.
          </h3>
          <Button type="button" className="btnPurple">
            의뢰하기
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Service3;
