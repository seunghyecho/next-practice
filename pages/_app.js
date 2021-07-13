import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import theme from "./utils/theme";
import "./_app.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../css/Header.css";
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

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
