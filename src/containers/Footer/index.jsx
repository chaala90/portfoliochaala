import React from 'react';
import { Link } from 'react-scroll';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <ul className="socialinks ">
        <li className="link">
          <a
            href="mailto:chaalaadhif@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://github.com/chaala90"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden className="fab fa-github"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://www.linkedin.com/in/chaala-dhif-588335176/"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://discord.com/channels/@me/1103608195370450944"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden className="fa-brands fa-discord"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">©2023 Chaala DHIFALLAH, Tous droits réservés.</p>
      <Link to="flexlink" spy={true} smooth={true} offset={1} duration={500}>
        <button aria-label="Go up" className="arrow--up" type="button">
          <i className="fa-solid fa-chevron-up icone"></i>
        </button>
      </Link>
    </div>
  );
};

export default Footer;
