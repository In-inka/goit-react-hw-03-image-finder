import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
  return (
    <>
      <List>
        {pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </List>
    </>
  );
};

export default ImageGallery;
