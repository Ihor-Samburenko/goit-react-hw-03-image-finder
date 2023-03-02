import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showModal }) => {
  const imageList = images.map(image => (
    <ImageGalleryItem showModal={showModal} key={image.id} {...image} />
  ));

  return <ul className={css.gallery}>{imageList}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.func,
};
