import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  render() {
    const { picFetch, modalOpen } = this.props;
    return (
      <ul className={s.gallery}>
        {picFetch.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            modalOpen={modalOpen}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  picFetch: PropTypes.array,
};
