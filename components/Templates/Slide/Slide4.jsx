import Link from "next/link";
import Image from 'next/image'

import Slider from "react-slick";

import column_01 from "../../../assets/images/main/column_01.png";
import column_02 from "../../../assets/images/main/column_02.png";
import column_03 from "../../../assets/images/main/column_03.png";
import column_04 from "../../../assets/images/main/column_04.png";

const columnData = [
    {
        image: column_01,
        infoDes: "Apache Airflow 활용법1",
        infoDate: "2021/06/06",
        tag: "development",
    },
    {
        image: column_02,
        infoDes: `AudienceM 을 통한 페이스북 광고 성과분석1`,
        infoDate: "2021/06/06",
        tag: "review",
    },
    {
        image: column_03,
        infoDes: "eERP 구축 프로젝트1",
        infoDate: "2021/06/06",
        tag: "portfolio",
    },
    {
        image: column_04,
        infoDes: "Apache Airflow 활용법1",
        infoDate: "2021/06/06",
        tag: "development",
    },
    {
        image: column_01,
        infoDes: "Apache Airflow 활용법2",
        infoDate: "2021/06/06",
        tag: "development",
    },
    {
        image: column_02,
        infoDes: "AudienceM 을 통한 페이스북 광고 성과분석2",
        infoDate: "2021/06/06",
        tag: "review",
    },
    {
        image: column_03,
        infoDes: "eERP 구축 프로젝트2",
        infoDate: "2021/06/06",
        tag: "portfolio",
    },
    {
        image: column_04,
        infoDes: "Apache Airflow 활용법2",
        infoDate: "2021/06/06",
        tag: "development",
    },
];

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}

function Slide4({ title, link }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <div className="slide4">
            <div className="tit-wrap">
                <h2 className="ff-r">{title}</h2>
                <Link href={link}>
                    <button>더보기</button>
                </Link>
            </div>
            <Slider {...settings}>
                {columnData.map((data, index) => (
                    <div className="slide4-wrap" key={index} style={{ width: 276 }}>
                        <div className="img">
                            <Image src={data.image} alt="column_01" />
                        </div>
                        <div className="info">
                            <h3>{data.infoDes}</h3>
                            <p className="date ff-r">{data.infoDate}</p>
                            <span className={"tag " + data.tag}></span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Slide4;
Slide4.defaultProps = {
    title: "title",
};
