import React from "react";

const Contact =() => {
    return (
      <div className="map-are" id="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.994641792413!2d75.747984!3d29.156332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjl8NDAuNzI1OTQxIDc1Ljc0MjQ5NHw0MC43MjU5NDYgNzUuNzQ4NTk0fC0wLjAxMjAzMTQwNzE3NjY1!5e0!3m2!1sen!2sbd!4v1588690958350!5m2!1sen!2sbd"
          width="100%"
          height={448}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
        <div className="map">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-3 col-lg-4">
                <div className="address">
                  <h3>Address</h3>
                  <div className="address-info">
                    <ul>
                      <li>
                        Gali No 16, Ward No 7, Shiv Nagar, <br />
                        Near Sindhu GYM, Hisar, Haryana, 125001
                      </li>
                      <li>+91-9331588888</li>
                      <li>Mon - Sun: 9:00 - 19:00</li>
                      <li>Open on Weekends</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;