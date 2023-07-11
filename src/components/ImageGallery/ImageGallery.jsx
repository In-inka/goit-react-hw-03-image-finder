import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import { List } from './ImageGallery.styled';
import { Component } from 'react';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    imageURL: ' ',
    tag: ' ',
  };

  openModal = (imageURL, tag) => {
    this.setState({
      isModalOpen: true,
      imageURL: imageURL,
      tag: tag,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
      imageURL: ' ',
      tag: ' ',
    });
  };

  render() {
    const { pictures } = this.props;
    const { imageURL, tag, isModalOpen } = this.state;
    return (
      <>
        <List>
          {pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                tag={tags}
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClickOpenModal={this.openModal}
              />
            );
          })}
        </List>
        {isModalOpen && (
          <Modal image={imageURL} tag={tag} onCloseModal={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default ImageGallery;
