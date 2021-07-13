import Link from "next/link";

import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

function Menu({ close }) {
  return (
    <Modal id="modal">
      <div className="menuMobile" onClick={() => close(false)}>
        <div className="top">
          <h1 className="logo">
            <a href="/"></a>
          </h1>
          <button className="closeBtn" onClick={() => close(false)}></button>
        </div>
        <ul className="menuMobileGnb content">
          <li>
            <Link href="/About">ABOUT</Link>
          </li>
          <li>
            <a href="#">SERVICE</a>
            <ul className="menuMobileGnbSub">
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
            <a href="#">LIBRARY</a>
            <ul className="menuMobileGnbSub">
              <li>
                <a href="/">AudienceM사례</a>
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
    </Modal>
  );
}

export default Menu;
