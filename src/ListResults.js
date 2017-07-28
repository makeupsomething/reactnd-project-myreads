import React, { Component } from 'react';
import Book from './Book';

class ListResults extends Component {
  render() {
    const { searchResults, updateBookStatus, setBookUrl, addBookToMove } = this.props;

    return (
      <div className="list-results">
        <h2 className="results-title">Search Results</h2>
        <div className="found-books">
          <ol className="books-grid">
            {searchResults.map(book => (
              <li key={book.id} className="book-item">
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

export default ListResults;
