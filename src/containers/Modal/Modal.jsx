import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './style.scss';

const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="overlay">
          <div className="modal">
            <div className="content">
              {Content}
              <button
                className="close"
                type="button"
                data-testid="close-modal"
                onClick={() => setIsOpened(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  opened: false,
};

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
