import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSlider = () => {
  return (
    <section className="services-area section-padding" id="gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-11">
            <div className="section-tittle text-center mb-60">
              <h2>Our Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="carousel-gallery">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]} 
              spaceBetween={20}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a
                  href="assets/images/f6728cab-773e-4ac5-9acc-01d40e46616e.jpeg"
                  data-fancybox="gallery"
                >
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(assets/images/f6728cab-773e-4ac5-9acc-01d40e46616e.jpeg)",
                    }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a
                  href="assets/images/73534079-ebf9-4a38-ac74-9071c62e29a5.jpeg"
                  data-fancybox="gallery"
                >
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(assets/images/73534079-ebf9-4a38-ac74-9071c62e29a5.jpeg)",
                    }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/1.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/2.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/3.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/4.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/4.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/5.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/5.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/6.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/6.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/7.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/7.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/8.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/9.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/10.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/11.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/12.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide style={{ width: "236px", marginRight: "20px" }}>
                <a href="assets/images/3.jpeg" data-fancybox="gallery">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(assets/images/13.jpeg)" }}
                  >
                    <div className="overlay">
                      <em className="mdi mdi-magnify-plus"></em>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
