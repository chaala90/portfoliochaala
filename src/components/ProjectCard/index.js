import PropTypes from 'prop-types';
import { getMonth } from '../../helpers/date';
import './style.scss';

const ProjectCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  link,
  label,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? ' EventCard--small' : ''}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img
        className="EventCard__img"
        data-testid="card-image-testid"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  imageAlt: 'image',
  small: false,
};

export default ProjectCard;
