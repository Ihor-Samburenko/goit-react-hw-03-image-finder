import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tag, showModal, largeImageURL }) => {
  return (
    <li className={css.item}>
      <img
        onClick={() => showModal(largeImageURL, tag)}
        className={css.image}
        src={webformatURL}
        alt={tag}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tag: PropTypes.string,
  showModal: PropTypes.func,
};
