import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import { Carousel } from "antd";

import useDisplay from "../../../hooks/useDisplay";

const Contain = styled.div`
  width: 100%;
  height: 581px;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const Content = styled.div.attrs((props) => {})`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  width: 100%;
  height: 581px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const Inner = styled.div`
  width: 1194px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;

  @media screen and (max-width: 1194px) {
    width: 100%;
  }
`;

// button purple
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 18px;
  width: auto;
  color: #fff;
  background-color: ${(props) => props.theme.purple};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

const RightArrowButton = styled.button`
  background-image: url(/icons/right-arrow@3x.png);
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
  background-color: #fff;

  z-index: 99;
  overflow: hidden;
  width: 42px;
  height: 42px;
  border-width: 0px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  position: absolute;
  right: 0;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const LeftArrowButton = styled.button`
  background-image: url(/icons/left-arrow@3x.png);
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
  background-color: #fff;

  z-index: 99;
  overflow: hidden;
  width: 42px;
  height: 42px;
  border-width: 0px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  position: absolute;
  left: 0;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const mottoData = [
  {
    image: "/images/main/motto01@3x.jpg",
    title: "우리는 행복을 위해 일합니다.",
    content01: "나의 행복은 선한 바이러스가 되어",
    content02: "내 동료를 행복하게 하는 것을 알기에 각자 노력합니다.",
  },
  {
    image: "/images/main/motto02@3x.jpg",
    title: "우리는 서로를 존중하고 이해할 수 있습니다.",
    content01: "말로부터 시작되는 존중은 우리의 품격을 높여주고",
    content02: "우리는 품격을 갖기 위해 노력합니다.",
  },
  {
    image: "/images/main/motto03@3x.jpg",
    title: "우리는 프로이자 전문가입니다.",
    content01: "나의 가치를 인정해주는 사람들과 함께 하기에",
    content02:
      "더 나은 실력을 만들기 위한 열정으로 배움을 게을리하지 않습니다.",
  },
  {
    image: "/images/main/motto04@3x.jpg",
    title: "우리는 끊임없이 도전합니다.",
    content01: "현재 성과에 안주하지 않고 더 나은 결과를 위해 새로움과",
    content02: " 낯섦, 그리고 불편한 것을 두려워하지 않습니다.",
  },
  {
    image: "/images/main/motto05@3x.jpg",
    title: "우리는 강한 책임감을 갖고 있습니다.",
    content01: "우리가 성장을 갈구하는 것과 같이",
    content02: "클라이언트의 성공을 위해 끊임없이 노력합니다.",
  },
];

function MottoCarousel() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  let carousel;

  const next = () => {
    carousel.next();
  };
  const previous = () => {
    carousel.prev();
  };

  return (
    <Contain className="mottoCarousel">
      <Carousel
        ref={(node) => (carousel = node)}
        autoplay
        dots={isMobile ? true : false}
      >
        {mottoData.map((data, index) => (
          <Content key={index} img={data.image}>
            <Inner>
              <div
                style={{
                  marginBottom: 10,
                  color: "#fff",
                  textAlign: "center",
                  fontSize: isSmall ? 22 : 30,
                  fontWeight: 600,
                  width: isMobile ? "100%" : "100%",
                }}
              >
                {data.title}
              </div>
              <div
                style={{
                  marginTop: 10,
                  color: "#fff",
                  fontSize: isSmall ? 14 : 16,
                  fontWeight: 400,
                }}
              >
                {data.content01} <br />
                {data.content02}
              </div>

              <Link href="/flesCompany/career">
                <Button type="button" className="btnPurple">
                  채용공고 보기
                </Button>
              </Link>
              <RightArrowButton onClick={next} />
              <LeftArrowButton onClick={previous} />
            </Inner>
          </Content>
        ))}
      </Carousel>
    </Contain>
  );
}

export default MottoCarousel;
