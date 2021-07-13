import Link from "next/link";

import styled from "styled-components";

import Banner_main from "../components/Templates/Banner/Main";
import MottoCarousel from "../components/Templates/Carousel/Motto";
import Slide3 from "../components/Templates/Slide/Slide3";
import Slide4 from "../components/Templates/Slide/Slide4";

const Section_Background = styled.div`
  background-color: #f8f8fa;
`;

export default function Home() {
  return (
    <div>
      <Banner_main />
      <Slide3 />
      <Section_Background>
        <Slide4 title="COLUMN" link="/flesCompany/column" />
      </Section_Background>
      <Slide4 title="NEWS" link="/flesCompany/news" />
      <MottoCarousel />
    </div>
  );
}
