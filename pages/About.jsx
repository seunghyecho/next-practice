import Image from "next/image";

import Banner_sub from "../components/Templates/Banner/Sub";
import Tab from "../components/Templates/Tab/Tab";

import logo01 from "/public/images/about/logo01.png";
import logo02 from "/public/images/about/logo02.png";
import logo03 from "/public/images/about/logo03.png";

import color from "/public/images/about/color.png";

import img_about01 from "/public/images/about/img_about01.jpg";
import img_about02 from "/public/images/about/img_about02.png";
import img_about03 from "/public/images/about/img_about03.jpg";

function About() {
  return (
    <div className="About">
      <Banner_sub title="Accelerating your business with data" />
      <section className="culture">
        <div className="inner d-flex">
          <h1 className="animated fadeInUp ff-r">
            Culture <br />& Philosophy
          </h1>
          <div className="content">
            <h3 className="animated fadeInUp">“내 안의 잠재 가능성을 깨우자”</h3>
            <p className="animated fadeInUp">
              공동의 목표와 신념을 위해 배움을 게을리하지 않고,
              <br />
              서로 존중하는 문화 속에서
              <br />
              세상에 선한 영향력을 행사하기 위해 일합니다.
            </p>
          </div>
        </div>
      </section>
      <Tab />
      <section className="logo">
        <div className="inner">
          <h1 className="animated fadeInUp ff-r">Logo</h1>
          <div className="content">
            <div className="imgArea">
              <div className="logo01"></div>
              <div className="logo02"></div>
              <div className="logo03"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="color">
        <div className="inner d-flex">
          <h1 className="animated fadeInUp ff-r">Color</h1>
          <div className="content">
            <Image src={color} alt="color" />
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="inner">
          <h1 className="animated fadeInUp ff-r">Vision</h1>
          <div className="content">
            데이터 기반의 비즈니스 성장,
            <br /> 비즈니스를 통한 인류 행복 기여
          </div>
        </div>
      </section>
      <section className="img">
        <div className="img_about01"></div>
        <div className="d-flex">
          <div className="img_about02"></div>
          <div className="img_about03"></div>
        </div>
      </section>
    </div>
  );
}

export default About;
