import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
* @description Component for listing the books found when querying the API
*/
class ListResults extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    searchResults: PropTypes.array.isRequired,
    updateBookStatus: PropTypes.func.isRequired,
    setBookUrl: PropTypes.func.isRequired,
    addBookToMove: PropTypes.func.isRequired,
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    const { books, searchResults, updateBookStatus, setBookUrl, addBookToMove } = this.props;

    return (
      <div className="list-results">
        <h2 className="results-title">Search Results</h2>
        <div className="found-books">
          <ol className="books-grid">
            {searchResults.map(book => (
              <li key={`${book.id}-${book.title}`} className="book-item">
                <Book
                  books={books}
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

export default ListResults;
