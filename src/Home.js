import React from "react";

const Home = () =>{
    
  return (
      <div className="slider-area" id="home">
        <div className="slider-active">
          <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1">
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                  <div className="hero-caption-left">
                    <h1 data-animation="bounceIn" data-delay=".4s">
                      Safe Journeys, Happy Kids. Trusted by Parents
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
                    <h2 data-animation="fadeInUp" data-delay=".3s">
                      Your Trusted School Bus Service
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg2">
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                  <div className="hero-caption-left">
                    <h1 data-animation="bounceIn" data-delay=".4s">
                      Ensuring Safe Travels, Peace of Mind for Parents
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
                    <h2 data-animation="fadeInUp" data-delay=".3s">
                      Premier School Bus Services in Your Area
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg3">
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                  <div className="hero-caption-left">
                    <h1 data-animation="bounceIn" data-delay=".4s">
                      On-Time, Every Time with Child's Safety First
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
                    <h2 data-animation="fadeInUp" data-delay=".3s">
                      School Bus Services You Can Rely On
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;