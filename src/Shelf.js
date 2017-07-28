import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookStatus: PropTypes.func.isRequired,
    setBookUrl: PropTypes.func.isRequired,
    addBookToMove: PropTypes.func.isRequired,
  }

  render() {
    const { shelfName, books, updateBookStatus, setBookUrl, addBookToMove } = this.props;

    var shelfType;

    if (shelfName === 'Currently Reading') {
      shelfType = 'currentlyReading';
    } else if (shelfName === 'Want To Read') {
      shelfType = 'wantToRead';
    } else if (shelfName === 'Read') {
      shelfType = 'read';
    }

    let thisSelfStatus;
    if (shelfName && books.length > 0) {
      thisSelfStatus = books.filter(book => (shelfType === book.shelf));
    } else {
      thisSelfStatus = books;
    }

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {thisSelfStatus.map(book => (
              <li key={book.id} className="contact-list-item">
                <Book
                  book={book}
                  onUpdateShelf={(book, shelfType) => {
                    updateBookStatus(book, shelfType);
                  }}
                  setBookUrl={(newUrl, book) => {
                    setBookUrl(newUrl, book);
                  }}
                  addBookToMove={(bookToMove, value) => {
                    addBookToMove(bookToMove, value);
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
