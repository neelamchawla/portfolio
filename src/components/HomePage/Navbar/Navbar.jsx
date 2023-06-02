import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../../Context";
import Toggle from "./Toggle/Toggle";
import logo from "../../img/logo/logo.png";
import "./Navbar.css";
import $ from 'jquery';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navToggle = () => {
    // if (active === "nav__menu") {
    //   setActive("nav__menu nav__active");
    // } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  useEffect(() => {
    $(".nav__item").on("click", function () {
      $(".nav__item").removeClass("active");
      $(this).addClass("active");
    });
  }, [])

  return (
    <div
      style={{ backgroundColor: darkMode ? '#000000eb' : '', boxShadow: darkMode ? '1px 4px 5px #ffffff1f' : '' }}
      className="n-wrapper" id="Navbar">
      <nav className="nav">
        <div className="container">
          {/* left */}
          <div className="n-left">
            <div className="n-logo">
              <img src={logo} alt="logo" />
            </div>
            <Toggle />
          </div>

          <div className="n-right n-list">
            <div className="menu-icon" onClick={handleShowNavbar}>
              <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul
                // className={active} 
                style={{ listStyleType: "none" }}>
                <li className="nav__item active">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" activeClass="active" to="Home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="services" spy={true} smooth={true}>
                    Services
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="education" spy={true} smooth={true}>
                    Education
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="experience" spy={true} smooth={true}>
                    Experience
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="works" spy={true} smooth={true}>
                    Tech Skills
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="portfolio" spy={true} smooth={true}>
                    Projects
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="Hobby" spy={true} smooth={true}>
                    Hobbies
                  </Link>
                </li>
                <li className="nav__item">
                  <Link style={{ color: darkMode ? '' : 'var(--yellow)' }} className="nav__link" to="gallery" spy={true} smooth={true}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link style={{ color: darkMode ? '' : 'var(--black)' }} className="nav__link" to="contact" spy={true} smooth={true}>
                    <button className="button n-button contactBtn">Contact</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;

