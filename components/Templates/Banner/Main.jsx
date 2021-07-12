import styled from "styled-components";

import Link from "next/link";

import Colors from "../../../utils/Colors";

// import posterLogo from "../../../assets/images/logo/t-logo-3x-b.png";
// import poster from "../../../assets/images/poster.jpg";
// import mainVideo from "../../../assets/video/main-video.mov";

// button purple
const Button = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  width: 50%;
  color: #fff;
  // background-color: ${(props) => props.Colors.purple}; 
  border-radius: 3px;
  border: none;
  cursor: pointer;
`;

function Banner_main() {
  return (
    <div className="banner">
      {/* <video autoPlay muted loop playsInline id="myVideo" poster={poster}>
        <source src={mainVideo} />
      </video> */}
      <div className="inner">
        <h1>데이터를 통한 비즈니스 성장</h1>
        <h3>Accelerating your business with data</h3>
        <Link href="/flesCompany/about">
          <Button type="button" className="btnPurple">
            About
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner_main;