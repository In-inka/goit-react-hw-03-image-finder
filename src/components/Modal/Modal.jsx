import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ image, tag, onCloseModal }) => {
  const onOpenOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      onCloseModal();
    }
  };
  return (
    <>
      <Overlay onClick={onOpenOverlay}>
        <div>
          <ModalStyle src={image} alt={tag} />
        </div>
      </Overlay>
    </>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
