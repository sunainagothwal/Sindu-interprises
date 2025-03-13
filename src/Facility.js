import React from "react";

const Facility = () =>
{
    return (
      <section className="about-area section-padding gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="about-caption">
                <div className="section-tittle section-tittle3">
                  <h2>
                    Explore a Diverse Range of Solutions for Your School Bus
                    Service Needs
                  </h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    Welcome to Sindh Bus Services, where we prioritize the
                    safety and well-being of every student on their journey to
                    and from school. With our expert team and fleet of modern
                    buses, we provide reliable and efficient school bus services
                    tailored to meet your specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-10">
              <div className="about-blog">
                <div className="single-offers d-flex  mb-20">
                  <div className="icon">
                    <img
                      src="assets/images/notification1.svg"
                      alt="this icon"
                      className="icon-border"
                    />
                  </div>
                  <div className="offers-cap">
                    <h3>
                      <a href="javascript:void(0)">Customer Support:</a>
                    </h3>
                    <p>
                      Dedicated customer service for inquiries, feedback, and
                      assistance.
                    </p>
                  </div>
                </div>
                <div className="single-offers d-flex  mb-20">
                  <div className="icon">
                    <img
                      src="assets/images/notification1.svg"
                      alt="this icon"
                      className="icon-border"
                    />
                  </div>
                  <div className="offers-cap">
                    <h3>
                      <a href="javascript:void(0)">Additional Services</a>
                    </h3>
                    <p>
                      Services like GPS tracking, bus monitors, and on-board
                      cameras for added security.
                    </p>
                  </div>
                </div>
                <div className="single-offers d-flex  mb-20">
                  <div className="icon">
                    <img
                      src="assets/images/notification1.svg"
                      alt="this icon"
                      className="icon-border"
                    />
                  </div>
                  <div className="offers-cap">
                    <h3>
                      <a href="javascript:void(0)">Parent Communication</a>
                    </h3>
                    <p>
                      Regular communication with parents regarding route
                      changes, delays, or emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
        </div>
      </section>
    );
}

export default Facility;