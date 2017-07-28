import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object,
    addBookToMove: PropTypes.func.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    setBookUrl: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'none',
      bookUrl: 'none',
      book: '',
      move: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });

    if (this.props.addBookToMove) {
      this.props.addBookToMove(this.props.book, value);
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(this.props.book, event.target.value);
    }
  }

  changeUrl() {
    this.props.setBookUrl(this.props.book.id, this.props.book);
  }

  render() {
    const { book } = this.props;

    var imageUrl;
    var bookUrl = `/${book.id}`;

    if (book.hasOwnProperty('imageLinks')) {
      imageUrl = book.imageLinks.thumbnail;
    } else {
      imageUrl = 'icons/no-cover.png';
    }

    if (book.shelf === null) {
      book.shelf = 'none';
    }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
              height: 188,
              backgroundImage: `url(${imageUrl})`,
            }}
          >
          </div>
          <ShelfChanger
            book={book}
            handleChange={this.handleChange}
          />
        </div>
        <Link
          to={bookUrl}
          className="open-book-page"
          onClick={this.changeUrl}
        >
          {book.title}
        </Link>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <label>
          Move:
          <input
            name="move"
            type="checkbox"
            checked={this.state.move}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }
}

export default Book;
