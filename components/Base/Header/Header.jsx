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
          <div className="logo pc">
            <a href="/"></a>
          </div>
          <div className="gnb pc">
            <ul className="gnbUl">
              <li>
                <Link href="/About">ABOUT</Link>
              </li>
              <li>
                <a href="#">SERVICE</a>
                <ul className="gnbSubUl">
                  <li>
                    <Link href="/Service_audienceM">AudienceM</Link>
                  </li>
                  <li>
                    <Link href="/Service_contents">Contents</Link>
                  </li>
                  <li>
                    <Link href="/Service_develop">Development</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">LIBRARY</a>
                <ul className="gnbSubUl">
                  <li>
                    <Link href="/">AudienceM사례</Link>
                  </li>
                  <li>
                    <Link href="/Column">Column</Link>
                  </li>
                  <li>
                    <Link href="/News">News</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Career">CAREER</Link>
              </li>
              <li>
                <Link href="/Contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Positioner>
  );
}

export default Header;
