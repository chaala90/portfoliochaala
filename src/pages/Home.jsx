import './style.scss';
import Menu from '../containers/Menu';
import Footer from '../containers/Footer';
import Slider from '../components/Slider/Slider';
import Form from '../containers/Form/Form';
import Modal from '../containers/Modal/Modal';
import Parallax from '../components/Parallax/Parallax';
import { createContext } from 'react';
import Collapse from '../components/Collaps/index';
import About from '../components/about/index';
import ProjectList from '../components/Events/index';
export const ThemeContext = createContext(null);

const Page = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section>
          <Parallax />
        </section>
        <section>
          <div id="about">
            <About />
          </div>
        </section>
        <section className="topskil">
          <div>
            <h2 className="Title">
              <span>Mes</span> <span>skills</span>
            </h2>
            <Slider />
          </div>
        </section>
        <section>
          <h2 className="Title toproject " id="nos-realisations">
            <span>mon</span> <span>parcours</span>
          </h2>
          <Collapse />
        </section>
        <section className="EventsContainer">
          <h2 className="Title toproject" id="nos-realisations">
            <span>Mes</span> <span>projets</span>
          </h2>
          <ProjectList />
        </section>
        <div className="FormContainer" id="contact">
          <div className="row">
            <h2 className="Title">
              <span>LET</span>'S <span>TALK</span>
            </h2>
            <div className="smoke-loader">
              <div className="smoke-wave">
                <div className="smoke1"></div>
                <div className="smoke2"></div>
                <div className="smoke3"></div>
              </div>
              <div className="coffee-cup">
                <span>
                  <img
                    className="coffee"
                    alt="coffee"
                    src="/images/coffee.svg"
                  />
                </span>
              </div>
            </div>
          </div>
          <Modal
            Content={
              <div className="ModalMessage--success">
                <div id="Messageenvoyé">Message envoyé !</div>
                <p>
                  Merci pour votre message, je tâcherai de vous répondre dans
                  les plus brefs délais.
                </p>
              </div>
            }
          >
            {({ setIsOpened }) => (
              <Form onSuccess={() => setIsOpened(true)} onError={() => null} />
            )}
          </Modal>
        </div>
      </main>
      <footer id="#footer">
        <Footer />
      </footer>
    </>
  );
};
export default Page;
