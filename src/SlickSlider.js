import React, { useState } from "react";
import Slider from "react-slick";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./About";
import Services from "./Services";
import Facility from "./Facility";
import ImageSlider from "./ImageSlider";
import VisitArea from "./VisitArea";
import Client from "./Client";
import Contact from "./Contact";

const SlickSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <div className="slider-area" id="home">
      <Slider {...settings} className="slider-active">
        {[
          {
            id: 0,
            bgClass: "slider-bg1",
            title: "Safe Journeys, Happy Kids. Trusted by Parents",
            subtitle: "Your Trusted School Bus Service",
          },
          {
            id: 1,
            bgClass: "slider-bg2",
            title: "Ensuring Safe Travels, Peace of Mind for Parents",
            subtitle: "Premier School Bus Services in Your Area",
          },
          {
            id: 2,
            bgClass: "slider-bg3",
            title: "On-Time, Every Time with Child's Safety First",
            subtitle: "School Bus Services You Can Rely On",
          },
        ].map((slide, index) => (
          <div
            key={slide.id}
            className={`single-slider hero-overly1 slider-height d-flex align-items-center ${slide.bgClass}`}
          >
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                  <div className="hero-caption-left">
                    <h1
                      className={`animate__animated ${
                        activeSlide === index ? "animate__bounceIn" : ""
                      }`}
                      style={{ animationDelay: "0.4s" }}
                    >
                      {slide.title}
                    </h1>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                  <div className="hero-caption-right">
                    <img
                      className="icon"
                      src="assets/images/Subtraction.svg"
                      alt=""
                    />
                    <h2
                      className={`animate__animated ${
                        activeSlide === index ? "animate__fadeInUp" : ""
                      }`}
                      style={{ animationDelay: "0.3s" }}
                    >
                      {slide.subtitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <About />
      <Services />
      <Facility />
      <ImageSlider />
      <VisitArea />
      <Client />
      <Contact />
    </div>
  );
};

export default SlickSlider;
