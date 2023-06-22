import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Menu.scss';

const Menu = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <div className="header_nav">
      <div className="title">
        <h1>dhifallah chaala.</h1>
        <p>Web Developer</p>
      </div>
      <div id="flexlink" className="flexLink" ref={navRef}>
        <Link
          to="flexlink"
          className="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p>ACCUEIL</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="about"
          className="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p>ABOUT</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="slider"
          className="navbar"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p>PORTFOLIO</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="contact-form"
          className="navbar"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p>CONTACT</p>
          <div className="slider"></div>
        </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <FaTimes />
        </button>
      </div>
      <button
        className="nav-btn"
        onClick={showNavbar}
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Menu;
