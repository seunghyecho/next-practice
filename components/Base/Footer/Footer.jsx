
function Footer() {
  return (
    <>
      <div id="footer">
        <div className="inner">
          <div className="item">
            <div className="top">
              <a href="/common" className="logo"></a>
              <p className="ff-r">Accelerating your business with data</p>
            </div>
            <div className="bottom">
              <p>서울시 강서구 마곡동 757 두산더랜드파크 A-611,614</p>
              <p>
                <span>TEL 02-6956-5671</span>
                <span>FAX 02-6956-5672</span>
                <span>fles@fles.co.kr</span>
              </p>
            </div>
          </div>
          <div className="item">
            <ul className="f-gnb ff-r">
              <li>
              <a href="/flesCompany/about">ABOUT</a>
              </li>
              <li>
              <a href="/flesCompany/audienceM">SERVICE</a>
              </li>
              <li>
              <a href="/flesCompany/column">LIBRARY</a>
              </li>
              <li>
              <a href="/flesCompany/career">CAREER</a>
              </li>
              <li>
              <a href="/flesCompany/contact">CONTACT</a>
              </li>
            </ul>
            <div className="newsArea">
              <p className="ff-r">News Letter</p>
              <div className="inputWrap">
                <input type="text" placeholder="Email Address" />
                <button type="submit">구독하기</button>
              </div>
              <ul className="icons">
                <li>
                  <a href="#" className="aosApp"></a>
                </li>
                <li>
                  <a href="#" className="iosApp"></a>
                </li>
                <li>
                  <a href="#" className="github"></a>
                </li>
                <li>
                  <a href="#" className="segment"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copy ff-r">
          COPYRIGHT &copy; 2021 by FLES. ALL RIGHTS RESERVED.
        </p>
      </div>
    </>
  );
}

export default Footer;
