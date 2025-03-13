import React from "react";

const Header = () => {
  return (
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="row">
            <div className="menu-wrapper align-items-center justify-content-between">
              <div className="header-left d-flex align-items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </div>
                <div className="logo2">
                  <a href="index.html">
                    <img src="assets/images/logo2.png" alt="" />
                  </a>
                </div>
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about-us">About Us</a>
                      </li>
                      <li>
                        <a href="#services">Our Services</a>
                      </li>
                      <li>
                        <a href="#gallery">Bus Gallery</a>
                      </li>
                      <li>
                        <a href="#testimonial">Client Testimonial</a>
                      </li>
                      <li>
                        <a href="#contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right1 d-flex align-items-center">
                <div className="header-social">
                  <a href="javascript:void(0)">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <a href="#contact" className="btn header-btn2 ml-5">
                  Get Free Quote
                </a>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
