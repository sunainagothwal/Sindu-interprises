import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Facility from "./Facility";
// import Gallery from "./Gallery";
import VisitArea from "./VisitArea";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
import "./index.css";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider from "./SlickSlider";
import ImageSlider from "./ImageSlider";
import BackToTop from "./BackToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SlickSlider />
    <About />
    <Services />
    <Facility />
    <ImageSlider />
    <VisitArea />
    <Client />
    <Contact />
    <Footer />
    <BackToTop/>
  </React.StrictMode>
);

