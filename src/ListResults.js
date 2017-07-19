import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class ListResults extends Component {

  render() {
    const { searchResults, updateBookStatus } = this.props
    return (
        <div className="list-results">
          <h2 className="results-title">Search Results</h2>
          <div className="found-books">
            <ol className='books-grid'>
              {searchResults.map((book) => (
                <li key={book.id} className='book-item'>
                  <Book
                  book={book}
                  onUpdateShelf={(book, shelfType) => {
                    updateBookStatus(book, shelfType)
                  }}
                  />
                </li>
              ))}
            </ol>
        </div>
       </div>
    )
  }
}

export default ListResults
