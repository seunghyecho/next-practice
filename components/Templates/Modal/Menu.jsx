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
            <a href="/flesCompany/about">ABOUT</a>
          </li>
          <li>
            <a href="#">SERVICE</a>
            <ul className="menuMobileGnbSub">
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
            <a href="#">LIBRARY</a>
            <ul className="menuMobileGnbSub">
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
    </Modal>
  );
}

export default Menu;
