import React from "react";

const VisitArea = () => {
    return (
      <>
        <div className="visit-tailor-area fix">
          <div className="tailor-offers" />
          <div className="tailor-details">
            <h2>
              We Put You in the Driver's Seat of Your Child's School Bus
              Experience.
            </h2>
            <div className="single-wrapper">
              <div className="single-details left-line">
                <h3>Customized Routes:</h3>
                <p>Tailored to Your School's Needs</p>
              </div>
              <div className="single-details">
                <h3>Real-Time Monitoring</h3>
                <p>Ensuring Safety and Security</p>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-form-area gray-bg fix">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div className="contact-caption">
                  <div className="section-tittle section-tittle3">
                    <h2>Request a Free Quote</h2>
                    <p>
                      Our team is ready to assist you with all your school bus
                      service needs. Contact us for a personalized quote
                      tailored to your requirements.
                    </p>
                    <a href="javascript:void(0)" className="btn mt-20">
                      
                      <i className=" fa-solid fa-phone" />{" "}
                      +91-9331588888
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7 col-lg-7">
                <div className="contact-form-wrapper">
                  <form
                    action="javascript:void(0)"
                    id="contact-form"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-form">
                          <label>Name</label>
                          <input name="name" type="text" required="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-form">
                          <label>Phone</label>
                          <input name="phone" type="tel" required="" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-form">
                          <label>Message</label>
                          <textarea
                            name="message"
                            rows={5}
                            style={{ width: "100%" }}
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3" style={{ marginTop: 20 }}>
                        <button type="submit" className="submit-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <div
                    id="thank-you-message"
                    style={{ display: "none", color: "red" }}
                  >
                    Thank you for your message!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default VisitArea;