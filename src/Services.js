import React from "react";

const Services = () => {
    return (
      <section className="services-area section-padding" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-11">
              <div className="section-tittle text-center mb-60">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="properties mb-40">
                <div className="properties-card">
                  <div className="properties-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/services1.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="properties-caption">
                    <h3>
                      <a href="javascript:void(0)">
                        <span>01. </span>Live streaming
                      </a>
                    </h3>
                    <p>
                      School administrators can use this feature to address any
                      issues promptly and communicate with drivers and students
                      when necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="properties mb-40">
                <div className="properties-card">
                  <div className="properties-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/services2.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="properties-caption">
                    <h3>
                      <a href="javascript:void(0)">
                        <span>02. </span>Door-to-Door Service
                      </a>
                    </h3>
                    <p>
                      Pick-up and drop-off directly at students' homes or
                      designated locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="properties mb-40">
                <div className="properties-card">
                  <div className="properties-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/services3.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="properties-caption">
                    <h3>
                      <a href="javascript:void(0)">
                        <span>03. Real-Time Updates</span>
                      </a>
                    </h3>
                    <p>
                      Stay in the loop and stay ahead with our WhatsApp groups!
                      Parents can update and access information about bus
                      timings, locations, and routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services;