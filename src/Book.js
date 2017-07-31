import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

/**
* @description Creates a new book Component
*/
class Book extends Component {
  static propTypes = {
    books: PropTypes.array,
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

  /**
  * @description Perfoms an action when the books checkbox value changes
  * @param {string} event - The event object
  * @returns {void}
  */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });

    if (this.props.addBookToMove) {
      this.props.addBookToMove(this.props.book, value);
    }
  }

  /**
  * @description Perfoms an action when the user selects a new shelf value from the form
  * @param {string} event - The event object
  * @returns {void}
  */
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(this.props.book, event.target.value);
    }
  }

  /**
  * @description Sets the URL for this book
  * @returns {void}
  */
  changeUrl() {
    this.props.setBookUrl(this.props.book);
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    const { books, book } = this.props;

    let imageUrl;
    const bookUrl = `/${book.id}`;

    if (book.hasOwnProperty('imageLinks')) {
      imageUrl = book.imageLinks.thumbnail;
    } else {
      imageUrl = 'icons/no-cover.png';
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
            books={books}
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
