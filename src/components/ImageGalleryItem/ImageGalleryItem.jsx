import { Item, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  onClickOpenModal,
  largeImageURL,
  tag,
}) => {
  const handleClick = () => {
    onClickOpenModal(largeImageURL, tag);
  };

  return (
    <>
      <Item key={id}>
        <Picture src={webformatURL} onClick={handleClick} alt={tag} />
      </Item>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClickOpenModal: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
