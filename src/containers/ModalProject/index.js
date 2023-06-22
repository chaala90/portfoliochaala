import PropTypes from 'prop-types';

import './style.scss';

const ModalProject = ({ project }) => (
  <div className="ModalEvent">
    <div className="ModalEvent__imageContainer">
      <img
        data-testid="card-image-testid"
        src={project.cover}
        alt={project.id}
      />
    </div>
    <div className="ModalEvent__descriptionContainer">
      <h3>Description</h3>
      <div className="ModalEvent__description">{project.description}</div>
      <button
        onClick={() => window.open(project.link, '_blank')}
        className="custom-button"
      >
        Click
      </button>
    </div>
  </div>
);

ModalProject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.any.isRequired,
};

export default ModalProject;
