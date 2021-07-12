import Link from "next/link";
import Image from 'next/image'

import { Component } from "react";

import Slider from "react-slick";

import styled from "styled-components";

import audienceM from "../../../assets/images/main/audienceM-3x.png";
import contents from "../../../assets/images/main/contents-3x.png";
import development from "../../../assets/images/main/development-3x.png";

import Colors from "../../../utils/Colors";

// button gray
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  width: 50%;
  color: #fff;
  background-color: ${Colors.gray};
  border-radius: 3px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 912px) {
    width: auto;
    background-color: ${Colors.skyblue};
  }
`;

export default class Slide3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      customPaging: (i) => <div className="customPaging">{/* {i + 1} */}</div>,
      responsive: [
        {
          breakpoint: 1270,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slide3">
        <h2 hidden> slider3 Item</h2>
        <Slider {...settings}>
          <div className="animated fadeInUp">
            <Image src={audienceM} alt="audienceM" />
            <h3>AudienceM</h3>
            <p>
              사용자를 추적/분석하여 타겟 마케팅
              <br /> 효과를 극대화하는 오디언스를
              <br />
              거래하는 플랫폼입니다.
            </p>
            <Link href="/flesCompany/audienceM">
              <Button>자세히 보기</Button>
            </Link>
          </div>
          <div className="animated fadeInUp">
            <Image src={contents} alt="contents" />
            <h3>Contents</h3>
            <p>
              50만 회원을 보유한 운세 서비스로,
              <br /> 콘텐츠를 통해 사용자의 관심산업군과
              <br /> 감정을 분석합니다.
            </p>
            <Link href="/flesCompany/contents">
              <Button>자세히 보기</Button>
            </Link>
          </div>
          <div className="animated fadeInUp">
            <Image src={development} alt="development" />
            <h3>Development</h3>
            <p>
              마테크 전문분야에서 10년 이상의
              <br /> 개발 경력을 바탕으로 고객사를 위한
              <br />
              최고의 솔루션을 제공합니다.
            </p>
            <Link href="/flesCompany/Develop">
              <Button>자세히 보기</Button>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
