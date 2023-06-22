import React, { useState } from 'react';
import { useData } from '../../containers/context/index';
import './style.scss';

const Collapse = () => {
  const { data } = useData();
  const [activeCollapse, setActiveCollapse] = useState(null);

  const handleToggle = index => {
    setActiveCollapse(index === activeCollapse ? null : index);
  };

  return (
    <>
      <div className="bloc_descri">
        <div className="titleCollapse" onClick={() => handleToggle(0)}>
          <h3>Education</h3>
          {activeCollapse === 0 ? (
            <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
          ) : (
            <i className="fa-solid fa-chevron-up ClickToHide" />
          )}
        </div>
        {activeCollapse === 0 && (
          <div className="description rowcollapse">
            {data &&
              data.educations.map(education => (
                <div key={education.id}>
                  <h4>{education.date}</h4> <p>{education.title}</p>
                  {/*<br />*/}
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="bloc_descri">
        <div className="titleCollapse" onClick={() => handleToggle(1)}>
          <h3>Experience</h3>
          {activeCollapse === 1 ? (
            <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
          ) : (
            <i className="fa-solid fa-chevron-up ClickToHide" />
          )}
        </div>
        {activeCollapse === 1 && (
          <div className="description rowcollapse">
            {data &&
              data.experiences.map(experience => (
                <div key={experience.id}>
                  <h4>{experience.date}</h4> <p>{experience.title}</p>
                  <p>{experience.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collapse;
