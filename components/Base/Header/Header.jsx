import { useState } from "react";

import Link from "next/link";

import styled from "styled-components";

import Menu from "../../Templates/Modal/Menu";

// 그림자
const Positioner = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(255, 255, 255, 0.24);
  z-index: 5;
`;

function Header() {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <Positioner>
        <div id="header">
          <div className="inner">
            <div className="menu_mobile mobile">
              <button
                className="menuBtn"
                onClick={() => setModalStatus(() => true)}
              ></button>
              {modalStatus && <Menu close={setModalStatus} />}
            </div>
            <div className="logo">
              <a href="/"></a>
            </div>
            <div className="gnb">
              <ul className="gnbUl">
                <li>
                  <a href="/flesCompany/about">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                  <ul className="gnbSubUl">
                    <li>
                      <a href="/flesCompany/audienceM">AudienceM</a>
                    </li>
                    <li>
                      <a href="/flesCompany/contents">Contents</a>
                    </li>
                    <li>
                      <a href="/flesCompany/develop">Development</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">LIBRARY</a>
                  <ul className="gnbSubUl">
                    <li>
                      <a href="/">AudienceM사례</a>
                    </li>
                    <li>
                      <a href="/flesCompany/column">Column</a>
                    </li>
                    <li>
                      <a href="/flesCompany/news">News</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/flesCompany/career">CAREER</a>
                </li>
                <li>
                  <a href="/flesCompany/contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Positioner>
    </>
  );
}

export default Header;
