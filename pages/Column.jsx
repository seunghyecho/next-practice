import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDisplay from "../hooks/useDisplay";

import ExtraDiv from "../components/Organization/Column/ExtraDiv";
import MobileCard from "../components/Organization/Column/MobileCard";
import Card from "../components/Organization/Column/Card";

import column_01 from "../assets/images/main/column_01.png";
import column_02 from "../assets/images/main/column_02.png";
import column_03 from "../assets/images/main/column_03.png";
import column_04 from "../assets/images/main/column_04.png";

const Button = styled.button.attrs((props) => {})`
  margin: 0 auto;
  padding: 10px 20px;
  width: ${(props) => (props.isMobile ? "100%" : "16%")};
  color: #505050;
  background-color: white;
  border-radius: 3px;
  border: solid 1px #707070;
  cursor: pointer;
  font-size: 16px;
`;

Array.prototype.division = function () {
  var arr = this;
  var len = arr.length;
  var cnt = Math.floor(len / 2) + (Math.floor(len % 2) > 0 ? 1 : 0);
  var tmp = [];

  for (var i = 0; i < cnt; i++) {
    if (i % 2 == 0) {
      tmp.push(arr.splice(0, 2));
    } else {
      tmp.push(arr.splice(0, 3));
    }
  }

  return tmp;
};

function Column() {
  const columnData = [
    {
      image: column_01,
      infoDes: "Apache Airflow 활용법1",
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "development",
      type: "image",
    },
    {
      image: column_02,
      infoDes: `AudienceM 을 통한 페이스북 광고 성과 성과분석1`,
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "review",
      type: "video",
    },
    {
      image: column_03,
      infoDes: "eERP 구축 프로젝트1",
      infoContent:
        "Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "portfolio",
      type: "text",
    },
    {
      image: column_04,
      infoDes: "Apache Airflow 활용법1",
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "development",
      type: "image",
    },
    {
      image: column_01,
      infoDes: "Apache Airflow 활용법2",
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "development",
      type: "image",
    },
    {
      image: column_02,
      infoDes: "AudienceM 을 통한 페이스북 광고 성과분석2",
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "review",
      type: "video",
    },
    {
      image: column_03,
      infoDes: "eERP 구축 프로젝트2",
      infoContent: "Apache Airflow 활용법1Apache Airflow  본문 내용",
      infoDate: "2021/06/06",
      tag: "portfolio",
      type: "text",
    },
  ];

  const { isMobile, isTablet, isDesktop } = useDisplay();

  const [totalData, setTotalData] = useState([]);
  useEffect(() => {
    setTotalData(columnData);
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const columnDatas = columnData.division();
    setData(columnDatas);
  }, []);

  return (
    <div className="column">
      <div className="header" />
      <div className="body">
        <div className="title ff-r">Column</div>
        <div className="content">
          {isMobile
            ? columnData.map((item, index) => (
                <MobileCard key={index} item={item} />
              ))
            : data.map((item, index) => (
                <div className="row" key={index}>
                  {item.map((value, itemIndex) => {
                    switch (index % 3) {
                      case 0:
                        return (
                          <Card
                            value={value}
                            key={itemIndex}
                            flex={itemIndex === 0 ? 1 : 2}
                            marginRight={item.length - 1 === itemIndex ? 0 : 34}
                            width={isTablet ? 350 : itemIndex === 0 ? 350 : 650}
                          />
                        );
                      case 1:
                        return (
                          <Card
                            value={value}
                            key={itemIndex}
                            flex={1}
                            marginRight={item.length - 1 === itemIndex ? 0 : 17}
                            width={isTablet ? 220 : 350}
                          />
                        );
                      case 2:
                        return (
                          <Card
                            value={value}
                            key={itemIndex}
                            flex={itemIndex === 0 ? 2 : 1}
                            marginRight={item.length - 1 === itemIndex ? 0 : 34}
                            width={isTablet ? 350 : itemIndex === 0 ? 650 : 350}
                          />
                        );
                    }
                  })}

                  <ExtraDiv index={index} length={item.length} />
                </div>
              ))}

          <Button isMobile={isMobile}>더보기</Button>
        </div>
      </div>
    </div>
  );
}

export default Column;
