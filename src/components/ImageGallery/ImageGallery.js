import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
const Status = {
  IDLE: 'idle',
  //   PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    pictures: null,
    status: Status.IDLE,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchWord;
    const nextWord = this.props.searchWord;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevWord !== nextWord || prevPage !== nextPage) {
      //   this.setState({ status: Status.PENDING });
      this.setState({ isLoading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextWord}&page=${nextPage}&key=25288753-ae0a850a1a7487bf73bd69a50&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No matches...`));
        })
        .then(responce => {
          this.props.btn();
          this.setState(prev => ({
            pictures: prev.pictures
              ? [...prev.pictures, ...responce.hits]
              : responce.hits,
            status: Status.RESOLVED,
            isLoading: false,
          }));
        })
        .catch(error =>
          this.setState({ error: error.message, status: Status.REJECTED })
        );
    }
  }

  render() {
    const { pictures, error, status, isLoading } = this.state;
    const { searchWord } = this.props;
    console.log(error);
    if (status === 'idle') {
      return <></>;
    }

    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="gallery">
            {pictures.map(({ id, largeImageURL, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ul>
          {isLoading && <BallTriangle />}
        </>
      );
    }
  }
}
