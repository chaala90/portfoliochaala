import './style.scss';
import cv from './cv Développeur Web.pdf';
const About = () => {
  return (
    <>
      <div className="container">
        <h1>Hello, I'm</h1>
        <div className="animation">
          <div className="first">
            <div>Chaala Dhifallah</div>
          </div>
          <div className="second">
            <div>Frontend Developer</div>
          </div>
          <div className="third">
            <div>backend Developer</div>
          </div>
        </div>
      </div>
      <p className="aboutme">
        {' '}
        "En tant que développeuse frontend passionnée, je crée des expériences
        web uniques en utilisant des technologies modernes et des techniques de
        design innovantes. Toujours à l'affût des dernières tendances, je
        conçois des sites web dynamiques et performants.. Ma passion est de
        créer des expériences en ligne mémorables, adaptées aux besoins de
        chaque projet. En travaillant avec moi, vous bénéficierez d'une
        professionnelle dévouée, soucieuse de la qualité et prête à relever de
        nouveaux défis. Faisons équipe pour créer quelque chose d'exceptionnel
        et mémorable pour votre projet."
      </p>
      <div className="rowabout">
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="button">Download CV</button>
        </a>
        <ul className="socialink">
          <li>
            <a
              href="mailto:chaalaadhif@gmail.com "
              target="_blank"
              rel="noreferrer"
            >
              <i aria-hidden className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chaala90"
              target="_blank"
              rel="noreferrer"
            >
              <i aria-hidden className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chaala-dhif-588335176/"
              target="_blank"
              rel="noreferrer"
            >
              <i aria-hidden className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/channels/@me/1103608195370450944"
              target="_blank"
              rel="noreferrer"
            >
              <i aria-hidden className="fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default About;
