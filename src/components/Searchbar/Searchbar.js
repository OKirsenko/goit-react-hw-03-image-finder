import './Searchbar.css';
import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchWord: '',
  };
  handleWordChange = event => {
    this.setState({ searchWord: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchWord.trim() === '') {
      alert('Wrong word');
      return;
    }

    this.props.onSubmit(this.state.searchWord);
    this.setState({ searchWord: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="form-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="searchWord"
            value={this.state.searchWord}
            onChange={this.handleWordChange}
          />
        </form>
      </header>
    );
  }
}
