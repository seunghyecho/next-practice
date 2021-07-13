import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import theme from "./utils/theme";

import { createGlobalStyle, ThemeProvider } from "styled-components";

// import "../css/Header.css";
import "../css/Footer.css";
import "../css/About.css";
import "../css/Career.css";
import "../css/Column.css";
import "../css/Contact.css";
import "../css/Service.css";
import "../css/Banner.css";
import "../css/Slide.css";
import "../css/Table.css";
import "../css/Tab.css";

import "../styles/globals.css";

import "../css/Animate.css";

import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
