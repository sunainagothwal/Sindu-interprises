import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="row">
            <div className="menu-wrapper align-items-center justify-content-between">
              {/* Left Side - Logo */}
              <div className="header-left">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Our Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery">Bus Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonial">Client Testimonial</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right Side - Social Links & Quote Button */}
              <div className="header-right1 d-flex align-items-center">
                <div className="header-social">
                  <a href="javascript:void(0)">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <Link to="/contact" className="btn header-btn2 ml-5">
                  Get Free Quote
                </Link>
              </div>

              {/* Mobile Menu */}
              <div className="col-12 d-lg-none">
                <div className="mobile_menu">
                  <button onClick={toggleMenu} className={`slicknav_btn`}>
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </button>

                  {/* Sliding Menu Panel */}
                  <div className={`slicknav_panel ${isOpen ? "open" : ""}`}>
                    <button onClick={closeMenu} className="close-btn">
                      ✖
                    </button>
                    <ul>
                      <li>
                        <NavLink to="/" onClick={closeMenu}>
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about-us" onClick={closeMenu}>
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/services" onClick={closeMenu}>
                          Our Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery" onClick={closeMenu}>
                          Bus Gallery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/testimonial" onClick={closeMenu}>
                          Client Testimonial
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" onClick={closeMenu}>
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="mobile-social-links">
                        <a href="#">
                          <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
