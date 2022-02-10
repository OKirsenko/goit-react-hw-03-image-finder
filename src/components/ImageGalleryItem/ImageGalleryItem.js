import s from './ImageGalleyItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  modalOpen,
}) {
  return (
    <li key={id} className={s.galleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.itemImage}
        onClick={() => {
          modalOpen(largeImageURL);
        }}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  id: PropTypes.number,
  tags: PropTypes.string,
};
