import { Item, Picture } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <>
      <Item key={id}>
        <Picture src={webformatURL} alt="img" />
      </Item>
    </>
  );
};

export default ImageGalleryItem;
