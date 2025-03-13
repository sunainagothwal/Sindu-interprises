import React from "react";

const Client = ()=> {
    return (
      <section className="testimonial-area section-bg1" id="testimonial">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-50">
                  <h2>Client Testimonial</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="testimonial-carousel">
                <a
                  href="assets/images/testimonial-1.jpeg"
                  data-fancybox="gallery1"
                  data-caption="Testimonial 1"
                >
                  <div className="testimonial-image">
                    <img
                      src="assets/images/testimonial-1.jpeg"
                      alt="Testimonial 1"
                    />
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="testimonial-carousel">
                <a
                  href="assets/images/Adobe-Scan-02-Mar-2024_page-0001.jpg"
                  data-fancybox="gallery2"
                  data-caption="Testimonial 2"
                >
                  <div className="testimonial-image">
                    <img
                      src="assets/images/Adobe-Scan-02-Mar-2024_page-0001.jpg"
                      alt="Testimonial 2"
                    />
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="testimonial-carousel">
                <a
                  href="assets/images/afa9ef74-667c-4477-8028-76af4fd541fb.jpeg"
                  data-fancybox="gallery3"
                  data-caption="Testimonial 3"
                >
                  <div className="testimonial-image">
                    <img
                      src="assets/images/afa9ef74-667c-4477-8028-76af4fd541fb.jpeg"
                      alt="Testimonial 3"
                    />
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Client;