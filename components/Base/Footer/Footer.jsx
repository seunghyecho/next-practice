import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="inner">
          <div className="item">
            <div className="top">
              <a href="/" className="logo"></a>
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
                <Link href="/About">ABOUT</Link>
              </li>
              <li>
                <Link href="/Service_audienceM">SERVICE</Link>
              </li>
              <li>
                <Link href="/Column">LIBRARY</Link>
              </li>
              <li>
                <Link href="/Career">CAREER</Link>
              </li>
              <li>
                <Link href="/Contact">CONTACT</Link>
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
                  <a target='_blank' href="https://play.google.com/store/apps/details?id=com.firstmecca.hellounsemobile" className="aosApp"></a>
                </li>
                <li>
                  <a target='_blank' href="https://itunes.apple.com/app/id1052093404" className="iosApp"></a>
                </li>
                <li>
                  <a target='_blank' href="https://github.com/flescompany" className="github"></a>
                </li>
                <li>
                  <a target='_blank' href="https://github.com/flescompany" className="segment"></a>
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
