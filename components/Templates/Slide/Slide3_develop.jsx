import { Component } from "react";

import Slider from "react-slick";

export default class Slide3_develop extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      variableWidth: true,
      customPaging: (i) => <div className="customPaging">{/* {i + 1} */}</div>,
      responsive: [
        {
          breakpoint: 1194,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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
      <div className="slide3 slide3_develop">
        <h2 hidden> slider3 Item</h2>
        <Slider {...settings}>
          <div>
            <div className="img img01"></div>
            <h2>Analytics</h2>
            <h3>분석</h3>
            <p>
              주요 판매채널별 <br />
              주요 데이터 실시간 수집
            </p>
          </div>
          <div>
            <div className="img img02"></div>
            <h2>Insight</h2>
            <h3>해석</h3>
            <p>
              채널별 실적을 한 눈에 <br />
              확인할 수 있도록 데이터 시각화
            </p>
          </div>
          <div>
            <div className="img img03"></div>
            <h2>Forecasting</h2>
            <h3>결과 예측</h3>
            <p>
              집행되는 마케팅 예산에 따른
              ROAS 예측
            </p>
          </div>
          <div>
            <div className="img img04"></div>
            <h2>Marketing Decision</h2>
            <h3>의사 결정</h3>
            <p>
              데이터를 기반으로 최적의 <br />
              디지털 마케팅 운영방안을 제시
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
