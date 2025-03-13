import React from "react";

const Footer =() => {
    return (
      <div className="footer-wrapper">
        <div className="footer-area footer-padding">
          <div className="container ">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          Join Us in Redefining Student Transportation.
                          Experience the future of student transportation with
                          our live streaming technology. Together, let's create
                          a safer, more engaging, and transparent journey for
                          our students.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 offset-lg-1 col-xl-2 col-lg-2 col-md-4 col-sm-4">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick links</h4>
                    <ul>
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
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 offset-lg-1 col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Follow Us</h4>
                    <ul className="footer-social">
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex align-items-center">
                <div className="col-xl-12 ">
                  <div className="footer-copy-right text-center text-white">
                    Copyright © All rights reserved | This Website is made with{" "}
                    <i
                      className="fa fa-heart color-danger"
                      aria-hidden="true"
                    />{" "}
                    by Softmax Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;