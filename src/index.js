import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Facility from "./Facility";
import VisitArea from "./VisitArea";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider from "./SlickSlider";
import ImageSlider from "./ImageSlider";
import BackToTop from "./BackToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SlickSlider />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<ImageSlider />} />
        <Route path="/testimonial" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <SlickSlider />
      <About />
      <Services />
      <Facility />
      <ImageSlider />
      <VisitArea />
      <Client />
      <Contact /> */}
      <Footer />
      <BackToTop />
    </BrowserRouter>
  </React.StrictMode>
);
