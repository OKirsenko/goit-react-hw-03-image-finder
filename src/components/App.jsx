import './App.css';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    searchWord: '',
    page: 1,
    btn: false,
  };
  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  btn = () => {
    this.setState({ btn: true });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={this.state.page}
          searchWord={this.state.searchWord}
          btn={this.btn}
        />
        {this.state.btn && <Button handleLoadMore={this.handleLoadMore} />}
      </div>
    );
  }
}
