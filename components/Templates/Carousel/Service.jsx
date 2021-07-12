import styled from "styled-components";
import { Carousel } from "antd";

import service01 from "../../../assets/images/service/service01@3x.jpg";

import rightArrow from "../../../assets/icons/right-arrow@3x.png";
import leftArrow from "../../../assets/icons/left-arrow@3x.png";

import Colors from "../../../utils/Colors";

const Contain = styled.div`
  width: 100%;
  height: 581px;
  position: relative;
  z-index: 0;
`;

const Content = styled.div.attrs((props) => {})`
  border: 1px solid #000;
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

// button purple
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
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

const RightArrowButton = styled.button`
  background-image: url(${rightArrow});
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
  top: 50%;
  transform: translate(-50%, -50%);
  right: 12%;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const LeftArrowButton = styled.button`
  background-image: url(${leftArrow});
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
  top: 50%;
  transform: translate(-50%, -50%);
  left: 12%;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const mottoData = [
  {
    image: service01,
    title01: "현재 사용자의 관심분야를",
    title02: "타겟팅 해서 그런지 ROAS 가 500% 이상 상승했어요!",
    content01: "패션 / A 브랜드사",
  },
  {
    image: service01,
    title01: "현재 사용자의 관심분야를",
    title02: "타겟팅 해서 그런지 ROAS 가 500% 이상 상승했어요!",
    content01: "패션 / A 브랜드사",
  },
  {
    image: service01,
    title01: "현재 사용자의 관심분야를",
    title02: "타겟팅 해서 그런지 ROAS 가 500% 이상 상승했어요!",
    content01: "패션 / A 브랜드사",
  },
];

function ServiceCarousel() {
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
                  fontSize: isSmall ? 22 : 30,
                  fontWeight: 600,
                  width: isMobile ? 320 : "100%",
                }}
              >
                {data.title01}
                <br />
                {data.title02}
              </div>
              <div
                style={{
                  marginTop: 10,
                  color: "#fff",
                  fontSize: isSmall ? 15 : 16,
                  fontWeight: 400,
                }}
              >
                {data.content01} <br />
                {data.content02}
              </div>
              <Button type="button" className="btnPurple">
                활용사례 더보기
              </Button>
            </Inner>
          </Content>
        ))}
      </Carousel>
      <RightArrowButton onClick={next} />
      <LeftArrowButton onClick={previous} />
    </Contain>
  );
}

export default ServiceCarousel;
