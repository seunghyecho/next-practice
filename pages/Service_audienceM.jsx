import Image from 'next/image';

import Banner_sub from "../components/Templates/Banner/Sub";
import ServiceCarousel from "../components/Templates/Carousel/Service";

import img00 from "../assets/images/service/img00.png";
import img01 from "../assets/images/service/img01.png";
import img02 from "../assets/images/service/img02.png";
import img03 from "../assets/images/service/img03.png";
import img04 from "../assets/images/service/img04.png";
import img05 from "../assets/images/service/img05.png";
import img05_1 from "../assets/images/service/img05_1.png";
import img05_2 from "../assets/images/service/img05_2.png";
import img05_3 from "../assets/images/service/img05_3.png";
import img05_4 from "../assets/images/service/img05_4.png";
import img05_5 from "../assets/images/service/img05_5.png";
import img05_6 from "../assets/images/service/img05_6.png";
import img06 from "../assets/images/service/img06.png";

function Service1() {
  return (
    <div className="Service audienceM">
      <Banner_sub title="Audience Market" sub="Audience 거래 플랫폼" />
      <div className="pageTit">
        <h1 className="ff-r">AudienceM</h1>
        <p>플랫폼 구조도를 클릭하시면 보다 자세한 설명을 확인할 수 있습니다.</p>
      </div>
      <section className="bg">
        <div className="inner">
          <div className="imgWrap img00">
            <Image src={img00} alt="img00" useMap="#image-map" />
            <map name="image-map">
               {/* SDK 제공 */}
              <area
                target="_self"
                alt="sdk1"
                title="sdk1"
                href="#section01"
                coords="208,0,309,26"
                shape="rect"
              />
               {/* SDK 제공 */}
              <area
                target="_self"
                alt="sdk2"
                title="sdk2"
                href="#section01"
                coords="204,99,305,125"
                shape="rect"
              />
               {/* SDK 제공 */}
              <area
                target="_self"
                alt="sdk3"
                title="sdk3"
                href="#section01"
                coords="548,175,649,201"
                shape="rect"
              />
              {/* AdID 사용료 & 수익분배 */}
              <area
                target="_self"
                alt="use1"
                title="use1"
                href="#section02"
                coords="528,89,674,131"
                shape="rect"
              />
              {/* AdID 사용료 & 수익분배 */}
              <area
                target="_self"
                alt="use2"
                title="use2"
                href="#section02"
                coords="188,169,333,209"
                shape="rect"
              />
              {/* AdID 를 통한 광고집행 */}
              <area
                target="_self"
                alt="adv"
                title="adv"
                href="#section03"
                coords="786,233,866,284"
                shape="rect"
              />
              {/* 인공지능 모델링 */}
              <area
                target="_self"
                alt="modeling"
                title="modeling"
                href="#section04"
                coords="342,228,520,285"
                shape="rect"
              />
              {/* 공급기업 */}
              <area
                target="_self"
                alt="supply"
                title="supply"
                href="#section05"
                coords="83,146,70"
                shape="circle"
              />
              {/* 수요기업 */}
              <area
                target="_self"
                alt="demand"
                title="demand"
                href="#section06"
                coords="772,145,70"
                shape="circle"
              />
            </map>
          </div>
        </div>
      </section>
      <section className="goods" id="section01">
        <div className="inner">
          <div className="imgWrap img01">
            <Image src={img01} alt="img01" />
          </div>
          <div className="item">
            <h2>SDK 제공 </h2>
            <p>
              FLES SDK 를 설치하고 <br />
              페르소나 리포트를 받아보세요.
            </p>
          </div>
        </div>
      </section>
      <section className="goods" id="section02">
        <div className="inner reverse">
          <div className="imgWrap img02">
            <Image src={img02} alt="img02" />
          </div>
          <div className="item">
            <h2>AdID 사용료 & 수익분배</h2>
            <p>
              수요기업의 AdID의 사용 빈도에 따라 <br />
              공급기업에게 수익이 분배됩니다.
            </p>
          </div>
        </div>
      </section>
      <section className="goods" id="section03">
        <div className="inner">
          <div className="imgWrap img03">
            <Image src={img03} alt="img03" />
          </div>
          <div className="item">
            <h2>AdID 를 통한 광고집행</h2>
            <p>
              AdID 공유가 가능한 채널로는 <br />
              네이버, 페이스북, 카카오톡이 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="goods" id="section04">
        <div className="inner reverse">
          <div className="imgWrap img04">
            <Image src={img04} alt="img04" />
          </div>
          <div className="item">
            <h2>인공지능 모델링</h2>
            <p>
              데이터마이닝과 머신러닝 최고의 석학들인 <br />
              서울대학교 산업공학과 데이터마이닝 연구실과 함께
              <br className="mobile" /> 연구한 <br className="pc" />
              알고리즘을 바탕으로 수집된 AdID를 클러스터링하여 분석합니다.
            </p>
            <button>신청하기</button>
          </div>
        </div>
      </section>
      <section className="goods" id="section05">
        <div className="inner">
          <div className="imgWrap img05">
            <Image src={img05} alt="img05" />
          </div>
          <div className="item">
            <h2>공급기업</h2>
            <p>
              SDK 를 통해 AdID 를 제공하는 기업으로,
              <br />
              앱을 통해 추가 수익을 창출할 수 있습니다. <br />
              FLES 의 인공지능 모델을 통해 앱 사용자를 <br />
              자세히 분석한 페르소나 리포트가 함께 제공됩니다.
            </p>
            <button>신청하기</button>
          </div>
        </div>
      </section>
      <section className="goods" id="section06">
        <div className="inner reverse">
          <div className="imgWrap img06">
            <Image src={img06} alt="img06" />
          </div>
          <div className="item">
            <h2>수요기업</h2>
            <p>
              광고를 집행하기 위해 AdID 공유를 요청한 기업으로, <br />
              FLES 의 퍼포먼스 마케팅 전문가와의 상담을 통해 <br />
              최고 효율의 타겟군 설정 및 AdID 추출을 통해 <br />
              광고를 집행할 수 있습니다.
            </p>
            <button>신청하기</button>
          </div>
        </div>
      </section>
      <ServiceCarousel />
    </div>
  );
}

export default Service1;
