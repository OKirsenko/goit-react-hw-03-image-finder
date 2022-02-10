import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { picturesApi } from '../services/picturesApi';
import Error from './Error/Error';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import s from './App.module.css';

export default class App extends Component {
  state = {
    searchWord: '',
    picFetch: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      prevState.page !== this.state.page
    ) {
      this.setPicFetch();
    }
  }
  setPicFetch = () => {
    this.setState({ isLoading: true, error: null });
    picturesApi(this.state.searchWord, this.state.page)
      .then(picFetch =>
        this.setState(prev => ({
          picFetch: [...prev.picFetch, ...picFetch],
        }))
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };
  handleOnSubmmit = searchWord => {
    this.setState({ searchWord, page: 1, picFetch: [] });
  };
  handlerLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  modalOpen = url => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
  };
  render() {
    const { picFetch, isLoading, searchWord, error, showModal, largeImageURL } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleOnSubmmit} />
        {error ? (
          <Error error={error} />
        ) : (
          <>
            <ImageGallery picFetch={picFetch} modalOpen={this.modalOpen} />
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img
                  src={largeImageURL}
                  className={s.modalImg}
                  onClick={this.toggleModal}
                  alt=""
                />
              </Modal>
            )}
            {isLoading ? (
              <Loader />
            ) : (
              picFetch.length > 0 &&
              searchWord &&
              picFetch.length % 12 === 0 && (
                <Button handleLoadMore={this.handlerLoadMore} />
              )
            )}
          </>
        )}
      </>
    );
  }
}
